window.BENCHMARK_DATA = {
  "lastUpdate": 1621884194749,
  "repoUrl": "https://github.com/unicode-org/icu4x",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "58569820+nordzilla@users.noreply.github.com",
            "name": "Erik Nordin",
            "username": "nordzilla"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fbecd88af0c31538e290889c919bdc29620bc402",
          "message": "Implement Time Zone Format (#598)\n\n* Implement Time Zone Formatting\r\n\r\n- Add time-zone input functionality.\r\n- Add zoned datetime functionality.\r\n- Add zoned datetime format functionality.\r\n- Add fixtures tests for zoned datetime format.\r\n- Add benchmarks for zoned datetime format.\r\n- Update examples to use zoned datetime format.\r\n\r\n* Clean Up Localized GMT Offset Formatting\r\n\r\n- Separate the positive/negative offsets in the data provider.\r\n- Use the localized hour formats to produce GMT offset formats.\r\n\r\n* Use CLDR hour-format unconditionally\r\n\r\nThe UTS-35 spec and the CLDR-json formatting have a conflict\r\naround localized GMT formats with regard to zero-padding.\r\n\r\nRead more about our conflict-resolution decisions here:\r\nhttps://docs.google.com/document/d/16GAqaDRS6hzL8jNYjus5MglSevGBflISM-BrIS7bd4A/edit?usp=sharing\r\n\r\n* Add Test For Long/Short Specific Non-Location Formats\r\n\r\n* Refactor how time-zone resource keys are loaded into formatter\r\n\r\n- Constructing a formatter now produces an iterator of required\r\n  resource keys from the pattern, and the keys are loaded accordingly.\r\n\r\n* Refactor zone symbol length matching\r\n\r\n* Implement Exemplar City\r\n\r\n* Add time-zone pattern tests\r\n\r\n* Implement ISO-8601 Time Zone Formats\r\n\r\n* Implement Generic Non-Location Format\r\n\r\n* Implement Generic Location Format\r\n\r\n* Replace todo! with real issue\r\n\r\n* Separate the three main formats into individual files\r\n\r\n* Add test that constructing DateTimeFormat with zones is err\r\n\r\n* Remove unneeded DateTimeError::UnexpectedSymbol\r\n\r\n* Document ISO-8601 format\r\n\r\n* Fix typo in TimeZoneInput documentation\r\n\r\n* Add Underflow error type\r\n\r\n* Reduce time-zone formatting methods to pub(super)\r\n\r\n* Document time-zone formatting helpers\r\n\r\n* Add examples of ISO formats\r\n\r\n* Fix typo\r\n\r\n* Remove debug assertions in favor of const fn.\r\n\r\n- The functions are prviate, and the invariant is maintained by all\r\n  callers within the relevant file. There is no need for assertions.\r\n- We can't have bolth until panicking in const contexts is stabilized.\r\n\r\n* Remove unneeded support for U+2212 (minus sign)\r\n\r\n* Add some newlines for readability\r\n\r\n* Clarify ISO-8106 examples\r\n\r\n* Rename `style` -> `length` after rebase\r\n\r\n* Add missing line at end of file\r\n\r\n* Fix typo in documentation\r\n\r\n* Move DateTimeFormat construction test to `tests` dir\r\n\r\n- This fixes the CI error of testing without default features.\r\n\r\n* Regenerate skeleton test data with time zones\r\n\r\n* Clarify skeleton comments about generating test data\r\n\r\n* Return FieldTooLong error instead of panicking\r\n\r\n- Respond to Zibi's feedback about panicking on field to long by\r\n  returning an error instead.\r\n- Remove the invalid symbol macro.\r\n\r\n* Respond to sffc's review feedback\r\n\r\n- Add TODOs to replace strings with TinyStr\r\n- Remove `country_code()` time-zone input function\r\n- Rename IsoSeconds::None -> IsoSeconds::Never\r\n- Move GmtOffset code to `date.rs`\r\n- Have MockZonedDateTime use MockDateTime for relevant input traits.\r\n- Fix typo \"destionation\" -> \"destination\"\r\n- Load TimeZone resources in-line in `try_new()`\r\n\r\n* Make TimeZoneFormat `pub(super)`\r\n\r\nThis type will be `pub(super)` temporarily until we have a good way\r\nto publicly determine a pattern with which to construct the type.\r\nTrack this issue in #622\r\n\r\n* Move ISO8601 format to timezone.rs\r\n\r\nISO8601 formatting functions now belong to TimeZoneFormat, rather\r\nthan to GmtOffset itself.\r\n\r\n* Rename 's to 'l for `format()` functions.\r\n\r\n* Add the word \"offset\" to gmt offset formatting functions\r\n\r\n* Add documentation to ZonedDateTimeFormat\r\n\r\n* Add documentation for `MockTimeZone` and `MockZonedDateTime`\r\n\r\n* Implement Field trait for TimeZone fields\r\n\r\n* Fix typo\r\n\r\n* Fallback to TextOrNumeric::Text for default pattern matching\r\n\r\nAfter consulting with gregtatum who is implementing the skeleton\r\nmatching algorithms, we determined that Text is a reasonable\r\ndefault fallback.\r\n\r\n* Change TimeZoneFormat formatting functions to write directly\r\n\r\nTimeZoneFormat functions now write directly instaed of returning\r\na string.\r\n\r\n* Rename `FieldTooLong` to `FieldLengthInvalid`\r\n\r\n* Rename other TooLong errors to InvalidLength\r\n\r\n* Run rustfmt\r\n\r\n* Remove clone from Time Zone data structs map access\r\n\r\nThis used to be necessary when the format functions returned a string,\r\nbecause some strings were owned, and others were references,\r\nbut now that the format functions write directly to a buffer,\r\nwe can deal with references as needed and just write them.",
          "timestamp": "2021-04-12T23:13:28-07:00",
          "tree_id": "f24e9f38f06b923e07fe2fcbc39ac96046ecc395",
          "url": "https://github.com/unicode-org/icu4x/commit/fbecd88af0c31538e290889c919bdc29620bc402"
        },
        "date": 1618294850980,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1406537,
            "range": "± 71805",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2656127,
            "range": "± 132874",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@google.com",
            "name": "Elango",
            "username": "echeran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "076a9194e1d28f1cbbaad6b9ae75969404d54e59",
          "message": "Add comment discouraging use of uniset::props (#627)",
          "timestamp": "2021-04-13T01:19:59-05:00",
          "tree_id": "23a139523c994f11ba25715f8f6f4424a9868110",
          "url": "https://github.com/unicode-org/icu4x/commit/076a9194e1d28f1cbbaad6b9ae75969404d54e59"
        },
        "date": 1618295235058,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1167736,
            "range": "± 55302",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2233875,
            "range": "± 94976",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dminor@mozilla.com",
            "name": "Dan Minor",
            "username": "dminor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23c599e2352a8fe8f549053ff26567008a41ed7b",
          "message": "Use cargo-readme to generate README.md files (#601)\n\nUse cargo-readme to generate README.md files",
          "timestamp": "2021-04-13T07:04:58-04:00",
          "tree_id": "bf5602ebe0b0ffd3427543e8f8ced7e64e1b0551",
          "url": "https://github.com/unicode-org/icu4x/commit/23c599e2352a8fe8f549053ff26567008a41ed7b"
        },
        "date": 1618312320038,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1370685,
            "range": "± 39594",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2600149,
            "range": "± 85138",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregtatum@users.noreply.github.com",
            "name": "Greg Tatum",
            "username": "gregtatum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9fae0980aa20781a223cc0647a7d9d06cdf607b2",
          "message": "Fix the CI because of a components::Bag and Time Zone conflict (#639)",
          "timestamp": "2021-04-13T11:40:58-05:00",
          "tree_id": "98d433bad078190e2310a7d142c15366d82a060b",
          "url": "https://github.com/unicode-org/icu4x/commit/9fae0980aa20781a223cc0647a7d9d06cdf607b2"
        },
        "date": 1618332446590,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1329492,
            "range": "± 89433",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2529285,
            "range": "± 143941",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "180d4e5a43780ab078b462c00dc8f0328b5cc00b",
          "message": "Optimize performance of LocaleCanonicalizer::maximize. (#504)\n\n* Add From<Subtag> for TinyStr.\r\n\r\n* Optimize performance of LocaleCanonicalizer by storing resources in custom data structures.",
          "timestamp": "2021-04-13T10:05:36-07:00",
          "tree_id": "a5a6b61f4fd777a23b2707a291d281b1845fba71",
          "url": "https://github.com/unicode-org/icu4x/commit/180d4e5a43780ab078b462c00dc8f0328b5cc00b"
        },
        "date": 1618333963266,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1398298,
            "range": "± 42270",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2641332,
            "range": "± 103140",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c6d1401e9b965cb457c74c4776ffe8c833f003a7",
          "message": "Updating to CLDR JSON 39.0.0-BETA2 (#640)",
          "timestamp": "2021-04-13T13:19:44-05:00",
          "tree_id": "c600d8d68f585239bff14ac35f1f20125449c25a",
          "url": "https://github.com/unicode-org/icu4x/commit/c6d1401e9b965cb457c74c4776ffe8c833f003a7"
        },
        "date": 1618338416386,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1388980,
            "range": "± 48363",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2630808,
            "range": "± 108513",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d99323dc945a09af01d1147477584b469b6fe4b",
          "message": "Mute clippy warnings in a few places, apply the suggestions in remaining cases. (#642)\n\n* Mute clippy warnings in a few places, apply the suggestions in remaining cases.\r\n\r\n* Fix clippy fmt\r\n\r\n* Separate line after license header\r\n\r\n* Remove accidentally added diffs",
          "timestamp": "2021-04-13T11:30:56-07:00",
          "tree_id": "b3ec6302e8f8bfcb8fea56433fbc548249ed7289",
          "url": "https://github.com/unicode-org/icu4x/commit/6d99323dc945a09af01d1147477584b469b6fe4b"
        },
        "date": 1618339058033,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1248950,
            "range": "± 59923",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2394222,
            "range": "± 90697",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "58569820+nordzilla@users.noreply.github.com",
            "name": "Erik Nordin",
            "username": "nordzilla"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "496e0759cf7f6810e248544a6cf964bbbf34425d",
          "message": "Update ICU Component Documentation Examples (#616)\n\n* Update documentation for components/datetime\r\n\r\n* Update documentation for components/locid\r\n\r\n* Update documentation for components/plurals\r\n\r\n* Update documentation for components/uniset\r\n\r\n* Alphabetize Cargo.toml changes\r\n\r\n* Use cargo-readme to generate README files",
          "timestamp": "2021-04-14T12:54:13-07:00",
          "tree_id": "87ef342899e93da76627c071c21f8ad306fa5838",
          "url": "https://github.com/unicode-org/icu4x/commit/496e0759cf7f6810e248544a6cf964bbbf34425d"
        },
        "date": 1618430468998,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1292071,
            "range": "± 16837",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2508766,
            "range": "± 20028",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a3d0a257cb7588fe912bd8a114e4ebb3fbf41280",
          "message": "Update tinystr to 0.4.5 for perf wins on locid and locale_canonicalizer. (#646)\n\n* Update tinystr to 0.4.4 for perf wins on locid and locale_canonicalizer.\r\n\r\n* Update to tinystr 0.4.5",
          "timestamp": "2021-04-14T21:32:52-07:00",
          "tree_id": "8efe3c114253eafafff86f7ed6df39ab8064ac25",
          "url": "https://github.com/unicode-org/icu4x/commit/a3d0a257cb7588fe912bd8a114e4ebb3fbf41280"
        },
        "date": 1618461584160,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1157115,
            "range": "± 71148",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2277208,
            "range": "± 243521",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c4abd70d98c9240cb9df99453c077b073ee8559a",
          "message": "First iteration of horizontal fallback doc (#629)",
          "timestamp": "2021-04-15T12:06:10-07:00",
          "tree_id": "cea7507f81a6033eb38767a71c6121b36e84db42",
          "url": "https://github.com/unicode-org/icu4x/commit/c4abd70d98c9240cb9df99453c077b073ee8559a"
        },
        "date": 1618513989504,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1309339,
            "range": "± 10099",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2512325,
            "range": "± 8060",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b328f8a4cff123fc48416c7a03d0f96cc9c2ab0",
          "message": "Adding ZeroVec, zero-copy vector abstraction over a byte buffer (#647)",
          "timestamp": "2021-04-15T16:41:00-05:00",
          "tree_id": "f3eadaebeff876cfbe022497a6417c1756993eec",
          "url": "https://github.com/unicode-org/icu4x/commit/0b328f8a4cff123fc48416c7a03d0f96cc9c2ab0"
        },
        "date": 1618523268172,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1300822,
            "range": "± 6109",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2502632,
            "range": "± 4209",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6e5e2d96bcf62d27d07f0ffe3acff8b82e44e08",
          "message": "Adding Valgrind build task (#631)",
          "timestamp": "2021-04-16T00:56:17-05:00",
          "tree_id": "3dfdb297dd2df7f83d2283f739da22a8d7eeb60d",
          "url": "https://github.com/unicode-org/icu4x/commit/d6e5e2d96bcf62d27d07f0ffe3acff8b82e44e08"
        },
        "date": 1618552995694,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1347025,
            "range": "± 64335",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2522869,
            "range": "± 75806",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c9590b53ef98322b903308ff5b4c57d621222e35",
          "message": "Small cleanups to prepare for data source abstraction (#649)",
          "timestamp": "2021-04-16T19:24:01-05:00",
          "tree_id": "f303e309927a4c804d80979b3bd94c308745d80d",
          "url": "https://github.com/unicode-org/icu4x/commit/c9590b53ef98322b903308ff5b4c57d621222e35"
        },
        "date": 1618619501066,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1654577,
            "range": "± 121502",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 3141427,
            "range": "± 250270",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1479e8caacd2004fd43c127d74a649318e7edded",
          "message": "Add VarZeroVec (#653)\n\n* Add VarZeroVec\r\n\r\n* Move varzerovec into toplevel module\r\n\r\n* Add VarULE docs, remove inline(always)\r\n\r\n* SliceComponents::new() -> SliceComponents::try_from_bytes()\r\n\r\n* Switch from u64 to u32 in VarZeroVec\r\n\r\n* Address zibi's comments\r\n\r\n* Use checked_add",
          "timestamp": "2021-04-16T18:14:42-07:00",
          "tree_id": "a2145111f0d4917468d67952cfef709ae12a18be",
          "url": "https://github.com/unicode-org/icu4x/commit/1479e8caacd2004fd43c127d74a649318e7edded"
        },
        "date": 1618622501122,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1462075,
            "range": "± 3127",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2501586,
            "range": "± 5429",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "58569820+nordzilla@users.noreply.github.com",
            "name": "Erik Nordin",
            "username": "nordzilla"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "179438a061f04e221a2f269980fe0b0762734e66",
          "message": "Clean up terminology and documentation (#654)\n\n* Unify all # Examples section headers\r\n\r\n* Unify references to `datetime` as a single word\r\n\r\n* Unify references to `time zone` as a two words\r\n\r\n* Clean up docs in components/capi\r\n\r\n* Clean up docs in components/datetime\r\n\r\n* Clean up docs in components/decimal\r\n\r\n* Clean up docs in components/ecma402\r\n\r\n* Clean up docs in components/locale_canonicalizer\r\n\r\n* Clean up docs in components/locid\r\n\r\n* Clean up docs in components/plurals\r\n\r\n* Run rustfmt\r\n\r\n* Regenerate README files\r\n\r\n* Clean up docs in components/provider\r\n\r\n* Clean up docs in components/provider_cldr\r\n\r\n* Clean up docs in components/provider_fs\r\n\r\n* Clean up docs in comopnents/uniset\r\n\r\n* Ensure that all linked Rust types have backticks\r\n\r\n* Grep for any links that I missed\r\n\r\n* Reslove all doc warnings\r\n\r\nRuns cargo doc --document-private-items --all-features\r\nand ensures that there are no warnings.\r\n\r\n* Regenerate README files",
          "timestamp": "2021-04-16T18:40:54-07:00",
          "tree_id": "aa95cbacf03f5ad3da422f865aecf34db6a72ab5",
          "url": "https://github.com/unicode-org/icu4x/commit/179438a061f04e221a2f269980fe0b0762734e66"
        },
        "date": 1618624039562,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1187694,
            "range": "± 60160",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2192510,
            "range": "± 111538",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "58569820+nordzilla@users.noreply.github.com",
            "name": "Erik Nordin",
            "username": "nordzilla"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a46f3336d0a2f0c9c9193fc2e0893c8834e30fcf",
          "message": "Remove .DS_Store files and add them to the .gitignore (#655)",
          "timestamp": "2021-04-16T19:03:34-07:00",
          "tree_id": "1b73a4ca319bae725e66ef371f86f6b667f77836",
          "url": "https://github.com/unicode-org/icu4x/commit/a46f3336d0a2f0c9c9193fc2e0893c8834e30fcf"
        },
        "date": 1618625402997,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1254604,
            "range": "± 23487",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2450961,
            "range": "± 40822",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6612af59d103dd49c5f6e2992568edce651c239",
          "message": "Move PpucdDataProvider to experimental (#648)",
          "timestamp": "2021-04-17T00:54:08-05:00",
          "tree_id": "5e22c847305181f89ad70830703fa82f2db1385f",
          "url": "https://github.com/unicode-org/icu4x/commit/d6612af59d103dd49c5f6e2992568edce651c239"
        },
        "date": 1618639247573,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1357298,
            "range": "± 79435",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2627528,
            "range": "± 152104",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cbf7945f62fff01547db32baf9712810b41dd17d",
          "message": "ZeroVec: More docs and code cleanup (#658)",
          "timestamp": "2021-04-17T10:40:53-05:00",
          "tree_id": "4353bff83b35f3b60736824975689aeee2ff9aa0",
          "url": "https://github.com/unicode-org/icu4x/commit/cbf7945f62fff01547db32baf9712810b41dd17d"
        },
        "date": 1618674481309,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1419840,
            "range": "± 47198",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2717551,
            "range": "± 113117",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca1d3e3910adc48bdb534df94276ffc1874dcafc",
          "message": "Add icu_pattern util (#581)\n\n* Add icu_pattern util\r\n\r\n* Add PatternIterator trait\r\n\r\n* Apply initial feedback: add allow_quoted_literals, support double quotes, and Vec<E> for simple replacements\r\n\r\n* Add missing license header\r\n\r\n* Switch Interpolator key to be an associated type.\r\n\r\n* Add missing license header\r\n\r\n* Add pre-parsed bench and fix Vec<E> replacements\r\n\r\n* Switch to take &[] in Interpolator.\r\n\r\n* Add examples\r\n\r\n* Add license headers\r\n\r\n* Fix docs\r\n\r\n* Switch Literals to Cow\r\n\r\n* Add ParserOptions\r\n\r\n* Add Example prefix to the main example per Gregs feedback\r\n\r\n* Introduce InterpolatorKind and switch Interpolator to return references.\r\n\r\n* Introduce better ergonomics to wrap Parser/Interpolator under Pattern.\r\n\r\n* Slightly clean up the docs and remove the Cow<str> bound on E\r\n\r\n* Clean up docs a bit more\r\n\r\n* Apply feedback\r\n\r\n* Add docs and extend test coverage\r\n\r\n* Remove strenous manual Eq\r\n\r\n* Generate README.md",
          "timestamp": "2021-04-17T09:53:36-07:00",
          "tree_id": "23bf61670dc60d1223c88c778e833c766f5a8ef3",
          "url": "https://github.com/unicode-org/icu4x/commit/ca1d3e3910adc48bdb534df94276ffc1874dcafc"
        },
        "date": 1618678837347,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1304038,
            "range": "± 25051",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2472666,
            "range": "± 25823",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6be34fd43a9ab2d068009105b3027c52c50367bc",
          "message": "Add metadata fields to icu_benchmark_macros (#656)",
          "timestamp": "2021-04-18T07:18:34-07:00",
          "tree_id": "b41c77151f2f359f92b7f05ef822865c839d5c71",
          "url": "https://github.com/unicode-org/icu4x/commit/6be34fd43a9ab2d068009105b3027c52c50367bc"
        },
        "date": 1618755938772,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1253296,
            "range": "± 42223",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2363498,
            "range": "± 74371",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b58ed80e99cf20e1e2bf48875462910cffadfeee",
          "message": "Cleanups to icu, icu_decimal, and zerovec (#650)\n\n- Adds FixedDecimalFormat to the icu crate\r\n- Documents cargo features used in ICU4X\r\n- Adds benchmarks for VarZeroVec\r\n- Documents benchmark results in zerovec docs",
          "timestamp": "2021-04-19T12:41:43-05:00",
          "tree_id": "9a59f644ca27f0e281b7e6def4114186379c7103",
          "url": "https://github.com/unicode-org/icu4x/commit/b58ed80e99cf20e1e2bf48875462910cffadfeee"
        },
        "date": 1618854489817,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1241605,
            "range": "± 39629",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2391233,
            "range": "± 78092",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a502f58f0c3529d6aa4bf7fed1f43973f2b4818a",
          "message": "Run `cargo outdated` and update deps (#660)\n\n* cargo outdated\r\n\r\n* Attempt to try to fix rand in test\r\n\r\n* Try to make cargo clippy happy\r\n\r\n* Update BIES test for new rng version\r\n\r\nCo-authored-by: Shane F. Carr <shane@unicode.org>",
          "timestamp": "2021-04-19T13:54:41-07:00",
          "tree_id": "9f08a6f3173a6ad547cb00daa8ca6ed914170b7f",
          "url": "https://github.com/unicode-org/icu4x/commit/a502f58f0c3529d6aa4bf7fed1f43973f2b4818a"
        },
        "date": 1618866063078,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1261060,
            "range": "± 123079",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2271850,
            "range": "± 197655",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "938f943154dc8574a9d6e70c130cea2ee05ed527",
          "message": "Auto and manually apply selected nursery clippies. (#661)",
          "timestamp": "2021-04-20T13:43:52-07:00",
          "tree_id": "32b06d6e7705aafb49f1e9e9a9a4b6840faf451f",
          "url": "https://github.com/unicode-org/icu4x/commit/938f943154dc8574a9d6e70c130cea2ee05ed527"
        },
        "date": 1618951815527,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1298683,
            "range": "± 26399",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2481648,
            "range": "± 19939",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d78c20bd171cbdf15fd9026bac4e6b2997baa41",
          "message": "Add VarZeroVec::into_owned() (#666)",
          "timestamp": "2021-04-20T19:44:52-07:00",
          "tree_id": "270fd9cdd7909625fe6cbd8305f20bd4df88069f",
          "url": "https://github.com/unicode-org/icu4x/commit/7d78c20bd171cbdf15fd9026bac4e6b2997baa41"
        },
        "date": 1618973523931,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1468500,
            "range": "± 97638",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2772652,
            "range": "± 130586",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregtatum@users.noreply.github.com",
            "name": "Greg Tatum",
            "username": "gregtatum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6daf09323a50001967fcabd778d96aa9176f3cc5",
          "message": "Make it so that unsupported skeleton fields only emit a warning (#670)",
          "timestamp": "2021-04-22T12:38:53-05:00",
          "tree_id": "68d8c45c4df3696e814f2666ec28c859ec5aabda",
          "url": "https://github.com/unicode-org/icu4x/commit/6daf09323a50001967fcabd778d96aa9176f3cc5"
        },
        "date": 1619113536753,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1292332,
            "range": "± 98524",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2550841,
            "range": "± 159343",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "74eb46d37209c0a4200826eaa0322a33bf2462cf",
          "message": "Add ZeroMap (#668)\n\n* Add scaffolding traits for ZeroMap\r\n\r\n* Add ZeroMap methods\r\n\r\n* Add remove(), try_append*)\r\n\r\n* Some basic methods\r\n\r\n* Copy over LiteMap tests\r\n\r\n* Add SerializeType\r\n\r\n* Add iterators\r\n\r\n* Add serde\r\n\r\n* Add docs\r\n\r\n* Use individual macros\r\n\r\n* Add sized-ULE helper functions\r\n\r\n* Make make_mut pub(crate)\r\n\r\n* Error on out-of-order ZeroMap deserializations\r\n\r\n* litemap -> zeromap\r\n\r\n* get_as_ser -> with_ser\r\n\r\n* Replace cmp_two_gets with is_ascending\r\n\r\n* contains_key on needletype\r\n\r\n* Fix comment\r\n\r\n* Add 'static bound to ULE\r\n\r\n* Fix fmt",
          "timestamp": "2021-04-23T10:40:15-07:00",
          "tree_id": "19623df58ab2c09cce9e08d01a97d64642f6956a",
          "url": "https://github.com/unicode-org/icu4x/commit/74eb46d37209c0a4200826eaa0322a33bf2462cf"
        },
        "date": 1619200083104,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1189497,
            "range": "± 44143",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2320598,
            "range": "± 63731",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6030ec10e49651651b5145ede735e9b2a8a9b306",
          "message": "Update CONTRIBUTING.md with review dismiss rules and Conventional Comments (#678)\n\n* Update CONTRIBUTING.md with review dismiss rules and Conventional Comments\r\n\r\n* Mention manual reviewers",
          "timestamp": "2021-04-23T12:13:33-07:00",
          "tree_id": "28a2c66575130c374086e93c08064822949db5af",
          "url": "https://github.com/unicode-org/icu4x/commit/6030ec10e49651651b5145ede735e9b2a8a9b306"
        },
        "date": 1619205601693,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 937072,
            "range": "± 14313",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 1799197,
            "range": "± 24081",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "62d541647835d9c8af7cfd5110e8e3973f1105d1",
          "message": "1.0 PRD and Roadmap documents (#665)\n\n* 1.0 PRD and Roadmap documents\r\n\r\n* Apply feedback round 1\r\n\r\n* Apply feedback\r\n\r\n* Apply feedback",
          "timestamp": "2021-04-26T11:28:53-07:00",
          "tree_id": "9a53d1f021355ddb628677d07b4bfb51ded0c9dc",
          "url": "https://github.com/unicode-org/icu4x/commit/62d541647835d9c8af7cfd5110e8e3973f1105d1"
        },
        "date": 1619462142334,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1397160,
            "range": "± 44961",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2400634,
            "range": "± 80742",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregtatum@users.noreply.github.com",
            "name": "Greg Tatum",
            "username": "gregtatum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04ec2da09a759409019103e3aa7ca65337811cd1",
          "message": "Change the components bag to default to None (#675)",
          "timestamp": "2021-04-26T14:04:45-05:00",
          "tree_id": "57980f5a294511c1540dd4902a0e0a38e1a8d586",
          "url": "https://github.com/unicode-org/icu4x/commit/04ec2da09a759409019103e3aa7ca65337811cd1"
        },
        "date": 1619464332243,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1462538,
            "range": "± 65132",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2753173,
            "range": "± 145230",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregtatum@users.noreply.github.com",
            "name": "Greg Tatum",
            "username": "gregtatum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9015f7820c614afd288567efb2cd80b1eccd2a2e",
          "message": "Update failing generated-readme-check error message (#641)",
          "timestamp": "2021-04-26T17:07:01-05:00",
          "tree_id": "ad42378f451284a1a1ac7b05308b91f7e8c43b5d",
          "url": "https://github.com/unicode-org/icu4x/commit/9015f7820c614afd288567efb2cd80b1eccd2a2e"
        },
        "date": 1619475246154,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1300993,
            "range": "± 59595",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2513558,
            "range": "± 145992",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b937cfadf78a1f6f4223d6269c25629adef98144",
          "message": "Update Tutorial to 0.2. (#684)\n\n* Update Tutorial to 0.2.\r\n\r\n* Apply feedback",
          "timestamp": "2021-04-27T23:57:53-07:00",
          "tree_id": "1dd98cb6a244623c5e74c9627b1d4096267ff0e8",
          "url": "https://github.com/unicode-org/icu4x/commit/b937cfadf78a1f6f4223d6269c25629adef98144"
        },
        "date": 1619593463454,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1353547,
            "range": "± 25863",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2606832,
            "range": "± 51816",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc6315e0c35b57db3fc1b35d80325d320a94a71b",
          "message": "Make docs for provider module consistent (#683)",
          "timestamp": "2021-04-28T11:07:08-05:00",
          "tree_id": "75e31b0bdd06a8a3a7d9e596f5913d1aea38e659",
          "url": "https://github.com/unicode-org/icu4x/commit/fc6315e0c35b57db3fc1b35d80325d320a94a71b"
        },
        "date": 1619626462317,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1367960,
            "range": "± 51763",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2598032,
            "range": "± 75119",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dminor@mozilla.com",
            "name": "Dan Minor",
            "username": "dminor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e78289331a514adbce008364653dce2fed9ddced",
          "message": "Fixes to locale canonicalizer docs (#688)\n\n* Fixes to locale canonicalizer docs\r\n\r\n* Address review feedback\r\n\r\n* More review feedback\r\n\r\n* Split expect onto following line",
          "timestamp": "2021-04-28T11:00:46-07:00",
          "tree_id": "753f6ecb603059b65471682f71256d9b01c2a5b4",
          "url": "https://github.com/unicode-org/icu4x/commit/e78289331a514adbce008364653dce2fed9ddced"
        },
        "date": 1619633261222,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1296870,
            "range": "± 15307",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2490380,
            "range": "± 23166",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregtatum@users.noreply.github.com",
            "name": "Greg Tatum",
            "username": "gregtatum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "750dc07d0ee12a2f9d19aa435a4eeb42631f3a79",
          "message": "Hide skeleton docs (#689)",
          "timestamp": "2021-04-28T22:23:15-07:00",
          "tree_id": "a21d21f1f85918ed237cd61bc5c6b5864a45362a",
          "url": "https://github.com/unicode-org/icu4x/commit/750dc07d0ee12a2f9d19aa435a4eeb42631f3a79"
        },
        "date": 1619674249399,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1464399,
            "range": "± 101561",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2731460,
            "range": "± 158245",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc4accf2da2eed54d80ba57910cedf1de86cf2d8",
          "message": "icu4x 0.2 (#687)\n\n* icu4x 0.2\r\n\r\n* Release will be on the 28th\r\n\r\n* Update to 29th",
          "timestamp": "2021-04-29T09:12:26-07:00",
          "tree_id": "774c341513a82647d9a467863c5c1d50b0db1456",
          "url": "https://github.com/unicode-org/icu4x/commit/dc4accf2da2eed54d80ba57910cedf1de86cf2d8"
        },
        "date": 1619713134651,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1074469,
            "range": "± 28845",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2074973,
            "range": "± 1725",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d530470ecafed49dcb41896e48e7f1d9112416b4",
          "message": "Add a 0.2 release blog post (#679)\n\n* Add a 0.2 release blog post\r\n\r\n* Update docs/posts/20210427_ICU4X_02_Release.md\r\n\r\nCo-authored-by: Dan Minor <dminor@mozilla.com>\r\n\r\n* Update docs/posts/20210427_ICU4X_02_Release.md\r\n\r\nCo-authored-by: Dan Minor <dminor@mozilla.com>\r\n\r\n* Update docs/posts/20210427_ICU4X_02_Release.md\r\n\r\nCo-authored-by: Dan Minor <dminor@mozilla.com>\r\n\r\n* Update docs/posts/20210427_ICU4X_02_Release.md\r\n\r\nCo-authored-by: Dan Minor <dminor@mozilla.com>\r\n\r\n* Update docs/posts/20210427_ICU4X_02_Release.md\r\n\r\nCo-authored-by: Dan Minor <dminor@mozilla.com>\r\n\r\n* Update docs/posts/20210427_ICU4X_02_Release.md\r\n\r\nCo-authored-by: Dan Minor <dminor@mozilla.com>\r\n\r\n* Apply feedback\r\n\r\n* Apply feedback\r\n\r\n* Add links to the release post\r\n\r\nCo-authored-by: Dan Minor <dminor@mozilla.com>",
          "timestamp": "2021-04-29T09:24:15-07:00",
          "tree_id": "8f0947c7bab7be88803a58d89a0d2df36e657fe5",
          "url": "https://github.com/unicode-org/icu4x/commit/d530470ecafed49dcb41896e48e7f1d9112416b4"
        },
        "date": 1619713917774,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1339753,
            "range": "± 51995",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2548170,
            "range": "± 114168",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b6d7784c2a8d7a7a3eb02878a342a1b21709ac0",
          "message": "Add ownership command for crates.io (#690)",
          "timestamp": "2021-04-29T09:39:07-07:00",
          "tree_id": "d01b120141270d38b6149b3ac18b656d83325b5b",
          "url": "https://github.com/unicode-org/icu4x/commit/3b6d7784c2a8d7a7a3eb02878a342a1b21709ac0"
        },
        "date": 1619714800600,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1209606,
            "range": "± 66919",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2272875,
            "range": "± 126710",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "377ba0e6c90280d1dfa6973fce643c439b021c3b",
          "message": "Add benches to includes (#692)",
          "timestamp": "2021-04-29T11:13:48-07:00",
          "tree_id": "bac686a8b23c22d990facc3d850b58bfc0429962",
          "url": "https://github.com/unicode-org/icu4x/commit/377ba0e6c90280d1dfa6973fce643c439b021c3b"
        },
        "date": 1619720386087,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 955243,
            "range": "± 49407",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 1838102,
            "range": "± 17929",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "distinct": true,
          "id": "20fc4c5a5936e8d344c67236541911b4913ef6f0",
          "message": "Add description to locale_canonicalizer",
          "timestamp": "2021-04-29T11:17:03-07:00",
          "tree_id": "1237ac82239a5a30d3e9eb81459105f8d6466119",
          "url": "https://github.com/unicode-org/icu4x/commit/20fc4c5a5936e8d344c67236541911b4913ef6f0"
        },
        "date": 1619720628294,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1200178,
            "range": "± 97752",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2395761,
            "range": "± 205107",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "distinct": true,
          "id": "8e93c88897cdd086c49524ef05c7f383a885d804",
          "message": "Add description to decimal",
          "timestamp": "2021-04-29T11:30:16-07:00",
          "tree_id": "a163e1859f11737ea095d198c3ad7bbc22fec00b",
          "url": "https://github.com/unicode-org/icu4x/commit/8e93c88897cdd086c49524ef05c7f383a885d804"
        },
        "date": 1619721449852,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1298580,
            "range": "± 3429",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2480048,
            "range": "± 6313",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a458106e62befb111b54fd62014b5b712fc2e8c",
          "message": "Update README.md to 0.2 (#691)",
          "timestamp": "2021-04-29T13:11:07-07:00",
          "tree_id": "4399d22e228d2353940543901bd575f1890e658f",
          "url": "https://github.com/unicode-org/icu4x/commit/3a458106e62befb111b54fd62014b5b712fc2e8c"
        },
        "date": 1619727472332,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1185750,
            "range": "± 53842",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2420249,
            "range": "± 119657",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "478c4a901faca10195edce477b583ed31f8fdd1f",
          "message": "Apply feedback on 0.2 blog post from Mark",
          "timestamp": "2021-04-29T15:40:30-07:00",
          "tree_id": "7547d7a22a86db6021925770049cef13a4159efb",
          "url": "https://github.com/unicode-org/icu4x/commit/478c4a901faca10195edce477b583ed31f8fdd1f"
        },
        "date": 1619736460602,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1320469,
            "range": "± 72296",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2499077,
            "range": "± 93259",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2ff1a07ff1608be5755a40abf96d076b60673195",
          "message": "Add FFI for FixedDecimalFormat (#680)\n\n* Add CAPI bindings for fixed_decimal\r\n\r\n* Add decimals, macro for c-enums\r\n\r\n* Add ICU4XCustomWriteable\r\n\r\n* Add FixedDecimalFormat::format()\r\n\r\n* Add c headers\r\n\r\n* Add fixeddecimal example\r\n\r\n* more comments on custom_writeable\r\n\r\n* Update components/capi/src/custom_writeable.rs\r\n\r\nCo-authored-by: Shane F. Carr <shane@unicode.org>\r\n\r\n* Address review comments\r\n\r\n* Update components/capi/src/custom_writeable.rs\r\n\r\nCo-authored-by: Shane F. Carr <shane@unicode.org>\r\n\r\n* Writeable docs\r\n\r\n* Improve docs\r\n\r\n* add license\r\n\r\n* more review fixes\r\n\r\n* pass ICU4XCustomWriteable to its callbacks\r\n\r\n* Add FixedDecimal::multiply_pow10()\r\n\r\n* Update components/capi/src/custom_writeable.rs\r\n\r\nCo-authored-by: Shane F. Carr <shane@unicode.org>\r\n\r\n* More review fixes\r\n\r\n* add license\r\n\r\n* Lint fixes\r\n\r\n* Use references in FFI function\r\n\r\n* ICU4XCustomWriteable -> ICU4XWriteable\r\n\r\n* Add negate()\r\n\r\n* Fix label in test\r\n\r\n* fmt\r\n\r\nCo-authored-by: Shane F. Carr <shane@unicode.org>",
          "timestamp": "2021-05-04T15:14:51-07:00",
          "tree_id": "5485b797e54f9621abb77f211d2868f3693483e5",
          "url": "https://github.com/unicode-org/icu4x/commit/2ff1a07ff1608be5755a40abf96d076b60673195"
        },
        "date": 1620166871475,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1233133,
            "range": "± 66743",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2386923,
            "range": "± 132793",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee4fce450e4164456f45d1e92d8f5e6c79c91d03",
          "message": "Updating to CLDR 39.0.0 (#695)",
          "timestamp": "2021-05-04T23:06:09-05:00",
          "tree_id": "81533fc1eb0f006e6923b4f6b7c0b8b425199eae",
          "url": "https://github.com/unicode-org/icu4x/commit/ee4fce450e4164456f45d1e92d8f5e6c79c91d03"
        },
        "date": 1620187972124,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1166544,
            "range": "± 88908",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2208546,
            "range": "± 151877",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c6582ccddf87d49a44e2d4e54604543365c76bff",
          "message": "Switch to use thiserror for errors (#697)\n\n* Switch to use thiserror for errors\r\n\r\n* Update components/datetime/src/error.rs\r\n\r\nCo-authored-by: Shane F. Carr <sffc@google.com>\r\n\r\n* Switch to from, since transparent and source are a no go together.\r\n\r\nCo-authored-by: Shane F. Carr <sffc@google.com>",
          "timestamp": "2021-05-04T22:51:18-07:00",
          "tree_id": "04cd7b21c0788e88cb41cda04f4795f74a2edc6a",
          "url": "https://github.com/unicode-org/icu4x/commit/c6582ccddf87d49a44e2d4e54604543365c76bff"
        },
        "date": 1620194310513,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1343236,
            "range": "± 71491",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2695251,
            "range": "± 134661",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0f4879f5ab94dca5494925c0a9fd0c44eb30f2a",
          "message": "Discussion about correctness, performance, and style (#701)",
          "timestamp": "2021-05-05T14:37:36-05:00",
          "tree_id": "ab5169a90ccd68e8463d034a4b324f2f5ab3326c",
          "url": "https://github.com/unicode-org/icu4x/commit/d0f4879f5ab94dca5494925c0a9fd0c44eb30f2a"
        },
        "date": 1620243915527,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1572154,
            "range": "± 91566",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2971351,
            "range": "± 119629",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3085cc6dbe3018a4029c82f10b0f6452fde949fd",
          "message": "Add GitHub workflow for documentation preview (#694)",
          "timestamp": "2021-05-07T12:30:38-05:00",
          "tree_id": "c22f52d0d9c1e4495fb9dc3cf4a52d0205745e69",
          "url": "https://github.com/unicode-org/icu4x/commit/3085cc6dbe3018a4029c82f10b0f6452fde949fd"
        },
        "date": 1620409019745,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1332429,
            "range": "± 79698",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2581171,
            "range": "± 127157",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@google.com",
            "name": "Elango",
            "username": "echeran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1fa93b46cf574d5b61ecb9128e9a5292d3549375",
          "message": "Add PR template, including reminder for Conventional Comments (#706)",
          "timestamp": "2021-05-07T10:34:48-07:00",
          "tree_id": "77e4b32e1ab092625600987a947dc96bef105d7b",
          "url": "https://github.com/unicode-org/icu4x/commit/1fa93b46cf574d5b61ecb9128e9a5292d3549375"
        },
        "date": 1620409328439,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1423375,
            "range": "± 135123",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2726297,
            "range": "± 446678",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8a91a7c33f5bb56f52c198161a4a4c3a117583a9",
          "message": "Require GCP key to build docs preview (#708)",
          "timestamp": "2021-05-08T13:19:59-05:00",
          "tree_id": "0595fdc51c3a25f889e671b09e13dd8facc63db6",
          "url": "https://github.com/unicode-org/icu4x/commit/8a91a7c33f5bb56f52c198161a4a4c3a117583a9"
        },
        "date": 1620498386077,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1370411,
            "range": "± 57211",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2353615,
            "range": "± 77393",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "82ace5ec626d683e1ec3a5783d2a8c9125aada2b",
          "message": "Add yoke crate (#705)\n\n* Add yoke crate\n\n* Fix lint errors\n\n* Fix lint again\n\n* Clarifications for Miguel\n\n* Address shane's comments\n\n* Swap Yokeable::new()\n\n* more fmt\n\n* mention lifetime\n\n* Add Cartable for references\n\n* Remove unwrapping Cart impl on Option, move to having more attach methods\n\n* Reorganize yoke code\n\n* Use ptr::read instead of transmute_copy\n\n* Use StableDeref instead of Cart\n\n* Update utils/yoke/src/yoke.rs\n\nCo-authored-by: Shane F. Carr <shane@unicode.org>\n\n* Add more Clone impls\n\n* Move zerovec yoke impls to zerovec\n\n* lint\n\nCo-authored-by: Shane F. Carr <shane@unicode.org>",
          "timestamp": "2021-05-10T20:42:22-07:00",
          "tree_id": "e02ecb0625f89ebddbf45f9d4c6a4dd04c56fb79",
          "url": "https://github.com/unicode-org/icu4x/commit/82ace5ec626d683e1ec3a5783d2a8c9125aada2b"
        },
        "date": 1620704931001,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1454694,
            "range": "± 72220",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2755929,
            "range": "± 132999",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51e1e72b8a6a4d2df0221e8f617e3d9a6819b815",
          "message": "Fix keyword in Cargo.toml (#714)\n\n* Fix keyword in Cargo.toml\r\n\r\n* Update zerovec crate",
          "timestamp": "2021-05-11T10:19:50-07:00",
          "tree_id": "87f47eb5a6b8194bcf66add1ca291a2fd29b58ba",
          "url": "https://github.com/unicode-org/icu4x/commit/51e1e72b8a6a4d2df0221e8f617e3d9a6819b815"
        },
        "date": 1620754019553,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1403714,
            "range": "± 31574",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2680672,
            "range": "± 51852",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edd710df243c1d7d40660600d9ba2c6cbf7d7153",
          "message": "Add docs about optional features to zerovec crate, enable on docs.rs (#715)\n\n* Add docs about optional features to zerovec crate, enable on docs.rs\r\n\r\n* Fix whitespace in yokeable docs",
          "timestamp": "2021-05-11T12:35:26-07:00",
          "tree_id": "b9138b4b6baa4fd3d7837466905243697898a07f",
          "url": "https://github.com/unicode-org/icu4x/commit/edd710df243c1d7d40660600d9ba2c6cbf7d7153"
        },
        "date": 1620762137578,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1422993,
            "range": "± 88997",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2689934,
            "range": "± 102926",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9f897fb14dc1ed8093e152819427b98cdeddc657",
          "message": "Re-organize ICU4X data generation tools (#704)\n\n- Adds new crate under `tools/datagen`\r\n- Moves `icu4x-cldr-export` into that crate, renamed as `icu4x-datagen`\r\n- Replaces `icu4x-gen-testdata` with a new tool `icu4x-testdata-download`\r\n- Adds commands in Makefile.toml to invoke these tools",
          "timestamp": "2021-05-12T14:55:57-05:00",
          "tree_id": "b1614a6467b59fab9c68620bae91ffd7d63d6c08",
          "url": "https://github.com/unicode-org/icu4x/commit/9f897fb14dc1ed8093e152819427b98cdeddc657"
        },
        "date": 1620849736471,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1099897,
            "range": "± 3128",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2094689,
            "range": "± 2742",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@google.com",
            "name": "Elango",
            "username": "echeran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b8ce7ebaf43e01c473317339cbcb2dbfa0f56fe",
          "message": "Exclude CI jobs from fork runs that are intended for upstream merges (#672)",
          "timestamp": "2021-05-13T10:15:06-07:00",
          "tree_id": "ec4b73fe682ebe6198e017f608e06d2e4e26a030",
          "url": "https://github.com/unicode-org/icu4x/commit/2b8ce7ebaf43e01c473317339cbcb2dbfa0f56fe"
        },
        "date": 1620926517341,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1333754,
            "range": "± 91308",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2429292,
            "range": "± 39553",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "579f8253d595763908a0eb2ae63b1f18f941e844",
          "message": "Build docs previews in forks with valid key (#709)",
          "timestamp": "2021-05-13T12:17:51-05:00",
          "tree_id": "685a41233951b588f3312408c4a0bf26eb4da01b",
          "url": "https://github.com/unicode-org/icu4x/commit/579f8253d595763908a0eb2ae63b1f18f941e844"
        },
        "date": 1620926692376,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1268109,
            "range": "± 63823",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2376360,
            "range": "± 129358",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0eb7f7bb9bfd6ec45e01258f44bdfdc15d6e5f6a",
          "message": "Fix clippy in zerovec (#719)",
          "timestamp": "2021-05-13T11:58:35-07:00",
          "tree_id": "95a7fef0c65da10068a00f7237da3bf750386fde",
          "url": "https://github.com/unicode-org/icu4x/commit/0eb7f7bb9bfd6ec45e01258f44bdfdc15d6e5f6a"
        },
        "date": 1620932709672,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1290805,
            "range": "± 5379",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2476177,
            "range": "± 32320",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8599e4e3f972b3120887252d290ea6e750cbf60",
          "message": "Rename package directories in repo (#721)",
          "timestamp": "2021-05-13T16:00:29-07:00",
          "tree_id": "803a86066a5a41a378a5b2ec01d4968d40b75133",
          "url": "https://github.com/unicode-org/icu4x/commit/a8599e4e3f972b3120887252d290ea6e750cbf60"
        },
        "date": 1620947190707,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1083244,
            "range": "± 31557",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2031596,
            "range": "± 79393",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0400ad1de102a0774618859ebee214d799b65e40",
          "message": "Refactoring and generalizing impl_dyn_provider! (#723)",
          "timestamp": "2021-05-14T15:41:26-05:00",
          "tree_id": "4a428a443677c4b025c94ba58465e75ecb3865dd",
          "url": "https://github.com/unicode-org/icu4x/commit/0400ad1de102a0774618859ebee214d799b65e40"
        },
        "date": 1621025280774,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1390969,
            "range": "± 35182",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2635012,
            "range": "± 72018",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f4a9505f21a6d5c9bb4833e0cf3fe969f734c54",
          "message": "Touch-ups to Cargo.toml files and features (#722)",
          "timestamp": "2021-05-14T18:45:29-05:00",
          "tree_id": "d29be99abbf6b97a6acf945ab3d3feeb0f128558",
          "url": "https://github.com/unicode-org/icu4x/commit/1f4a9505f21a6d5c9bb4833e0cf3fe969f734c54"
        },
        "date": 1621036349642,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1318343,
            "range": "± 62897",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2531404,
            "range": "± 123375",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d68636ac9e319f7ee1c784e8bb83b6313f3f6ae5",
          "message": "Add rust versions policy (#726)\n\n* Add rust versions policy\r\n\r\n* +readme",
          "timestamp": "2021-05-19T14:06:04-07:00",
          "tree_id": "474950468811fce0efd1875b66b313675f033cde",
          "url": "https://github.com/unicode-org/icu4x/commit/d68636ac9e319f7ee1c784e8bb83b6313f3f6ae5"
        },
        "date": 1621458819790,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1290827,
            "range": "± 20613",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2422863,
            "range": "± 31104",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bacbc93be0130f80f74f1d58bab6c3316041ec14",
          "message": "Document release readiness and experimental code (#700)",
          "timestamp": "2021-05-20T19:05:05-05:00",
          "tree_id": "0ccb405934215df26681b871f5204c949b4099db",
          "url": "https://github.com/unicode-org/icu4x/commit/bacbc93be0130f80f74f1d58bab6c3316041ec14"
        },
        "date": 1621555913902,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1252606,
            "range": "± 42877",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2382710,
            "range": "± 29215",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@google.com",
            "name": "Elango",
            "username": "echeran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48c47db44cace4a608b627f6065de1dd39aac166",
          "message": "Make clippy warnings report as errors and update clippy args (#712)",
          "timestamp": "2021-05-20T17:21:57-07:00",
          "tree_id": "e16af60d9b2284d5943f4f01b26b3a156f27aa36",
          "url": "https://github.com/unicode-org/icu4x/commit/48c47db44cace4a608b627f6065de1dd39aac166"
        },
        "date": 1621556926931,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1296272,
            "range": "± 15213",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2483958,
            "range": "± 5716",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5fa630f86b31880cee7000793467d5ab9fd5abc6",
          "message": "Store DataPayload instead of Cow throughout ICU4X (#729)",
          "timestamp": "2021-05-21T01:02:44-05:00",
          "tree_id": "8f998589d9317d31432f0563cfba4936addb3260",
          "url": "https://github.com/unicode-org/icu4x/commit/5fa630f86b31880cee7000793467d5ab9fd5abc6"
        },
        "date": 1621577311108,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1182890,
            "range": "± 77303",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2205112,
            "range": "± 142832",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca7cf884d164da7472741e81291309f06d80b484",
          "message": "Fix cargo make wasm (#728)",
          "timestamp": "2021-05-20T23:36:22-07:00",
          "tree_id": "954421693b34500a4fa26fb746d4e34ae2977c1b",
          "url": "https://github.com/unicode-org/icu4x/commit/ca7cf884d164da7472741e81291309f06d80b484"
        },
        "date": 1621579440256,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1596589,
            "range": "± 127145",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 3081314,
            "range": "± 268539",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb112c397b37a57a551f0c972b9f7220a5177738",
          "message": "Make cow field of DataPayload crate-private",
          "timestamp": "2021-05-24T11:27:59-05:00",
          "tree_id": "2d08a0ca7e40b2f2ae643a70b4eb5e5efe1b0370",
          "url": "https://github.com/unicode-org/icu4x/commit/eb112c397b37a57a551f0c972b9f7220a5177738"
        },
        "date": 1621874094380,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1225169,
            "range": "± 22302",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2409793,
            "range": "± 36815",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aethanyc@gmail.com",
            "name": "Ting-Yu Lin",
            "username": "aethanyc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91e2fd60b5c1bba6439a798a18758c6327df2785",
          "message": "Properly initialize ICU4XPluralOperands struct in the capi example (#733)\n\nOther fields in ICU4XPluralOperands are meant to be zero.\r\n\r\nFixed #732.",
          "timestamp": "2021-05-24T12:16:25-07:00",
          "tree_id": "e3fa3af7129e97fd067eec6a5b87c6d2bf102247",
          "url": "https://github.com/unicode-org/icu4x/commit/91e2fd60b5c1bba6439a798a18758c6327df2785"
        },
        "date": 1621884193329,
        "tool": "cargo",
        "benches": [
          {
            "name": "datetime/datetime_overview",
            "value": 1315488,
            "range": "± 69694",
            "unit": "ns/iter"
          },
          {
            "name": "datetime/zoned_datetime_overview",
            "value": 2426804,
            "range": "± 20437",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}
