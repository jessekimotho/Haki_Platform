$(".music").click(function() {
    $(this).toggleClass("zima");
    var bool = $("audio").prop("muted");
    $("audio").prop("muted", !bool);
});

$(document).ready(function() {


    $(".allforward").removeClass("whiter")
});

$(".exp-1").click(function() {

    $("#noise").get(0).play();
    $("#getstart").get(0).play();
    $(".inturo").removeClass("shownow");
    $(".nameinput").addClass("shownow");
    $("#noise").prop("volume", .7);
    $(".nameenter").focus();
});

$(".buttona").click(function() {
    $("#buttonplay").get(0).play();
});


$(".sec-2").click(function() {
    $(".act-home").removeClass("shownow");
    $(".adv-select").addClass("shownow");
});

$(".backtomain").click(function() {
    $(".adv-select").removeClass("shownow");
    $(".act-home").addClass("shownow");

});

$(".adv-1").click(function() {
    $(".adv-select").removeClass("shownow");
    $(".adv-1start").addClass("shownow");
    $("#noise").prop("volume", .4);
    $("#t1").get(0).play();
});

$(".back").click(function() {

    if ($('.back').hasClass("first-back")) {
        $("#t1")[0].pause();
        $("#t1")[0].currentTime = 0;
        $(".adv-select").addClass("shownow");
        $(".adv-1start").removeClass("shownow");

    } else if ($('.back').hasClass("second-back")) {

        $("#tem1")[0].pause();
        $("#tem1")[0].currentTime = 0;
        $("#t1").get(0).play();
        $(".second-back").addClass("first-back").removeClass("second-back");
        $(".second-next").addClass("first-next").removeClass("second-next");
        $(".chathol").text("Hi there! I’m Taji. Today, we’re gonna learn about what child rights are, and how we can get help when someone takes away our rights.");
    } else if ($('.back').hasClass("third-back")) {
        $("#tem1")[0].pause();
        $("#tem1")[0].currentTime = 0;
        $("#t1").get(0).play();
        $(".third-back").addClass("second-back").removeClass("third-back");
        $(".third-next").addClass("second-next").removeClass("third-next");
        $(".chathol").text("And I’m Temi. If you get stuck along the way, remember you can always press “back” to go back. Now, let’s learn together.");
    } else if ($('.back').hasClass("fourth-back")) {
        $("#tem1")[0].pause();
        $("#tem1")[0].currentTime = 0;
        $("#t1").get(0).play();
        $(".third-back").addClass("second-back").removeClass("third-back");
        $(".third-next").addClass("second-next").removeClass("third-next");
        $(".chathol").text("Hi there! I’m Taji. Today, we’re gonna learn about what child rights are, and how we can get help when someone takes away our rights.");
    } else {}
});

$(".next, .back").click(function() {
    if ($('.conv-hol').hasClass("temiconvo")) {
        $(".ontemi").addClass("smallify");
        $(".ontaji").removeClass("smallify");
        $(".temiconvo").addClass("tajiconvo");
        $(".tajiconvo").removeClass("temiconvo");
    } else {
        $(".ontaji").addClass("smallify");
        $(".ontemi").removeClass("smallify");
        $(".tajiconvo").addClass("temiconvo");
        $(".tajiconvo").removeClass("tajiconvo");
    }
});





$(".closer-close").click(function() {
    $(".adv-select").addClass("shownow");
    $(".adv-1start").removeClass("shownow");
    $("#t1")[0].pause();
    $("#tem1")[0].pause();
    $("#t1")[0].currentTime = 0;
    $("#tem1")[0].currentTime = 0;

});




$('.sec-2').click(function() {
    $("#adventure")[0].play();
});


$(".nameenter").keyup(function() {

    $("#key")[0].pause();
    $("#key")[0].currentTime = 0;
    $("#key")[0].play();

    if ($(this).val().length > 0) {
        $(".nameplace").removeClass("nameshow");
        $(".nameplace").removeClass("namewarn");
        $(".nameplace").text("Enter your name");
        $(".nameenter").attr("placeholder", "Enter your name");
    } else {
        $(".nameplace").addClass("nameshow");
    }
});

$(".go-butt").click(function() {

    if (!$(".nameenter").val()) {
        $(".nameplace").text("Please enter your name");
        $(".nameplace").removeClass("nameshow");
        $(".nameplace").addClass("namewarn");

        $(".nameenter").focus();
        $(".nameenter").attr("placeholder", "");

    } else {
        var nameo = $(".nameenter").val()
        Cookies.set("jina", "jes", { expires: 7, path: '/' });
        var jacko = Cookies.get("jina");
        $('.tokahapa').html(jacko);
        $(".sponsors").addClass("hidenow");
        $(".nameinput").removeClass("shownow");
        $(".act-home").addClass("shownow");
        $(".mainchar").addClass("hidenow");
        $(".inturo").addClass("hidenow");
        $("#fantastic").get(0).play();
        //var actualname = $(".nameenter").val();

        //$(".showname").text(actualname);

        $(".taji").addClass("resize");
        $(".temi").addClass("resize");

    }

});