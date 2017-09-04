/**
 * 全局变量
 */
var peopleInt = 0; // 间隔索引
var imgNo = 1; // 轮播图片索引

/**
 * 页面加载完毕后执行
 */
$(function() {
  $("#labmem").addClass("active");
  $(".ui.active.dimmer").removeClass("active");
});
$(".mem").transition({
  animation: "scale",
  reverse: "auto",
  interval: 200
});
/**
 * 关闭人物面板
 */
function closed() {
  $(".intro").css({
    opacity: 0
  });
  setTimeout(function() {
    $(".intro").css({
      visibility: "hidden"
    });
  }, 500);
  peopleInt = window.clearInterval(peopleInt);
  $(".people").transition("fade left");
  $(".fullname").transition("fade right");
  $(".desc").transition("fade right");
  imgNo = 1;
}

/**
 * 打开人物面板
 */
function opened(name) {
  setIntro(name);
  $(".intro").css({
    visibility: "visible"
  });
  $(".intro").css({
    opacity: 1
  });
  setTimeout(function() {
    $(".fullname").transition({
      animation: "fade right",
      duration: ".2s"
    });
  }, 200);
  setTimeout(function() {
    $(".desc").transition({
      animation: "fade right",
      duration: ".5s"
    });
  }, 300);
  setTimeout(function() {
    $(".people").transition({
      animation: "fade left",
      duration: "1s"
    });
  }, 500);
}

/**
 * 填充人物面板数据
 * @param {string} name 姓名 
 */
function setIntro(name) {
  var data = datas[name];
  $(".fullname").html(data.fullname);
  $(".desc").html(data.desc);
  $(".people").attr("src", "images/" + data.img[0]);
  peopleInt = setInterval(function() {
    if (imgNo >= data.img.length) {
      imgNo = 0;
    }
    $(".people").transition("fade left", function() {
      $(".people").attr({
        src: "images/" + data.img[imgNo]
      });
      imgNo++;
    });
    $(".people").transition("fade left");
  }, 4000);
}

/**
 * 数据部分
 */
var datas = {
  okabe: {
    fullname: "岡部 倫太郎",
    desc: "現在Javaに一生懸命勉強しています。牧瀬紅莉栖のために。",
    img: ["o1.jpg", "o2.jpg"]
  },
  hiyajo: {
    fullname: "比屋定 真帆",
    desc: "JavaScriptを研究しています、でもこれだけじゃなくて他のLanguageも段々上手になります。現在岡部と一緒に仕事中です。",
    img: ["h1.jpg", "h2.jpg"]
  },
  makise: {
    fullname: "牧濑 红莉栖",
    desc: "今　岡部のそばにいない　どこへ行くかな？",
    img: ["m1.jpg", "m2.jpg"]
  }
};
