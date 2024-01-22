// bekletme
document.addEventListener("DOMContentLoaded", function () {
  // Belirli class ismine sahip linkleri seçin
  var links = document.querySelectorAll("a.bekle");
  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      setTimeout(function () {
        window.location.href = link.href;
      }, 1000);
    });
  });
});
// yıl
var currentYear = new Date().getFullYear();
var copyrightYearElement = document.getElementById("copyright-year");
copyrightYearElement.textContent = currentYear;
// Yukarı ok
function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
// yukarı ok
window.onscroll = function () {
  var scrollButton = document.getElementById("goTopButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};
// bayiler
$(document).ready(function () {
  $("#filterInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#firmalar table tbody tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
