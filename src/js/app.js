import { initAccordion } from "./components/accordion.js";
import {
  renderBenefits,
  renderBrands,
  renderDeliveryCards,
  renderFaq,
  renderOccasionTabs,
  renderPhysicalTabs,
  renderStepTabs,
} from "./components/renderers.js";
import { initTabs } from "./components/tabs.js";
import { HeroCarousel } from "./components/carousel.js";
import { OccasionsCarousel } from "./components/occasions-carousel.js";
import { landingContent } from "./data/content.js";

function setCurrentYear() {
  const yearElement = document.querySelector("#year");

  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
}

function initHeroCarousel() {
  const carouselContainer = document.querySelector("#hero-carousel");
  
  if (!carouselContainer) return;

  // Define carousel slides with responsive images
  const slides = [
    {
      desktopImage: "./src/assets/images/hero-C1.png",
      mobileImage: "./src/assets/images/mobile-bg-1.png",
      alt: "FairPrice Gift Cards - Everyday gifting made better",
    },
    {
      desktopImage: "./src/assets/images/hero-C2.png",
      mobileImage: "./src/assets/images/mobile-bg-2.png",
      alt: "FairPrice Gift Cards - Corporate Gifting Solutions",
    },
    {
      desktopImage: "./src/assets/images/hero-C3.png",
      mobileImage: "./src/assets/images/mobile-bg-3.png",
      alt: "FairPrice Gift Cards - Perfect for every occasion",
    },
  ];

  // Initialize carousel with 6-second autoplay (based on e-commerce market research)
  const carousel = new HeroCarousel(carouselContainer, {
    slides: slides,
    autoplayDelay: 6000, // 6 seconds
  });

  return carousel;
}

function initOccasionsCarousel() {
  const occasionsContainer = document.querySelector("#occasion-tabs");
  
  if (!occasionsContainer) return;
  
  // Initialize occasions carousel (for mobile indicator functionality)
  const occasionsCarousel = new OccasionsCarousel(occasionsContainer);
  
  return occasionsCarousel;
}

function initLandingPage() {
  // Initialize hero carousel
  initHeroCarousel();
  
  // Initialize other components
  renderBenefits(document.querySelector("#benefits-grid"), landingContent.benefits);
  renderOccasionTabs(document.querySelector("#occasion-tabs"), landingContent.occasions);
  
  // Initialize occasions carousel after rendering
  initOccasionsCarousel();
  
  renderDeliveryCards(document.querySelector("#delivery-cards"), landingContent.deliveryCards);
  renderStepTabs(document.querySelector("#egift-knowledge-tabs"), landingContent.eGiftTabs, {
    ariaLabel: "eGift card information",
  });
  renderPhysicalTabs(
    document.querySelector("#physical-knowledge-tabs"),
    landingContent.physicalTabs,
    {
      ariaLabel: "Physical gift card information",
    },
  );
  renderBrands(document.querySelector("#brand-strip"), landingContent.brands);
  renderFaq(document.querySelector("#faq-accordion"), landingContent.faq);

  initTabs(document);
  initAccordion(document);
  setCurrentYear();
}

document.addEventListener("DOMContentLoaded", initLandingPage);
