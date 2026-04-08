const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));

let activeTooltip = null;

tooltips.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();

    if (activeTooltip && activeTooltip.parentElement === item) {
      activeTooltip.remove();
      activeTooltip = null;
      return;
    }

    if (activeTooltip) {
      activeTooltip.remove();
      activeTooltip = null;
    }

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip tooltip_active';
    tooltip.textContent = item.getAttribute('title');

    document.body.appendChild(tooltip);

    const rect = item.getBoundingClientRect();

    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = rect.bottom + 'px';

    activeTooltip = tooltip;
  });
});