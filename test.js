'use strict';
const startButton = document.getElementById('start');
const resultDivided = document.getElementById('result-area');
const loadingDivided = document.getElementById('loading-area');
const tweetDivided = document.getElementById('tweet-area');
var totaltime = 0;

var i = 0;
function first(){
  i = Math.floor(Math.random()*8000) + 2000;
  setTimeout(doit,i);
}
  function doit(){
    const paragraph = document.createElement('p');
    var result = happen();
    i = Math.floor(i / 2000 + 1);
    totaltime = totaltime + i ;
    var resultplus =  i +'分間';
    paragraph.innerHTML = resultplus + result;
    resultDivided.appendChild(paragraph);
    if (Math.floor(Math.random()*7) === 0 ){//終わる確率
      end();
    }else{
      first();
    }
  }
    function happen(){
      //イベントIDをランダムに決める
      let id = 0;
      id = Math.floor(Math.random()*ivents.length);//*の後の数字＝選択肢の数 */
      //TODO 起こった事を返す、表示される
      return ivents[id];
    }
  
//通常文章一覧
const ivents = [
'うんちを見つけて眺めていました。<br>「うんちや！」',
'うんちを見つけてつついていました。<br>「うんちー」',
'ミトのあたまに乗っていました。<br>「わーい」',
'ミトに質問していました。<br>「ミトちゃんはすごいなぁ」',
'ミトのお腹に抱き着いていました。<br>「ぷにぷにやー」',
'ミトのリボンで遊んでもらいました。<br>「きゃっきゃっ」',
'ミトに髪をといてもらいました。<br>「くすぐったいっ」',
'ミトに漫画を読んでもらいました。<br>「なけるわぁ」',
'ミトと1.2.Switchで遊んでいました。<br>「うっほっほ！」',
'ミトへのプレゼントを考えていました。<br>「なにがええかなぁ」',
'みんなとかくれんぼしていました。<br>「どこやー？」',
'ベッドにのぼってごろごろしました。<br>「ふかふかや」',
'枕を揉んでいました。<br>「はー、おしごとはたいへんや……」',
'お昼寝していました。<br>「ごーがー……」',
'ベッドの下に入っていました。<br>「おちつくわ」',
'猫と喧嘩していました。<br>「おらぁ！！」',
'猫に乗って一緒に遊んでいました。<br>「ええぞ！」',
'猫を毛づくろいしていました。<br>「じっとせえ！」',
'猫に蹴られていました。<br>「あうあうあうあう」',
'猫と喋っていました。<br>「おまえもひまなんか」',
'猫のおもちゃで遊んでいました。<br>「あんまおもろないな」',
'火を眺めていました。<br>「やっぱええなぁ……」',
'エルエルを燃やしていました。<br>「ええやん」',
'エルエルに乗って飛んでいました。<br>「らくやわ」',
'ずしりんとお話していました。<br>「ちぇっす！ちゃす！」',
'ずしりんに遊んでもらいました。<br>「ひゃー！うはは！」',
'サンドイッチを食べていました。<br>「あぐあぐあぐあぐあぐ……」',
'外を窓から眺めていました。<br>「なんかおるかなー」',
'日向ぼっこをしていました。<br>「ねてまいそう」',
'グァバをこっそり飲んでいました。<br>「くぁ～！」',
'ゼリーをこっそり飲んでいました。<br>「じゅるじゅる……」',
'カーテンを登っていました。<br>「あと…はんぶんや……」',
'お絵描きをしていました。<br>「これはうんち」',
'お絵描きをしていました。<br>「これはねこ！」',
'お絵描きをしていました。<br>「かえでよりうまくかけたな！」',
'歌をうたっていました。<br>「ええきもちや」',
'宅録ごっこをしていました。<br>「ええかんじや」',
'配信ごっこをしていました。<br>「あーー！！ぼけーー！！」',
'ゲームをしていました。<br>「うんちっていえ！」',
'ゲームをしていました。<br>「むずかしなぁ」',
'椅子に話しかけていました。<br>「あしながいなぁ」',
'椅子に乗って滑っていました。<br>「うぇーい！」',
'電気を点けたり消したりしていました。<br>「これがえんしゅつや」',
'パソコンに話しかけていました。<br>「あとであそんだるからな」',
'ティッシュで遊んでいました。<br>「しもた、かえでにおこられる」',
'テレビを見ていました。<br>「にんげんばっかやな」',
'マウスを拭いて磨いていました。<br>「しょくにんわざや」',
'本をめくっていました。<br>「これはあれやなー、なるほどなー」',
'靴を眺めていました。<br>「ちょうどええのがないなぁ…」',
'マイクを磨いていました。<br>「ぴかぴかにしやなな」',
'掃除機をなでていました。<br>「きょうはしずかやな、おまえ」',
'クモから逃げていました。<br>「ミトちゃーん！なんかおるー！！」',
'ダンスしていました。<br>「わんつーはいっはいっ」',
'エルエルにダンスを指導していました。<br>「はいはいずれてるよ！」',
'猫のご飯を味見していました。<br>「まっず」',
'時計を見ていました。<br>「かえでまだかいなー」',
'ボールで遊んでいました。<br>「かったっせー！」',
'壁のファンアートを見ていました。<br>「なるしやなあいつ」',
'冷蔵庫に話しかけていました。<br>「ミトちゃんなんかしろない？」',
'洗濯機に乗っていました。<br>「きりーつ、きおつけぇ」',
'ペットボトルを転がしていました。<br>「おちつきないやつやなー」',
'色鉛筆を並べていました。<br>「れいんぼーろーどや」',
'本棚に収まっていました。<br>「ちょうどええな」',
'冷蔵庫を覗いていました。<br>「なんかないかー」',
'シャツを着ようとしていました。<br>「でぐちどこや！」',
'ハワイの事を考えていました。<br>「わいはー……」',
'カーテンにくるまっていました。<br>「ぐるぐるぐる……」',
'ぬいぐるみと遊んでいました。<br>「いいこやなーなでたるわ」',
'虚空を見つめていました。<br>「ぼー…………」',
'ゴミ箱を叩いていました。<br>「ええおとするわ」'
]

