/**
 * Hero Carousel Component
 * Autoplay timing: 6 seconds (based on e-commerce market research standards)
 */

export class HeroCarousel {
  constructor(container, options = {}) {
    this.container = container;
    this.slides = options.slides || [];
    this.autoplayDelay = options.autoplayDelay || 6000; // 6 seconds
    this.currentIndex = 0;
    this.autoplayTimer = null;
    this.isPaused = false;

    this.init();
  }

  init() {
    if (!this.container || this.slides.length === 0) return;

    this.render();
    this.attachEventListeners();
    this.startAutoplay();
  }

  render() {
    const carouselHTML = `
      <div class="hero-carousel-wrapper relative">
        <!-- Background Image Slides (Images Only) -->
        <div class="hero-carousel-slides relative overflow-hidden">
          ${this.slides.map((slide, index) => this.renderSlide(slide, index)).join("")}
        </div>
        
        <!-- Dark Gradient Overlay (Mobile) -->
        <div class="hero-gradient-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent lg:hidden z-[5]"></div>
        
        <!-- Coded Overlay Content (NOT an image) -->
        <div class="hero-overlay absolute inset-0 flex items-end lg:items-center pointer-events-none z-10">
          <div class="hero-content-box w-full lg:w-auto lg:max-w-[500px] lg:ml-auto pointer-events-auto">
            <div class="hero-content-inner p-6 text-white md:p-8 lg:p-10 lg:m-8 lg:bg-brand lg:rounded-2xl lg:shadow-2xl">
              <!-- Eyebrow Text -->
              <p class="text-xs font-bold uppercase tracking-[0.2em] text-white/80 md:text-sm">
                FairPrice Gift Cards
              </p>
              
              <!-- Main Heading -->
              <h1 class="mt-3 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
                Everyday gifting,<br />made a little better
              </h1>
              
              <!-- Description -->
              <p class="mt-4 text-sm leading-relaxed text-white/90 md:text-base">
                For anyone who deserves a little cheer, from colleagues to clients or friends. 
                Pick a design, choose a value, and make someone's day today.
              </p>
              
              <!-- CTA Buttons -->
              <div class="mt-6 flex flex-wrap gap-3">
                <button
                  class="bg-white px-6 py-3 text-sm font-semibold text-brand transition-all duration-200 hover:bg-slate-100 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
                  onclick="window.location.href='#egift'"
                >
                  Send Personal eGift
                </button>
                <button
                  class="border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
                  onclick="window.location.href='#corporate-cards'"
                >
                  Corporate Gifting
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Controls -->
        ${this.slides.length > 1 ? this.renderControls() : ""}
      </div>
    `;

    this.container.innerHTML = carouselHTML;
    this.slidesContainer = this.container.querySelector(".hero-carousel-slides");
    this.slideElements = this.container.querySelectorAll(".hero-slide");
    this.indicators = this.container.querySelectorAll(".carousel-indicator");
  }

  renderSlide(slide, index) {
    return `
      <div 
        class="hero-slide absolute inset-0 transition-opacity duration-700 ${index === 0 ? "opacity-100 z-10" : "opacity-0 z-0"}"
        data-slide-index="${index}"
        role="img"
        aria-label="${slide.alt || `Hero slide ${index + 1}`}"
      >
        <!-- Background Image Only (No overlay text in image) -->
        <img 
          src="${slide.image}" 
          alt=""
          class="w-full h-full object-cover select-none"
          draggable="false"
        />
      </div>
    `;
  }

  renderControls() {
    return `
      <!-- Previous/Next Buttons -->
      <button 
        class="carousel-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 transition shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        aria-label="Previous slide"
      >
        <svg class="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        class="carousel-next absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 transition shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        aria-label="Next slide"
      >
        <svg class="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Indicators - Bottom of carousel -->
      <div class="carousel-indicators absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        ${this.slides.map((_, index) => `
          <button 
            class="carousel-indicator w-3 h-3 rounded-full transition-all duration-300 ${index === 0 ? "scale-125" : "hover:bg-white/80"}"
            style="background-color: ${index === 0 ? "#EF0000" : "rgba(255, 255, 255, 0.6)"};"
            data-slide-index="${index}"
            aria-label="Go to slide ${index + 1}"
          ></button>
        `).join("")}
      </div>
    `;
  }

  attachEventListeners() {
    // Previous button
    const prevBtn = this.container.querySelector(".carousel-prev");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => this.prev());
    }

    // Next button
    const nextBtn = this.container.querySelector(".carousel-next");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => this.next());
    }

    // Indicators
    if (this.indicators) {
      this.indicators.forEach((indicator) => {
        indicator.addEventListener("click", (e) => {
          const index = parseInt(e.currentTarget.dataset.slideIndex);
          this.goToSlide(index);
        });
      });
    }

    // Pause on hover
    this.container.addEventListener("mouseenter", () => this.pauseAutoplay());
    this.container.addEventListener("mouseleave", () => this.resumeAutoplay());

    // Pause on focus (accessibility)
    this.container.addEventListener("focusin", () => this.pauseAutoplay());
    this.container.addEventListener("focusout", () => this.resumeAutoplay());

    // Keyboard navigation
    this.container.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        this.prev();
      } else if (e.key === "ArrowRight") {
        this.next();
      }
    });
  }

  goToSlide(index) {
    if (index === this.currentIndex) return;

    // Update slides
    this.slideElements[this.currentIndex].classList.remove("opacity-100", "z-10");
    this.slideElements[this.currentIndex].classList.add("opacity-0", "z-0");

    this.slideElements[index].classList.remove("opacity-0", "z-0");
    this.slideElements[index].classList.add("opacity-100", "z-10");

    // Update indicators
    if (this.indicators.length > 0) {
      // Deactivate current indicator
      this.indicators[this.currentIndex].classList.remove("scale-125");
      this.indicators[this.currentIndex].style.backgroundColor = "rgba(255, 255, 255, 0.6)";

      // Activate new indicator
      this.indicators[index].classList.add("scale-125");
      this.indicators[index].style.backgroundColor = "#EF0000";
    }

    this.currentIndex = index;
    this.resetAutoplay();
  }

  next() {
    const nextIndex = (this.currentIndex + 1) % this.slides.length;
    this.goToSlide(nextIndex);
  }

  prev() {
    const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.goToSlide(prevIndex);
  }

  startAutoplay() {
    if (this.slides.length <= 1) return;
    
    this.autoplayTimer = setInterval(() => {
      if (!this.isPaused) {
        this.next();
      }
    }, this.autoplayDelay);
  }

  pauseAutoplay() {
    this.isPaused = true;
  }

  resumeAutoplay() {
    this.isPaused = false;
  }

  resetAutoplay() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
    }
    this.startAutoplay();
  }

  destroy() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
    }
  }
}
