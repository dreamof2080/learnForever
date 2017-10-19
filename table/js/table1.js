
$(document).ready(function(){
    $("table tr").hover(function(){
        $(this).children("td").css('background-color','#f4f5f5');
    },function(){
        $(this).children("td").css('background-color','');
    })
});

function getSum(index){
  var inputName = "col" + index;
  var inputs = document.getElementsByName(inputName);
  var total = 0;
  for(var i=0;i<inputs.length;i++){
    var inputValue = inputs[i].value;
    if(isNaN(inputValue)){
      inputValue = 0;
    }
    total += inputValue*1;
  }
  document.getElementById("total"+index).value = total;
}