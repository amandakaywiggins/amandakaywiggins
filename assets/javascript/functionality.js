$(document).ready(function() {



    $("img").click(function() {
        var id = $(event.target).attr("id");
        console.log(id);

        if (id === "slide1") {
            window.open("https://amandakaywiggins.github.io/women-artists/index.html");
        } else if (id === "slide2") {
            window.open("https://amandakaywiggins.github.io/shuttle-schedule/index.html");
        } else if (id === "slide3") {
            window.open("https://amandakaywiggins.github.io/lit-rebels-quiz/index.html");
        } else {
            console.log ("nope");
        }
    });

    function launchCarousel() {
        var divID = $("#artcarousels");
        if (divID.style.display === "none") {
            divID.style.display = "block";
        } else {
            divID.style.display = "none";
        };
    };

    $("#bodiesI").click(function() {
        $("#artcarousels").css("display", "block");
        $(".bodiesI").css("display", "block");
        $(".heartlines").css("display", "none");
        $(".bodiesII").css("display", "none");

        $("#close").click(function() {
            $("#artcarousels").css("display", "none");
            $(".bodiesI").css("display", "none");
        });
    });

    $("#bodiesII").click(function() {
        $("#artcarousels").css("display", "block");
        $(".bodiesII").css("display", "block");
        $(".heartlines").css("display", "none");
        $(".bodiesI").css("display", "none");

        $("#close").click(function() {
            $("#artcarousels").css("display", "none");
            $(".bodiesI").css("display", "none");
        });
    });

    $("#heartlines").click(function() {
        $("#artcarousels").css("display", "block");
        $(".heartlines").css("display", "block");
        $(".bodiesI").css("display", "none");
        $(".bodiesII").css("display", "none");

        $("#close").click(function() {
            $("#artcarousels").css("display", "none");
            $(".heartlines").css("display", "none");
        });
    });

    function watchSize(x) {
      if (x.matches) {
        $("#closemenu").click(function() {
            $("#menu").css("margin-bottom", "-20%");
            $("#closemenu").css("display", "none");
            $("#openmenu").css("display", "block");
        });

        $("#openmenu").click(function() {
            $("#menu").css("margin-bottom", "0%");
            $("#closemenu").css("display", "block");
            $("#openmenu").css("display", "none");
        })
      } else {
        $("#closemenu").click(function() {
            $("#menu").css("margin-bottom", "-65%");
            $("#closemenu").css("display", "none");
            $("#openmenu").css("display", "block");
        });

        $("#openmenu").click(function() {
            $("#menu").css("margin-bottom", "0%");
            $("#closemenu").css("display", "block");
            $("#openmenu").css("display", "none");
        })
      };
    };

    var x = window.matchMedia("(min-width: 760px)")

    watchSize(x);
    x.addListener(watchSize);

    $("#menu a").click(function() {
        if (x.matches) {
          $("#menu").css("margin-bottom", "-15%");
          $("#closemenu").css("display", "none");
          $("#openmenu").css("display", "block");
        } else {
          $("#menu").css("margin-bottom", "-65%");
          $("#closemenu").css("display", "none");
          $("#openmenu").css("display", "block");
        };
    });
});
