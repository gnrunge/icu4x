// This file is part of ICU4X. For terms of use, please see the file
// called LICENSE at the top level of the ICU4X source tree
// (online at: https://github.com/unicode-org/icu4x/blob/main/LICENSE ).

#![cfg(all(test, feature = "provider_serde"))]

use icu_datetime::pattern::Pattern;
use std::{fs::File, io::BufReader};

#[derive(serde::Serialize, serde::Deserialize)]
struct InvalidPatternFixture {
    pub pattern: String,
    pub error: String,
}

#[derive(serde::Serialize, serde::Deserialize)]
struct PatternFixtures {
    pub valid_patterns: Vec<String>,
    pub invalid_patterns: Vec<InvalidPatternFixture>,
}

fn get_pattern_fixtures() -> PatternFixtures {
    let file = File::open("./tests/fixtures/tests/patterns.json".to_string())
        .expect("Unable to open ./tests/fixtures/tests/patterns.json");
    let reader = BufReader::new(file);
    serde_json::from_reader(reader).expect("Unable to deserialize pattern fixtures.")
}

fn get_pattern_strings() -> Vec<String> {
    get_pattern_fixtures().valid_patterns
}

fn get_invalid_pattern_strings() -> Vec<InvalidPatternFixture> {
    get_pattern_fixtures().invalid_patterns
}

fn get_pattern_bincode_write_handle() -> File {
    File::create("./tests/fixtures/tests/patterns.bin")
        .expect("Unable to create ./tests/fixtures/tests/patterns.bin")
}

fn get_pattern_bincode_from_file() -> Vec<Vec<u8>> {
    bincode::deserialize_from(
        File::open("./tests/fixtures/tests/patterns.bin")
            .expect("Unable to ./tests/fixtures/tests/patterns.bin"),
    )
    .expect("Unable to deserialize bytes.")
}

#[test]
fn test_pattern_json_serialization_roundtrip() {
    for pattern_string in &get_pattern_strings() {
        // Wrap the string in quotes so it's a JSON string.
        let json_in: String = serde_json::to_string(pattern_string).unwrap();

        let pattern: Pattern = match serde_json::from_str(&json_in) {
            Ok(p) => p,
            Err(err) => {
                panic!(
                    "Unable to parse the pattern {:?}. {:?}",
                    pattern_string, err
                );
            }
        };

        let json_out = match serde_json::to_string(&pattern) {
            Ok(s) => s,
            Err(err) => {
                panic!(
                    "Unable to re-serialize the pattern {:?}. {:?}",
                    pattern_string, err
                );
            }
        };

        assert_eq!(
            json_in, json_out,
            "The roundtrip serialization for the pattern matched."
        );
    }
}

/// Bincode representation of patterns need to be stable across time. This test checks the
/// current serialization against historic serialization to ensure that this remains stable.
#[test]
fn test_pattern_bincode_serialization_roundtrip() {
    let patterns = get_pattern_strings();
    let update_bincode = std::env::var_os("ICU4X_REGEN_FIXTURE").is_some();
    let mut result_vec = Vec::new();
    let expect_vec = if update_bincode {
        None
    } else {
        Some(get_pattern_bincode_from_file())
    };

    if let Some(ref expect_vec) = expect_vec {
        if expect_vec.len() != patterns.len() {
            panic!(
                "Expected the bincode to have the same number of entries as the string patterns. \
                 The bincode can be re-generated by re-running the test with the environment
                 variable ICU4X_REGEN_FIXTURE set."
            );
        }
    }

    for (i, pattern_string) in patterns.iter().enumerate() {
        // Wrap the string in quotes so it's a JSON string.
        let json_in: String = serde_json::to_string(pattern_string).unwrap();

        let pattern: Pattern = match serde_json::from_str(&json_in) {
            Ok(p) => p,
            Err(err) => {
                panic!(
                    "Unable to parse the pattern {:?}. {:?}",
                    pattern_string, err
                );
            }
        };

        let bincode: Vec<u8> = bincode::serialize(&pattern).unwrap();

        if let Some(ref expect_vec) = expect_vec {
            if bincode != *expect_vec.get(i).unwrap() {
                panic!(
                    "The bincode representations of the pattern {:?} did not match the stored \
                     representation. Patterns are supposed to have stable bincode representations. \
                     Something changed to make it different than what it was in the past. If this is \
                     expected, then the bincode can be updated by re-running the test with the \
                     environment variable ICU4X_REGEN_FIXTURE set.",
                    json_in
                )
            }
        }
        result_vec.push(bincode);
    }
    if update_bincode {
        eprintln!("Writing the bincode into a file");
        bincode::serialize_into(&mut get_pattern_bincode_write_handle(), &result_vec).unwrap();
    }
}

/// Test that pattern serialization produces sensible error messages given the Serde
/// serde::de::Unexpected type and the use of fmt::Display traits on the Error objects.
#[test]
fn test_pattern_json_errors() {
    for InvalidPatternFixture { pattern, error } in &get_invalid_pattern_strings() {
        // Wrap the string in quotes so it's a JSON string.
        let json_in: String = serde_json::to_string(pattern).unwrap();

        // Wrap the string in quotes so it's a JSON string.
        match serde_json::from_str::<Pattern>(&json_in) {
            Ok(_) => panic!("Expected an invalid pattern. {}", json_in),
            Err(serde_err) => {
                assert_eq!(format!("{}", serde_err), *error);
            }
        };
    }
}
