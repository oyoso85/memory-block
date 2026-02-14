## ADDED Requirements

### Requirement: Quiz category selection
The system SHALL allow the user to select a quiz subject: 자음, 모음, or any vocabulary category.

#### Scenario: Subject selection
- **WHEN** the user navigates to quiz mode
- **THEN** quiz subject cards SHALL be displayed (자음, 모음, 음식, 동물, 탈것, 신체, 자연)

### Requirement: Quiz type selection
The system SHALL offer 4 quiz types: 듣고 고르기, 그림 보고 단어 고르기, 첫소리 맞추기, 받아쓰기.

#### Scenario: Type selection display
- **WHEN** the user selects a quiz subject
- **THEN** 4 quiz type cards SHALL be displayed with icons and descriptions

### Requirement: Listen and choose quiz (듣고 고르기)
The system SHALL play TTS audio for a word and present 3 multiple-choice options (emojis or text). The user SHALL select the matching answer.

#### Scenario: Correct answer
- **WHEN** the user selects the correct answer
- **THEN** the answer SHALL highlight green, a success sound SHALL play, and the quiz SHALL auto-advance after 1.2 seconds

#### Scenario: Wrong answer
- **WHEN** the user selects the wrong answer
- **THEN** the selected answer SHALL highlight red, the correct answer SHALL highlight green, an error sound SHALL play, and the quiz SHALL auto-advance after 1.2 seconds

### Requirement: Image to word quiz (그림 보고 단어 고르기)
The system SHALL display an emoji/image and present 3 Korean word options. The user SHALL select the correct word.

#### Scenario: Question display
- **WHEN** a question is shown
- **THEN** a large emoji SHALL be displayed with 3 Korean word choices below

### Requirement: First sound quiz (첫소리 맞추기)
The system SHALL display a Korean word and present 3 consonant options. The user SHALL identify the first consonant of the word.

#### Scenario: First consonant identification
- **WHEN** the word "사과" is displayed
- **THEN** 3 consonant options SHALL be shown, with "ㅅ" as the correct answer

### Requirement: Spelling quiz (받아쓰기)
The system SHALL display a word with one letter replaced by a blank (___) and present 3 letter options. The user SHALL fill in the missing letter.

#### Scenario: Fill in the blank
- **WHEN** a spelling question is displayed (e.g., "사_" for 사과)
- **THEN** 3 letter options SHALL be shown, with "과" as the correct answer

### Requirement: Quiz session with 5 questions
Each quiz session SHALL consist of 5 randomly generated questions from the selected subject.

#### Scenario: Quiz flow
- **WHEN** the user starts a quiz
- **THEN** 5 questions SHALL be presented sequentially with a progress indicator (e.g., 1/5)

### Requirement: Quiz result screen
The system SHALL display a result screen after completing all 5 questions, showing the score and options to retry or return home.

#### Scenario: Perfect score
- **WHEN** the user answers all 5 questions correctly
- **THEN** a celebratory animation SHALL play and the score "5/5" SHALL be displayed with a "다시 하기" and "홈으로" button
