//Переход в панель пользователя

document.querySelector("#btn_open").onclick = function clickOpen() {
  let loginName = document.getElementById("login").value;
  let passName = document.getElementById("password").value;
  if (loginName == "security34") {
    document.location.href = "assets/profiles/user_panel.html";
    if (passName == "admin") {
      document.location.href = "assets/profiles/user_panel.html";
    }} else {
      document.getElementById("anlogon").innerHTML = "Не верный логин или пароль."
    }
};