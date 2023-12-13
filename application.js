const elements = {
  valueInput: document.querySelector(".progress-control-input"),
  progressCircular: document.querySelector(".progress-circular"),
  animateSwitch: document.querySelector(".animate-switch"),
  hideSwitch: document.querySelector(".hide-switch"),
  feedback: document.querySelector(".feedback")
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
    } else {
      start = 0;
      progressEnd();
    }
  }, 10)
}
const renderAnimation = (state) => {
  if (state.animate === 'Animated') {
    elements.progressCircular.classList.add('rotate');
    return
  }
  elements.progressCircular.classList.remove('rotate');
};

const renderHidden = (state) => {
  if (state.hide === 'Hidden') {
    elements.progressCircular.classList.add('hidden');
    return;
  }
  elements.progressCircular.classList.remove('hidden');
};
const isValid = (value) => !(value < 0 || value > 100);
const renderErrorState = (state) => {
  if (state.error === null) {
    elements.feedback.classList.add('hide-feedback');
    elements.valueInput.classList.remove('is-invalid');
  } else {
    elements.feedback.classList.remove('hide-feedback');
    elements.valueInput.classList.add('is-invalid');
  }
}
export default () => {
  const state = {
    value: 0,
    error: null,
    animate: 'Normal',
    hide: 'Normal',
  };
  elements.valueInput.addEventListener('change', ({ target }) => {
    if (!isValid(target.value)) {
      state.error = 'inputError';
      renderErrorState(state);
      return;
    }
    state.error = null;
    renderErrorState(state);
    state.value = target.value;
    renderProgressBar(state);
  });

  elements.animateSwitch.addEventListener('change', ({ target }) => {
    if (target.checked) {
      state.animate = 'Animated';
      renderAnimation(state);
    } else {
      state.animate = 'Normal'
      renderAnimation(state);
    }
  });

  elements.hideSwitch.addEventListener('change', ({ target }) => {
    if (target.checked) {
      state.hide = 'Hidden';
      renderHidden(state);
    } else {
      state.hide = 'Normal';
      renderHidden(state);
    }
  });
};

// разобраться с апи и ручками
// нпм пакет
// + функция валидации
// + свитчеры
// + функция анимации
// + разобраться со стейтами
// + расположение элементов - позиционирование
// + ведстка для мобилки - изменение для ландскейпа