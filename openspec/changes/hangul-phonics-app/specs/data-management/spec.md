## ADDED Requirements

### Requirement: Jamo data structure
The system SHALL store jamo data in a JSON file (jamo.json) with consonants and vowels arrays, each entry containing: id, letter, type, name, exampleWord, and emoji.

#### Scenario: Consonant data
- **WHEN** jamo.json is loaded
- **THEN** it SHALL contain 14 consonant entries (ㄱ기역 through ㅎ히읗) with example words and emojis

#### Scenario: Vowel data
- **WHEN** jamo.json is loaded
- **THEN** it SHALL contain 10 vowel entries (ㅏ through ㅣ) with example words and emojis

### Requirement: Vocabulary data structure
The system SHALL store vocabulary data in a JSON file (vocabulary.json) organized by categories, each word containing: id, spelling, emoji.

#### Scenario: Vocabulary categories
- **WHEN** vocabulary.json is loaded
- **THEN** it SHALL contain 5 categories (음식, 동물, 탈것, 신체, 자연) with 10-15 words each

### Requirement: Sentence data structure
The system SHALL store sentence data in a JSON file (sentences.json) with sentence sets, each containing: id, title, emoji, sentences array with text fields.

#### Scenario: Sentence set data
- **WHEN** sentences.json is loaded
- **THEN** it SHALL contain at least 3 sentence sets (e.g., 인사하기, 자기소개, 가족 이야기) with 4-6 sentences each

### Requirement: Data loading utilities
The system SHALL provide utility functions to load and transform jamo, vocabulary, and sentence data from JSON files.

#### Scenario: Data loading
- **WHEN** loadJamo() is called
- **THEN** it SHALL return typed Jamo[] array ready for component consumption
