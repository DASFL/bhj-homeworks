const controls = Array.from(document.querySelectorAll('.font-size'));
const book = document.getElementById('book');

controls.forEach((control) => {
  control.addEventListener('click', (event) => {
    event.preventDefault();

    controls.forEach((item) => {
      item.classList.remove('font-size_active');
    });

    control.classList.add('font-size_active');

    book.classList.remove('book_fs-small');
    book.classList.remove('book_fs-big');

    const size = control.dataset.size;

    if (size === 'small') {
      book.classList.add('book_fs-small');
    }

    if (size === 'big') {
      book.classList.add('book_fs-big');
    }
  });
});