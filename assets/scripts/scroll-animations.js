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


// Get the image and insert it inside the modal - use its "alt" text as a caption
$('#proto-phone').click(function(){
  $('#img01').attr("src", "./assets/images/wireframes/lowfi/Mobile.png");
  $("#myModal").show();
})

$('#proto-tablet').click(function(){
  $('#img01').attr("src", "./assets/images/wireframes/lowfi/Tablet.png");
  $("#myModal").show();
})

$('#proto-desktop').click(function(){
  $('#img01').attr("src", "./assets/images/wireframes/lowfi/Desktop.png");
  $("#myModal").show();
})

// When the user clicks on <span> (x), close the modal
$('#close-modal').click(function(){
    $("#myModal").hide();
});