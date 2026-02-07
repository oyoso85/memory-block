const setupScreen = document.getElementById('setup-screen');
const gameScreen = document.getElementById('game-screen');
const blocksContainer = document.getElementById('blocks-container');
const startBtn = document.getElementById('start-btn');
const levelDisplay = document.getElementById('level');
const highScoreDisplay = document.getElementById('high-score');
const messageDisplay = document.getElementById('message');
const gameoverOverlay = document.getElementById('gameover-overlay');
const gameoverLevel = document.getElementById('gameover-level');
const gameoverRecord = document.getElementById('gameover-record');
const retryBtn = document.getElementById('retry-btn');
const backBtn = document.getElementById('back-btn');

let blockCount = 4;
let blocks = [];
let sequence = [];
let playerSequence = [];
let level = 1;
let isPlaying = false;
let isShowingSequence = false;

// Web Audio API 설정
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// 블록별 색상 (최대 6개)
const blockColors = [
  ['#e74c3c', '#c0392b'], // 빨강
  ['#3498db', '#2980b9'], // 파랑
  ['#2ecc71', '#27ae60'], // 초록
  ['#f1c40f', '#f39c12'], // 노랑
  ['#9b59b6', '#8e44ad'], // 보라
  ['#e67e22', '#d35400'], // 주황
];

// 블록별 주파수 (도레미파솔라)
const frequencies = [262, 294, 330, 349, 392, 440];

// 로컬 스토리지에서 최고 기록 불러오기
function getHighScoreKey() {
  return `memoryBlockHighScore_${blockCount}`;
}

let highScore = 0;

// 소리 재생 함수
function playSound(index) {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.frequency.value = frequencies[index];
  oscillator.type = 'sine';

  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.3);
}

// 블록 동적 생성
function createBlocks(count) {
  blocksContainer.innerHTML = '';

  // 그리드 열 수 결정: 2개=2열, 3개=3열, 4개=2열, 5~6개=3열
  const cols = count <= 2 ? 2 : count <= 4 ? 2 : 3;
  blocksContainer.className = `blocks cols-${cols}`;

  for (let i = 0; i < count; i++) {
    const block = document.createElement('div');
    block.className = 'block';
    block.dataset.index = i;
    block.style.background = `linear-gradient(145deg, ${blockColors[i][0]}, ${blockColors[i][1]})`;
    block.addEventListener('click', handleBlockClick);
    blocksContainer.appendChild(block);
  }

  blocks = blocksContainer.querySelectorAll('.block');
}

// 블록 반짝이기
function flashBlock(index) {
  return new Promise((resolve) => {
    const block = blocks[index];
    block.classList.add('active');
    playSound(index);

    setTimeout(() => {
      block.classList.remove('active');
      setTimeout(resolve, 200);
    }, 400);
  });
}

// 시퀀스 보여주기
async function showSequence() {
  isShowingSequence = true;
  setBlocksDisabled(true);
  messageDisplay.textContent = '순서를 기억하세요!';

  await delay(500);

  for (let i = 0; i < sequence.length; i++) {
    await flashBlock(sequence[i]);
  }

  isShowingSequence = false;
  setBlocksDisabled(false);
  messageDisplay.textContent = '순서대로 클릭하세요!';
}

// 새로운 블록을 시퀀스에 추가
function addToSequence() {
  const randomIndex = Math.floor(Math.random() * blockCount);
  sequence.push(randomIndex);
}

// 블록 클릭 처리
function handleBlockClick(e) {
  if (isShowingSequence || !isPlaying) return;

  const clickedIndex = parseInt(e.target.dataset.index);
  playerSequence.push(clickedIndex);

  flashBlock(clickedIndex);

  const currentStep = playerSequence.length - 1;

  if (playerSequence[currentStep] !== sequence[currentStep]) {
    gameOver();
    return;
  }

  if (playerSequence.length === sequence.length) {
    levelUp();
  }
}

// 레벨 업
function levelUp() {
  level++;
  levelDisplay.textContent = level;
  playerSequence = [];
  messageDisplay.textContent = '정답! 다음 레벨...';

  setTimeout(() => {
    addToSequence();
    showSequence();
  }, 1000);
}

// 게임 오버
function gameOver() {
  isPlaying = false;
  setBlocksDisabled(true);

  gameoverLevel.textContent = `레벨 ${level}까지 도달했습니다`;

  if (level > highScore) {
    highScore = level;
    highScoreDisplay.textContent = highScore;
    localStorage.setItem(getHighScoreKey(), highScore);
    gameoverRecord.textContent = '새로운 최고 기록!';
    gameoverRecord.classList.remove('hidden');
  } else {
    gameoverRecord.classList.add('hidden');
  }

  gameoverOverlay.classList.remove('hidden');
}

// 게임 시작
function startGame() {
  sequence = [];
  playerSequence = [];
  level = 1;
  isPlaying = true;

  levelDisplay.textContent = level;
  startBtn.disabled = true;

  addToSequence();
  showSequence();
}

// 블록 개수 선택 처리
function selectBlockCount(count) {
  blockCount = count;

  // 최고 기록 불러오기 (블록 수별로 별도 저장)
  highScore = localStorage.getItem(getHighScoreKey()) || 0;
  highScoreDisplay.textContent = highScore;

  createBlocks(count);

  startBtn.disabled = false;
  startBtn.textContent = '게임 시작';

  setupScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
  messageDisplay.textContent = '게임 시작 버튼을 눌러주세요';
}

// 블록 활성화/비활성화
function setBlocksDisabled(disabled) {
  blocks.forEach(block => {
    if (disabled) {
      block.classList.add('disabled');
    } else {
      block.classList.remove('disabled');
    }
  });
}

// 딜레이 헬퍼
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 이벤트 리스너 등록
document.querySelectorAll('.count-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    selectBlockCount(parseInt(btn.dataset.count));
  });
});

startBtn.addEventListener('click', startGame);

retryBtn.addEventListener('click', () => {
  gameoverOverlay.classList.add('hidden');
  startGame();
});

backBtn.addEventListener('click', () => {
  gameoverOverlay.classList.add('hidden');
  gameScreen.classList.add('hidden');
  setupScreen.classList.remove('hidden');
});
