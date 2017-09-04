let menu = [
  '<a id="home" class="item" href="index.html">ホームページ</a>',
  '<a id="gadget" class="item" href="gadget.html">ガジェット<sup>new</sup></a>',
  '<a id="labmem" class="item" href="labmem.html">ラボラトリー</a>',
  '<a id="about" class="item" href="#">について</a>'
];
$("#menu").html(menu.toString().replace(/,/g, ""));

var bg = 1;
var bgCount = 2;
$("section").css("background-image", "url('images/b0.jpg')");
setInterval(function() {
  $("section").css("background-image", "url('images/b" + bg + ".jpg')");
  if (bg == bgCount - 1) {
    bg = 0;
  } else {
    bg++;
  }
}, 5000);
