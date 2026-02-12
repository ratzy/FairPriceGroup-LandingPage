function getIcon(iconName) {
  const iconClass = "h-5 w-5";

  const icons = {
    spark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="M12 3l2.7 5.3L20 11l-5.3 2.7L12 19l-2.7-5.3L4 11l5.3-2.7L12 3Z"/><path d="M4 4l1.2 2.4L7.5 7.5 5.2 8.7 4 11 2.8 8.7.5 7.5l2.3-1.1L4 4Zm16 9l1.1 2.2 2.2 1.1-2.2 1.1L20 19.6l-1.1-2.2-2.2-1.1 2.2-1.1L20 13Z"/></svg>`,
    bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/></svg>`,
    heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="M12 20.5s-7.5-4.5-9-9.3C1.9 7.2 4.1 4 7.5 4c1.9 0 3.6.9 4.5 2.3C12.9 4.9 14.6 4 16.5 4c3.4 0 5.6 3.2 4.5 7.2-1.5 4.8-9 9.3-9 9.3Z"/></svg>`,
    design: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 8h8M8 12h3m2 0h3M8 16h8"/></svg>`,
    edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="M4 20h4l10-10-4-4L4 16v4Z"/><path d="M12 6 16 10"/></svg>`,
    send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="M3 11.8 20.5 3l-3.8 18-4.3-6.1L3 11.8Z"/><path d="m20.5 3-8 11.9"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>`,
    barcode: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="M4 5v14M8 5v14M11 5v14M14 5v14M18 5v14M21 5v14"/></svg>`,
    wallet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="M3 7h17a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/><path d="M3 9V6a2 2 0 0 1 2-2h13"/><path d="M15 13h6"/></svg>`,
    view: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"/><circle cx="12" cy="12" r="3"/></svg>`,
    balance: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="M12 3v18M6 7h7a3 3 0 1 1 0 6H9a3 3 0 1 0 0 6h9"/></svg>`,
    history: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v4h4"/><path d="M12 7v5l3 2"/></svg>`,
    store: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="M3 9h18l-1.5-5h-15L3 9Z"/><path d="M4 9v10h16V9"/><path d="M9 19v-5h6v5"/></svg>`,
    building: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1"/></svg>`,
    bag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>`,
    team: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><circle cx="8" cy="9" r="3"/><circle cx="16" cy="9" r="3"/><path d="M3.5 20a4.5 4.5 0 0 1 9 0M11.5 20a4.5 4.5 0 0 1 9 0"/></svg>`,
    help: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="${iconClass}" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 1 1 4.9 2.3c-.8.6-1.5 1.2-1.5 2.2"/><path d="M12 17h.01"/></svg>`,
  };

  return icons[iconName] || icons.spark;
}

