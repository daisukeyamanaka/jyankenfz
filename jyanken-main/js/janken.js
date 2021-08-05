

/*じゃんけんロジック　グー*/
$("#gu_btn").on('click', function () {
  const min = 0;
  const max = 2;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  var com_han = new Array("./image/JJJ/M-j_gu02.png", "./image/JJJ/M-j_ch02.png", "./image/JJJ/M-j_pa02.png");//手を出す
  document.getElementById("wilderness").style.display = "none";//非表示
  document.getElementById("com_hand1").style.display = "block";//表示

  if (randomNumber === 0) {
    document.getElementById("com_hand1").src = com_han[randomNumber];//$("#com_hand").text('グー');
    btnShack()//画像を横に動かす処理
    //$("#result").text('あいこ');
    enemyData["hp"] = enemyData["hp"] - 100;
    document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
    document.getElementById("attackPoint").textContent = "ダメージ数：" + 100;

  } else if (randomNumber === 1) {
    document.getElementById("com_hand1").src = com_han[randomNumber];//$("#com_hand").text('チョキ');
    btnShack()//画像を横に動かす処理
    //$("#result").text('勝利');
    enemyData["hp"] = enemyData["hp"] - 150;
    document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
    document.getElementById("attackPoint").textContent = "ダメージ数：" + 150;

  } else if (randomNumber === 2) {
    document.getElementById("com_hand1").src = com_han[randomNumber];//$("#com_hand").text('パー');
    btnShack()//画像を横に動かす処理
    //$("#result").text('敗北');
    enemyData["hp"] = enemyData["hp"] - 50;
    document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
    document.getElementById("attackPoint").textContent = "ダメージ数：" + 50;
    playerData["hp"] = playerData["hp"] - 150;//プレイヤーダメージ
    document.getElementById("currentPlayerHp").textContent = playerData["hp"];
  }
  //フリーザ負けたときの処理
  if (playerData["hp"] <= 0) {
    playerData["hp"] = 0;
    //$("#com_hand").text('');
    document.getElementById("currentPlayerHp").textContent = playerData["hp"];
    document.getElementById("com_hand1").style.display = "none"
    document.getElementById("video1").style.display = "block"
    var v = document.getElementById("video1");//かめはめ波
    v.load();//読み込んで
    v.play();//再生

  }
  //ゴクウが負けたときの処理
  if (enemyData["hp"] <= 0) {
    enemyData["hp"] = 0;
    //$("#com_hand").text('');
    document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
    document.getElementById("com_hand1").style.display = "none"
    document.getElementById("video").style.display = "block"
    var v = document.getElementById("video");//デスボール
    v.load();
    v.play();
  }
});

$("#cho_btn").on('click', function () {
  const min = 0;
  const max = 2;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  var com_han = new Array("./image/JJJ/M-j_gu02.png", "./image/JJJ/M-j_ch02.png", "./image/JJJ/M-j_pa02.png");//画像の定義
  document.getElementById("wilderness").style.display = "none";
  document.getElementById("com_hand1").style.display = "block";

  if (randomNumber === 0) {
    document.getElementById("com_hand1").src = com_han[randomNumber];//$("#com_hand").text('グー');まけ
    btnShack()//画像を横に動かす処理
    //$("#result").text('敗北');
    enemyData["hp"] = enemyData["hp"] - 1;
    document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
    document.getElementById("attackPoint").textContent = "ダメージ数：" + 1;
    playerData["hp"] = playerData["hp"] - 500;
    document.getElementById("currentPlayerHp").textContent = playerData["hp"];

  } else if (randomNumber === 1) {
    document.getElementById("com_hand1").src = com_han[randomNumber];//$("#com_hand").text('チョキ');
    btnShack()//画像を横に動かす処理
    //("#result").text('あいこ');
    enemyData["hp"] = enemyData["hp"] - 5;
    document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
    document.getElementById("attackPoint").textContent = "ダメージ数：" + 5;

  } else if (randomNumber === 2) {
    document.getElementById("com_hand1").src = com_han[randomNumber];//$("#com_hand").text('ぱー');
    btnShack()//画像を横に動かす処理
    //$("#result").text('勝利');
    enemyData["hp"] = enemyData["hp"] - 500;
    document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
    document.getElementById("attackPoint").textContent = "ダメージ数：" + 500;
  }
  //味方の処理
  if (playerData["hp"] <= 0) {
    playerData["hp"] = 0;
    $("#com_hand").text('');
    document.getElementById("currentPlayerHp").textContent = playerData["hp"];
    document.getElementById("com_hand1").style.display = "none"
    document.getElementById("video1").style.display = "block"
    var v = document.getElementById("video1");
    v.load();
    v.play();

  }
  //敵のの処理
  if (enemyData["hp"] <= 0) {
    enemyData["hp"] = 0;
    $("#com_hand").text('');
    document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
    document.getElementById("com_hand1").style.display = "none"
    document.getElementById("video").style.display = "block"
    var v = document.getElementById("video");
    v.load();
    v.play();
  }
});

