const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));

let activeTooltip = null;

tooltips.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();

    // если уже открыт именно этот tooltip → закрыть
    if (activeTooltip && activeTooltip.parentElement === item) {
      activeTooltip.remove();
      activeTooltip = null;
      return;
    }

    // закрыть предыдущий
    if (activeTooltip) {
      activeTooltip.remove();
      activeTooltip = null;
    }

    // создаём tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip tooltip_active';
    tooltip.textContent = item.getAttribute('title');

    document.body.appendChild(tooltip);

    // позиционирование
    const rect = item.getBoundingClientRect();

    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = rect.bottom + 'px';

    activeTooltip = tooltip;
  });
});