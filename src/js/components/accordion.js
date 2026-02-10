function setItemState(item, isExpanded) {
  const trigger = item.querySelector("[data-accordion-trigger]");
  const panel = item.querySelector("[data-accordion-panel]");

  if (!trigger || !panel) {
    return;
  }

  trigger.setAttribute("aria-expanded", isExpanded ? "true" : "false");
  panel.hidden = !isExpanded;
}

function closeSiblingItems(currentItem, allItems) {
  allItems.forEach((item) => {
    if (item !== currentItem) {
      setItemState(item, false);
    }
  });
}

function wireAccordion(container) {
  const allowMultiple = container.dataset.multiple === "true";
  const items = Array.from(container.querySelectorAll("[data-accordion-item]"));

  if (!items.length) {
    return;
  }

  items.forEach((item, index) => {
    const trigger = item.querySelector("[data-accordion-trigger]");

    if (!trigger) {
      return;
    }

    if (index === 0) {
      setItemState(item, true);
    } else {
      setItemState(item, false);
    }

    trigger.addEventListener("click", () => {
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";

      if (!allowMultiple) {
        closeSiblingItems(item, items);
      }

      setItemState(item, !isExpanded);
    });
  });
}

export function initAccordion(scope = document) {
  const accordions = Array.from(scope.querySelectorAll("[data-accordion]"));
  accordions.forEach((container) => wireAccordion(container));
}
