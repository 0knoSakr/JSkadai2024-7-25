//ログイン画面
//正規表現　半角英数字記号のみ入力可能の変数指定
let pattern = /^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/;
let button = document.getElementById("button");
//divの情報を持ってきてる
// let spId = document.getElementById("spId");
// let spPs = document.getElementById("spPs");
// //ボタンをクリックしたらvalueを読み込んで検証する
// button.addEventListener("click", function () {
//   //textBoxの情報を持ってくる
//   let account = document.getElementById("accId").value;
//   let password = document.getElementById("paswId").value;
//   let error1 = document.getElementById("error1");
//   let error2 = document.getElementById("error2");
//   let style1 = document.getElementById("accId");
//   let style2 = document.getElementById("paswId");

//   //ID項目のチェック
//   if (pattern.test(account)) {
//     error1.innerHTML = "";
//     style1.style.borderColor = "";
//   } else {
//     error1.innerHTML = "IDは半角英数字記号のみで記入して下さい";
//     // console.log("テスト")
//     error1.style.color = "red";
//     style1.style.borderColor = "red";
//   }
//   //パスワード項目のチェック
//   if (pattern.test(password)) {
//     error2.innerHTML = "";
//     style2.style.borderColor = "";
//   } else {
//     error2.innerHTML = "パスワードは半角英数字記号のみで記入して下さい";
//     // console.log("テスト")
//     error2.style.color = "red";
//     style2.style.borderColor = "red";
//   }

//   //フォームボタンを押してもページが変わらなくなる
//   let form = document.getElementById("form");

//   button.onclick = () => {
//     let formData = new FormData(form);
//     let action = form.getAttribute("action");
//     let option = {
//       method: "POST",
//       body: formData,
//     };
//   };
// });

//社員情報

//ひらがな漢字カタカナ
let pattern2 = /^[\u30a0-\u30ff\u3040-\u309f\u30e0-\u9fcf]+$/;
//ひらがな
let pattern3 = /^[\u3040-\u309f]+$/;
//数字
let pattern4 = /^[0-9]+$/;
//ひらがなカタカナ漢字英語数字
let pattern5 = /^[\u30a0-\u30ff\u3040-\u309f\u30e0-\u9fcf\0-9a-zA-Z]+$/;

button.addEventListener("click", function () {
  //name1のテキストボックスのバリューの情報
  let name1 = document.getElementById("name1").value;
  //name1のinputのスタイルを変えるための情報
  let style3 = document.getElementById("name1");
  //エラー文を入れるためのliの情報
  let error3 = document.getElementById("error3");
  //ふりがなのバリュー
  let name2 = document.getElementById("name2").value;
  //スタイル変更
  let style4 = document.getElementById("name2");
  //エラー文を入れる
  let error4 = document.getElementById("error4");
  //年齢のバリュー
  let age = document.getElementById("age").value;
  //スタイル変更
  let style5 = document.getElementById("age");
  //エラー文を入れる
  let error5 = document.getElementById("error5");
  //住所のバリュー
  let address = document.getElementById("address").value;
  //スタイル変更
  let style6 = document.getElementById("address");
  //エラー文を入れる
  let error6 = document.getElementById("error6");
  //電話番号のバリュー
  let number = document.getElementById("number").value;
  //スタイル変更
  let style7 = document.getElementById("number");
  //エラー文を入れる
  let error7 = document.getElementById("error7");
  //所属部署のバリュー
  let affiliation = document.getElementById("affiliation").value;
  //スタイル変更
  let style8 = document.getElementById("affiliation");
  //エラー文を入れる
  let error8 = document.getElementById("error8");

  //社員名
  if (pattern2.test(name1)) {
    error3.innerHTML = "";
    style3.style.borderColor = "";
  } else {
    error3.innerHTML = "記号、数字は不可";
    error3.style.color = "red";
    style3.style.borderColor = "red";
    console.log("テスト");
  }

  //ふりがな
  if (pattern3.test(name2)) {
    error4.innerHTML = "";
    style4.style.borderColor = "";
  } else {
    error4.innerHTML = "ひらがなのみ";
    error4.style.color = "red";
    style4.style.borderColor = "red";
    console.log("テスト");
  }

  //年齢
  if (pattern4.test(age)) {
    error5.innerHTML = "";
    style5.style.borderColor = "";
  } else {
    error5.innerHTML = "数字のみ";
    error5.style.color = "red";
    style5.style.borderColor = "red";
    console.log("テスト");
  }

  //住所
  if (pattern5.test(address)) {
    error6.innerHTML = "";
    style6.style.borderColor = "";
  } else {
    error6.innerHTML = " 記号は不可";
    error6.style.color = "red";
    style6.style.borderColor = "red";
    console.log("テスト");
  }

  //電話番号
  if (pattern4.test(number)) {
    error7.innerHTML = "";
    style7.style.borderColor = "";
  } else {
    error7.innerHTML = " 数字のみ";
    error7.style.color = "red";
    style7.style.borderColor = "red";
    console.log("テスト");
  }

  //所属部署
  if (pattern2.test(affiliation)) {
    error8.innerHTML = "";
    style8.style.borderColor = "";
  } else {
    error8.innerHTML = " 記号、数字は不可";
    error8.style.color = "red";
    style8.style.borderColor = "red";
    console.log("テスト");
  }
});