//カエデ行動中・・・の表示
var loadingarea = document.getElementById('loading-area');
var degree = 0;
function rotateload() {
  degree = degree + 9;
  loadingarea.style.transform = 'rotateX(' + degree +  'deg)';
  if (degree >= 360){
    degree = 0;
    clearInterval(rota);
    console.log(degree);
  }
}
var point = 0;
var rota = 0;
function loading(){
  const result = loding();
  loadingDivided.innerText = result;
}
  function loding(){
    if (point === 6){
      //くるんと縦に一回転
      point = 0;
      rota = setInterval(rotateload,24);
    }
    const nt = '・'.repeat(point);
    const poi = 'カエデ行動中' + nt; 
    point = point + 1;
    return poi;
  }

//終了イベント
var d = 0;
var dancetime = 0;
function end(){
  dancetime = setInterval(dance,3000);
}
  function dance(){
    loadingDivided.innerText = "";
    clearInterval(load);
    //ダンス画像を表示
    document.getElementById("pic").src= "dance.gif";
    const paragraph = document.createElement('p');
    const dance = ['ノリの良い曲が流れてきました。<br>「だんちぇのじかんや！」','みんな踊っています。<br>「はちみつだんちぇ！」','ダンスが続いています。<br>「つーきーにっカーエデはー！」','最高に盛り上がっています。<br>「おー、いぇいー！」','フィナーレを盛り上げています。<br>「ありがとー！」']
    paragraph.innerHTML = dance[d];
    resultDivided.appendChild(paragraph);
    d = d+1;
    if (d === 5){//ダンス終わり
      setTimeout(sleep,5000);
      clearInterval(dancetime);
      console.log('a');
    }
  }
    function sleep(){
      //寝てる画像表示+寝る
      document.getElementById("pic").src="sleep.png"
      const paragraph = document.createElement('p');
      paragraph.innerHTML = 'カエデは歌い疲れて眠りました。<br>「やりきった……」';
      resultDivided.appendChild(paragraph);
      //結果表示
      const totalhour = Math.floor(totaltime / 60);
      const totalminite = totaltime % 60;
      const tweetvalue =  totalhour + '時間' +totalminite+ '分、カエデの様子を見ていました。';
      document.getElementById('finalresult-area').innerHTML = '～　スコア　～<br>'+tweetvalue;
      //ツイートボタン表示
      const anchor = document.createElement('a');
      const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=' + encodeURIComponent('カエデログ') + '&ref_src=twsrc%5Etfw';
      anchor.setAttribute('herf',hrefValue);
      anchor.className = 'twitter-hashtag-button';
      anchor.setAttribute('data-text',tweetvalue + '#カエデログ');
      anchor.setAttribute('data-size',"large");
      anchor.setAttribute('data-url',"https://concourse008.github.io/kaedelog/main.html");
      anchor.innerText = 'Tweet #カエデログ';
      const script = document.createElement('script');
      script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
      tweetDivided.appendChild(script);
      tweetDivided.appendChild(anchor);
      //リセットボタン
      resetbtn.innerHTML='<input type="button" value="もういちど" onclick="reset()"/><p></p>';
    }
function reset() {
	window.location.reload();
}

var load = 0;
startButton.onclick = () =>{
  document.getElementById("button").style.visibility="hidden";
  load = setInterval(loading,1000);
  first();
  sumtime = $sumtime + 1;
  console.log(sumtime);
  localStorage.sum = sumtime;
}

//総見守り時間計算
let sumtime = 0;
function getup(){
  localStorage.setItem('sum',0);
  sumtime = localStorage.getItem('sum');
  console.log(sumtime);
}
function setup(){
  sumtime = localStorage.getItem('sum');
  console.log(sumtime);
}

if(!localStorage.getItem('sum')) {
  //ストレージなし
  getup();
} else {
  //ストレージあり
  setup();
}
