const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  let intervalId;

  return (seconds) => {
    let remainingSeconds = seconds;

    clearInterval(intervalId);

    intervalId = setInterval(() => {
      if (remainingSeconds <= 0) {
        clearInterval(intervalId);
        return;
      }

      const hours = Math.floor(remainingSeconds / 3600);
      const minutes = Math.floor((remainingSeconds % 3600) / 60);
      const secs = remainingSeconds % 60;

      const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(secs)}`;

      timerEl.textContent = formattedTime;

      remainingSeconds--;
    }, 1000);
  };
};

const padZero = (num) => {
  return num.toString().padStart(2, '0');
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/\D/g, ''); // Удаляем все символы, кроме цифр
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});

// При запуске приложения, пользователь вводит количество секунд в поле ввода, затем нажимает кнопку "Start". Таймер начинает отсчет с заданного количества секунд и анимирует отображение времени в формате "hh:mm:ss" на странице.
