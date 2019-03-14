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

    $("#openmenu").click(function() {
        $("#menu").animate({bottom: "200px"}, 1500);
        $("#menuitems").css("display", "block");
        $("#openmenu").css("display", "none");
        $("#closemenu").css("display", "block");
    });

    $("#closemenu").click(function() {
        $("#menu").animate({bottom: "0px"}, 1000);
        $("#menuitems").css("display", "none");
        $("#openmenu").css("display", "block");
        $("#closemenu").css("display", "none");
    });

    $("#menu a").click(function() {
      $("#menu").animate({bottom: "0px"}, 1000);
      $("#menuitems").css("display", "none");
      $("#openmenu").css("display", "block");
      $("#closemenu").css("display", "none");
    });
});
