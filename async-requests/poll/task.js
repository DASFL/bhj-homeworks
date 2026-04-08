const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 4) {
    const data = JSON.parse(xhr.responseText);

    const title = data.data.title;
    const answers = data.data.answers;

    pollTitle.textContent = title;


    pollAnswers.innerHTML = '';


    answers.forEach((answer) => {
      const button = document.createElement('button');
      button.className = 'poll__answer';
      button.textContent = answer;

      button.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
      });

      pollAnswers.appendChild(button);
    });
  }
});

xhr.send();