## 1. 프로젝트 초기 설정

- [x] 1.1 Vite + React + TypeScript 프로젝트 생성 (`d:\axgate\study\hangul-phonics`)
- [x] 1.2 Tailwind CSS, PostCSS 설치 및 설정 (커스텀 색상 테마, 애니메이션)
- [x] 1.3 React Router DOM, Lucide React, Vite PWA Plugin 설치
- [x] 1.4 TypeScript 타입 정의 파일 작성 (Jamo, VocabularyWord, Sentence, QuizQuestion 등)
- [x] 1.5 Vite 설정 (PWA manifest, GitHub Pages base path)
- [x] 1.6 GitHub Actions 배포 워크플로우 작성

## 2. 데이터 파일 작성

- [x] 2.1 jamo.json 작성 (자음 14개 + 모음 10개, 각각 name/exampleWord/emoji 포함)
- [x] 2.2 vocabulary.json 작성 (5개 카테고리 × 10-15개 단어)
- [x] 2.3 sentences.json 작성 (3개 이상 문장 세트, 각 4-6문장)
- [x] 2.4 데이터 로딩 유틸리티 함수 작성 (loadJamo, loadVocabulary, loadSentences)

## 3. 공통 인프라 (Context, Hooks, Utils)

- [x] 3.1 AppContext 생성 (user, selectedCategory, selectedSubject 상태 관리)
- [x] 3.2 useAudioPlayer 커스텀 훅 구현 (Korean TTS, 반복 재생, playbackState 관리)
- [x] 3.3 오디오 유틸리티 함수 작성 (speakKorean, wait, playWithRepeat)
- [x] 3.4 효과음 합성 함수 작성 (정답음, 오답음, 완료음 - Web Audio API)
- [x] 3.5 퀴즈 문제 생성 유틸리티 작성 (generateQuizQuestions, generateSpellingQuestions, generateFirstSoundQuestions)
- [x] 3.6 셔플 유틸리티 함수 작성
- [x] 3.7 localStorage 유틸리티 함수 작성 (사용자 프로필 저장/로딩)

## 4. 공통 UI 컴포넌트

- [x] 4.1 NicknameInput 컴포넌트 (닉네임 입력 화면)
- [x] 4.2 UserProfile 컴포넌트 (헤더에 닉네임 표시)
- [x] 4.3 CategorySelection 컴포넌트 (5가지 학습 모드 메인 화면)
- [x] 4.4 AudioGesturePrompt 컴포넌트 (브라우저 오토플레이 제한 안내)
- [x] 4.5 AudioIndicator 컴포넌트 (재생 상태 표시)
- [x] 4.6 LoadingSpinner 컴포넌트
- [x] 4.7 ErrorMessage 컴포넌트

## 5. 자모 학습 모드

- [x] 5.1 JamoCards 컴포넌트 (자음/모음 탭 + 카드 목록)
- [x] 5.2 JamoLearning 컴포넌트 (플래시카드: 글자, 이름, 예시 단어, TTS 재생, 진행 바)

## 6. 어휘 학습 모드

- [x] 6.1 VocabularyCategories 컴포넌트 (5개 카테고리 카드)
- [x] 6.2 VocabularyWordCards 컴포넌트 (카테고리 내 단어 카드 목록)
- [x] 6.3 VocabularyLearning 컴포넌트 (어휘 플래시카드: 이모지, 단어, TTS 재생)

## 7. 문장 학습 모드

- [x] 7.1 SentenceCards 컴포넌트 (문장 세트 선택)
- [x] 7.2 SentenceLearning 컴포넌트 (채팅 버블 UI, 순차 표시, TTS 재생)

## 8. 퀴즈 모드

- [x] 8.1 QuizCategories 컴포넌트 (퀴즈 과목 선택)
- [x] 8.2 QuizTypes 컴포넌트 (4종 퀴즈 유형 선택)
- [x] 8.3 QuizListenAndChoose 컴포넌트 (듣고 고르기 퀴즈)
- [x] 8.4 QuizImageToWord 컴포넌트 (그림 보고 단어 고르기 퀴즈)
- [x] 8.5 QuizFirstSound 컴포넌트 (첫소리 맞추기 퀴즈)
- [x] 8.6 QuizSpelling 컴포넌트 (받아쓰기 퀴즈)
- [x] 8.7 QuizResult 컴포넌트 (점수 표시, 다시 하기/홈으로 버튼)

## 9. 놀이 모드

- [x] 9.1 PlayCategories 컴포넌트 (놀이 과목 선택)
- [x] 9.2 PlayTypes 컴포넌트 (2종 게임 유형 선택)
- [x] 9.3 PlayMatchingGame 컴포넌트 (카드 뒤집기 매칭 게임, 6쌍 12장)
- [x] 9.4 PlayDragAndDrop 컴포넌트 (드래그앤드롭 분류 놀이, 터치 지원)

## 10. 라우팅 및 앱 통합

- [x] 10.1 routes.tsx 작성 (전체 라우트 정의)
- [x] 10.2 App.tsx 작성 (루트 컴포넌트, AppContext Provider, Router 연결)
- [x] 10.3 index.css 작성 (Tailwind 지시문 + 커스텀 스타일)
- [x] 10.4 main.tsx 작성 (React 엔트리 포인트)
- [x] 10.5 index.html 및 404.html 작성

## 11. 빌드 및 배포 검증

- [x] 11.1 npm run build 성공 확인
- [ ] 11.2 npm run dev로 전체 기능 동작 확인
- [ ] 11.3 모바일 반응형 레이아웃 확인
