const slides = [
    '<div class="carousel__item"><div class="user-img"><img src="img/testimonials/alice-jackson.png" alt="Alice Jackson"></div><div class="user-name">Alice Jackson</div><div class="clock"></div><div class="date"></div><div class="user-feedback">"The scenery was beautiful and it was the perfect way to spend an afternoon. They have a tremendous collection of the finest wines. I would highly recommend visiting this winery!"</div><div class="feedback-date">march 25, 2023</div></div>', 
    '<div class="carousel__item"><div class="user-img"><img src="img/testimonials/amanda-wilson.png" alt="Amanda Wilson"></div><div class="user-name">Amanda Wilson</div><div class="user-feedback">"I"m so happy for the opening of the Pinot Noir Winery. They have a tremendous collection of the finest wines. We had a really great time there and will definitely come back soon."</div><div class="feedback-date">december 15, 2022</div></div>', 
    '<div class="carousel__item"><div class="user-img"><img src="img/testimonials/will-smith.png" alt="Will Smith"></div><div class="user-name">Will Smith</div><div class="user-feedback">"Visiting the winery was an amazing experience! The staff were so friendly and knowledgeable and the wine was delicious. I"ve already recommended Pinot Noir to my friends."</div><div class="feedback-date">january 04, 2023</div></div>'
  ];
  
  let currentSlide = 1;
  
  const slideContainer = document.querySelector('.testimonials__carousel__items');
  
  function renderSlide() {
      // Видаляємо поточний слайд, якщо він існує
      const currentSlideElement = slideContainer.querySelector(".carousel__item");
      if (currentSlideElement) {
          slideContainer.removeChild(currentSlideElement);
      }
  
      // Додаємо новий слайд
      slideContainer.insertAdjacentHTML("beforeend", slides[currentSlide]);
  
      renderIndicators();
  }
  
  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      renderSlide();
  }
  
  function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      renderSlide();
  }
  
  // Викликаємо функцію renderSlide() після завантаження сторінки
  window.addEventListener("load", renderSlide);
  
  // Додаємо обробник кліків на кнопки "Наступний слайд" та "Попередній слайд"
  const nextButton = document.querySelector('.products__carousel-btn-next');
  nextButton.addEventListener('click', nextSlide);
  
  const prevButton = document.querySelector('.products__carousel-btn-prev');
  prevButton.addEventListener('click', prevSlide);
  
  window.addEventListener('resize', renderSlide);
  
  function renderIndicators() {
      const indicatorsContainer = document.querySelector('.products__carousel-indicators');
      indicatorsContainer.innerHTML = '';
      for (let i = 0; i < slides.length; i++) {
          indicatorsContainer.innerHTML += `<ul class="products__carousel-indicator ${i === currentSlide ? 'products__carousel-indicator--active' : ''}"></ul>`;
      }
      const indicators = document.querySelectorAll('.products__carousel-indicator');
      indicators.forEach((indicator, index) => {
          indicator.addEventListener('click', () => {
              currentSlide = index;
              renderSlide();
              renderIndicators(slides, currentSlide);
          });
      });
  }
  
  renderIndicators();
  
  

