// document.addEventListener('DOMContentLoaded', function () {


//   var track = document.querySelector('.carousel-track'),
//     slides = Array.from(track.children),
//     nextBtn = document.getElementById('carousel-right'),
//     prevBtn = document.getElementById('carousel-left'),
//     dotsContainer = document.getElementById('carousel-dots'),
//     dots = Array.from(dotsContainer.children),
//     slideWidth = slides[0].getBoundingClientRect().width;


//   var setSlidePosition = function (slide, index) {
//     slide.style.left = slideWidth * index + 'px';
//   }

//   slides.forEach(setSlidePosition);

//   var moveToSlide = function (track, currentSlide, targetSlide) {
//     track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
//     currentSlide.classList.remove('current-slide');
//     targetSlide.classList.add('current-slide');
//   };

//   var updateDots = function (currentDot, targetDot) {
//     currentDot.classList.remove('current-slide');
//     targetDot.classList.add('current-slide');
//   };

//   var hideShowArrows = function (slides, prevBtn, nextBtn, targetIndex) {
//     if (targetIndex === 0) {
//       prevBtn.classList.add('is-hidden');
//       nextBtn.classList.remove('is-hidden');
//     } else if (targetIndex === slides.length - 1) {
//       prevBtn.classList.remove('is-hidden');
//       nextBtn.classList.add('is-hidden');
//     } else {
//       prevBtn.classList.remove('is-hidden');
//       nextBtn.classList.remove('is-hidden');
//     }
//   }

//   nextBtn.addEventListener('click', function (e) {
//     var currentSlide = track.querySelector('.current-slide'),
//       nextSlide = currentSlide.nextElementSibling,
//       currentDot = dotsContainer.querySelector('.current-slide'),
//       nextDot = currentDot.nextElementSibling,
//       nextIndex = slides.findIndex(function (slide) {
//         return slide === nextSlide;
//       });

//     moveToSlide(track, currentSlide, nextSlide);
//     updateDots(currentDot, nextDot);
//     hideShowArrows(slides, prevBtn, nextBtn, nextIndex);
//   });

//   prevBtn.addEventListener('click', function (e) {
//     var currentSlide = track.querySelector('.current-slide'),
//       prevSlide = currentSlide.previousElementSibling,
//       currentDot = dotsContainer.querySelector('.current-slide'),
//       prevDot = currentDot.previousElementSibling,
//       prevIndex = slides.findIndex(function (slide) {
//         return slide === prevSlide;
//       });

//     moveToSlide(track, currentSlide, prevSlide);
//     updateDots(currentDot, prevDot);
//     hideShowArrows(slides, prevBtn, nextBtn, prevIndex);
//   });

//   dotsContainer.addEventListener('click', function (e) {
//     var targetDot = e.target.closest('button');

//     if (!targetDot) return;

//     var currentSlide = track.querySelector('.current-slide'),
//       currentDot = dotsContainer.querySelector('.current-slide'),
//       targetSlide = slides[targetIndex];
//     var targetIndex = dots.findIndex(function (dot) {
//       return dot === targetDot
//     });

//     moveToSlide(track, currentSlide, targetSlide);
//     updateDots(currentDot, targetDot);
//     hideShowArrows(slides, prevBtn, nextBtn, targetIndex);
//   })
// });
