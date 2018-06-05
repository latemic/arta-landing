const toggles = document.querySelectorAll(`[front-role="scroll-toggle"]`);

if (toggles.length) {
  for (let i = 0; i <= toggles.length; i++) {
    const toggle = toggles[i];

    if (!toggle) continue;

    toggle.addEventListener('click', handleToggleClick);
  }
}

function handleToggleClick(event) {
  event.preventDefault();

  const toggle = this;
  const target = toggle.dataset.target;
  const targetElement = document.querySelector(`[front-role="${target}"]`);

  if (!targetElement) return;

  targetElement.scrollIntoView({behavior: 'smooth', block: 'start'});
}
