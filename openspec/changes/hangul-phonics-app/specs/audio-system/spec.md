## ADDED Requirements

### Requirement: Korean TTS pronunciation
The system SHALL use the Web Speech API with Korean language (ko-KR) to pronounce jamo names, vocabulary words, and sentences.

#### Scenario: TTS playback
- **WHEN** a flashcard or quiz question requires audio
- **THEN** the system SHALL call speechSynthesis.speak() with lang="ko-KR" and the target text

#### Scenario: TTS unavailable fallback
- **WHEN** Korean TTS is not available on the device
- **THEN** the system SHALL display text only without audio, and hide audio indicators

### Requirement: Audio repetition with useAudioPlayer hook
The system SHALL provide a useAudioPlayer custom hook that manages TTS playback with configurable repetitions and gap intervals.

#### Scenario: Repetition playback
- **WHEN** useAudioPlayer is called with repetitions=3 and gap=2000ms
- **THEN** the TTS SHALL play 3 times with 2-second pauses between each play

#### Scenario: Playback state tracking
- **WHEN** audio is playing
- **THEN** the hook SHALL expose playbackState ("playing" | "waiting" | "completed" | "idle") and currentRepetition count

### Requirement: Sound effect synthesis
The system SHALL synthesize correct/wrong/complete sound effects using the Web Audio API (no MP3 files).

#### Scenario: Correct answer sound
- **WHEN** the user answers correctly
- **THEN** an ascending tone sequence (C5→E5→G5) SHALL play

#### Scenario: Wrong answer sound
- **WHEN** the user answers incorrectly
- **THEN** a descending tone sequence (Eb4→Db4) SHALL play

### Requirement: Audio gesture prompt
The system SHALL detect browser autoplay restrictions and prompt the user to tap to enable audio.

#### Scenario: Autoplay blocked
- **WHEN** the browser blocks autoplay
- **THEN** a "소리를 들으려면 화면을 터치하세요" overlay SHALL appear and disappear after user interaction
