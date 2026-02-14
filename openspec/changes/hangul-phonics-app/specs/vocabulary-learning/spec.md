## ADDED Requirements

### Requirement: Vocabulary category selection
The system SHALL display vocabulary categories as colored cards. Categories SHALL include: 음식 (🍎 Food), 동물 (🐶 Animals), 탈것 (🚗 Vehicles), 신체 (🖐️ Body Parts), 자연 (🌳 Nature).

#### Scenario: Category list display
- **WHEN** the user navigates to vocabulary learning
- **THEN** 5 category cards SHALL be displayed with emoji icons, Korean names, and distinct colors

### Requirement: Word card selection within category
The system SHALL display word cards within a selected category, showing each word's emoji and Korean spelling.

#### Scenario: Word list display
- **WHEN** the user selects the 동물 category
- **THEN** word cards for that category SHALL be displayed (e.g., 강아지 🐶, 고양이 🐱, 토끼 🐰, etc.)

### Requirement: Vocabulary flashcard learning
The system SHALL display a flashcard for each vocabulary word showing: the emoji (large), Korean word spelling, and automatically play TTS pronunciation.

#### Scenario: Flashcard with TTS
- **WHEN** a vocabulary flashcard is displayed (e.g., 사과)
- **THEN** the flashcard SHALL show "🍎" (large emoji), "사과" (Korean text), and TTS SHALL pronounce "사과"

#### Scenario: Navigation and progress
- **WHEN** the user is learning vocabulary flashcards
- **THEN** next/previous arrows and a progress bar SHALL be displayed

### Requirement: Vocabulary TTS repetition
The system SHALL play TTS audio with 3 repetitions for each vocabulary word.

#### Scenario: Repetition playback
- **WHEN** a vocabulary flashcard is shown
- **THEN** TTS SHALL pronounce the word 3 times with 2-second intervals between repetitions
