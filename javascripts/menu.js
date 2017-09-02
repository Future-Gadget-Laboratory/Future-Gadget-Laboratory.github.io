// let menu =
//   ' \
// <a id="home" class="item" href="#">Home </a> \
// <a id="labmen" class="item" href="#">Lab Mem </a> \
// <a id="about" class="item" href="#">About </a>';

// $("#menu").html(menu);
let menu = [
  '<a id="home" class="item" href="#">ホームページ</a>',
  '<a id="labmen" class="item" href="#">ラボラトリー</a>',
  '<a id="about" class="item" href="#">について</a>'
];
$("#menu").html(menu.toString().replace(/,/g ,''));