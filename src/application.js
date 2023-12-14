import ProgressBar from "../components/progress-bar/ProgressBar.js";

const elements = {
  valueInput: document.querySelector(".progress-control-input"),
  progressCircular: document.querySelector(".progress-circular"),
  animateSwitch: document.querySelector(".animate-switch"),
  hideSwitch: document.querySelector(".hide-switch"),
  feedback: document.querySelector(".feedback")
};

const renderErrorState = ({ errorState }) => {
  if (errorState === null) {
    elements.feedback.classList.add('hide-feedback');
    elements.valueInput.classList.remove('is-invalid');
  } else {
    elements.feedback.classList.remove('hide-feedback');
    elements.valueInput.classList.add('is-invalid');
  }
}

export default () => {
  const state = {
    errorState: null,
  }
  const progressBar = new ProgressBar(elements.progressCircular);

  elements.valueInput.addEventListener('change', ({ target }) => {
    try {
      progressBar.setValue(target.value);
      state.errorState = null;
    } catch {
      state.errorState = 'valueError';
    } finally {
      renderErrorState(state);
    }
  });

  elements.animateSwitch.addEventListener('change', ({ target }) => {
    if (target.checked) {
      progressBar.setAnimationState('Animated');
    } else {
      progressBar.setAnimationState('Normal');
    }
  });

  elements.hideSwitch.addEventListener('change', ({ target }) => {
    if (target.checked) {
      progressBar.setHiddenState('Hidden');
    } else {
      progressBar.setHiddenState('Normal');
    }
  });
};
