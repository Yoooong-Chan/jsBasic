const danForm = document.createElement('form'),
  danClass = document.createElement('div'),
  danInput = document.createElement('input'),
  danBtn = document.createElement('button'),
  danResult = document.createElement('div');
document.body.append(danClass);

document.body.append(danForm);
danForm.append(danInput);
danInput.type = '';
danForm.append(danBtn);
danBtn.textContent = '버튼';
document.body.append(danResult);
let math1 = Math.ceil(Math.random() * 9 + 1);
let math2 = Math.ceil(Math.random() * 9 + 1);
danClass.textContent = `${math1} * ${math2} = ?`;

danForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const result = math2 * math1;
  if (Number(danInput.value) === result) {
    danResult.textContent = '정답'; //여기까지는 처음 문제와 값을 나타내야하기때문에 표현한것
    math1 = Math.ceil(Math.random() * 9 + 1); //여기부터는 엔터를 누를시 동작 (즉 event기능시 반복됨)
    math2 = Math.ceil(Math.random() * 9 + 1);
    danClass.textContent = `${math1} * ${math2} = ?`;
    danInput.value = '';
    danInput.focus();
  } else {
    danResult.textContent = '오답';
    danInput.value = '';
    danInput.focus();
  }
});
