// This file is part of ICU4X. For terms of use, please see the file
// called LICENSE at the top level of the ICU4X source tree
// (online at: https://github.com/unicode-org/icu4x/blob/main/LICENSE ).

//! `icu_properties` is one of the [`ICU4X`] components.
//!
//! This component provides definitions of [Unicode Properties] and APIs for
//! retrieving property data in an appropriate data structure.
//!
//! APIs that return a [`UnicodeSet`] exist for binary properties and certain enumerated
//! properties. See the [`sets`] module for more details.
//!
//! APIs that return a [`CodePointTrie`] exist for certain enumerated properties. See the
//! [`maps`] module for more details.
//!
//! # Examples
//!
//! ## Property data as `UnicodeSet`s
//!
//! ```
//! use icu::properties::{sets, GeneralCategory};
//!
//! let provider = icu_testdata::get_provider();
//!
//! // A binary property as a `UnicodeSet`
//!
//! let payload =
//!     sets::get_emoji(&provider)
//!         .expect("The data should be valid");
//! let data_struct = payload.get();
//! let emoji = &data_struct.inv_list;
//!
//! assert!(emoji.contains('🎃'));  // U+1F383 JACK-O-LANTERN
//! assert!(!emoji.contains('木'));  // U+6728
//!
//! // An individual enumerated property value as a `UnicodeSet`
//!
//! let payload =
//!     sets::get_for_general_category(&provider, GeneralCategory::LineSeparator)
//!         .expect("The data should be valid");
//! let data_struct = payload.get();
//! let line_sep = &data_struct.inv_list;
//!
//! assert!(line_sep.contains_u32(0x2028));
//! assert!(!line_sep.contains_u32(0x2029));
//! ```
//!
//! ## Property data as `CodePointTrie`s
//!
//! ```
//! use icu::properties::{maps, Script};
//!
//! let provider = icu_testdata::get_provider();
//!
//! let payload =
//!     maps::get_script(&provider)
//!         .expect("The data should be valid");
//! let data_struct = payload.get();
//! let script = &data_struct.code_point_trie;
//!
//! assert_eq!(script.get('🎃' as u32), Script::Common);  // U+1F383 JACK-O-LANTERN
//! assert_eq!(script.get('木' as u32), Script::Han);  // U+6728
//! ```
//!
//! [`ICU4X`]: ../icu/index.html
//! [Unicode Properties]: https://unicode-org.github.io/icu/userguide/strings/properties.html
//! [`UnicodeSet`]: icu_uniset::UnicodeSet
//! [`CodePointTrie`]: icu_codepointtrie::CodePointTrie
//! [`sets`]: crate::sets

#![cfg_attr(not(any(test, feature = "std")), no_std)]

mod error;
pub mod maps;
mod props;
pub mod provider;
pub mod script;
pub mod sets;
mod trievalue;
mod ule;

pub use props::*;