$("#par_btn").on('click', function () {
  const min = 0;
  const max = 2;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  var com_han = new Array("./image/JJJ/M-j_gu02.png", "./image/JJJ/M-j_ch02.png", "./image/JJJ/M-j_pa02.png");//画像の定義
  document.getElementById("wilderness").style.display = "none";
  document.getElementById("com_hand1").style.display = "block";

  if (randomNumber === 0) {
    document.getElementById("com_hand1").src = com_han[randomNumber];//$("#com_hand").text('グー');
    btnShack()//画像を横に動かす処理
    $("#result").text('勝利');
    enemyData["hp"] = enemyData["hp"] - 290;
    document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
    document.getElementById("attackPoint").textContent = "ダメージ数：" + 290;

  } else if (randomNumber === 1) {
    document.getElementById("com_hand1").src = com_han[randomNumber];//$("#com_hand").text('チョキ');
    btnShack()//画像を横に動かす処理
    $("#result").text('敗北');
    enemyData["hp"] = enemyData["hp"] - 40;
    document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
    document.getElementById("attackPoint").textContent = "ダメージ数：" + 40;
    playerData["hp"] = playerData["hp"] - 290;
    document.getElementById("currentPlayerHp").textContent = playerData["hp"];

  } else if (randomNumber === 2) {
    document.getElementById("com_hand1").src = com_han[randomNumber];//$("#com_hand").text('ぱー');
    btnShack()//画像を横に動かす処理
    $("#result").text('あいこ');
    enemyData["hp"] = enemyData["hp"] - 10;
    document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
    document.getElementById("attackPoint").textContent = "ダメージ数：" + 10;
  }
  //味方の処理
  if (playerData["hp"] <= 0) {
    playerData["hp"] = 0;
    $("#com_hand").text('');
    document.getElementById("currentPlayerHp").textContent = playerData["hp"];
    document.getElementById("com_hand1").style.display = "none"
    document.getElementById("video1").style.display = "block"
    var v = document.getElementById("video1");
    v.load();
    v.play();

  }
  //敵のの処理
  if (enemyData["hp"] <= 0) {
    enemyData["hp"] = 0;
    $("#com_hand").text('');
    document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
    document.getElementById("com_hand1").style.display = "none"
    document.getElementById("video").style.display = "block"
    var v = document.getElementById("video");
    v.load();
    v.play();
  }
});

//画像を横に動かす処理
function btnShack() {
  $("#com_hand1").css("animation", "shake 0.3s");
  /** ボタン要素をコピーして古いものと置き換え */
  var copied = $("#com_hand1").clone(true);
  $("#com_hand1").before(copied);
  $("." + $("#com_hand1").attr("class") + ":last").remove();
}

/*プレイヤー情報*/
const playerData = {
  name: "フリーザ　　ギニュー特戦隊",
  hp: 1999
}
const enemyData = {
  name: "孫悟空",
  hp: 1999
}
//場所の配置
document.getElementById("currentPlayerHp").textContent = playerData["hp"];
document.getElementById("playerName").textContent = playerData["name"];

document.getElementById("enemyName").textContent = enemyData["name"];
document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
document.getElementById("maxEnemyHp").textContent = enemyData["hp"];