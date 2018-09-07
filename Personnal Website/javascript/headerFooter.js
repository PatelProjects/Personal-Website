
/**
Menu dropdown button
**/

$(function() {
    var x = 0;
        
    $('.header-button').eq(x).hover(function() {

        console.log(x);
        $('.category').eq(1).css('background-color', 'orange');

        $('.category').css('transition', '0.4s');

    }, function() {
        $('.category').eq(1).css('background-color', '');
    });
});


$(function() {
    var x = 1;
        
    $('.header-button').eq(x).hover(function() {

        console.log(x);
        $('.category').eq(2).css('background-color', 'orange');

        $('.category').css('transition', '0.4s');

    }, function() {
        $('.category').eq(2).css('background-color', '');
    });
});





/**
Dropdown
**/
        
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.header-button')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");

        var dropdowns2 = document.getElementsByClassName("dropdown-content2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            var openDropdown2 = dropdowns2[i]; 
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
            if (openDropdown2.classList.contains('show')) {
                openDropdown2.classList.remove('show');
            }
        }
    }
}


