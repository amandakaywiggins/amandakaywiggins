$(document).ready(function() {

    function launchCarousel() {
        var divID = $("#artcarousels");
        if (divID.style.display === "none") {
            divID.style.display = "block";
        } else {
            divID.style.display = "none";
        };
    };

    $("#bodiesI").click(function() {
        $("body").css("position", "fixed");
        $("#artcarousels").show("slow");
        $("#artcarousels").css("display", "block");
        $(".bodiesI").css("display", "block");
        $(".heartlines").css("display", "none");
        $(".bodiesII").css("display", "none");

        $("#close").click(function() {
            $("#artcarousels").scrollTop();
            $("#artcarousels").css("display", "none");
            $(".bodiesI").css("display", "none");
            $("body").css("position", "static");
        });
    });

    $("#bodiesII").click(function() {
        $("body").css("position", "fixed");
        $("#artcarousels").show("slow");
        $("#artcarousels").css("display", "block");
        $(".bodiesII").css("display", "block");
        $(".heartlines").css("display", "none");
        $(".bodiesI").css("display", "none");

        $("#close").click(function() {
            $("#artcarousels").scrollTop();
            $("#artcarousels").css("display", "none");
            $(".bodiesI").css("display", "none");
            $("body").css("position", "static");
        });
    });

    $("#heartlines").click(function() {
        $("body").css("position", "fixed");
        $("#artcarousels").show("slow");
        $("#artcarousels").css("display", "block");
        $(".heartlines").css("display", "block");
        $(".bodiesI").css("display", "none");
        $(".bodiesII").css("display", "none");

        $("#close").click(function() {
            $("#artcarousels").scrollTop();
            $("#artcarousels").css("display", "none");
            $(".heartlines").css("display", "none");
            $("body").css("position", "static");
        });
    });

    function watchSize(x) {
      if (x.matches) {
        $("#closemenu").click(function() {
            $("#menu").css("margin-bottom", "-15%");
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
