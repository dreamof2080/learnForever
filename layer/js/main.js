$(function () {
  for(var i=1;i<3;i++){
    //给按钮赋点击事件弹出层
    $(".layer_"+i).on("click",function (event) {
      var index = $(event.currentTarget).attr("data-sign");
      $(".layer"+index).show();
    });
  }
});


$(".layer1").on("click",function (event) {
  $(".layer1").hide();
});


function hide(obj){
  obj.hide();
}