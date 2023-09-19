function showPwd() {
  var pwd = document.getElementById("pwd");

  var eyeBtn = document.getElementById("eye-btn");
  var state = pwd.type;

  if (state == "text") {
    pwd.type = "password";
    eyeBtn.className = "fa-solid fa-eye-slash";

  } else {
    pwd.type = "text";
    eyeBtn.className = "fa-solid fa-eye";
  }

}
