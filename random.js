//  화면창에 끝말잇기 띄우기

const body = document.body;
const wordClass = document.createElement('div');
document.body.append(wordClass);
wordClass.textContent = '초밥';
const wordForm = document.createElement('form');
document.body.append(wordForm);
const wordInput = document.createElement('input');
wordForm.append(wordInput);
wordInput.value = '';
const wordBtn = document.createElement('button');
wordForm.append(wordBtn);
wordBtn.textContent = '입력';
const result = document.createElement('div');
document.body.append(result);

wordForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (
    wordClass.textContent[wordClass.textContent.length - 1] ===
    wordInput.value[0]
  ) {
    wordClass.textContent = wordInput.value;
    result.textContent = '딩동댕';
    wordInput.value = '';
    wordInput.focus(); // 깜빡이가 입력창에 저절로생김
  } else {
    result.textContent = '땡';
    wordInput.value = '';
    wordInput.focus();
  }
});

/* 끝말잇기

let word = '첫글자';

while (true) {
  let answer = prompt(word);
  if (word[word.length - 1] === answer[0]) {
    word = answer;
  } else {
  }
}
*/

/*
// star

for (let star = 0; star <= 5; star++) {
  console.log('*'.repeat(star));
}

for (let star = 5; star >= 0; star--) {
  console.log('*'.repeat(star));
}

for (let star = 10; star >= 0; star = -2) {
  console.log(' '.repeat(star / 2) + '*'.repeat(star));
}

// 컴퓨터가 랜덤한 문제를 내는 구구단
for (let i = 0; i < 10; i++) {
  //정답을 맞춰도 계속 문제를 내야하므로 맨위에 반복문실행
  let num1 = Math.floor(Math.random() * 9 + 1);
  let num2 = Math.floor(Math.random() * 9 + 1);
  let result = num1 * num2;
  while (true) {
    // 실행됨
    let answer = prompt(String(num1) + '곱하기' + String(num2) + '는 ? ');
    if (Number(answer) === result) {
      //답이 맞으면
      {
        alert('딩동댕');
        break; //while문 실행종료후 다시 for문 반복문으로
      }
    } else {
      alert('떙'); // 틀렸으므로  다시 while문 실행
    }
  }
}
// 알고리즘 : 컴퓨터가문제를 랜덤으로 낸다 => 정답이면 다시 랜덤으로 문제냄
//  오답이면 다시 정답을 입력하는 곳으로 돌아감.
*/
