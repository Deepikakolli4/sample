// $("h1").click(function(){
//     $("h1").addClass("modify");
// })
// $("button").click(function(){
//     $("body").css("background-color", "");
// })
// $("input").keypress(function(event){
//    console.log(event.key);
// })
$("#color").on("keypress",(function(event){
    let colour = $(this).val().toLowerCase();
   $("h1").css("color",colour);
}))
$("#background").on("keypress",(function(event){
    let colour = $(this).val().toLowerCase();
   $("body").css("background-color",colour);
}))
 $("button").eq(0).on("click",(function(){
    $("h1").fadeOut();
}))
$("button").eq(1).on("click",(function(){
    $("h1").fadeIn();
}))
$("button").eq(2).on("click",(function(){
    $("h1").fadeToggle();
}))
$("button").eq(3).on("click",(function(){
    $("h1").slideDown();
}))
$("button").eq(4).on("click",(function(){
    $("h1").slideUp();
}))
$("button").eq(5).on("click",(function(){
    $("h1").slideToggle();
}))
$("button").eq(6).on("click",(function(){
    $("h1").animate({opacity:0.5});
}))
$("button").eq(7).on("click",(function(){
    $("h1").animate({margin:"30%"});
}))
$("button").eq(8).on("click",(function(){
    $("h1").slideDown().slideUp().animate({margin:"30%"});
}))
$("button").eq(9).on("click",(function(){
    $("h1").slideUp().slideDown();
}))