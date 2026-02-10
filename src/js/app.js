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

  // Define carousel slides
  const slides = [
    {
      image: "./src/assets/images/hero-C1.png",
      alt: "FairPrice Gift Cards - Everyday gifting made better",
    },
    // Add more slides as needed when more hero images are available
    // {
    //   image: "./src/assets/images/hero-C2.png",
    //   alt: "FairPrice Gift Cards - Corporate Gifting",
    // },
  ];

  // Initialize carousel with 6-second autoplay (based on e-commerce market research)
  const carousel = new HeroCarousel(carouselContainer, {
    slides: slides,
    autoplayDelay: 6000, // 6 seconds
  });

  return carousel;
}

function initLandingPage() {
  // Initialize hero carousel
  initHeroCarousel();
  
  // Initialize other components
  renderBenefits(document.querySelector("#benefits-grid"), landingContent.benefits);
  renderOccasionTabs(document.querySelector("#occasion-tabs"), landingContent.occasions);
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
