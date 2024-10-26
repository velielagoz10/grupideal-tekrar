// Sayfa tamamen yüklendiğinde çalışır
window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  const content = document.querySelector(".content");

  // Preloader'ı gizle ve içerik göster
  preloader.style.display = "none";
  content.style.display = "block";
  content.style.display = "flex";
  content.style.flexDirection = "column";
  content.style.height = "100%";

  // İçeriğin görünmesini sağla (yumuşak geçiş)
  setTimeout(() => {
    content.style.opacity = 1;
  }, 50);
});