// セレクトボックスが変更されたときに実行される関数
//日付が指定されたら指定したものが変数calculateAgeに入れられる
birthday.addEventListener("change", function () {
  calculateAge();
});

function calculateAge() {
  //生年月日
  const birthday = document.getElementById("birthday");

  let toString = Object.prototype.toString;

  //生年月日の値
  let date1 = new Date(birthday.value);
  //年の値
  let selectedYear = date1.getFullYear();
  //月の値
  let selectedMonth = date1.getMonth();
  //日の値
  let selectedDay = date1.getDate();

  //現在の日付を取得
  let today = new Date();
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDay = today.getDate();

  // 年齢を計算
  let age2 = currentYear - selectedYear;

  // 誕生日がまだ来ていない場合、年齢を1つ減らす
  if (
    selectedMonth > currentMonth ||
    (selectedMonth == currentMonth && selectedDay > currentDay)
  ) {
    age2--;
  }
  // 年齢を入力フィールドに自動入力
  age.value = age2;
  console.log("テスト");
}

//ソート機能

//検索ボタンの情報
let button2 = document.getElementById("button2");

// json情報の読み込み
async function callApi() {
  const res = await fetch("js/employees.json");
  const users = await res.json();
  return users;
}
//jsonの中身を入れたい場所の指定
let jsonData = document.getElementById("jsonData");

//ページを読み込んだ時に表示させる
document.addEventListener("DOMContentLoaded", async function () {
  //callApiの中の情報が入ってるjson
  let json = await callApi();

  //tableにjsonの情報を入れる
  json.forEach((son) => {
    //動作確認のコンソール
    // console.log(son.furigana);
    //tableのthの下に情報を入れるための記述
    let text2 = `<tr><td></td><td>${son.employee_name}</td><td>${son.furigana}</td><td>${son.age}</td><td>${son.hire_date}</td><td>${son.address}</td><td>${son.phone_number}</td><td>${son.department}</td></tr>`;
    //insertAdjacentHTMLでtextを入れている入れる内容の順番を指定する変数text
    jsonData.insertAdjacentHTML("beforeend", text2);
  });
});

//検索ボタンを押したらの指示
button2.addEventListener("click", async function () {
  //tableの情報
  let table = document.getElementById("table");

  //callApiの中の情報が入ってるjson
  let json = await callApi();

  //情報をリセットするための記述
  while (jsonData.firstChild) {
    jsonData.removeChild(jsonData.firstChild);
  }

  //selectの情報
  let select = document.getElementById("list");
  //selectbuttonのoptionが変わった時の動き
  // selectの内容がchangeされたとき
  let selectValue = select.value;
  //selectを変えたとき動いてるかの確認
  console.log(selectValue);

  function selectSort(sort) {
    sort.forEach((son) => {
      //動作確認のコンソール
      // console.log(son.furigana);
      //tableのthの下に情報を入れるための記述
      let text2 = `<tr><td></td><td>${son.employee_name}</td><td>${son.furigana}</td><td>${son.age}</td><td>${son.hire_date}</td><td>${son.address}</td><td>${son.phone_number}</td><td>${son.department}</td></tr>`;
      //insertAdjacentHTMLでtextを入れている入れる内容の順番を指定する変数text
      jsonData.insertAdjacentHTML("beforeend", text2);
    });
  }

  //昇順の時の指定
  if (selectValue == "ascending-order") {
    //ひらがなのソート
    let hiraSort = json.sort(
      (a, b) => a.furigana.localeCompare(b.furigana),
      "ja"
    );
    selectSort(hiraSort);
  }

  //降順の時の指定
  else if (selectValue == "descending-order") {
    //ひらがなのソート
    let hiraSort = json.sort(
      (a, b) => b.furigana.localeCompare(a.furigana),
      "ja"
    );
    selectSort(hiraSort);
  }

  //通常
  else if (selectValue == "usually") {
    selectSort(json);
  }
}); //クリックしたら動く最後尾
