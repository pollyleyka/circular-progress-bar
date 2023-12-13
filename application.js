import ProgressBar from "./components/progress-bar/ProgressBar.js";

const elements = {
  valueInput: document.querySelector(".progress-control-input"),
  progressCircular: document.querySelector(".progress-circular"),
  animateSwitch: document.querySelector(".animate-switch"),
  hideSwitch: document.querySelector(".hide-switch"),
  feedback: document.querySelector(".feedback")
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
  const progressBar = new ProgressBar(elements.progressCircular)
  const state = {
    error: null,
  };
  elements.valueInput.addEventListener('change', ({ target }) => {
    if (!isValid(target.value)) {
      state.error = 'inputError';
      renderErrorState(state);
      return;
    }
    state.error = null;
    renderErrorState(state);
    progressBar.setValue(target.value);
  });

  elements.animateSwitch.addEventListener('change', ({ target }) => {
    if (target.checked) {
      progressBar.setAnimationState('Animated').renderAnimation();
    } else {
      progressBar.setAnimationState('Normal').renderAnimation();
    }
  });

  elements.hideSwitch.addEventListener('change', ({ target }) => {
    if (target.checked) {
      progressBar.setHiddenState('Hidden').renderHiddenState();
    } else {
      progressBar.setHiddenState('Normal').renderHiddenState();
    }
  });
};

// разобраться с апи и ручками
// сделать сеты для стейтов 
// + функция валидации
// + свитчеры
// + функция анимации
// + разобраться со стейтами
// + расположение элементов - позиционирование
// + ведстка для мобилки - изменение для ландскейпа
// перенести ошибку все таки в компонент(((
//  нужно ли возвращать функции при сет стейте??? или делать отдельно паплайном как было.
// дописать доку 
// удалить .ДС с гитхаба

