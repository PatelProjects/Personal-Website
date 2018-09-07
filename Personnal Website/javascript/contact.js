

$(function() {
    var x = 0;
        
    $('.container2').eq(x).hover(function() {

        console.log(x);
        $('img').eq(x).addClass("test");
        $('.description').eq(x).css("display", "block");    


    }, function() {
        $('img').eq(x).removeClass("test");
        $('.description').eq(x).css("display", "none");
    });
});


$(function() {
    var x = 1;
        
    $('.container2').eq(x).hover(function() {

        console.log(x);
        $('img').eq(x).addClass("test");
        $('.description').eq(x).css("display", "block");   


    }, function() {
        $('img').eq(x).removeClass("test");
        $('.description').eq(x).css("display", "none");
    });
});


$(function() {
    var x = 2;
        
    $('.container2').eq(x).hover(function() {

        console.log(x);
        $('img').eq(x).addClass("test");
        $('.description').eq(x).css("display", "block");  


    }, function() {
        $('img').eq(x).removeClass("test");
        $('.description').eq(x).css("display", "none");
    });
});


$(function() {
    var x = 3;
        
    $('.container2').eq(x).hover(function() {

        console.log(x);
        $('img').eq(x).addClass("test");
        $('.description').eq(x).css("display", "block");  


    }, function() {
        $('img').eq(x).removeClass("test");
        $('.description').eq(x).css("display", "none");
    });
});




