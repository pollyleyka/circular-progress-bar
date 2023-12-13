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
    this.value = value;
    return this.renderProgressBar();
  }
  getAnimationState() {
    return this.animationState;
  }
  setAnimationState(animationState) {
    this.animationState = animationState;
    return this
  }
  getHiddenState() {
    return this.hiddenState;
  }
  setHiddenState(hiddenState) {
    this.hiddenState = hiddenState;
    return this;
  }

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
        this.start = 0;
        progressEnd();
      }
    }, 10)
  }
  renderHiddenState() {
    if (this.hiddenState === 'Hidden') {
      this.element.classList.add('hidden');
      return;
    }
    this.element.classList.remove('hidden');
  };

  renderAnimation() {
    if (this.animationState === 'Animated') {
      this.element.classList.add('rotate');
      return;
    }
    this.element.classList.remove('rotate');
  };

}
export default ProgressBar;