//ログイン画面
function subForm() {
  //正規表現　半角英数字記号のみ入力可能の変数指定
  let pattern = /^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/;
  let account = document.getElementById("accId").value;
  let password = document.getElementById("pswId").value;
  let isRight = true;
  //ID項目のチェック
  if (pattern.text(account)) {
    document.getElementById("spId").innerHTML = "";
    console.log(account);
  } else {
    document.getElementById("spId").innerHTML ="IDは半角英数字記号のみで記入して下さい";
    isRight = false;
  }
  //パスワード項目のチェック
  if (pattern.text(password)) {
    document.getElementById("spPs").innerHTML = "";
  } else {
    document.getElementById("spPs").innerHTML ="IDは半角英数字記号のみで記入して下さい";
    isRight = false;
  }
  let form = document.getElementById("form");

  let submitButton = document.getElementsByClassName("button");

  submitButton.onclick = () => {
    let formData = new FormData(form);
    let action = form.getAttribute("action");
    let option = {
      method: "POST",
      body: formData,
    };
    fetch(action, options).then((e) => {
      if (e.status === 200) {
        alert("保存しました。");
        return;
      }
      alert("保存できませんでした。");
    });
  };
}
