//ログイン画面
//正規表現　半角英数字記号のみ入力可能の変数指定
let pattern = /^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/;
let button = document.getElementById("button");
//divの情報を持ってきてる
let spId = document.getElementById("spId");
let spPs = document.getElementById("spPs");
let isRight = true;
//ボタンをクリックしたらvalueを読み込んで検証する
button.addEventListener("click", function () {
  //textBoxの情報を持ってくる
  let account = document.getElementById("accId").value;
  let password = document.getElementById("paswId").value;
  let error1 = document.getElementById("error1");
  let error2 = document.getElementById("error2");

  //ID項目のチェック
  if (pattern.test(account)) {
    error1.innerHTML = "";
  } else {
    // let text = `<p>IDは半角英数字記号のみで記入して下さい</p>`;
    error1.innerHTML = "IDは半角英数字記号のみで記入して下さい";
    isRight = false;
    // console.log("テスト")
  }
  //パスワード項目のチェック
  if (pattern.test(password)) {
    error2.innerHTML = "";
  } else {
    // let text = `<p>IDは半角英数字記号のみで記入して下さい</p>`;
    error2.innerHTML = "IDは半角英数字記号のみで記入して下さい";
    isRight = false;
    console.log("テスト")
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

    // fetch(action, options).then((e) => {
    //   if (e.status === 200) {
    //     alert("保存しました。");
    //     return;
    //   }
    //   alert("保存できませんでした。");
    // });
  };
});
