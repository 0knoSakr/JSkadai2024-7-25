//ログイン画面
//正規表現　半角英数字記号のみ入力可能の変数指定
let pattern = /^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/;
let button = document.getElementById("button");
//divの情報を持ってきてる
let spId = document.getElementById("spId");
let spPs = document.getElementById("spPs");
//ボタンをクリックしたらvalueを読み込んで検証する
button.addEventListener("click", function () {
  //textBoxの情報を持ってくる
  let account = document.getElementById("accId").value;
  let password = document.getElementById("paswId").value;
  let error1 = document.getElementById("error1");
  let error2 = document.getElementById("error2");
  let style1 = document.getElementById("accId");
  let style2 = document.getElementById("paswId");

  //ID項目のチェック
  if (pattern.test(account)) {
    error1.innerHTML = "";
    style1.style.borderColor = "";
  } else {
    error1.innerHTML = "IDは半角英数字記号のみで記入して下さい";
    // console.log("テスト")
    error1.style.color = "red";
    style1.style.borderColor = "red";
  }
  //パスワード項目のチェック
  if (pattern.test(password)) {
    error2.innerHTML = "";
    style2.style.borderColor = "";
  } else {
    error2.innerHTML = "パスワードは半角英数字記号のみで記入して下さい";
    // console.log("テスト")
    error2.style.color = "red";
    style2.style.borderColor = "red";
  }

  //フォームボタンを押してもページが変わらなくなる
  let form = document.getElementById("form");

  button.onclick = () => {
    let formData = new FormData(form);
    let action = form.getAttribute("action");
    let option = {
      method: "POST",
      body: formData,
    };
  };
});
