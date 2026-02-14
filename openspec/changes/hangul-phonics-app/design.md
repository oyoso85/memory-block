## Context

기존 english-phonics 프로젝트는 React 18 + TypeScript + Vite + Tailwind CSS 기반의 아동용 영어 파닉스 학습 앱이다. 동일한 아키텍처와 UX 패턴을 활용하여 한글 파닉스 학습 앱을 새로운 독립 프로젝트로 만든다. english-phonics의 컴포넌트 구조, 오디오 시스템, 퀴즈/놀이 로직을 참조하되, 한글의 특성(자음+모음 조합, 받침 등)에 맞게 조정한다.

## Goals / Non-Goals

**Goals:**
- english-phonics와 동일한 5가지 학습 모드(자모학습/어휘/문장/퀴즈/놀이) 구현
- 한글 자음 14개(ㄱ-ㅎ), 모음 10개(ㅏ-ㅣ) 학습 지원
- Korean TTS(Web Speech API) 기반 음성 제공
- 모바일 반응형 + PWA 오프라인 지원
- GitHub Pages 배포

**Non-Goals:**
- 쌍자음(ㄲ, ㄸ 등), 복합모음(ㅘ, ㅝ 등) 학습 (v2에서 추가)
- 백엔드 서버 연동 또는 사용자 계정 시스템
- 학습 진도 통계 대시보드
- 다국어(영어/중국어 등) 동시 지원

## Decisions

### 1. 새 프로젝트로 분리 (vs 기존 프로젝트 확장)
- **결정**: `d:\axgate\study\hangul-phonics`에 독립 프로젝트 생성
- **이유**: 데이터 구조, 컴포넌트 로직, 라우팅이 모두 다르므로 분리가 깔끔함. english-phonics의 구조를 참조하되 코드를 복사하지 않고 새로 작성

### 2. 음성 시스템: Web Speech API (Korean TTS)
- **결정**: MP3 파일 없이 Web Speech API의 한국어 TTS만 사용
- **이유**: 한글 TTS 품질이 양호하고, 별도 음성 파일 관리 불필요. 효과음(정답/오답)은 Web Audio API 합성
- **대안**: Google Cloud TTS → 비용 발생, 오프라인 미지원

### 3. 한글 자모 데이터 구조
- **결정**: 자음/모음을 분리된 배열로 관리하되, 공통 인터페이스 사용
- **구조**:
  ```typescript
  interface Jamo {
    id: string;          // "ga", "na", ...
    letter: string;      // "ㄱ", "ㄴ", ...
    type: "consonant" | "vowel";
    name: string;        // "기역", "니은", ...
    exampleWord: string; // "가방", "나비", ...
    emoji: string;       // "🎒", "🦋", ...
  }
  ```

### 4. 라우팅 구조
- **결정**: React Router v6, english-phonics와 동일한 패턴
- **구조**:
  ```
  /                     → 닉네임 입력
  /categories           → 메인 학습 모드 선택
  /jamo                 → 자음/모음 선택 (자음/모음 탭)
  /jamo/learning        → 자모 플래시카드 학습
  /vocabulary           → 어휘 카테고리 선택
  /vocabulary/words     → 단어 세트 선택
  /vocabulary/learning  → 어휘 플래시카드 학습
  /sentences            → 문장 세트 선택
  /sentences/learning   → 문장 학습
  /quiz                 → 퀴즈 카테고리 선택
  /quiz/types           → 퀴즈 유형 선택
  /quiz/listen          → 듣고 고르기
  /quiz/image-to-word   → 그림→단어
  /quiz/first-sound     → 첫소리 맞추기
  /quiz/spelling        → 받아쓰기
  /quiz/result          → 퀴즈 결과
  /play                 → 놀이 카테고리 선택
  /play/types           → 놀이 유형 선택
  /play/matching        → 매칭 게임
  /play/drag-and-drop   → 분류 놀이
  ```

### 5. 스타일 시스템
- **결정**: Tailwind CSS + english-phonics와 유사한 커스텀 애니메이션
- **색상 테마**: 한글 앱에 맞게 파란색/빨간색 계열 (태극기 컬러) 기본 톤 사용
- **애니메이션**: bounce-in, wiggle, pop, shake, float 등 동일 패턴 재사용

## Risks / Trade-offs

- **[한국어 TTS 품질 편차]** → 브라우저/OS별 TTS 엔진 차이 존재. Chrome 기준으로 개발하고, TTS 미지원 시 텍스트만 표시하는 폴백 제공
- **[한글 조합 복잡성]** → 자음+모음 조합 로직은 v1에서는 기본 자모만 다루고, 조합 학습은 v2로 연기
- **[오프라인 TTS]** → PWA 오프라인 시 TTS가 동작하지 않을 수 있음. 오프라인에서는 텍스트 기반 학습만 지원
