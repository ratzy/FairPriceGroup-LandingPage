function getTabs(group) {
  return Array.from(group.querySelectorAll("[data-tab-button]"));
}

function getPanels(group) {
  return Array.from(group.querySelectorAll("[data-tab-panel]"));
}

function activateTab(group, selectedTab, shouldFocus = false) {
  const tabs = getTabs(group);
  const panels = getPanels(group);
  const targetPanelId = selectedTab?.dataset.tabTarget;

  tabs.forEach((tab) => {
    const isSelected = tab === selectedTab;
    tab.setAttribute("aria-selected", isSelected ? "true" : "false");
    tab.tabIndex = isSelected ? 0 : -1;
  });

  panels.forEach((panel) => {
    panel.hidden = panel.id !== targetPanelId;
  });

  if (shouldFocus) {
    selectedTab.focus();
  }
}

function handleKeyboardNavigation(group, event) {
  const tabs = getTabs(group);
  const currentIndex = tabs.indexOf(event.currentTarget);

  if (currentIndex < 0) {
    return;
  }

  const keyMap = {
    ArrowRight: 1,
    ArrowDown: 1,
    ArrowLeft: -1,
    ArrowUp: -1,
  };

  if (!(event.key in keyMap)) {
    return;
  }

  event.preventDefault();

  const offset = keyMap[event.key];
  const nextIndex = (currentIndex + offset + tabs.length) % tabs.length;
  activateTab(group, tabs[nextIndex], true);
}

function wireTabs(group) {
  const tabs = getTabs(group);
  const panels = getPanels(group);

  if (!tabs.length || !panels.length) {
    return;
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activateTab(group, tab));
    tab.addEventListener("keydown", (event) => handleKeyboardNavigation(group, event));
  });

  const initiallySelected = tabs.find((tab) => tab.getAttribute("aria-selected") === "true");
  activateTab(group, initiallySelected || tabs[0]);
}

export function initTabs(scope = document) {
  const tabGroups = Array.from(scope.querySelectorAll("[data-tabs]"));
  tabGroups.forEach((group) => wireTabs(group));
}
