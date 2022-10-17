// Accordian Scripts
var acc = document.getElementsByClassName("interview-accordian-name");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Change Navbar
$(function () {
    $(document).scroll(function () {
        var $nav = $(".nav-wrapper");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});