const loader = document.getElementById('loader');
const items = document.getElementById('items');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 4) {
    const data = JSON.parse(xhr.responseText);
    const valutes = data.response.Valute;

    Object.values(valutes).forEach((currency) => {
      const item = document.createElement('div');
      item.className = 'item';

      item.innerHTML = `
        <div class="item__code">${currency.CharCode}</div>
        <div class="item__value">${currency.Value}</div>
        <div class="item__currency">руб.</div>
      `;

      items.appendChild(item);
    });

    // скрываем loader
    loader.classList.remove('loader_active');
  }
});

xhr.send();