## ADDED Requirements

### Requirement: Project scaffolding with Vite and React
The system SHALL be scaffolded as a React 18 + TypeScript project using Vite as the build tool, with Tailwind CSS for styling, React Router v6 for navigation, and Lucide React for icons.

#### Scenario: Project initialization
- **WHEN** the project is created
- **THEN** it SHALL include package.json with React 18, TypeScript, Vite, Tailwind CSS, React Router DOM, Lucide React, and Vite PWA Plugin as dependencies

#### Scenario: Development server
- **WHEN** running `npm run dev`
- **THEN** the application SHALL start on a local development server with hot module replacement

### Requirement: Tailwind CSS configuration with custom theme
The system SHALL configure Tailwind CSS with a custom color scheme (blue/red Korean-themed), and custom animations including bounce-in, wiggle, pop, shake, float, confetti-fall, and star-burst.

#### Scenario: Custom animations available
- **WHEN** Tailwind CSS is configured
- **THEN** custom animation utilities (animate-bounce-in, animate-wiggle, animate-pop, animate-shake, animate-float) SHALL be available in class names

### Requirement: PWA support
The system SHALL be configured as a Progressive Web App with offline caching via Workbox service worker.

#### Scenario: PWA installable
- **WHEN** a user visits the app on a mobile device
- **THEN** the browser SHALL offer to install the app as a PWA with an app icon and name "한글 파닉스"

### Requirement: GitHub Pages deployment
The system SHALL include a GitHub Actions workflow for automatic deployment to GitHub Pages on push to main branch.

#### Scenario: Auto-deploy on push
- **WHEN** code is pushed to the main branch
- **THEN** GitHub Actions SHALL build the project and deploy to GitHub Pages with correct base path
