export default function initThemeToggle(options = {}) {
  const {
    rootElement = document.documentElement,
    toggleButtonSelector = "#themeToggle",
    darkThemeClass = "dark",
    darkTextColor = "#000000",
    lightTextColor = "#ffffff",
    darkBackgroundColor = "#4bd2e4",
    lightBackgroundColor = "#4f6579",
  } = options;

  const button = document.querySelector(toggleButtonSelector);

  if (!button) {
    console.warn(
      `Theme toggle button not found with selector: ${toggleButtonSelector}`,
    );
    return;
  }

  button.addEventListener("click", (event) => {
    event.preventDefault();
    const isDark = rootElement.classList.toggle(darkThemeClass);

    button.style.color = isDark ? darkTextColor : lightTextColor;
    button.style.backgroundColor = isDark
      ? darkBackgroundColor
      : lightBackgroundColor;
  });

  const isInitiallyDark = rootElement.classList.contains(darkThemeClass);
  button.style.color = isInitiallyDark ? darkTextColor : lightTextColor;
  button.style.backgroundColor = isInitiallyDark
    ? darkBackgroundColor
    : lightBackgroundColor;
}
