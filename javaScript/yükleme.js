window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  const content = document.querySelector(".content");

  // Minimum preloader süresi: 500ms
  const minimumPreloaderTime = 600;

  // Sayfa yüklenme zamanı ile preloader başlama zamanını hesapla
  const loadStartTime = performance.now();

  setTimeout(() => {
    // Sayfa yüklenme süresini al
    const loadDuration = performance.now() - loadStartTime;

    // Yüklenme süresi 500ms’den azsa beklemeye devam et
    const remainingTime = Math.max(0, minimumPreloaderTime - loadDuration);

    setTimeout(() => {
      preloader.style.display = "none"; // Preloader gizle

      // İçeriği göster ve esnek düzen uygula
      content.style.display = "flex";
      content.style.flexDirection = "column";
      content.style.height = "100%";

      // İçeriğin görünmesini sağla (yumuşak geçiş)
      setTimeout(() => {
        content.style.opacity = 1;
      }, 50);
    }, remainingTime);
  }, 0);
});
