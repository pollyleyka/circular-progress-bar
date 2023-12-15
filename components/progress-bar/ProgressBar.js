class ProgressBar {
  constructor(element) {
    this.value = 0;
    this.animationState = 'Normal';
    this.hiddenState = 'Normal';
    this.element = element;

    this.start = 0
  }
  getValue() {
    return this.value;
  }
  setValue(value) {
    const isValid = (value) => (value >= 0 && value <= 100);
    if (isValid(value)) {
      this.value = value;
      this.renderProgressBar();
      return this;
    } else {
      throw new Error(`${value} isn't correct value`);
    }
  }
  getAnimationState() {
    return this.animationState;
  }
  setAnimationState(animationState) {
    this.animationState = animationState;
    this.element.classList.toggle('progress-circular-animate');
    return this;
  };

  getHiddenState() {
    return this.hiddenState;
  }
  setHiddenState(hiddenState) {
    this.hiddenState = hiddenState;
    this.element.classList.toggle('hidden');
    return this;
  };

  renderProgressBar() {
    const progress = setInterval(() => {
      const progressEnd = () => {
        this.element.style.background = `conic-gradient(rgb(2, 92, 255) ${this.start * 3.6}deg, rgb(223, 230, 239) 0deg)`;
        if (this.start == this.value) {
          clearInterval(progress);
          this.value = '';
        }
      }
      if (this.start < this.value) {
        this.start += 1;
        progressEnd();
      } else {
        this.start -= 1;
        progressEnd();
      }
    }, 10)
    return this;
  }
}
export default ProgressBar;
