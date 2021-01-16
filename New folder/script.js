$("document").ready(function() {
    setTimeout(() => {
        $("body").css("background", "green")
        $("body").css("transition", "1s ease")
    }, 1000);
    $("button").click(function() {

        $(".mini").css("position", "absolute");
        $(".mini").css("left", 0);

        $(".mini").css("top", 50);


    })
})