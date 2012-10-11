

function check_name(name){
if( name == "gabriel"){
return "Win";
}else if( name == "clement"){
return "we find clement";
}else{
var res = "Truth" +name+ "is different from gabriel and clement";
return res;
}
}


$(document).ready(function(){

$(function() {
  $('#texteJQ').html('Win');
});

$("#menu1").click(function(){
  $("#show1").show();
}); 


$(document).ready(function() {
// initialize default menu width
 
initwidth = $("li").width(); // updated
 
// hover in
$("li").hover( function(){
// get the title inside <a>
description = $(this).children("a").attr("title");
// start the animation
$(this).stop().animate({width: "220"},{queue:false, duration:"fast" });
// remove previously <p>
$(this).children("p").remove();
// create <p> and attach title into it
$(this).find("a").after("<p>"+description+"</p>")
// create animation to make it looks good
$(this).children("p").stop().animate({ opacity: "show" }, {queue:false, duration:"fast"});
// hover out
},function(){
// animate it to the basic width
$(this).stop().animate({width: initwidth},{queue:false, duration:"fast"});
// fade out animation
$(this).children("p").stop().animate({ opacity: "0" }, {queue:false, duration:"fast"});
});
});

