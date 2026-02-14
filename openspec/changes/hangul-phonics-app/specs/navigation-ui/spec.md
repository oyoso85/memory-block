## ADDED Requirements

### Requirement: Main category selection screen
The system SHALL display 5 learning mode cards on the main screen: 자모 학습 (🔤), 어휘 학습 (📚), 문장 학습 (💬), 퀴즈 (🧩), 놀이 (🎮).

#### Scenario: Category display
- **WHEN** the user is on the category selection screen
- **THEN** 5 colored cards SHALL be displayed in a grid layout with emoji icons, Korean titles, and bounce-in animations

### Requirement: React Router navigation
The system SHALL use React Router v6 for client-side routing with all routes defined in a central routes configuration.

#### Scenario: Route navigation
- **WHEN** the user taps a category card
- **THEN** the app SHALL navigate to the corresponding route without page reload

#### Scenario: Back navigation
- **WHEN** the user taps the back button (뒤로) on any sub-screen
- **THEN** the app SHALL navigate to the parent screen

### Requirement: Responsive layout
The system SHALL use a mobile-first responsive layout with max-width container, 2-column grid on mobile, and 3-column grid on tablet/desktop.

#### Scenario: Mobile layout
- **WHEN** the viewport width is less than 640px
- **THEN** card grids SHALL display in 2 columns with touch-friendly button sizes (min 44px tap target)

#### Scenario: Desktop layout
- **WHEN** the viewport width is 640px or wider
- **THEN** card grids SHALL display in 3 columns

### Requirement: App context for global state
The system SHALL provide an AppContext (React Context) for managing global state including current user, selected category, and selected subject.

#### Scenario: Context state management
- **WHEN** the user selects a vocabulary category
- **THEN** the selected category SHALL be stored in AppContext and accessible by child components
