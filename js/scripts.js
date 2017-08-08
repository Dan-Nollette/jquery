$(document).ready(function() {
//   $("h1").click(function() {
//     alert("This is a header.");
//   });
//
//   $("p").click(function() {
//     alert("This is a paragraph.");
//   });
//
//   $("img").click(function() {
//     alert("This is an image.");
//   });
 });

$(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").toggle();
  });
});

$(function() {
  $(".clickable1").click(function() {
    $(".text").fadeToggle();
  });
});
