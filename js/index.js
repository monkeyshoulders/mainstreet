var hamb = document.getElementById('hmbrg'),
  nav = document.getElementById('mobile-nav-drop');

hamb.addEventListener('click', function () {
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
  }
});




document.addEventListener("DOMContentLoaded", function () {
  console.log('loaded');
  var pop1 = document.getElementById('pop1'),
    pop2 = document.getElementById('pop2'),
    pop3 = document.getElementById('pop3'),
    pop4 = document.getElementById('pop4'),
    pop5 = document.getElementById('pop5'),
    pop6 = document.getElementById('pop6'),
    pop7 = document.getElementById('pop7'),
    pop8 = document.getElementById('pop8'),
    modal1 = document.getElementById('modalOne'),
    modal2 = document.getElementById('modalTwo'),
    modal3 = document.getElementById('modalThree'),
    modal4 = document.getElementById('modalFour'),
    modal5 = document.getElementById('modalFive'),
    modal6 = document.getElementById('modalSix'),
    modal7 = document.getElementById('modalSeven'),
    modal8 = document.getElementById('modalEight')
    close1 = document.getElementById('close1'),
    close2 = document.getElementById('close2'),
    close3 = document.getElementById('close3'),
    close4 = document.getElementById('close4'),
    close5 = document.getElementById('close5'),
    close6 = document.getElementById('close6'),
    close7 = document.getElementById('close7'),
    close8 = document.getElementById('close8');

  pop1.addEventListener('click', function () {
    modal1.style.display = 'flex';
  });

  pop2.addEventListener('click', function () {
    if (modal2.style.display = 'none') {
      modal2.style.display = 'flex';
    } else {
      modal2.style.display = 'none';
    }
  });

  pop3.addEventListener('click', function () {
    if (modal3.style.display = 'none') {
      modal3.style.display = 'flex';
    } else {
      modal3.style.display = 'none';
    }
  });

  pop4.addEventListener('click', function () {
    if (modal4.style.display = 'none') {
      modal4.style.display = 'flex';
    } else {
      modal4.style.display = 'none';
    }
  });

  pop5.addEventListener('click', function () {
    if (modal5.style.display = 'none') {
      modal5.style.display = 'flex';
    } else {
      modal5.style.display = 'none';
    }
  });

  pop6.addEventListener('click', function () {
    if (modal6.style.display = 'none') {
      modal6.style.display = 'flex';
    } else {
      modal6.style.display = 'none';
    }
  });

  pop7.addEventListener('click', function () {
    if (modal7.style.display = 'none') {
      modal7.style.display = 'flex';
    } else {
      modal7.style.display = 'none';
    }
  });

  pop8.addEventListener('click', function () {
    modal8.style.display = 'flex';
  });

  close1.addEventListener('click', function() {
    modal1.style.display = 'none';
  });
  close2.addEventListener('click', function () {
    modal2.style.display = 'none';
  });
  close3.addEventListener('click', function () {
    modal3.style.display = 'none';
  });
  close4.addEventListener('click', function () {
    modal4.style.display = 'none';
  });
  close5.addEventListener('click', function () {
    modal5.style.display = 'none';
  });
  close6.addEventListener('click', function () {
    modal6.style.display = 'none';
  });
  close7.addEventListener('click', function () {
    modal7.style.display = 'none';
  });
  close8.addEventListener('click', function () {
    modal8.style.display = 'none';
  });

});



document.addEventListener('DOMContentLoaded', function () {


  var track = document.querySelector('.carousel-track'),
    slides = Array.from(track.children),
    nextBtn = document.getElementById('carousel-right'),
    prevBtn = document.getElementById('carousel-left'),
    dotsContainer = document.getElementById('carousel-dots'),
    dots = Array.from(dotsContainer.children),
    slideWidth = slides[0].getBoundingClientRect().width;


  var setSlidePosition = function (slide, index) {
    slide.style.left = slideWidth * index + 'px';
  }

  slides.forEach(setSlidePosition);

  var moveToSlide = function (track, currentSlide, targetSlide) {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  };

  var updateDots = function (currentDot, targetDot) {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
  };

  var hideShowArrows = function (slides, prevBtn, nextBtn, targetIndex) {
    if (targetIndex === 0) {
      prevBtn.classList.add('is-hidden');
      nextBtn.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
      prevBtn.classList.remove('is-hidden');
      nextBtn.classList.add('is-hidden');
    } else {
      prevBtn.classList.remove('is-hidden');
      nextBtn.classList.remove('is-hidden');
    }
  }

  nextBtn.addEventListener('click', function (e) {
    var currentSlide = track.querySelector('.current-slide'),
      nextSlide = currentSlide.nextElementSibling,
      currentDot = dotsContainer.querySelector('.current-slide'),
      nextDot = currentDot.nextElementSibling,
      nextIndex = slides.findIndex(function (slide) {
        return slide === nextSlide;
      });

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevBtn, nextBtn, nextIndex);
  });

  prevBtn.addEventListener('click', function (e) {
    var currentSlide = track.querySelector('.current-slide'),
      prevSlide = currentSlide.previousElementSibling,
      currentDot = dotsContainer.querySelector('.current-slide'),
      prevDot = currentDot.previousElementSibling,
      prevIndex = slides.findIndex(function (slide) {
        return slide === prevSlide;
      });

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevBtn, nextBtn, prevIndex);
  });

  dotsContainer.addEventListener('click', function (e) {
    var targetDot = e.target.closest('button');

    if (!targetDot) return;

    var currentSlide = track.querySelector('.current-slide'),
      currentDot = dotsContainer.querySelector('.current-slide'),
      targetSlide = slides[targetIndex];
    var targetIndex = dots.findIndex(function (dot) {
      return dot === targetDot
    });

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevBtn, nextBtn, targetIndex);
  })
});



document.addEventListener('DOMContentLoaded', function () {
  var images = ['img/hero-imgs/header_overlay1.png', 'img/hero-imgs/header_overlay2.png', 'img/hero-imgs/header_overlay3.png', 'img/hero-imgs/header_overlay4.png', 'img/hero-imgs/header_overlay5.png', 'img/hero-imgs/header_overlay6.png', 'img/hero-imgs/header_overlay7.png', 'img/hero-imgs/header_overlay8.png', 'img/hero-imgs/header_overlay9.png', 'img/hero-imgs/header_overlay10.png', 'img/hero-imgs/header_overlay11.png'];

  var landing = document.getElementById("landing");

  var i = 0;
  setInterval(function () {
    landing.style.backgroundImage = 'url(' + images[i] + ')';
    i = i + 1;
    if (i == images.length) {
      i = 0;
    }
  }, 4000);
});
