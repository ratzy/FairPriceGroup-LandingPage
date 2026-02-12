/**
 * Occasions Carousel Component
 * Handles indicator updates and scroll synchronization for mobile carousel
 */

export class OccasionsCarousel {
  constructor(container) {
    this.container = container;
    this.cardsContainer = container.querySelector('.occasion-cards-container');
    this.cardsGrid = container.querySelector('.occasion-cards-grid');
    this.indicators = container.querySelectorAll('.occasion-indicator');
    this.cards = container.querySelectorAll('.occasion-card');
    
    if (!this.cardsContainer || !this.indicators.length) return;
    
    this.currentIndex = 0;
    this.isScrolling = false;
    this.scrollTimeout = null;
    
    this.init();
  }
  
  init() {
    this.attachScrollListener();
    this.attachIndicatorListeners();
    this.updateActiveIndicator(0);
  }
  
  attachScrollListener() {
    this.cardsContainer.addEventListener('scroll', () => {
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }
      
      // Debounce scroll events
      this.scrollTimeout = setTimeout(() => {
        this.updateIndicatorFromScroll();
      }, 100);
    });
  }
  
  attachIndicatorListeners() {
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        this.scrollToCard(index);
      });
    });
  }
  
  updateIndicatorFromScroll() {
    if (!this.cardsContainer || !this.cards.length) return;
    
    const scrollLeft = this.cardsContainer.scrollLeft;
    const cardWidth = this.cards[0].offsetWidth;
    const gap = 16; // 1rem = 16px
    
    // Calculate which card is most visible
    // On mobile, 2 cards are shown, so we track pairs
    const index = Math.round(scrollLeft / (cardWidth + gap));
    
    if (index !== this.currentIndex) {
      this.currentIndex = Math.min(Math.max(0, index), this.cards.length - 1);
      this.updateActiveIndicator(this.currentIndex);
    }
  }
  
  scrollToCard(index) {
    if (!this.cardsContainer || !this.cards[index]) return;
    
    const cardWidth = this.cards[0].offsetWidth;
    const gap = 16; // 1rem = 16px
    const scrollPosition = index * (cardWidth + gap);
    
    this.cardsContainer.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
    
    this.currentIndex = index;
    this.updateActiveIndicator(index);
  }
  
  updateActiveIndicator(index) {
    if (!this.indicators.length) return;
    
    this.indicators.forEach((indicator, i) => {
      if (i === index) {
        // Active indicator - Red
        indicator.style.backgroundColor = '#EF0000';
        indicator.classList.add('scale-125');
        indicator.classList.remove('bg-gray-300');
      } else {
        // Inactive indicator - Gray
        indicator.style.backgroundColor = '#D1D5DB';
        indicator.classList.remove('scale-125');
        indicator.classList.add('bg-gray-300');
      }
    });
  }
  
  destroy() {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }
}
