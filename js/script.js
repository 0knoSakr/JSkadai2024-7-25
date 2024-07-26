//ログイン画面
function subForm() {
  //正規表現　半角英数字記号のみ入力可能の変数指定
  let pattern = /^[a-zA-Z0-9!-/:-@¥[-`{-~]+$/;
  let account = document.getElementById("accId").value;
  let password = document.getElementById("pswId").value;
  let isRight = true;
  //ID項目のチェック
  if (pattern.text(account)) {
    document.getElementById("spId").innerHTML = "";
  } else {
    document.getElementById("spPs").innerHTML = "IDは半角英数字記号のみで記入して下さい";
    isRight = false;
  }
  //パスワード項目のチェック
}
