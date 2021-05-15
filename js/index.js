$(document).ready(function() {
    // Activate Carousel
    $("#myCarousel").carousel();
    $("#myCarousel1").carousel();
    // Enable Carousel Indicators
    $(".item1").click(function() {
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function() {
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function() {
        $("#myCarousel").carousel(2);
    });
    $(".book").click(function() {
        $("#myCarousel1").carousel(0);
    });
    $(".book1").click(function() {
        $("#myCarousel1").carousel(1);
    });
    $(".book2").click(function() {
        $("#myCarousel1").carousel(2);
    });

    // Enable Carousel Controls
    $(".carousel-control-prev").click(function() {
        $("#myCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function() {
        $("#myCarousel").carousel("next");
    });
    $(".carousel-control-prev").click(function() {
        $("#myCarousel1").carousel("prev");
    });
    $(".carousel-control-next").click(function() {
        $("#myCarousel1").carousel("next");
    });
});