## Why

기존 english-phonics 프로젝트의 검증된 학습 구조(알파벳/어휘/회화/퀴즈/놀이)를 한글 파닉스 학습에 적용하여, 한글을 배우는 아이들을 위한 체계적인 파닉스 학습 앱을 만든다. 동일한 기술 스택(React + TypeScript + Vite + Tailwind CSS + PWA)과 UX 패턴을 활용하되, 새로운 독립 프로젝트로 구성한다.

## What Changes

- **새 프로젝트 생성**: `hangul-phonics` 디렉토리에 React + TypeScript + Vite + Tailwind CSS 프로젝트 스캐폴딩
- **한글 자모 학습**: ㄱ-ㅎ 자음 14개, ㅏ-ㅣ 모음 10개 플래시카드 학습 (음성 TTS + 예시 단어)
- **한글 어휘 학습**: 카테고리별 한글 단어 플래시카드 (음식, 동물, 탈것, 신체, 자연 등)
- **문장 학습**: 간단한 한글 문장을 순차적으로 학습하는 대화형 모드
- **퀴즈 모드 (4종)**:
  - 듣고 고르기: TTS 음성 듣고 맞는 단어/그림 선택
  - 그림 보고 단어 고르기: 이모지 보고 한글 단어 선택
  - 첫소리 맞추기: 단어의 첫 자음 맞추기
  - 받아쓰기: 빈칸에 빠진 글자 채우기
- **놀이 모드 (2종)**:
  - 매칭 게임: 자음↔모음, 단어↔그림 짝 맞추기 카드 뒤집기
  - 분류 놀이: 드래그 앤 드롭으로 카테고리별 단어 분류
- **PWA 지원**: 오프라인 사용 가능, 모바일 최적화
- **GitHub Pages 배포**: CI/CD 파이프라인 구성

## Capabilities

### New Capabilities
- `project-setup`: 프로젝트 스캐폴딩 (React + Vite + Tailwind + TypeScript + PWA 설정)
- `hangul-jamo-learning`: 한글 자음/모음 플래시카드 학습 (TTS 음성, 예시 단어, 진행 바)
- `vocabulary-learning`: 카테고리별 한글 어휘 플래시카드 학습 (이모지, TTS 음성)
- `sentence-learning`: 한글 문장 순차 학습 모드 (대화형 UI, 한글 문장 표시)
- `quiz-system`: 4종 퀴즈 (듣고 고르기, 그림→단어, 첫소리, 받아쓰기) + 결과 화면
- `play-system`: 2종 놀이 (매칭 게임, 드래그앤드롭 분류)
- `audio-system`: TTS 음성 재생, 효과음 합성, 반복 재생 관리
- `data-management`: 자모/어휘/문장 JSON 데이터 구조 및 로딩
- `user-profile`: 닉네임 입력, localStorage 저장, 사용자 프로필 표시
- `navigation-ui`: 메인 카테고리 선택, 서브 카테고리, 라우팅 구조

### Modified Capabilities
(없음 - 새 프로젝트)

## Impact

- **새 프로젝트 디렉토리**: `d:\axgate\study\hangul-phonics` (신규 생성)
- **기술 스택**: React 18, TypeScript, Vite, Tailwind CSS, React Router, Lucide Icons, Vite PWA Plugin
- **데이터**: 한글 자모 24개 + 카테고리별 어휘 데이터 (JSON) 신규 작성
- **음성**: Web Speech API (Korean TTS) 활용, 효과음은 Web Audio API 합성
- **배포**: GitHub Pages + GitHub Actions CI/CD
