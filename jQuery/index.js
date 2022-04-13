$(document).ready(function () {
    $("button").click(function () {
        $('p').html("Some appended text.");

    });
    $("button").dblclick(function(){
        $("button").css("color","red");
      });
});