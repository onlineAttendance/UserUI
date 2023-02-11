# UserUI
OnlineAttandance UI

React.js와 Material UI를 활용해서 만드는 프로젝트입니다.

Material UI
https://mui.com/material-ui/getting-started/installation/

Create-React-App
https://create-react-app.dev/

node.js
https://nodejs.org/en/

기능
  1. 오늘의 말씀
  2. 출석체크
  3. 로그인
  4. 회원가입
  5. 개인정보 수정
 
 총 페이지는 오늘의 말씀, 출석체크, 로그인, 회원가입, 개인정보수정 페이지로 구성되어있습니다.
 
이 프로젝트를 Clone해서 사용할때
node js가 설치되어있어야합니다.

1. npm install
  필요한 패키지를 다운받는 명령어
2. cd online-attendance
  UserUI/online-attendance 경로까지 이동해야합니다.
3. npm start
  서버를 실행시키는 명령어

디렉토리 구성
online-attendance
  src
    asset // 이미지, 동영상을 관리하기 위한 폴더
      
    Component // Component를 관리하기 위한 폴더
      AppBar.js // 상단 앱바
      BottomNav.js // 하단 네비게이션
      Question.js // 오늘의 말씀 질문
      footer.js // 푸터
      CardComponent.js // 오늘의 말씀 카드 UI
      
    Content // Page를 관리하기 위한 폴더
      Attendance.js //온라인 출석부 콘텐츠
      MyPage.js //정보수정 콘텐츠 
      SignIn.js //로그인 콘텐츠
      SignUp.js //회원가입 콘텐츠
      TodayWord.js //오늘의 말씀 콘텐츠
    store //state 관리를 위한 폴더
      
    UI // UI 작업중 공통으로 사용되는 것들을 관리하기 위한 폴더
      MainContainer.js // 전체 UI 구성
      Modal.js // 로그인,회원가입,정보수정 페이지가 보여질 모달
     
    App.js // 컴포넌트들을 한번에 모아서 보여주는 곳
    


