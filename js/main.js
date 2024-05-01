(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);







// $(document).ready(function(){
//     $("#myModal").modal('show');
//   });



document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeToggle = document.querySelector('.close-toggle');
    const offcanvasMenu = document.querySelector('.offcanvas-menu');
    const overlay_offcanvas = document.querySelector('.overlay_offcanvas')
    menuToggle.addEventListener('click', function () {
      offcanvasMenu.style.display = "block";
      offcanvasMenu.style.animation = "entrada_sidebar normal 1s";
      overlay_offcanvas.style.display = "block"
    });

    closeToggle.addEventListener('click', function () {
      offcanvasMenu.style.animation = "saida_sidebar normal 1.5s";

      setTimeout(function() {
        offcanvasMenu.style.display = "none";
        overlay_offcanvas.style.display = "none"

      }, 1500); // Definindo um atraso de 1 segundo para esconder a offcanvas menu após a animação de saída
    });
  });
  
  $(document).ready(function(){
    var slideIndex = 0;
    showSlides();

    function showSlides() {
      var slides = $(".slideshow").children("p");
      for (var i = 0; i < slides.length; i++) {
        $(slides[i]).css("display", "none");  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      $(slides[slideIndex-1]).css("display", "block");  
      setTimeout(showSlides,1000); // Troca a cada 5 segundos
    }
  });




  document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
      item.addEventListener('click', function(event) {
        event.preventDefault();
        const target = this.getAttribute('data-target');
        scrollToSection(target);
      });
    });

    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });


  // Função para rolar automaticamente os cards
  function scrollSlider() {
    const slider = document.querySelector('.slider_beneficios');
    const cards = document.querySelectorAll('.card');
    let scrollAmount = 0;
    const cardWidth = cards[0].offsetWidth + 20; // Largura do card + margem direita

    setInterval(() => {
      slider.scrollTo({
        top: 0,
        left: (scrollAmount += cardWidth),
        behavior: 'smooth'
      });

      if (scrollAmount >= (cards.length - 1) * cardWidth) {
        scrollAmount = 0;
      }
    }, 10000); // Altere o valor para ajustar a velocidade da rolagem
  }

  window.onload = scrollSlider;

  let isDragging = false;
  let startPosition = 0;
  let currentScrollLeft = 0;

  function startDrag(event) {
    isDragging = true;
    startPosition = event.clientX;
    currentScrollLeft = document.querySelector('.slider_beneficios').scrollLeft;

  }

  function dragging(event) {
    if (!isDragging) return;
    const slider = document.querySelector('.slider_beneficios');
    const scrollDistance = event.clientX - startPosition;
    slider.scrollLeft = currentScrollLeft - scrollDistance;
  }

  function endDrag(event) {
    isDragging = false;
  }

  window.addEventListener('scroll', function() {
    var navigation = document.getElementById('navigation');
    var distanceToBottom = document.documentElement.scrollHeight - (window.innerHeight + window.scrollY);
  
    if (distanceToBottom < 500) {
      navigation.classList.add('hide-navigation');
    } else {
      navigation.classList.remove('hide-navigation');
    }
  });


    const carousel = document.querySelector('.carousel_max');

  carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPosition = e.clientX;
    startScroll = carousel.scrollLeft;
    carousel.style.cursor = 'grabbing';
  });

  carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startPosition;
    carousel.scrollLeft = startScroll - deltaX;
  });

  carousel.addEventListener('mouseup', () => {
    isDragging = false;
    carousel.style.cursor = 'grab';
  });

  carousel.addEventListener('mouseleave', () => {
    isDragging = false;
    carousel.style.cursor = 'grab';
  });