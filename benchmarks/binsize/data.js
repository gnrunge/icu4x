window.BENCHMARK_DATA = {
  "lastUpdate": 1625868319563,
  "repoUrl": "https://github.com/gnrunge/icu4x",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
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
          "id": "c8f51d78331d53193e7c293853b036c44ddebcc1",
          "message": "Change output format.",
          "timestamp": "2021-07-09T14:56:31-07:00",
          "tree_id": "cf9d39f1383d0cc2c4421cc7e4d60f99d7c64806",
          "url": "https://github.com/gnrunge/icu4x/commit/c8f51d78331d53193e7c293853b036c44ddebcc1"
        },
        "date": 1625868319018,
        "tool": "cargo",
        "benches": [
          {
            "name": "unicode_bmp_blocks_selector",
            "value": 17240,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "code_line_diff",
            "value": 17978,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "filter_langids",
            "value": 21739,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "tui",
            "value": 18124,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "borrowed_pattern",
            "value": 18901,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "simple",
            "value": 921557,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "work_log",
            "value": 18127,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "writeable_message",
            "value": 13537,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "language_names_hash_map",
            "value": 12498,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "permyriad",
            "value": 12554,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "language_names_lite_map",
            "value": 9312,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "unread_emails",
            "value": 18124,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "syntatically_canonicalize_locales",
            "value": 44330,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "elevator_floors",
            "value": 18124,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "owned_pattern",
            "value": 22573,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}