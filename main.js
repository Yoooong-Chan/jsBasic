// 끝말잇기

let word = '첫글자';

while (true) {
  let answer = prompt(word);
  if (word[word.length - 1] === answer[0]) {
    word = answer;
  } else {
  }
}

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
