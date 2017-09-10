$(function() {
  $(".ui.active.dimmer").removeClass("active");
  $("#home").addClass("active");

  $(".context").each(function(i) {
    let self = this;
    window.setTimeout(function() {
      $(self).animate(
        {
          bottom: "10px",
          opacity: "1"
        },
        "slow"
      );
    }, i * 1000);
  });
});
