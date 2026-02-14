## MODIFIED Requirements

### Requirement: Home screen buttons
홈 화면은 사칙연산 선택 버튼 4개, "점수 이력" 버튼, 그리고 "계산기" 버튼으로 구성된다. "계산기" 버튼은 "점수 이력" 버튼 아래에 배치된다.

#### Scenario: Home screen displays calculator button
- **WHEN** 홈 화면이 표시된다
- **THEN** 더하기, 빼기, 곱하기, 나누기 버튼 아래에 "점수 이력" 버튼이 있고, 그 아래에 "계산기" 버튼이 표시된다

#### Scenario: Navigate to calculator
- **WHEN** 사용자가 "계산기" 버튼을 클릭한다
- **THEN** 계산기 화면(screen-calculator)으로 전환된다
