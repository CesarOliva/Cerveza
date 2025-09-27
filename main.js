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

document.getElementById("beer-order-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let beer = document.getElementById("beer-selection").value;
    let quantity = document.getElementById("quantity").value;
    let message = document.getElementById("message").value;

    let texto = `🍻 *Nuevo Pedido* 🍻%0A
1️⃣ Nombre: ${name}%0A
2️⃣ Teléfono: ${phone}%0A
3️⃣ Dirección: ${address}%0A
4️⃣ Producto: ${beer}%0A
5️⃣ Cantidad: ${quantity}%0A
6️⃣ Mensaje: ${message ? message : "Ninguno"}`;

    let url = `https://wa.me/528721386749?text=${texto}`;

    window.open(url, "_blank");
  });