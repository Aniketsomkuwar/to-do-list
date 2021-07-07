$(function () {
  $("button").on("click", function () {
    var value = $("input").val();

    var $ids = $(`<li class="list-group-item item">${value}</li>`);
    $("li:last").after($ids);
  });

  var $li = $("li");

  $list = $("ul");
  $list.on("click", "li", function () {
    var $this = $(this); 
 
    item = $this.text();
    $this.remove(); 
  }); 
});
