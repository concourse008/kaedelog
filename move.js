'use strict';
const startButton = document.getElementById('start');
const resultDivided = document.getElementById('result-area');
const loadingDivided = document.getElementById('loading-area');
var i = 0;

function first(){
  i = Math.floor(Math.random()*20000);
  setTimeout(doit,i);
}
function doit(){
  const paragraph = document.createElement('p');
  var result = happen();
  i = Math.floor(i / 2000 + 1);
  var resultplus =  i +'分間';
  paragraph.innerText = resultplus + result;
  resultDivided.appendChild(paragraph);
}

const ivents = [
'うんちを見つけて眺めていました。「うんちや！」',
'うんちを見つけてつついていました。「うんちー」',
'ミトのあたまに乗っていました。「わーい」',
'ミトに質問していました。「ミトちゃんはすごいなぁ」',
'ミトのお腹に抱き着いていました。「ぷにぷにやー」',
'ミトのリボンで遊んでもらいました。「きゃっきゃっ」',
'ミトに髪をといてもらいました。「くすぐったいっ」',
'ミトに漫画を読んでもらいました。「なけるわぁ」',
'ベッドにのぼってごろごろしました。「ふかふかや」',
'お昼寝していました。「ごーがー……」',
'猫と喧嘩していました。「おらぁ！！」',
'火を眺めていました。「やっぱええなぁ……」',
'エルエルを燃やしていました。「ええやん」',
'エルエルに乗って飛んでいました。「らくやわ」',
'ずしりんとお話していました。「ちぇっす！ちゃす！」',
'サンドイッチを食べていました。「あぐあぐあぐあぐあぐ……」',
'外を窓から眺めていました。「なんかおるかなー」',
'グァバをこっそり飲んでいました。「くぁ～！」',
'お絵描きしていました。「これはうんち」',
'歌をうたっていました。「ええきもちや」',
'ゲームをしていました。「うんちっていえ！」',
'ゲームをしていました。「むずかしなぁ」',
'椅子に話しかけていました。「あしながいなぁ」'
]

function happen(){
  //イベントIDをランダムに決める
  let id = 0;
  id = Math.floor(Math.random()*ivents.length);//*の後の数字＝選択肢の数 */
  //TODO 起こった事を返す、表示される
  return ivents[id];
}

var point = 0;
function loading(){
  const result = loding();
  loadingDivided.innerText = result;
}
function loding(){
  if (point === 5){
    point = 0;
  }
  const nt = '・'.repeat(point+1);
  const poi = 'カエデ行動中' + nt; 
  console.log(nt);
  point = point + 1;
  return poi;
}

startButton.onclick = () =>{
  document.getElementById("button").style.visibility="hidden";
  setInterval(first,5000);
  setInterval(loading,1000);
}
