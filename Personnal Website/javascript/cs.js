

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentSlide(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > x.length) {
        slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    } 
    for (i = 0; i < dots.length; i++) {
//      dots[i].className = dots[i].className.replace(" active", "");
        $(dots[i]).removeClass(" active");
    }
    x[slideIndex-1].style.display = "block";
    $(dots[slideIndex-1]).addClass(" active");
}







var slideIndex2 = 1;
showSlides(slideIndex2);

function plusSlides(n) {
  showSlides(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides(slideIndex2 = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " active";
  captionText.innerHTML = dots[slideIndex2-1].alt;
}
