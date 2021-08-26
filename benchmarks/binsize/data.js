window.BENCHMARK_DATA = {
<<<<<<< HEAD
  "lastUpdate": 1626808723299,
  "repoUrl": "https://github.com/gnrunge/icu4x",
=======
  "lastUpdate": 1629869807777,
  "repoUrl": "https://github.com/unicode-org/icu4x",
>>>>>>> 85a4edd09f1de0d235b392e9726da473cae9379a
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
<<<<<<< HEAD
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "a1b46119b4cd3b094f5d9ca711e4b44d45c4f3e0",
          "message": "Try gh-pages.",
          "timestamp": "2021-07-09T16:58:25-07:00",
          "tree_id": "ee3cd5efcc314aefbfdc6c5e8d8c8688f84aa459",
          "url": "https://github.com/gnrunge/icu4x/commit/a1b46119b4cd3b094f5d9ca711e4b44d45c4f3e0"
        },
        "date": 1625875456499,
        "tool": "cargo",
        "benches": [
          {
            "name": "unicode_bmp_blocks_selector",
            "value": 17240,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "code_line_diff",
            "value": 17978,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "filter_langids",
            "value": 21739,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "tui",
            "value": 18124,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "borrowed_pattern",
            "value": 18901,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple",
            "value": 921557,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "work_log",
            "value": 18127,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "writeable_message",
            "value": 13537,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "language_names_hash_map",
            "value": 12498,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permyriad",
            "value": 12554,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "language_names_lite_map",
            "value": 9312,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "unread_emails",
            "value": 18124,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "syntatically_canonicalize_locales",
            "value": 44330,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "elevator_floors",
            "value": 18124,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "owned_pattern",
            "value": 22573,
            "range": "± 0",
            "unit": "ns/iter"
=======
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8d99c160c4581dc247127c328ced20eda809fc43",
          "message": "Binary size benchmarking: Rust script to measure size of the ICU4X examples compiled into wasm binaries (#871)\n\nSet up GHA to build wasm binaries, measure file sizes, push results into benchmark dashboard .\r\n\r\nResolves ticket #140.\r\n\r\nCo-authored-by: Greg Tatum <gregtatum@users.noreply.github.com>\r\n\r\nCo-authored-by: Greg Tatum <gregtatum@users.noreply.github.com>",
          "timestamp": "2021-07-29T12:27:49-05:00",
          "tree_id": "9e0744b9ce8c059ab9d583a862264748644a9a25",
          "url": "https://github.com/unicode-org/icu4x/commit/8d99c160c4581dc247127c328ced20eda809fc43"
        },
        "date": 1627580011233,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 16510,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
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
          "id": "cd5b0d278ce455c13dfbd29a4a84694aa9f026fc",
          "message": "Document certain DataProvider impls that return `'static` (#916)\n\nReverts 4b48cf79996c997658606e30503ad46f4c586003",
          "timestamp": "2021-07-29T12:29:28-05:00",
          "tree_id": "5d8a17a8ec99b48a6c6fefc01cbbd1ee9c37eec7",
          "url": "https://github.com/unicode-org/icu4x/commit/cd5b0d278ce455c13dfbd29a4a84694aa9f026fc"
        },
        "date": 1627580182893,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 16510,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
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
          "id": "871b9869064b1c056dd7ee13128a33158762bfaa",
          "message": "Improve docs in PluralRules and FixedDecimal (#886)",
          "timestamp": "2021-07-29T13:14:47-05:00",
          "tree_id": "ed5feea1dc9c049874e3d44751986631ccd6d33e",
          "url": "https://github.com/unicode-org/icu4x/commit/871b9869064b1c056dd7ee13128a33158762bfaa"
        },
        "date": 1627582880214,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 16510,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
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
          "id": "0b38c6f03d4c182d6dd899e300b8e1b207b74895",
          "message": "Rename data errors to MissingResource (#893)",
          "timestamp": "2021-07-29T16:59:43-05:00",
          "tree_id": "fe3cc86ca1fb9881c8571afffd60f5b2d058b6c6",
          "url": "https://github.com/unicode-org/icu4x/commit/0b38c6f03d4c182d6dd899e300b8e1b207b74895"
        },
        "date": 1627596367482,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 16510,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
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
          "id": "288aab2ca18012798d51f0454b4ba36f178b815d",
          "message": "Update CHANGELOG for 0.3",
          "timestamp": "2021-07-29T17:29:47-05:00",
          "tree_id": "8b5972ebb2af9f6f13c26d11d46b8c175689a3c4",
          "url": "https://github.com/unicode-org/icu4x/commit/288aab2ca18012798d51f0454b4ba36f178b815d"
        },
        "date": 1627598177670,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 16510,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "d3a5153c6da23e434a05ddfae441d2ecc39f1d5c",
          "message": "Bump Yoke to 0.2.3",
          "timestamp": "2021-07-29T18:53:06-05:00",
          "tree_id": "1188c87119763cbcb4f1fcb9241477b585b128fd",
          "url": "https://github.com/unicode-org/icu4x/commit/d3a5153c6da23e434a05ddfae441d2ecc39f1d5c"
        },
        "date": 1627603511917,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 16510,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
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
          "id": "d12a5c53366b650f27e1bad8bec9791f432df4ad",
          "message": "Fix clippy warnings arising from Rust version upgrade (#923)",
          "timestamp": "2021-08-02T12:40:47-05:00",
          "tree_id": "72f8596d3fd41a8f668b6130084b302f95b67524",
          "url": "https://github.com/unicode-org/icu4x/commit/d12a5c53366b650f27e1bad8bec9791f432df4ad"
        },
        "date": 1627926431425,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15470,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shadaj@users.noreply.github.com",
            "name": "Shadaj Laddad",
            "username": "shadaj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c70c9dd5fdb13d45fc16388c78a6bd3e759430c4",
          "message": "Migrate C/C++/JS APIs to Diplomat (#900)\n\n* Migrate capi to use Diplomat and update examples\r\n\r\n* Migrate C++ and JS to Diplomat API\r\n\r\n* Fix cargo fmt and clippy\r\n\r\n* Fix wasm-test-release\r\n\r\n* Bump Diplomat to branch with no_std runtime\r\n\r\n* Bump Diplomat to disable no_std on WASM\r\n\r\n* Switch to Diplomat main\r\n\r\n* Bump Diplomat\r\n\r\n* Bring back result types\r\n\r\n* Split up header files\r\n\r\n* Update lockfile for latest Diplomat\r\n\r\n* Update headers to drop module paths\r\n\r\n* Set up CI to run Diplomat\r\n\r\n* Add build step that checks if Diplomat bindings are up-to-date\r\n\r\n* Only diff ffi\r\n\r\n* Update Diplomat rev",
          "timestamp": "2021-08-02T11:24:46-07:00",
          "tree_id": "c5436509ef4fc6563790834f21a515dad0d784fa",
          "url": "https://github.com/unicode-org/icu4x/commit/c70c9dd5fdb13d45fc16388c78a6bd3e759430c4"
        },
        "date": 1627929039005,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15470,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
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
          "id": "455d57aed9ecec54467412c1d34b731702a163a5",
          "message": "Port ICU4C code point trie (#711)\n\nCo-authored-by: Shane F. Carr <shane@unicode.org>\r\n\r\nCo-authored-by: Manish Goregaokar <manishsmail@gmail.com>\r\nCo-authored-by: Shane F. Carr <shane@unicode.org>",
          "timestamp": "2021-08-03T09:14:32-07:00",
          "tree_id": "e477ec2415c0b0ec31988c86179ddbbae3a04739",
          "url": "https://github.com/unicode-org/icu4x/commit/455d57aed9ecec54467412c1d34b731702a163a5"
        },
        "date": 1628007692310,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15470,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
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
          "id": "ae65821858b61560d984c28e2c2153ae39e087e2",
          "message": "Regen FFI with new diplomat (#932)\n\n* Update diplomat\r\n\r\n* Regen FFI\r\n\r\n* Update test with to_writeable\r\n\r\n* Rename format_write() to format()",
          "timestamp": "2021-08-03T14:07:14-07:00",
          "tree_id": "e766adf2562ccc0373d1875d8ee76d1be4431ce5",
          "url": "https://github.com/unicode-org/icu4x/commit/ae65821858b61560d984c28e2c2153ae39e087e2"
        },
        "date": 1628025269119,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15470,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
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
          "id": "066edd4c0d0328c6d2fcc039db3ff474c97815d3",
          "message": "Add missing `#[serde(borrow)]` (#930)",
          "timestamp": "2021-08-05T02:03:51-05:00",
          "tree_id": "1b8a2140edb1b7600109d54e782b11810fc5bfb1",
          "url": "https://github.com/unicode-org/icu4x/commit/066edd4c0d0328c6d2fcc039db3ff474c97815d3"
        },
        "date": 1628147424026,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15470,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
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
          "id": "2c2f611bb6e4d604bdd40fa4d12687272bae0533",
          "message": "Support --keys in datagen (#938)\n\n* Add --keys support to datagen\r\n\r\n* use writeable",
          "timestamp": "2021-08-05T16:16:01-07:00",
          "tree_id": "db6cccf4ec2f7d50743f21f53201e23fb720b8db",
          "url": "https://github.com/unicode-org/icu4x/commit/2c2f611bb6e4d604bdd40fa4d12687272bae0533"
        },
        "date": 1628205697716,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15470,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
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
          "id": "b412c7696eb43ad10864f468a41041edf28c6ee2",
          "message": "Call destructor for locale (#937)",
          "timestamp": "2021-08-05T17:21:26-07:00",
          "tree_id": "9375203a41643aafe4d8d6cbe65f0589a25562cb",
          "url": "https://github.com/unicode-org/icu4x/commit/b412c7696eb43ad10864f468a41041edf28c6ee2"
        },
        "date": 1628209692849,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15470,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iireland@mozilla.com",
            "name": "iainireland",
            "username": "iainireland"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d838bb5a9446fd70951b4b3157d52fe6d92fe0c8",
          "message": "Minimal uprops provider (#885)\n\n* Add binary uprops data needed for irregexp to testdata\r\n\r\n* Implement BinaryPropertiesDataProvider\r\n\r\n* Add export support for BinaryPropertiesDataProvider\r\n\r\n* Add license to uprops testdata\r\n\r\n* Address review feedback\r\n\r\n* Remove second lifetime parameter from BinaryPropertiesDataProvider\r\n\r\n* Fix newline for cargo fmt\r\n\r\n* Remove unnecessary cargo-all-features from Cargo.toml\r\n\r\n* Address review feedback\r\n\r\n* Bump rust toolchain version to 1.52 for cargo-make\r\n\r\n* rust-toolchain was already bumped\r\n\r\n* Update uprops Cargo.toml for 0.3 release\r\n\r\n* Update uprops version to 0.3\r\n\r\n* Update Cargo.lock\r\n\r\nCo-authored-by: Iain Ireland <iain.i.ireland@gmail.com>",
          "timestamp": "2021-08-06T10:31:01-07:00",
          "tree_id": "085a5f87894f0c9aa7802ad3c0b02fafe8d23027",
          "url": "https://github.com/unicode-org/icu4x/commit/d838bb5a9446fd70951b4b3157d52fe6d92fe0c8"
        },
        "date": 1628271452009,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15470,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
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
          "id": "a1b5ada1142196384e18a01d9abca87f2bc5f942",
          "message": "Add feature flags to CAPI; update WearOS build steps (#939)\n\n* Generate smaller testdata\r\n\r\n* Add smaller_static feature to testdata\r\n\r\n* Add features to capi\r\n\r\n* Update build command for cortex\r\n\r\n* fix ci\r\n\r\n* fix ci\r\n\r\n* skip optional\r\n\r\n* fix target_os\r\n\r\n* Remove feature slicing\r\n\r\n* Only use smaller_static in capi\r\n\r\n* nit",
          "timestamp": "2021-08-06T13:58:58-07:00",
          "tree_id": "566c1ec91b00bb8a3b542c76939aebfa00997047",
          "url": "https://github.com/unicode-org/icu4x/commit/a1b5ada1142196384e18a01d9abca87f2bc5f942"
        },
        "date": 1628283944167,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15470,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
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
          "id": "220f4590e91bebe1aa71a1c60b78fe6c4e68abec",
          "message": "Make icu_capi always no_std (#941)",
          "timestamp": "2021-08-06T19:18:20-07:00",
          "tree_id": "e9bd413f14e3089b569be6ea09df4c7831afb914",
          "url": "https://github.com/unicode-org/icu4x/commit/220f4590e91bebe1aa71a1c60b78fe6c4e68abec"
        },
        "date": 1628303156746,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15470,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
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
          "id": "f0977050566fcac7d8b8427feba50eed91f9d1a5",
          "message": "Use cargo-all-features' new denylist feature to improve our CI time (#942)\n\n* Update cargo-all-features version\r\n\r\n* Stop including bench feature in cargo-all-features\r\n\r\n* Deny more features for capi crate",
          "timestamp": "2021-08-09T10:17:29-07:00",
          "tree_id": "c83289bcca60a0624f03ef3382fb9124e7b72393",
          "url": "https://github.com/unicode-org/icu4x/commit/f0977050566fcac7d8b8427feba50eed91f9d1a5"
        },
        "date": 1628529784470,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15470,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
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
          "id": "c5f62dfc5f15c88581d69279634b6087da42768c",
          "message": "Data struct tutorial (#929)",
          "timestamp": "2021-08-10T18:58:13-05:00",
          "tree_id": "8f65327cdddac0173da8ea1fbdfc6aded27a76ac",
          "url": "https://github.com/unicode-org/icu4x/commit/c5f62dfc5f15c88581d69279634b6087da42768c"
        },
        "date": 1628640299976,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15470,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
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
          "id": "9e7ca843719c5ccf7570e5f6cef0fbebfbb84003",
          "message": "Check that testdata is up-to-date in CI (#947)\n\n* Remoes CLDR download from `cargo make testdata` and updates docs\r\n* Adds workaround for serde_json line ending bug",
          "timestamp": "2021-08-11T11:02:08-05:00",
          "tree_id": "d79f9b80c81810b6f27116d93709cfb8fb1c3b64",
          "url": "https://github.com/unicode-org/icu4x/commit/9e7ca843719c5ccf7570e5f6cef0fbebfbb84003"
        },
        "date": 1628698107928,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15470,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611948,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
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
          "id": "07f659080d9beb013402570c6b18791a0ecd247f",
          "message": "Change benches to use static data provider (#892)",
          "timestamp": "2021-08-11T18:13:32-05:00",
          "tree_id": "22ec80426360506800cb47c6e7e5e55d705ac7d7",
          "url": "https://github.com/unicode-org/icu4x/commit/07f659080d9beb013402570c6b18791a0ecd247f"
        },
        "date": 1628724004564,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15470,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611948,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
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
          "id": "f52429e0ca3505eee821bd57218c20a80013283a",
          "message": "Add design doc explaining phases of data provider information (#498)",
          "timestamp": "2021-08-12T14:18:08-05:00",
          "tree_id": "e0077c8d2fa7aa2e7c0b5aa896ee0419cad0132b",
          "url": "https://github.com/unicode-org/icu4x/commit/f52429e0ca3505eee821bd57218c20a80013283a"
        },
        "date": 1628796281789,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15470,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611948,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
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
          "id": "acfb8f4151f978edcb731a029ce22793830ff24a",
          "message": "Improve documentation for line breaker's public interfaces (#950)",
          "timestamp": "2021-08-16T10:14:59-07:00",
          "tree_id": "8bee46fd0c9a9c95d5130ee62058b96354d778ce",
          "url": "https://github.com/unicode-org/icu4x/commit/acfb8f4151f978edcb731a029ce22793830ff24a"
        },
        "date": 1629134517749,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15470,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611948,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iireland@mozilla.com",
            "name": "iainireland",
            "username": "iainireland"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a964cb21137a18405e9adaadfe4e5352b479be5",
          "message": "Uniset cleanup (#956)\n\n* Use where clauses to make fn signatures more readable\r\n\r\n* Support groups of general categories\r\n\r\n* Remove clippy and rustfmt exceptions\r\n\r\n* Clean up enum_props::Script\r\n\r\n* Fix incorrect key for gc=Surrogate\r\n\r\n* Implement get_script_val_set\r\n\r\n* Add UnicodeSet::get_range\r\n\r\n* Add UnicodeSetBuilder::add_range_u32\r\n\r\n* Address review comments\r\n\r\n* Update test\r\n\r\nCo-authored-by: Iain Ireland <iain.i.ireland@gmail.com>",
          "timestamp": "2021-08-17T13:28:46-07:00",
          "tree_id": "dc428cf324c85a3b1142766e62ea23b64953cf78",
          "url": "https://github.com/unicode-org/icu4x/commit/6a964cb21137a18405e9adaadfe4e5352b479be5"
        },
        "date": 1629232461886,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15470,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611948,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
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
          "id": "2edf576106fe276e2e811e8d2869070729af800d",
          "message": "Add \"x86tiny\" feature to icu_capi (#957)",
          "timestamp": "2021-08-17T15:58:43-05:00",
          "tree_id": "51351e73881d1851ab4434ff7dd516c7837ead09",
          "url": "https://github.com/unicode-org/icu4x/commit/2edf576106fe276e2e811e8d2869070729af800d"
        },
        "date": 1629234270298,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15470,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611948,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
