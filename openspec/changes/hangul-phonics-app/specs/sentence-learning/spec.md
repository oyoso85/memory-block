## ADDED Requirements

### Requirement: Sentence set selection
The system SHALL display sentence learning sets as cards. Each set SHALL have a title and description (e.g., "인사하기", "자기소개", "가족 이야기").

#### Scenario: Sentence set list
- **WHEN** the user navigates to sentence learning
- **THEN** sentence set cards SHALL be displayed with titles, descriptions, and emoji icons

### Requirement: Sequential sentence learning
The system SHALL display sentences one at a time in a chat-bubble UI, with Korean text prominently shown and TTS audio played automatically.

#### Scenario: Sentence display
- **WHEN** the user starts a sentence set
- **THEN** the first sentence SHALL appear in a chat bubble with TTS pronunciation

#### Scenario: Progressive reveal
- **WHEN** the user taps "다음" or the audio finishes
- **THEN** the next sentence SHALL appear below the previous one, building up the conversation

#### Scenario: Sentence audio
- **WHEN** each sentence is revealed
- **THEN** Korean TTS SHALL pronounce the sentence automatically
