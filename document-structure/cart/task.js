const products = Array.from(document.querySelectorAll('.product'));
const cartProducts = document.querySelector('.cart__products');

products.forEach((product) => {
  const decBtn = product.querySelector('.product__quantity-control_dec');
  const incBtn = product.querySelector('.product__quantity-control_inc');
  const quantityValue = product.querySelector('.product__quantity-value');
  const addBtn = product.querySelector('.product__add');

  decBtn.addEventListener('click', () => {
    let value = Number(quantityValue.textContent);

    if (value > 1) {
      quantityValue.textContent = value - 1;
    }
  });

  incBtn.addEventListener('click', () => {
    let value = Number(quantityValue.textContent);
    quantityValue.textContent = value + 1;
  });

  addBtn.addEventListener('click', () => {
    const id = product.dataset.id;
    const imageSrc = product.querySelector('.product__image').src;
    const amount = Number(quantityValue.textContent);

    const cartProduct = cartProducts.querySelector(`.cart__product[data-id="${id}"]`);

    if (cartProduct) {
      const count = cartProduct.querySelector('.cart__product-count');
      count.textContent = Number(count.textContent) + amount;
    } else {
      const cartProductHTML = `
        <div class="cart__product" data-id="${id}">
          <img class="cart__product-image" src="${imageSrc}">
          <div class="cart__product-count">${amount}</div>
        </div>
      `;

      cartProducts.insertAdjacentHTML('beforeend', cartProductHTML);
    }
  });
});