const reveals = Array.from(document.querySelectorAll('.reveal'));

function revealElements() {
  reveals.forEach((element) => {
    const rect = element.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.classList.add('reveal_active');
    }
  });
}

window.addEventListener('scroll', revealElements);
revealElements();