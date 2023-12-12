const elements = {
  valueInput: document.querySelector(".degree-value-input"),
  progressCircular: document.querySelector(".progress-circular"),
  animateSwitch: document.querySelector(".animate-switch"),
  hideSwitch: document.querySelector(".hide-switch"),
};

let start = 0;

const renderProgressBar = (state) => {
  const progress = setInterval(() => {
    const progressEnd = () => {
      elements.progressCircular.style.background = `conic-gradient(rgb(2, 92, 255) ${start * 3.6}deg, rgb(223, 230, 239) 0deg)`;
      if (start == state.value) {
        clearInterval(progress);
        state.value = '';
      }
    }
    if (start < state.value) {
      start += 1;
      progressEnd();
    }
    else {
      start -= 1;
      progressEnd();
    }
  }, 5)
}
const render = (state) => {
  switch (state.uiState) {
    case 'Hidden':
      elements.progressCircular.classList.add('hidden');
      elements.valueInput.setAttribute('disabled', 'true');
      elements.valueInput.value = '';
      break;
    case 'Animated':
      elements.valueInput.setAttribute('disabled', 'true');
      elements.progressCircular.classList.remove('hidden');
      elements.valueInput.value = '';
      animate();
      break;
    case 'Normal':
      elements.progressCircular.classList.remove('hidden');
      elements.valueInput.removeAttribute('disabled');
      renderProgressBar(state);
      break;
    default:
      console.log(`unfamiliar state: ${state.uiState}.`);
  }
}
export default () => {
  const state = {
    value: 0,
    uiState: 'Normal' //'Animated' 'Hidden'
  };
  elements.valueInput.addEventListener('change', ({ target }) => {
    state.value = target.value;
    renderProgressBar(state);
  });

  elements.animateSwitch.addEventListener('change', ({ target }) => {
    if (target.checked) {
      state.uiState = 'Animated';
      state.value = '';
      render(state);
    } else {
      state.uiState = 'Normal';
      render(state);
    }
  });
  elements.hideSwitch.addEventListener('change', ({ target }) => {
    if (target.checked) {
      state.uiState = 'Hidden';
      state.value = '';
      render(state);
    } else {
      state.uiState = 'Normal';
      render(state);
    }
  });


};

// функция валидации
// нпм пакет
// + свитчеры
// функция анимации
// разобраться со стейтами
// разобраться с апи и ручками
// расположение элементов - позиционирование
// ведстка для мобилки - изменение для ландскейпа