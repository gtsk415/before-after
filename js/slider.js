"use strict"

function getTempalte(state) {
  return `
    <div class="slider__before">
      <div class="slider__resize" data-type="resize"></div>
    </div>
    <div class="slider__after"></div>
  `
}

class Slider {
  constructor (selector, state) {
    this.$slider = document.getElementById(selector)
    this.state = state
    this.#render(this.state)
    this.#listen()
  }

  #render(state) {
    this.$slider.innerHTML = getTempalte(state)
  }

  #listen() {
    this.mouseDownHandler = this.mouseDownHendler.bind(this)
    this.mouseUpHandler = this.mouseUpHendler.bind(this)
    this.moveHandler = this.moveHandler.bind(this)
    this.$slider.addEventListener('mousedown', this.mouseDownHandler)
    this.$slider.addEventListener('mouseup', this.mouseUpHandler)

  }
  
  mouseDownHandler(event) {
    if(event.target.dataset.type === 'resize') {
      this.$slider.addEventListener
    }
  }

  mouseUpHandler(event) {

  }

  moveHandler(event) {

  }

}

const slider = new Slider("slider", {})

