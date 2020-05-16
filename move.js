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
    paragraph.innerText = resultplus + result;
    resultDivided.appendChild(paragraph);
    if (Math.floor(Math.random()*10) === 0 ){//終わる確率
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
'うんちを見つけて眺めていました。「うんちや！」',
'うんちを見つけてつついていました。「うんちー」',
'ミトのあたまに乗っていました。「わーい」',
'ミトに質問していました。「ミトちゃんはすごいなぁ」',
'ミトのお腹に抱き着いていました。「ぷにぷにやー」',
'ミトのリボンで遊んでもらいました。「きゃっきゃっ」',
'ミトに髪をといてもらいました。「くすぐったいっ」',
'ミトに漫画を読んでもらいました。「なけるわぁ」',
'ミトと1.2.Switchで遊んでいました。「うっほっほ！」',
'ミトへのプレゼントを考えていました。「なにがええかなぁ」',
'ベッドにのぼってごろごろしました。「ふかふかや」',
'お昼寝していました。「ごーがー……」',
'ベッドの下に入っていました。「おちつくわ」',
'猫と喧嘩していました。「おらぁ！！」',
'猫に乗って一緒に遊んでいました。「ええぞ！」',
'猫を毛づくろいしていました。「じっとせえ！」',
'猫に蹴られていました。「あうあうあうあう」',
'火を眺めていました。「やっぱええなぁ……」',
'エルエルを燃やしていました。「ええやん」',
'エルエルに乗って飛んでいました。「らくやわ」',
'ずしりんとお話していました。「ちぇっす！ちゃす！」',
'ずしりんに遊んでもらいました。「ひゃー！うはは！」',
'サンドイッチを食べていました。「あぐあぐあぐあぐあぐ……」',
'外を窓から眺めていました。「なんかおるかなー」',
'日向ぼっこをしていました。「ねてまいそう」',
'グァバをこっそり飲んでいました。「くぁ～！」',
'ゼリーをこっそり飲んでいました。「じゅるじゅる……」',
'カーテンを登っていました。「あと…はんぶんや……」',
'お絵描きをしていました。「これはうんち」',
'お絵描きをしていました。「これはねこ！」',
'歌をうたっていました。「ええきもちや」',
'宅録ごっこをしていました。「ええかんじや」',
'配信ごっこをしていました。「あーー！！ぼけーー！！」',
'ゲームをしていました。「うんちっていえ！」',
'ゲームをしていました。「むずかしなぁ」',
'椅子に話しかけていました。「あしながいなぁ」',
'椅子に乗って滑っていました。「うぇーい！」',
'電気を点けたり消したりしていました。「これがえんしゅつや」',
'パソコンに話しかけていました。「あとであそんだるからな」',
'ティッシュで遊んでいました。「しもた、かえでにおこられる」',
'テレビを見ていました。「にんげんばっかやな」',
'マウスを拭いて磨いていました。「しょくにんわざや」',
'本をめくっていました。「これはあれやなー、なるほどなー」',
'時計を見ていました。「かえでまだかいなー」',
'ボールで遊んでいました。「かったっせー！」',
'飾っているファンアートを見ていました。「なるしやなあいつ」',
'冷蔵庫に話しかけていました。「ミトちゃんなんかしろない？」',
'洗濯機に乗っていました。「きりーつ、きおつけぇ」'
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
    const dance = ["ノリの良い曲が流れてきました。「だんちぇのじかんや！」","みんな踊っています。「はちみつだんちぇ！」","ダンスが続いています。「つーきーにっかーえではー！」","最高に盛り上がっています。「おー、いぇいー！」","フィナーレを盛り上げています。「ありがとー！」"]
    paragraph.innerText = dance[d];
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
      paragraph.innerText = 'カエデは歌い疲れて眠りました。「やりきった……」';
      resultDivided.appendChild(paragraph);
      //結果表示
      const totalhour = Math.floor(totaltime / 60);
      const totalminite = totaltime % 60;
      const tweetvalue =  totalhour + '時間' +totalminite+ '分、カエデの様子を見ていました。';
      document.getElementById('finalresult-area').innerText = `スコア： ${tweetvalue}`;
      //ツイートボタン表示
      const anchor = document.createElement('a');
      const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=' + encodeURIComponent('カエデログ') + '&ref_src=twsrc%5Etfw';
      anchor.setAttribute('herf',hrefValue);
      anchor.className = 'twitter-hashtag-button';
      anchor.setAttribute('data-text',tweetvalue + '#カエデログ');
      anchor.setAttribute('data-url',"https://concourse008.github.io/kaedelog/main.html");
      anchor.innerText = 'Tweet #カエデログ';
      const script = document.createElement('script');
      script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
      tweetDivided.appendChild(script);
      tweetDivided.appendChild(anchor);
    }

var load = 0;
startButton.onclick = () =>{
  document.getElementById("button").style.visibility="hidden";
  load = setInterval(loading,1000);
  first();
}
