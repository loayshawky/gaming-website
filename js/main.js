const menuIcon = document.querySelector(".menu-icon"),
menu = document.querySelector(".menu");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("move");
    menu.classList.toggle("active");
};

// nofification
const notification = document.querySelector(".notification"),
        notion = document.querySelector("#notification-icon");
        notion.onclick = () => {
            notification.classList.toggle("active");
        };

// swiper
var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

  // swiper home page

    var swiper = new Swiper(".home", {
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
