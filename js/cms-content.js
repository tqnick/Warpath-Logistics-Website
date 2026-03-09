async function loadJSON(path) {
  const response = await fetch(path);
  if (!response.ok) return null;
  return await response.json();
}

async function loadHomePage() {
  const home = await loadJSON("/content/home.json");
  if (!home) return;

  const headline = document.querySelector("[data-home-headline]");
  const subheadline = document.querySelector("[data-home-subheadline]");

  if (headline && home.headline) headline.innerHTML = home.headline;
  if (subheadline && home.subheadline) subheadline.textContent = home.subheadline;
}

document.addEventListener("DOMContentLoaded", loadHomePage);
