const figClass = document.createElement('h1'),
  figForm = document.createElement('form'),
  figInput = document.createElement('input'),
  figBtn = document.createElement('button'),
  figResult = document.createElement('div');
document.body.append(figClass);
document.body.append(figForm);
figForm.append(figInput);
figForm.append(figBtn);
figInput.value = '';
figBtn.textContent = ' 입력 ';
document.body.append(figResult);
figResult.textContent = '결과';
figInput.maxLength = 4;

// 컴퓨터가 랜덤으로 숫자4개를 문제냄
let gameOver = 0;
let fig = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let figBox = [];

// fig 1~9에서 figbox안에 랜덤으로 4개를 뽑아야함
for (let i = 0; i < 4; i++) {
  // fig는 문자이므로 배열로 바꿔준다.
  // floor로 내림차순(소수점, 0을없애줌)
  // / random () * 9 => 1~9까지숫자중에서 랜덤으로 출력됨을 의미
  // ( 9-i )를 해줘야 fig[9-i]의 만큼 랜덤으로 뽑아줌 설정안해주면 undf나옴
  let figRandom = fig.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
  figBox.push(figRandom);
}
console.log(figBox.join(''));
const figSubmit = figForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let figAnswer = figInput.value;

  if (figAnswer === figBox.join('')) {
    figClass.textContent = '홈런';
    figInput.value = '';
    let fig = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let figBox = [];
    for (let i = 0; i < 3; i++) {
      let figRandom = fig.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
      figBox.push(figRandom);
    }
  } else {
    gameOver += 1;
    if (gameOver > 10) {
      figClass.textContent = `10번초과로 게임실패입니다! 답은 ${figBox.join(
        ''
      )}`;
      focus();
      figInput.value = '';
    }

    //답이아니면
    let resultArray = figAnswer.split(''); // 입력한값을 다시 배열로 변경
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 4; i += 1) {
      // 3번반복하는동안
      if (Number(resultArray[i]) === figBox[i]) {
        // 입력한 배열의 값이 정답의 배열과 같다면
        strike += 1;
      } else if (figBox.indexOf(Number(resultArray[i])) > -1) {
        ball += 1;
      }
      figClass.textContent = `결과는 Strike : ${strike} Ball : ${ball}`;
      focus();
      figInput.value = '';
    }
  }
});
