  // iconde hamburguer que ao clicar vira um X
  
  function clickme() {
  const element = document.getElementById("element");
  const navbarTogglerIcon = document.getElementById("navbar-toggler-icon");
  if (element.style.display === "none") {
    element.style.display = "block";
    navbarTogglerIcon.classList.remove("bi-list");
    navbarTogglerIcon.classList.add("bi-x-lg");
  } else {
    element.style.display = "none";
    navbarTogglerIcon.classList.remove("bi-x-lg");
    navbarTogglerIcon.classList.add("bi-list");
  }
}

// esse trecho é o codigo que coloca umcapa num video do  youtube que 
// ao clicar na pagina abri automaticamente o video e a reprodução

document.getElementById("play-button").addEventListener("click", function () {
  document.getElementById("youtube-video").style.display = "block";
  document.getElementById("video-cover").style.display = "none";
  document.getElementById("play-button").style.display = "none";
});

// esse outro trecho de codigo é quando um video estiver em um slide e vc clicar
// no video o slide para automaticamente

document.addEventListener("DOMContentLoaded", function () {
  const videoSlides = document.querySelectorAll(".carousel-item");
  videoSlides.forEach(function (slide) {
    slide.addEventListener("click", function () {
      const videoSrc = slide.querySelector("iframe").getAttribute("src");
      const videoId = videoSrc.split("/").pop().split("?")[0];
      window.location.href = "https://www.youtube.com/watch?v=" + videoId;
    });
  });
});

const title = document.getElementById('title');

  // Define a posição anterior do scroll
  let lastScrollTop = 0;

  // Adiciona um evento de rolagem (scroll)
  window.addEventListener('scroll', function() {
    // Obtém a posição atual do scroll
    const currentScroll = window.scrollY || window.pageYOffset;
    
    // Verifica a direção do scroll
    if (currentScroll > lastScrollTop) {
      // Scrolling down
      if (!title.classList.contains('fade-out')) {
        title.classList.remove('fade-in');
        title.classList.add('fade-out');
      }
    } else {
      // Scrolling up
      if (!title.classList.contains('fade-in')) {
        title.classList.remove('fade-out');
        title.classList.add('fade-in');
      }
    }

    // Atualiza a posição anterior do scroll
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });