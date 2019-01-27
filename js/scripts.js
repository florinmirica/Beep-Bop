$(document).ready(function() {
  jQuery("#favNumber").submit(function(event){
  event.preventDefault();
  var num = parseInt($("input#num").val());
  var toDisplay = "";
   for (var i = 0; i <= num; i ++){
     if  (i % 3 === 0){
       toDisplay = toDisplay + " " + "I'm sorry, Dave. I'm afraid I can't do that";
     }else if (i.toString().includes("1")) {
       toDisplay = toDisplay + " " + "Boop!";
     }else if (i.toString().includes("0")){
       toDisplay = toDisplay + " " + "Beep!";
     } else {
       toDisplay = toDisplay + " " + i;
     }

    };
    alert(toDisplay);
  });
});
