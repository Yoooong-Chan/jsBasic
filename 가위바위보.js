let computerChoice = '0';

// Object.entries(객체)로 객체를 2차원 배열로 바꿀수 있음

let 가위바위보 = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
};
// 0을 했을때 바위 , -142했을때 가위 이렇게나와야함 obj의 단점이 reverse가 어렵다

// 배열.find는 반복문이지만 원하는 것을 찾으면 (return이 true되어 멈춘다.)
// 배열.findIndex 보를 찾고싶다하면, 2번째인덱스에 있으므로 '2'로 출력됨

function computerC(computerChoice) {
  return Object.entries(가위바위보).find(function (v) {
    return v[1] === computerChoice;
    // v[1] => 배열의 2번째.
  })[0];
}
//만약에 컴퓨터가 바위를 선택했다면 computerC('0')이 매개변수로 받고,
// 2차배열이된 ( ['바위','0'] ['가위','-142'] ['보','-284'])에서'0'을 찾고,
//return ['바위','0']=> [0,1]이므로 [1] 해준것 === computerChoice
// [0]은 entries(가위바위보)의 0번째 배열만 출력
// left를 바위,가위,보로 표현하기위함

// 자바스크립트 객체는 딕셔너리 자료구조 역할을 할수 있음
// 1:1 매칭을 표현함

// 비동기
// 인터벌을 멈추는 방법 :  변수에넣어서 클리어인터벌에 넣으면됨
let interVal;
function interMaker() {
  interVal = setInterval(() => {
    if (computerChoice === 가위바위보.바위) {
      computerChoice = 가위바위보.가위; // 가위
    } else if (computerChoice === 가위바위보.가위) {
      computerChoice = 가위바위보.보; // 보
    } else {
      computerChoice = 가위바위보.바위;
    }
    document.querySelector('#computer').style.background =
      'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)' +
      computerChoice +
      ' 0';
  }, 100);
}

interMaker();

let scoreResult = document.createElement('div');
document.body.append(scoreResult);
scoreResult.style.fontSize = '40px';
scoreResult.style.textAlign = 'center';
document.querySelectorAll('.btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    clearInterval(interVal);
    setTimeout(() => {
      interMaker();
    }, 500);

    let Score = {
      가위: 1,
      바위: 0,
      보: -1,
    };

    let myChoice = this.textContent;
    let myScore = Score[myChoice];
    let ComputerScore = Score[computerC(computerChoice)];
    let minus = myScore - ComputerScore;
    if (myScore === ComputerScore) {
      scoreResult.textContent = '비겼습니다';
    } else if (
      // 배열.includes로 ||관계를 줄일 수 있음
      //변수를 사용해서 중복되느넛을 제거하자
      [-1, 2].includes(minus)
    ) {
      scoreResult.textContent = '이겼습니다';
    } else if ([1, -2].includes(minus)) {
      scoreResult.textContent = '졌습니다';
    }
  });
});
// 가위 : 1 , 바위: 0 ,보: -1
// 나 / 컴퓨터     가위  바위  보
//            가위 1 1   1 0  1 -1
//            바위 0 1   0 0  0 -1
//            보  -1 1   -1 0 -1 -1
// 1 -1 0 1 -1 0
//  나 : 가위 일때 1 0  / 바위일때 0 1 / 보 일때 -1 1\

// interVal에서 계속움직이다가 클릭하면 clearInterval때문에 멈추고
//다시 setTimeout으로 손이 풀리고

/*  document.querySelectorAll('.btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    clearInterval(interVal); //클릭하면 컴퓨터가 멈춤
    // 진행하다가 클릭하면 clear로 멈추고, setTimeout으로
    //1초후에 setInterval을 실행하도록 텀을준다.
    //setInterval이 또 실행되고, 다시 btn을 누르면 멈춤.

    setTimeout(() => {
      interVal = setInterval(() => {
        //멈추고나서 1초뒤에 다시 풀어줬는데 다시 멈출수가없음
        //interVal 변수에 들어가 있어야하는데 안들어가있어서
        if (computerChoice === 가위바위보.바위) {
          computerChoice = 가위바위보.가위; // 가위
        } else if (computerChoice === 가위바위보.가위) {
          computerChoice = 가위바위보.보; // 보
        } else {
          computerChoice = 가위바위보.바위;
        }
        document.querySelector('#computer').style.background =
          'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)' +
          computerChoice +
          ' 0';
      }, 100);
    }, 1000);
  });
  // 여기 이 부분은 같으므로 하나로줄이자 class는 비슷한 기능을 할떄 자주사용 (묶을때)
//All을 하면 btn의 class를 다선택됨. queryAll는 forEach을 지원함
 */