function escapeHTML(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function renderBenefits(target, benefits) {
  if (!target) {
    return;
  }

  target.innerHTML = benefits
    .map(
      (benefit, index) => `
      <article class="benefit-card relative rounded-2xl border-2 border-brand-dark/10 bg-white px-6 py-8 text-center transition-all hover:border-brand/30 hover:shadow-lg">
        <!-- Number Badge -->
        <div class="absolute -top-4 left-1/2 -translate-x-1/2">
          <div class="flex h-8 w-8 items-center justify-center rounded-full bg-brand-dark text-base font-bold text-white">
            ${index + 1}
          </div>
        </div>
        
        <!-- Icon -->
        <div class="mx-auto mt-4 mb-6 flex h-24 w-24 items-center justify-center">
          <img 
            src="./src/assets/images/${benefit.icon}" 
            alt="${escapeHTML(benefit.title)} icon"
            class="h-full w-full object-contain"
          />
        </div>
        
        <!-- Title -->
        <h3 class="mb-3 text-xl font-bold text-brand-dark">${escapeHTML(benefit.title)}</h3>
        
        <!-- Description -->
        <p class="text-sm leading-relaxed text-muted">${escapeHTML(benefit.description)}</p>
      </article>
    `,
    )
    .join("");
}

export function renderOccasionTabs(target, occasions) {
  if (!target || !occasions.length) {
    return;
  }

  target.innerHTML = `
    <div class="occasion-cards-grid grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      ${occasions
        .map(
          (occasion) => `
        <article class="occasion-card group relative overflow-hidden transition-all hover:-translate-y-1">
          <!-- Card Image -->
          <div class="occasion-card-image relative aspect-[4/3] overflow-hidden">
            <img 
              src="./src/assets/images/${escapeHTML(occasion.image)}" 
              alt="${escapeHTML(occasion.label)}"
              class="h-full w-full object-cover transition-transform duration-300"
            />
          </div>
          
          <!-- Card Label -->
            <p class="text-sm font-semibold text-brand-dark">${escapeHTML(occasion.label)}</p>
        </article>
      `,
        )
        .join("")}
    </div>
  `;
}

export function renderDeliveryCards(target, cards) {
  if (!target) {
    return;
  }

  target.innerHTML = cards
    .map(
      (card) => `
      <article class="delivery-card overflow-hidden rounded-2xl">
        <!-- Card Image with Light Blue Background -->
        <div class="delivery-card-image flex items-center justify-center">
          <img 
            src="./src/assets/images/${escapeHTML(card.image)}" 
            alt="${escapeHTML(card.title)}"
            class="max-w-full h-auto object-contain"
          />
        </div>
        
        <!-- Card Content -->
        <div class="p-8 bg-[#FFFFFF] content-wrapper rounded-2xl">
          <h3 class="text-2xl font-bold text-brand-dark">${escapeHTML(card.title)}</h3>
          <p class="mt-2 text-base font-semibold text-slate-900">${escapeHTML(card.description)}</p>
          
          <ul class="mt-6 space-y-3 text-sm text-slate-700">
            ${card.bullets
              .map(
                (bullet) => `
                <li class="flex gap-3 leading-relaxed">
                  <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-dark"></span>
                  <span>${escapeHTML(bullet)}</span>
                </li>
              `,
              )
              .join("")}
          </ul>
          
          <button
            type="button"
            class="mt-8 border-2 border-brand-dark px-6 py-2.5 text-sm font-semibold text-brand-dark transition hover:bg-brand-dark hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark focus-visible:ring-offset-2"
          >
            ${escapeHTML(card.action)}
          </button>
        </div>
      </article>
    `,
    )
    .join("");
}

function renderStepCard(step) {
  return `
    <article class="egift-step-card relative flex flex-col items-center text-center">
      <!-- Step Badge (Coded) -->
      
      
      <!-- Circular Background with Phone Image -->
        <img 
          src="./src/assets/images/${escapeHTML(step.image)}" 
          alt="${escapeHTML(step.title)}"
          class="flex items-center justify-center mb- object-contain"
        />
      
      <!-- Title and Description -->
      <h3 class="text-xl font-bold text-brand-dark mb-3">${escapeHTML(step.title)}</h3>
      <p class="text-sm leading-relaxed text-slate-700 max-w-xs">${escapeHTML(step.description)}</p>
    </article>
  `;
}

export function renderStepTabs(target, tabs, options = {}) {
  if (!target || !tabs.length) {
    return;
  }

  const ariaLabel = options.ariaLabel || "Informational tabs";

  const tabButtons = tabs
    .map(
      (tab, index) => `
      <button
        id="${escapeHTML(tab.id)}-tab"
        role="tab"
        type="button"
        aria-selected="${index === 0 ? "true" : "false"}"
        aria-controls="${escapeHTML(tab.id)}-panel"
        data-tab-button
        data-tab-target="${escapeHTML(tab.id)}-panel"
        class="egift-tab-button relative px-6 py-3 text-base font-semibold transition-colors"
      >
        ${escapeHTML(tab.label)}
        <span class="tab-underline absolute bottom-0 left-0 right-0 h-1 bg-brand transition-opacity"></span>
      </button>
    `,
    )
    .join("");

  const tabPanels = tabs
    .map(
      (tab, index) => `
      <div
        id="${escapeHTML(tab.id)}-panel"
        role="tabpanel"
        aria-labelledby="${escapeHTML(tab.id)}-tab"
        data-tab-panel
        class="tab-panel"
        ${index !== 0 ? "hidden" : ""}
      >
        <div class="grid gap-12 md:grid-cols-3 mt-12">
          ${tab.steps.map((step) => renderStepCard(step)).join("")}
        </div>
      </div>
    `,
    )
    .join("");

  target.innerHTML = `
    <section class="egift-tabs-section" data-tabs>
      <div
        role="tablist"
        aria-label="${escapeHTML(ariaLabel)}"
        class="flex justify-center gap-8 border-b-2 border-slate-200"
      >
        ${tabButtons}
      </div>
      <div class="mt-8">
        ${tabPanels}
      </div>
    </section>
  `;
}

function renderPhysicalColumn(column) {
  return `
    <article class="surface-card p-5 md:p-6">
      <div class="flex items-center gap-3">
        <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-brand-dark">
          ${getIcon(column.icon)}
        </span>
        <h3 class="text-lg font-bold text-brand-dark">${escapeHTML(column.title)}</h3>
      </div>
      <ol class="mt-4 space-y-3 text-sm leading-6 text-muted">
        ${column.steps
          .map(
            (step, stepIndex) => `
            <li class="flex gap-3">
              <span class="mt-1 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-slate-100 px-2 text-xs font-bold text-brand-dark">
                ${stepIndex + 1}
              </span>
              <span>${escapeHTML(step)}</span>
            </li>
          `,
          )
          .join("")}
      </ol>
    </article>
  `;
}

export function renderPhysicalTabs(target, tabs, options = {}) {
  if (!target || !tabs.length) {
    return;
  }

  const ariaLabel = options.ariaLabel || "Physical gift card details";

  const tabButtons = tabs
    .map(
      (tab, index) => `
      <button
        id="${escapeHTML(tab.id)}-tab"
        role="tab"
        type="button"
        aria-selected="${index === 0 ? "true" : "false"}"
        aria-controls="${escapeHTML(tab.id)}-panel"
        data-tab-button
        data-tab-target="${escapeHTML(tab.id)}-panel"
        class="tab-button px-4 py-2 text-sm font-semibold"
      >
        ${escapeHTML(tab.label)}
      </button>
    `,
    )
    .join("");

  const tabPanels = tabs
    .map(
      (tab, index) => `
      <div
        id="${escapeHTML(tab.id)}-panel"
        role="tabpanel"
        aria-labelledby="${escapeHTML(tab.id)}-tab"
        data-tab-panel
        class="tab-panel"
        ${index !== 0 ? "hidden" : ""}
      >
        <div class="grid gap-4 md:grid-cols-2">
          ${tab.columns.map((column) => renderPhysicalColumn(column)).join("")}
        </div>
      </div>
    `,
    )
    .join("");

  target.innerHTML = `
    <section class="tabs-shell" data-tabs>
      <div role="tablist" aria-label="${escapeHTML(ariaLabel)}" class="flex flex-wrap justify-center gap-3">
        ${tabButtons}
      </div>
      <div class="mt-6">${tabPanels}</div>
    </section>
  `;
}

export function renderBrands(target, brands) {
  if (!target) {
    return;
  }

  target.innerHTML = `
    <div class="flex flex-wrap items-center justify-center gap-3">
      ${brands
        .map(
          (brand) => `
          <span class="inline-flex min-h-10 items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-brand-dark">
            ${escapeHTML(brand)}
          </span>
        `,
        )
        .join("")}
    </div>
  `;
}

export function renderFaq(target, items) {
  if (!target) {
    return;
  }

  target.innerHTML = `
    <section data-accordion>
      <div class="space-y-3">
        ${items
          .map(
            (item, index) => `
            <article data-accordion-item class="surface-card overflow-hidden">
              <h3>
                <button
                  type="button"
                  data-accordion-trigger
                  aria-expanded="${index === 0 ? "true" : "false"}"
                  class="faq-trigger flex w-full items-center justify-between gap-3 border-b border-transparent px-5 py-4 text-left text-sm font-semibold text-slate-800 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset"
                >
                  <span>${escapeHTML(item.question)}</span>
                  <span aria-hidden="true" class="faq-icon text-lg font-bold leading-none text-brand">+</span>
                </button>
              </h3>
              <div data-accordion-panel class="accordion-panel px-5 pb-5 text-sm leading-6 text-muted" ${
                index !== 0 ? "hidden" : ""
              }>
                ${escapeHTML(item.answer)}
              </div>
            </article>
          `,
          )
          .join("")}
      </div>
    </section>
  `;
}
