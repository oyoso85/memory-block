# 기술 설계

## 기술 스택

| 항목 | 선택 | 이유 |
|------|------|------|
| 빌드 도구 | Vite 5 | 빠른 HMR, 간편한 설정 |
| 언어 | 바닐라 JavaScript | 외부 의존성 최소화, 학습 목적 |
| 사운드 | Web Audio API | 파일 없이 코드로 소리 생성 |
| 저장소 | localStorage | 별도 백엔드 없이 기록 저장 |

## 파일 구조

```
memory-block/
├── index.html       # 게임 UI 마크업
├── style.css        # 스타일링 (그리드, 반짝임 효과, 반응형)
├── main.js          # 게임 로직 (시퀀스, 입력, 사운드)
├── package.json     # npm 설정
└── openspec/        # 스펙 문서
```

## 핵심 설계

### 게임 상태 관리
- `sequence[]` - 게임이 생성한 블록 순서 배열
- `playerSequence[]` - 플레이어가 클릭한 순서 배열
- `level` - 현재 레벨 (= 시퀀스 길이)
- `isShowingSequence` - 시퀀스 재생 중 플래그 (입력 차단용)
- `isPlaying` - 게임 진행 중 플래그

### 시퀀스 재생 흐름
```
addToSequence() → showSequence() → flashBlock(index) × N
                                     ├─ CSS .active 클래스 추가 (밝기 1.8배)
                                     ├─ playSound(index) 호출
                                     └─ 400ms 후 .active 제거, 200ms 간격
```

### 사운드 생성
- `AudioContext`에서 `OscillatorNode` + `GainNode` 조합
- 사인파(sine) 사용
- `exponentialRampToValueAtTime`으로 자연스러운 페이드아웃

### 입력 검증
- 플레이어가 클릭할 때마다 `playerSequence[i]`와 `sequence[i]`를 즉시 비교
- 불일치 시 즉시 `gameOver()` 호출
- 전체 일치 시 `levelUp()` → 새 블록 추가 → 시퀀스 재재생
