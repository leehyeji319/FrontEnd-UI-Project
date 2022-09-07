// function storageInit() {
//   if (localStorage.getItem("isLogin") == null) {
//     localStorage.setItem("isLogin", false);
//   }
// }

function setStateLogin() {
  localStorage.setItem("isLogin", 1);
}

function setStateLogout() {
  localStorage.setItem("isLogin", 0);
  alert("로그아웃 되었습니다.");
  location.reload();
}

function clearStorage() {
  localStorage.removeItem("isLogin");
}

function displayHeader() {
  let navHeader = document.querySelector("#nav-header-point");

  if (localStorage.getItem("isLogin") == null || localStorage.getItem("isLogin") == 0) {
    let content = `
            <li class="nav-item">
              <a class="nav-link" href="/pages/register.html">회원 가입</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pages/login.html">로그인</a>
            </li>`;
    navHeader.innerHTML = content;
  } else {
    let content = `
        <li class="nav-item">
          <a class="nav-link" href="#">관심지역 설정</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">관심지역 둘러보기</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="logout">로그아웃</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/pages/mypage.html">마이페이지</a>
                </li>`;
    navHeader.innerHTML = content;
    document.querySelector("#logout").addEventListener("click", setStateLogout);
  }
}
