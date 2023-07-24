# ✍️ JAVASCRIPT : GAME EFFECT

![gameMain](https://github.com/YeoDaSeul4355/gameEffect/assets/125419623/58a72b41-7bed-4d27-8df9-a071d2c3dbef)
<br><br>

> View Site : https://site2023-game-jjul.netlify.app/

<br><br>

## 👋 소개

자바스크립트를 활용하여 게 이펙트를 구현한 웹 페이지를 소개합니다. 뮤직 플레이어와 테트리스 게임은 자바스크립트로 구현되어 다양한 플랫폼에서 실행 가능하며, 사용자들에게 즐거운 게임 경험과 음악 감상을 제공합니다. 
이 이펙트를 통해 javascript의 메서드 (setInterval, setTimeOut, 반복문)과 GSAP, jQuery를 학습하였습니다.
<br><br>

## 🔧 사용 스택과 메서드
* HTML: HTML 언어를 사용하여 웹 페이지의 구조와 콘텐츠를 정의합니다.
* CSS: CSS(Cascading Style Sheets)를 사용하여 웹 페이지의 스타일을 지정합니다.
* javascript :
  * navigator.userAgent: 현재 브라우저의 User Agent 문자열을 반환하는 프로퍼티로, 운영체제 정보를 추출하는데 사용되었습니다.
  * screen.width와 screen.height: 현재 화면의 가로와 세로 크기를 반환하는 프로퍼티로, 화면 크기를 알아내는데 사용되었습니다.
  * getAttribute(): DOM 요소의 속성 값을 가져오는 메서드로, 데이터 속성을 가져올 때 사용됩니다.
  * setAttribute(): DOM 요소의 속성 값을 설정하는 메서드로, 데이터 속성을 설정할 때 사용됩니다.
  * timeupdate 이벤트: 오디오의 재생 시간이 업데이트될 때 발생하는 이벤트로, 오디오의 진행 바를 업데이트하는데 사용됩니다.
  * insertAdjacentHTML(): HTML 문자열을 DOM에 삽입하는 메서드로, 뮤직 리스트 아이템을 동적으로 생성하여 플레이어에 추가하는데 사용됩니다.
* jQuery :
  * .draggable(): jQuery UI의 메서드로, 해당 DOM 요소를 드래그 가능하도록 설정하고 드래그 동작에 대한 콜백 함수를 정의했습니다.
  * .on("click", function() { ... }): 해당 DOM 요소에 클릭 이벤트 리스너를 등록하고, 클릭 시 콜백 함수를 실행합니다.
* GSAP (GreenSock Animation Platform) :
  *  gsap.to(): GSAP 라이브러리의 메서드로, DOM 요소를 애니메이션하는데 사용됩니다. 해당 메서드를 통해 커서의 위치를 사용자의 마우스 위치에 맞게 업데이트하는 기능이 구현되었습니다.

<br><br>

## 📚 구현 내역

* 자바스크립트를 사용하여 뮤직 플레이어 기능을 구현하였으며, 사용자가 음악 파일을 업로드하고 재생, 일시 정지, 볼륨 조절 등을 할 수 있도록 했습니다. 또한, 현재 재생 중인 음악의 시간을 표시하고, 프로그레스 바를 통해 음악 재생 상태를 시각적으로 표현하여 사용자가 편리하게 음악을 감상할 수 있도록 했습니다.
* 테트리스 게임은 자바스크립트를 사용하여 구현되었습니다. 사용자는 키보드를 통해 떨어지는 블록의 회전과 이동을 조작하며, 블록을 가로로 쌓아 올려 완전한 가로 줄을 만들면 그 줄이 사라지게 됩니다. 게임이 진행됨에 따라 블록의 떨어지는 속도가 점점 빨라지며, 사용자는 가능한 많은 줄을 만들어 최고 점수를 얻을 수 있도록 노력합니다.

<br><br>
## 📸 다른 페이지
![gameMusic](https://github.com/YeoDaSeul4355/gameEffect/assets/125419623/849a2d70-d115-4d0e-b384-42e753951d2c)<br><br>
![gameTetris](https://github.com/YeoDaSeul4355/gameEffect/assets/125419623/f6993d26-d229-497f-9b6b-4866a0be4e8c)
