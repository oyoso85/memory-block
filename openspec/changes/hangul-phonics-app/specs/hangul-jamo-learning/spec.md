## ADDED Requirements

### Requirement: Jamo selection screen with consonant and vowel tabs
The system SHALL display a jamo selection screen with two tabs: 자음 (consonants, 14 letters: ㄱ-ㅎ) and 모음 (vowels, 10 letters: ㅏ-ㅣ). Each letter SHALL be displayed as a card with the letter and its name.

#### Scenario: Consonant tab display
- **WHEN** the user navigates to the jamo selection screen
- **THEN** the consonant tab SHALL be active by default, showing 14 consonant cards (ㄱ기역, ㄴ니은, ㄷ디귿, ㄹ리을, ㅁ미음, ㅂ비읍, ㅅ시옷, ㅇ이응, ㅈ지읒, ㅊ치읓, ㅋ키읔, ㅌ티읕, ㅍ피읖, ㅎ히읗)

#### Scenario: Vowel tab display
- **WHEN** the user taps the 모음 tab
- **THEN** 10 vowel cards SHALL be displayed (ㅏ, ㅑ, ㅓ, ㅕ, ㅗ, ㅛ, ㅜ, ㅠ, ㅡ, ㅣ)

### Requirement: Jamo flashcard learning
The system SHALL display a flashcard for each jamo showing: the letter (large), its name, an example word with emoji, and play TTS audio automatically.

#### Scenario: Flashcard display and audio
- **WHEN** the user selects a consonant card (e.g., ㄱ)
- **THEN** a flashcard SHALL show: "ㄱ" (large), "기역" (name), "가방 🎒" (example), and TTS SHALL pronounce "기역, 가방"

#### Scenario: Navigation between jamo
- **WHEN** the user taps the next/previous arrow on a flashcard
- **THEN** the next/previous jamo flashcard SHALL display with its audio playing automatically

#### Scenario: Progress tracking
- **WHEN** the user is on a flashcard
- **THEN** a progress bar SHALL show current position (e.g., 3/14 for consonants)

### Requirement: TTS audio repetition for jamo
The system SHALL play TTS audio with 3 repetitions and a 2-second gap between repetitions when a jamo flashcard is displayed.

#### Scenario: Audio repetition
- **WHEN** a jamo flashcard is displayed
- **THEN** TTS SHALL pronounce the jamo name and example word, repeating 3 times with 2-second intervals
