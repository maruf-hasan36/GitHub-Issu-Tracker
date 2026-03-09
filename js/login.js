// console.log("js connected");
document.getElementById("sign-in-btn").addEventListener("click", function () {
  const userName = document.getElementById("user-name");
  const userNameInput = userName.value;

  const userPassword = document.getElementById("input-password");
  const userPasswordValue = userPassword.value;

  if (userNameInput === "admin" && userPasswordValue === "admin123") {
    window.location.assign("./home.html");
  } else {
    alert("Invalid UserName & Password");
  }
});
