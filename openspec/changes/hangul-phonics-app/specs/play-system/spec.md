## ADDED Requirements

### Requirement: Play category selection
The system SHALL allow the user to select a play subject: 자음, 모음, or any vocabulary category.

#### Scenario: Subject selection
- **WHEN** the user navigates to play mode
- **THEN** play subject cards SHALL be displayed

### Requirement: Play type selection
The system SHALL offer 2 game types: 매칭 게임 (Matching Game) and 분류 놀이 (Drag & Drop).

#### Scenario: Game type display
- **WHEN** the user selects a play subject
- **THEN** 2 game type cards SHALL be displayed with icons and descriptions

### Requirement: Matching game
The system SHALL display 12 face-down cards (6 pairs). For jamo subjects, pairs SHALL be consonant↔name (e.g., ㄱ↔기역). For vocabulary, pairs SHALL be emoji↔word (e.g., 🍎↔사과).

#### Scenario: Card flip and match
- **WHEN** the user flips two matching cards
- **THEN** both cards SHALL remain face-up (green highlight), a success sound SHALL play, and TTS SHALL pronounce the matched item

#### Scenario: Card flip and mismatch
- **WHEN** the user flips two non-matching cards
- **THEN** both cards SHALL flip back face-down after 1 second

#### Scenario: Game completion
- **WHEN** all 6 pairs are matched
- **THEN** a completion message SHALL display with total attempts count and a "다시 하기" button

### Requirement: Drag and drop classification game
The system SHALL present 8 word cards from 2 randomly selected categories and 2 labeled drop zones. The user SHALL drag each card to the correct category zone.

#### Scenario: Correct classification
- **WHEN** the user drags a card to the correct category zone
- **THEN** the card SHALL stay in the zone, a success sound SHALL play, and the sorted count SHALL increment

#### Scenario: Wrong classification
- **WHEN** the user drags a card to the wrong category zone
- **THEN** the card SHALL bounce back to its original position and an error sound SHALL play

#### Scenario: Touch support
- **WHEN** the user plays on a mobile device
- **THEN** drag and drop SHALL work with touch events (touchstart, touchmove, touchend)

#### Scenario: Game completion
- **WHEN** all 8 cards are correctly classified
- **THEN** a completion message SHALL display with a "다시 하기" button
