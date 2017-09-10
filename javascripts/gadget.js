/**
 * Ready~
 */
$(function() {
  $("#gadget").addClass("active");
});

/**
 * 获取仓库数据
 */
$.ajax("https://api.github.com/orgs/Future-Gadget-Laboratory/repos")
  .done(function(docs) {
    docs.forEach(function(element) {
      let oldHtml = $(".ui.link.three.cards.container").html();
      $(".ui.link.three.cards.container").html(oldHtml + cardCreator(element));
      $(".card").transition({
        animation: "horizontal flip",
        reverse: "auto",
        interval: 200
      });
    }, this);
    $(".ui.active.dimmer").removeClass("active");
  })
  .fail(function(error) {
    alert("error");
  });

/**
 * 生成卡片HtmlCode
 * @param {Object} data 
 */
function cardCreator(data) {
  let html =
    '<div class="card"> \
        <div class="image"> \
            <img src=""> \
        </div> \
        <div class="content"> \
            <div class="header">' +
    data.name +
    '</div> \
            <div class="meta"> \
                <span>创建：' +
    new Date(data.created_at).toLocaleDateString() +
    '</span> \
            </div> \
            <div class="description">' +
    data.description +
    '</div> \
        </div> \
        <div class="extra content"> \
            <a target="_blank" href="' +
    data.html_url +
    '" class="right floated">详情 </a> \
            <span>最近更新：' +
    new Date(data.updated_at).toLocaleDateString() +
    " </span> \
        </div> \
    </div>";
  return html;
}
