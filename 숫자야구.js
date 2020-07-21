/* 

let fig = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let fignone = [];

for (let i = 0; i < 4; i++) {
  let getFig = fig.splice(Math.ceil(Math.random() * (9 - i)), 1)[0];
  fignone.push(getFig);
}
//splice(위치, 개수) 하면 위치로부터 개수만큼 배열에서 뽑아요
// splice( 3, 1 ) => 3
// splice(Math.random() * 9, 1) 1~9까지 랜덤한숫자를 하나씩뽑음
// 이대로 하면  [Array[0] , Array[2]... ]이렇게 배열로뽑힘
// splice(Math.random() * 9, 1)[0]; 배열에서 첫번째만 뽑음
// let num= [1,2,3,4,5,6] 에서 let num1= num.splice(2,1)[0]이면 
// 2가 나옴 [2]배열의 첫번째라는뜻 
// (9-i) i가 1씩증가하면서 fig안에 있는 [i]씩 줄어드므로 자릿수맞춰줘야함

console.log(fignone);

fig => 당첨번호가 들어있는 숫자박스

fignone => 당첨번호 4개를 넣는 박스

getFig => 당첨번호를 랜덤으로/ 내림차순으로/ 

random () * 9를 하게되면 9개


// push , pop , shift , unshift

// push => 배열을 추가하고싶은 곳의 위치로부터 차례대로 추가

// pop = > [1,2,3,4]이면 [4] : 마지막 것 뽑기

// unshift : 처음에 추가

// shift : 처음 것 뽑기

// 문자.split(구분자) - > 배열

// 배열.join(구분자) -> 문자

 */
