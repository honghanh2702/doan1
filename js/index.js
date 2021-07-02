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
    // function([string1, string2],target id,[color1,color2])    
    consoleText(['Hi Everybody', 'Welcome to Wachsen book (Bookstore VKU)', 'Where books are considered a valuable resource for human knowledge'], 'text', ['tomato', 'rebeccapurple', 'red']);

    function consoleText(words, id, colors) {
        if (colors === undefined) colors = ['#fff'];
        var visible = true;
        var con = document.getElementById('console');
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id)
        target.setAttribute('style', 'color:' + colors[0])
        window.setInterval(function() {

            if (letterCount === 0 && waiting === false) {
                waiting = true;
                target.innerHTML = words[0].substring(0, letterCount)
                window.setTimeout(function() {
                    var usedColor = colors.shift();
                    colors.push(usedColor);
                    var usedWord = words.shift();
                    words.push(usedWord);
                    x = 1;
                    target.setAttribute('style', 'color:' + colors[0])
                    letterCount += x;
                    waiting = false;
                }, 1000)
            } else if (letterCount === words[0].length + 1 && waiting === false) {
                waiting = true;
                window.setTimeout(function() {
                    x = -1;
                    letterCount += x;
                    waiting = false;
                }, 1000)
            } else if (waiting === false) {
                target.innerHTML = words[0].substring(0, letterCount)
                letterCount += x;
            }
        }, 120)
        window.setInterval(function() {
            if (visible === true) {
                con.className = 'console-underscore hidden'
                visible = false;

            } else {
                con.className = 'console-underscore'

                visible = true;
            }
        }, 400)
    }
});