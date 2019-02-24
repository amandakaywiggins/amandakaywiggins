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
        $("#artcarousels").show("slow");
        $("#artcarousels").css("overflowy", "scroll")
        $(".bodiesI").css("display", "block");
        $(".bodiesII, .heartlines, .chum").css("display", "none");
        $("body").css("overflow", "hidden");

        $("#close").click(function() {
            $("#artcarousels").hide("slow");
            $(".bodiesI").css("display", "none");
            $("body").css("overflow", "auto");
        });
    });

    $("#bodiesII").click(function() {
        $("#artcarousels").show("slow");
        $("#artcarousels").css("overflowy", "scroll")
        $(".bodiesII").css("display", "block");
        $(".bodiesI, .heartlines, .chum").css("display", "none");
        $("body").css("overflow", "hidden");

      $("#close").click(function() {
          $("#artcarousels").hide("slow");
          $(".bodiesII").css("display", "none");
          $("body").css("overflow", "auto");
      });
    });

    $("#heartlines").click(function() {
        $("#artcarousels").show("slow");
        $("#artcarousels").css("overflowy", "scroll")
        $(".heartlines").css("display", "block");
        $(".bodiesI, .bodiesII, .chum").css("display", "none");
        $("body").css("overflow", "hidden");

      $("#close").click(function() {
          $("#artcarousels").hide("slow");
          $(".heartlines").css("display", "none");
          $("body").css("overflow", "auto");
      });
    });

    $("#chum").click(function() {
        $("#artcarousels").show("slow");
        $("#artcarousels").css("overflowy", "scroll")
        $(".chum").css("display", "block");
        $(".bodiesI, .bodiesII, .heartlines").css("display", "none");
        $("body").css("overflow", "hidden");

      $("#close").click(function() {
          $("#artcarousels").hide("slow");
          $(".chum").css("display", "none");
          $("body").css("overflow", "auto");
      });
    });

    x = $(window).width();
    console.log(x);

    function watchSize() {
      if (x >= 415) {
        $("#closemenu").click(function() {
            $("#menu").css("transform", "translateY(0%)");
            $("#menu").css("animation-duration", "4000");
            $("#menuitems").css("display", "none");
            $("#closemenu").css("display", "none");
            $("#openmenu").css("display", "block");
        });

        $("#openmenu").click(function() {
            $("#menu").css("transform", "translateY(-30%)");
            $("#menuitems").css("display", "block");
            $("#closemenu").css("display", "block");
            $("#openmenu").css("display", "none");
        });
      }  else {
        $("#closemenu").click(function() {
            $("#menu").css("transform", "translateY(0%)");
            $("#menu").css("animation-duration", "4000");
            $("#menuitems").css("display", "none");
            $("#closemenu").css("display", "none");
            $("#openmenu").css("display", "block");
        });

        $("#openmenu").click(function() {
            $("#menu").css("transform", "translateY(-65%)");
            $("#menuitems").css("display", "block");
            $("#closemenu").css("display", "block");
            $("#openmenu").css("display", "none");
        })
      };
    };

    watchSize();

    $("#menu a").click(function() {
        if (x.matches) {
          $("#menu").css("margin-bottom", "-15%");
          $("#closemenu").css("display", "none");
          $("#openmenu").css("display", "block");
        } else {
          $("#menu").css("transform", "translateY(0%)");
          $("#menuitems").css("display", "none");
          $("#closemenu").css("display", "none");
          $("#openmenu").css("display", "block");
        };
    });
});
