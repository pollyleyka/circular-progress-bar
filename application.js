elements = {
  valueInput: document.querySelector(".degree-value-input"),
  progressCircular: document.querySelector(".progress-circular"),
}
const render = (state) => {
elements.valueInput.value = state.value;
}

export default() => {
  const state = {
    value: 100,
    animated: true,
    hide: false,
  };
  elements.valueInput.addEventListener(input, ({e}) => {
    state.value = e.target.value;
    render(state);
  })

}