>>>>>>> 85a4edd09f1de0d235b392e9726da473cae9379a
          }
        ]
      },
      {
        "commit": {
          "author": {
<<<<<<< HEAD
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "91ad93f5c97a8815f72b5693ed4219334476e68b",
          "message": "Add back +/- range.",
          "timestamp": "2021-07-12T15:33:21-07:00",
          "tree_id": "6dadeb9dce3eb9fb050d049bd64b42825d6360fc",
          "url": "https://github.com/gnrunge/icu4x/commit/91ad93f5c97a8815f72b5693ed4219334476e68b"
        },
        "date": 1626129594234,
        "tool": "cargo",
        "benches": [
          {
            "name": "unicode_bmp_blocks_selector",
            "value": 17240,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "code_line_diff",
            "value": 17978,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "filter_langids",
            "value": 21739,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "tui",
            "value": 18124,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "borrowed_pattern",
            "value": 18901,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple",
            "value": 921557,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "work_log",
            "value": 18127,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "writeable_message",
            "value": 13537,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "language_names_hash_map",
            "value": 12498,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permyriad",
            "value": 12554,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "language_names_lite_map",
            "value": 9312,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "unread_emails",
            "value": 18124,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "syntatically_canonicalize_locales",
            "value": 44330,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "elevator_floors",
            "value": 18124,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "owned_pattern",
            "value": 22573,
            "range": "± 0",
            "unit": "ns/iter"
=======
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
          "id": "300b83a1ff5608fd9e8eadca6f9805c9155c3174",
          "message": "Minor cleanup to line breaker (#949)\n\n* Move line break test from lib.rs into line_breaker.rs\r\n\r\nTo consolidate the tests in line_breaker.rs and keep the lib.rs simple.\r\n\r\n* Rename break_rule to line_break_rule\r\n\r\nThis gives a better symmetry with `word_break_rule` next to it.\r\n\r\n* Remove ja_zh argument for LineBreakIteratorLatin1::new_with_break_rule()\r\n\r\nLatin1 cannot encode Chinese or Japanese characters, so it makes more\r\nsense to remove this argument.",
          "timestamp": "2021-08-17T16:48:20-07:00",
          "tree_id": "d7cb30473cb3b4e6ab222de57e994337f8ac6706",
          "url": "https://github.com/unicode-org/icu4x/commit/300b83a1ff5608fd9e8eadca6f9805c9155c3174"
        },
        "date": 1629244437035,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15470,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611948,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
>>>>>>> 85a4edd09f1de0d235b392e9726da473cae9379a
          }
        ]
      },
      {
        "commit": {
          "author": {
<<<<<<< HEAD
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "e07219c50cb15b069c36d440ae8fe0e3f406768e",
          "message": "Fix header and add error check.",
          "timestamp": "2021-07-13T15:21:55-07:00",
          "tree_id": "6bbd53eafeeef176a3a23ff6743f06306aea4e0b",
          "url": "https://github.com/gnrunge/icu4x/commit/e07219c50cb15b069c36d440ae8fe0e3f406768e"
        },
        "date": 1626215310369,
        "tool": "cargo",
        "benches": [
          {
            "name": "unicode_bmp_blocks_selector",
            "value": 17240,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "code_line_diff",
            "value": 17978,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "filter_langids",
            "value": 21739,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "tui",
            "value": 18124,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "borrowed_pattern",
            "value": 18901,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple",
            "value": 921557,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "work_log",
            "value": 18127,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "writeable_message",
            "value": 13537,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "language_names_hash_map",
            "value": 12498,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permyriad",
            "value": 12554,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "language_names_lite_map",
            "value": 9312,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "unread_emails",
            "value": 18124,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "syntatically_canonicalize_locales",
            "value": 44330,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "elevator_floors",
            "value": 18124,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "owned_pattern",
            "value": 22573,
            "range": "± 0",
            "unit": "ns/iter"
=======
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
          "id": "305643d72bbb6a1b9fd09e0aedad46b32bc938d8",
          "message": "Update diplomat; improve diplomat makefiles (#959)\n\n* Update Diplomat\r\n\r\n* Include cpp docs\r\n\r\n* Consistently name diplomat tasks, add diplomat-gen task\r\n\r\n* Have Diplomat clean up before regenerating\r\n\r\n* fix",
          "timestamp": "2021-08-17T23:10:04-07:00",
          "tree_id": "2165f97f6ac06ea6123100bc1fe529d83994cc07",
          "url": "https://github.com/unicode-org/icu4x/commit/305643d72bbb6a1b9fd09e0aedad46b32bc938d8"
        },
        "date": 1629267421271,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15470,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611948,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
>>>>>>> 85a4edd09f1de0d235b392e9726da473cae9379a
          }
        ]
      },
      {
        "commit": {
          "author": {
<<<<<<< HEAD
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "41fabf5971895804a7a6dffbd1fc517e6a3958bd",
          "message": "Remove test prints.",
          "timestamp": "2021-07-14T12:42:27-07:00",
          "tree_id": "9278c8967a5ecfa0a5768ccbcf551105479b776a",
          "url": "https://github.com/gnrunge/icu4x/commit/41fabf5971895804a7a6dffbd1fc517e6a3958bd"
        },
        "date": 1626292252495,
        "tool": "cargo",
        "benches": [
          {
            "name": "unicode_bmp_blocks_selector",
            "value": 17240,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "code_line_diff",
            "value": 17978,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "filter_langids",
            "value": 21739,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "tui",
            "value": 18124,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "borrowed_pattern",
            "value": 18901,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple",
            "value": 921557,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "work_log",
            "value": 18127,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "writeable_message",
            "value": 13537,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "language_names_hash_map",
            "value": 12498,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permyriad",
            "value": 12554,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "language_names_lite_map",
            "value": 9312,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "unread_emails",
            "value": 18124,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "syntatically_canonicalize_locales",
            "value": 44330,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "elevator_floors",
            "value": 18124,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "owned_pattern",
            "value": 22573,
            "range": "± 0",
            "unit": "ns/iter"
=======
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
          "id": "245eb95ee01b2cabdea611a2f1b8436b4ad7890b",
          "message": "Update Diplomat and add `pub` to all exported functions (#963)",
          "timestamp": "2021-08-17T23:36:13-07:00",
          "tree_id": "02b981699dd728b559fcc90e4e47b7d1f049da58",
          "url": "https://github.com/unicode-org/icu4x/commit/245eb95ee01b2cabdea611a2f1b8436b4ad7890b"
        },
        "date": 1629268956023,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15470,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 611948,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
>>>>>>> 85a4edd09f1de0d235b392e9726da473cae9379a
          }
        ]
      },
      {
        "commit": {
          "author": {
<<<<<<< HEAD
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "6765f8f987a445aa3854da5c5bfafda346f930af",
          "message": "Newline was missing.",
          "timestamp": "2021-07-14T12:52:44-07:00",
          "tree_id": "22fd992cf155c856af08ee37e40bb6e4d0628bc3",
          "url": "https://github.com/gnrunge/icu4x/commit/6765f8f987a445aa3854da5c5bfafda346f930af"
        },
        "date": 1626292699614,
        "tool": "cargo",
        "benches": [
          {
            "name": "unicode_bmp_blocks_selector",
            "value": 17240,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "code_line_diff",
            "value": 17978,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "filter_langids",
            "value": 21739,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "tui",
            "value": 18124,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "borrowed_pattern",
            "value": 18901,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple",
            "value": 921557,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "work_log",
            "value": 18127,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "writeable_message",
            "value": 13537,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "language_names_hash_map",
            "value": 12498,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permyriad",
            "value": 12554,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "language_names_lite_map",
            "value": 9312,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "unread_emails",
            "value": 18124,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "syntatically_canonicalize_locales",
            "value": 44330,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "elevator_floors",
            "value": 18124,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "owned_pattern",
            "value": 22573,
            "range": "± 0",
            "unit": "ns/iter"
=======
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
          "id": "d320b0439d7cc48d2b9ac579245f43a16c439705",
          "message": "Add size-optimized FFI functions for Locale and DataProvider (#962)",
          "timestamp": "2021-08-18T13:35:47-05:00",
          "tree_id": "4a9f5d7fa3ad807ff877c351757d8fc6e5333859",
          "url": "https://github.com/unicode-org/icu4x/commit/d320b0439d7cc48d2b9ac579245f43a16c439705"
        },
        "date": 1629312133449,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15470,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 610595,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
>>>>>>> 85a4edd09f1de0d235b392e9726da473cae9379a
          }
        ]
      },
      {
        "commit": {
          "author": {
<<<<<<< HEAD
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "4fe08ee9feaf86fd5457f75dee413f993e121306",
          "message": "Back to cargo bencher output format.",
          "timestamp": "2021-07-20T11:54:05-07:00",
          "tree_id": "df5a6ad2be206e6558b8e7c87d8de84312be14da",
          "url": "https://github.com/gnrunge/icu4x/commit/4fe08ee9feaf86fd5457f75dee413f993e121306"
        },
        "date": 1626807691435,
        "tool": "cargo",
        "benches": [
          {
            "name": "unicode_bmp_blocks_selector",
            "value": 17402,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "code_line_diff",
            "value": 17978,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "filter_langids",
            "value": 21739,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "tui",
            "value": 18124,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "borrowed_pattern",
            "value": 18901,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple",
            "value": 921549,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "work_log",
            "value": 18127,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "writeable_message",
            "value": 13537,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "language_names_hash_map",
            "value": 12498,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "derive",
            "value": 13067,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permyriad",
            "value": 12554,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "language_names_lite_map",
            "value": 9312,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "unread_emails",
            "value": 18124,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "syntatically_canonicalize_locales",
            "value": 44330,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "elevator_floors",
            "value": 18124,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "owned_pattern",
            "value": 22573,
            "range": "± 0",
            "unit": "ns/iter"
=======
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
          "id": "803af54cdb0d263fe372912a0647fa8a0e50a247",
          "message": "Package LICENSE with each component (#790)\n\n* Package LICENSE with each component\r\n\r\n* Address review feedback\r\n\r\n* Add LICENSE for new components",
          "timestamp": "2021-08-18T15:40:00-04:00",
          "tree_id": "f7e848173bcdb9a02dbf33b6c39302dabd82fbc8",
          "url": "https://github.com/unicode-org/icu4x/commit/803af54cdb0d263fe372912a0647fa8a0e50a247"
        },
        "date": 1629315970234,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15470,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 610595,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 34103,
            "unit": "bytes",
            "biggerIsBetter": false
>>>>>>> 85a4edd09f1de0d235b392e9726da473cae9379a
          }
        ]
      },
      {
        "commit": {
          "author": {
<<<<<<< HEAD
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "3bad400c270afd7aa7cb05bbba6cfc0cbbe1886f",
          "message": "Rerun with new binsize value.",
          "timestamp": "2021-07-20T12:11:07-07:00",
          "tree_id": "f07cbf41eb6f783227aaf54bfa2006d56e089225",
          "url": "https://github.com/gnrunge/icu4x/commit/3bad400c270afd7aa7cb05bbba6cfc0cbbe1886f"
        },
        "date": 1626808721960,
        "tool": "cargo",
        "benches": [
          {
            "name": "unicode_bmp_blocks_selector",
            "value": 17402,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "code_line_diff",
            "value": 17978,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "filter_langids",
            "value": 21739,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "tui",
            "value": 18124,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "borrowed_pattern",
            "value": 18901,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "simple",
            "value": 921549,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "work_log",
            "value": 18127,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "writeable_message",
            "value": 13537,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "language_names_hash_map",
            "value": 12498,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "derive",
            "value": 13067,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "permyriad",
            "value": 12554,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "language_names_lite_map",
            "value": 9312,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "unread_emails",
            "value": 18124,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "syntatically_canonicalize_locales",
            "value": 44330,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "elevator_floors",
            "value": 18124,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "owned_pattern",
            "value": 22573,
            "range": "± 0",
            "unit": "ns/iter"
=======
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
          "id": "cdab7f1771ff47093e006d8309e137b5ce1097df",
          "message": "Ignore duplicate keywords and attributes (#966)\n\nFrom https://tc39.es/ecma402/#sec-canonicalizeunicodelocaleid, we should\r\nonly keep the first keyword for a given key and the first instance of any\r\nattribute defined in the input.",
          "timestamp": "2021-08-19T09:02:10-04:00",
          "tree_id": "db46eb09517856ec3d326b95924bf62e65d34f89",
          "url": "https://github.com/unicode-org/icu4x/commit/cdab7f1771ff47093e006d8309e137b5ce1097df"
        },
        "date": 1629378565995,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15470,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 610595,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 32547,
            "unit": "bytes",
            "biggerIsBetter": false
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
          "id": "ccfb206002f52cd363291d0070a27084e167bc22",
          "message": "Reject duplicate variants (#965)\n\nWe currently silently drop duplicate variants, but according to BCP47,\r\nthis is not valid:\r\n\r\n   5.  The same variant subtag MUST NOT be used more than once within a\r\n       language tag.\r\n\r\n       *  For example, the tag \"de-DE-1901-1901\" is not valid.\r\n\r\nThis changes the code to reject duplicate variants.",
          "timestamp": "2021-08-19T09:02:44-04:00",
          "tree_id": "da4965acfa3d71be73ba32313b11ada7c6c2c66e",
          "url": "https://github.com/unicode-org/icu4x/commit/ccfb206002f52cd363291d0070a27084e167bc22"
        },
        "date": 1629378578319,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15503,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 610595,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 32558,
            "unit": "bytes",
            "biggerIsBetter": false
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
          "id": "9b41685af03e5cbc8ddd97348ae19719ace30753",
          "message": "Reject empty unicode extensions (#970)\n\nFrom https://www.unicode.org/reports/tr35/#Unicode_locale_identifier,\r\nunicode extensions must include at least one attribute or at least one\r\nkeyword.",
          "timestamp": "2021-08-20T09:04:27-04:00",
          "tree_id": "1becf955de38f8291f81982f6322c5a11a1328f9",
          "url": "https://github.com/unicode-org/icu4x/commit/9b41685af03e5cbc8ddd97348ae19719ace30753"
        },
        "date": 1629465113094,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15503,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 610595,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 32612,
            "unit": "bytes",
            "biggerIsBetter": false
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
          "id": "b66b237d22db389c8333c558937e66e16d12db34",
          "message": "Load Diplomat and twiggy from cache; update diplomat (#974)\n\n* Update diplomat\r\n\r\n* Add make tasks for updating diplomat\r\n\r\n* Load Diplomat from cache\r\n\r\n* Load twiggy from cache\r\n\r\n* No need to sync anymore\r\n\r\n* indent\r\n\r\n* Include tool name in cache key name",
          "timestamp": "2021-08-24T13:55:41-07:00",
          "tree_id": "7ba0519a6e4776039c31421f98948c41043ab754",
          "url": "https://github.com/unicode-org/icu4x/commit/b66b237d22db389c8333c558937e66e16d12db34"
        },
        "date": 1629839248338,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 9386,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15503,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9118,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 9662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 16377,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9728,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 236,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 13315,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 610595,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13426,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 13303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12750,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 32612,
            "unit": "bytes",
            "biggerIsBetter": false
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
          "id": "19c05d9785c2ab7eafc25f4e204948b2394320dc",
          "message": "Add cpp-to-wasm test (#968)\n\n* Add cpp-to-wasm test\r\n\r\n* Run wasm test on CI\r\n\r\n* Fix CI\r\n\r\n* Add host test to test-ffi\r\n\r\n* pin emsdk\r\n\r\n* Pin emscripten test to older nightly too",
          "timestamp": "2021-08-24T22:31:57-07:00",
          "tree_id": "fa49db00c5b98cbb54c04cecdb3249d13dc265e0",
          "url": "https://github.com/unicode-org/icu4x/commit/19c05d9785c2ab7eafc25f4e204948b2394320dc"
        },
        "date": 1629869804702,
        "tool": "ndjson",
        "benches": [
          {
            "name": "derive+opt",
            "value": 8468,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "filter_langids+opt",
            "value": 15403,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unread_emails+opt",
            "value": 12674,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "permyriad+opt",
            "value": 9004,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable_message+opt",
            "value": 8827,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "owned_pattern+opt",
            "value": 15984,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_hash_map+opt",
            "value": 9667,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "zv_serde+opt",
            "value": 196,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "code_line_diff+opt",
            "value": 12679,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "simple+opt",
            "value": 610276,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "language_names_lite_map+opt",
            "value": 7235,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "tui+opt",
            "value": 12674,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "borrowed_pattern+opt",
            "value": 13037,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "elevator_floors+opt",
            "value": 12674,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "work_log+opt",
            "value": 12674,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "unicode_bmp_blocks_selector+opt",
            "value": 12805,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "syntatically_canonicalize_locales+opt",
            "value": 31966,
            "unit": "bytes",
            "biggerIsBetter": false
>>>>>>> 85a4edd09f1de0d235b392e9726da473cae9379a
          }
        ]
      }
    ]
  }
}