### Requirement: Calculator screen layout
계산기 화면(screen-calculator)은 디스플레이 영역과 4×4 버튼 그리드로 구성된다.
디스플레이는 입력 중인 식과 결과를 표시하며, 버튼은 0~9 숫자, 사칙연산(+, −, ×, ÷), =, C로 구성된다.

#### Scenario: Calculator screen displays correctly
- **WHEN** 사용자가 홈 화면에서 "계산기" 버튼을 클릭한다
- **THEN** 계산기 화면이 표시되며 디스플레이에 "0"이 보이고, 4×4 버튼 그리드가 보인다

#### Scenario: Calculator button layout
- **WHEN** 계산기 화면이 표시된다
- **THEN** 버튼은 [7][8][9][+] / [4][5][6][−] / [1][2][3][×] / [C][0][=][÷] 순서로 배치된다

### Requirement: Number input
사용자가 숫자 버튼(0~9)을 눌러 숫자를 입력할 수 있다. 입력 가능한 숫자는 최대 7자리로 제한한다.

#### Scenario: Single digit input
- **WHEN** 사용자가 "5" 버튼을 누른다
- **THEN** 디스플레이에 "5"가 표시된다

#### Scenario: Multi-digit input
- **WHEN** 사용자가 "1", "2", "3"을 순서대로 누른다
- **THEN** 디스플레이에 "123"이 표시된다

#### Scenario: Maximum digit limit
- **WHEN** 사용자가 이미 7자리 숫자를 입력한 상태에서 추가 숫자를 누른다
- **THEN** 입력이 무시되고 디스플레이는 변경되지 않는다

#### Scenario: Leading zero prevention
- **WHEN** 디스플레이에 "0"이 표시된 상태에서 "0"을 누른다
- **THEN** 디스플레이는 "0"을 유지한다

#### Scenario: Replace leading zero
- **WHEN** 디스플레이에 "0"이 표시된 상태에서 "5"를 누른다
- **THEN** 디스플레이에 "5"가 표시된다 (선행 0이 대체됨)

### Requirement: Operator input
사용자가 사칙연산 버튼(+, −, ×, ÷)을 눌러 연산자를 선택할 수 있다.

#### Scenario: Select operator after number
- **WHEN** 사용자가 "12"를 입력한 후 "+" 버튼을 누른다
- **THEN** 첫 번째 피연산자(12)와 연산자(+)가 저장되고, 디스플레이는 다음 숫자 입력을 대기한다

#### Scenario: Change operator
- **WHEN** 사용자가 연산자를 선택한 직후 다른 연산자를 누른다
- **THEN** 연산자가 새로 선택한 것으로 변경된다

### Requirement: Calculate result
사용자가 "=" 버튼을 누르면 입력된 식의 결과를 계산하여 표시한다. 정수 연산만 지원한다.

#### Scenario: Addition
- **WHEN** 사용자가 "12 + 34 =" 을 입력한다
- **THEN** 디스플레이에 "46"이 표시된다

#### Scenario: Subtraction
- **WHEN** 사용자가 "50 − 23 =" 을 입력한다
- **THEN** 디스플레이에 "27"이 표시된다

#### Scenario: Multiplication
- **WHEN** 사용자가 "6 × 7 =" 을 입력한다
- **THEN** 디스플레이에 "42"가 표시된다

#### Scenario: Division with no remainder
- **WHEN** 사용자가 "84 ÷ 7 =" 을 입력한다
- **THEN** 디스플레이에 "12"가 표시된다

#### Scenario: Division with remainder
- **WHEN** 사용자가 "10 ÷ 3 =" 을 입력한다
- **THEN** 디스플레이에 "3"이 표시되고, 별도 영역에 "나머지 1"이 표시된다

#### Scenario: Division by zero
- **WHEN** 사용자가 "5 ÷ 0 =" 을 입력한다
- **THEN** 디스플레이에 "0으로 나눌 수 없어요"가 표시된다

#### Scenario: Result exceeds range
- **WHEN** 계산 결과가 9999999를 초과한다
- **THEN** 디스플레이에 "너무 커요!"가 표시된다

#### Scenario: Result is negative
- **WHEN** 계산 결과가 0 미만이다 (예: 3 − 10 = -7)
- **THEN** 디스플레이에 "0보다 작아요!"가 표시된다

### Requirement: Clear function
사용자가 "C" 버튼을 누르면 계산기 상태가 초기화된다.

#### Scenario: Clear resets everything
- **WHEN** 사용자가 "C" 버튼을 누른다
- **THEN** 디스플레이는 "0"으로 초기화되고, 저장된 피연산자와 연산자가 모두 삭제된다

### Requirement: Expression display
디스플레이 상단에 현재 입력 중인 식을 보여준다 (예: "12 + ").

#### Scenario: Show expression while entering
- **WHEN** 사용자가 "12"를 입력하고 "+"를 누른 후 "3"을 입력 중이다
- **THEN** 디스플레이 상단에 "12 +"가 표시되고, 메인 영역에 "3"이 표시된다

#### Scenario: Show complete expression after result
- **WHEN** 사용자가 "12 + 3 ="을 입력한다
- **THEN** 디스플레이 상단에 "12 + 3 ="가 표시되고, 메인 영역에 "15"가 표시된다

### Requirement: Sound integration
계산기는 기존 사운드 시스템과 연동한다.

#### Scenario: Button click sound
- **WHEN** 사용자가 계산기의 아무 버튼을 누른다
- **THEN** 기존 Sound.click() 효과음이 재생된다

#### Scenario: Result sound
- **WHEN** "=" 버튼을 눌러 결과가 표시된다
- **THEN** Sound.correct() 효과음이 재생된다

### Requirement: Result TTS
계산 결과가 표시되면 TTS로 결과 숫자를 읽어준다.

#### Scenario: Read result number
- **WHEN** "=" 버튼을 눌러 정상 결과가 표시된다
- **THEN** 결과 숫자를 한국어 TTS로 읽어준다

#### Scenario: Read result with remainder
- **WHEN** 나머지가 있는 나눗셈 결과가 표시된다
- **THEN** "N, 나머지 M" 형식으로 TTS가 읽어준다

#### Scenario: Read error message
- **WHEN** 에러 메시지(0으로 나눌 수 없어요, 너무 커요!, 0보다 작아요!)가 표시된다
- **THEN** 에러 메시지를 TTS로 읽어준다

### Requirement: Home navigation
계산기 화면에서 홈으로 돌아갈 수 있다.

#### Scenario: Return to home
- **WHEN** 사용자가 계산기 화면의 "홈으로" 버튼을 누른다
- **THEN** 홈 화면으로 전환된다
