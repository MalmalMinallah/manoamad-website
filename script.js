let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}


    function spider() {
        var name = document.getElementById("nameHere").value;
        var name2 = document.getElementById("nameHere2").value;
        alert(name +" "+ name2 + " You're late! It already happened...");
    }

    function drstrange() {
      document.getElementById("name").innerHTML = nameHere.value;
  }


$(".wrapper .single-item > span").on("mouseenter mouseleave",function(e){
  $(".wrapper .single-item.active").removeClass("active");
    $(this).parent().addClass("active");
});

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}


