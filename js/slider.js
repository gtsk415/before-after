function getTempalte(state) {
  return `
    <div class="slider__before">
      <div class="slider__resize"></div>
    </div>
    <div class="slider__after"></div>
  `
}

class Slider {
  constructor (selector, state) {
    this.$slider = documetn.getElementById(selector)
    this.state = state
    this.#render(this.state)
  }

  #render(state) {
    this.$slider.innerHTML = getTempalte(state)
  }

}

const slider = new Slider( 'slider', {})

