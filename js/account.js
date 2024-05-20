function checkUsername() {
  var username = document.getElementById("username");
  if (username.value.search(/^[A-Z]/) < 0) {
    username.value = "";
    username.placeholder = "用户名必须以大写字母开头！";
    // username.setCustomValidity("用户名必须以大写字母开头！");
    return false;
  }
  if (username.value.length < 6 || username.value.length > 16) {
    username.value = "";
    username.placeholder = "用户名长度必须在6到16个字符之间！";
    // username.setCustomValidity("用户名长度必须在6到16个字符之间！");
    return false;
  }

  return true;
}

function checkPassword() {
  var password = document.getElementById("password");
  if (password.value.length < 6 || password.value.length > 16) {
    password.value = "";
    password.placeholder = "密码长度必须在6到16个字符之间！";
    return false;
  }

  return true;
}