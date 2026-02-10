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
import { landingContent } from "./data/content.js";

function setCurrentYear() {
  const yearElement = document.querySelector("#year");

  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
}

function initLandingPage() {
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
