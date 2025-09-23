const swiper = new Swiper(".swiper", {
    slidesPerView: 1, // 1 producto en pantallas pequeñas
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2, // 2 en tablets
      },
      1024: {
        slidesPerView: 3, // 3 en pantallas grandes
      },
    },
  });