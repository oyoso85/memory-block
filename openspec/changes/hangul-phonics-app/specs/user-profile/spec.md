## ADDED Requirements

### Requirement: Nickname input screen
The system SHALL display a nickname input screen on first visit, prompting the user to enter their name before accessing learning content.

#### Scenario: First visit
- **WHEN** the user opens the app for the first time (no stored nickname)
- **THEN** a nickname input screen SHALL be displayed with a text input and "시작하기" button

#### Scenario: Returning user
- **WHEN** the user opens the app with a previously stored nickname
- **THEN** the app SHALL skip the nickname input and go directly to the category selection screen

### Requirement: User profile persistence
The system SHALL store the user's nickname in localStorage and display it in the app header.

#### Scenario: Profile storage
- **WHEN** the user enters a nickname and taps "시작하기"
- **THEN** the nickname SHALL be saved to localStorage and the user SHALL be navigated to the category selection

#### Scenario: Profile display
- **WHEN** the user is on any screen after login
- **THEN** the user's nickname SHALL be displayed in the header area
