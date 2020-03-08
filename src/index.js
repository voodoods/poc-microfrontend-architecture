import { ClockFace } from "./custom-elements/clock-face"
import { ClockButtons } from "./custom-elements/clock-buttons"

window.customElements.define("clock-face", ClockFace)
window.customElements.define("clock-buttons", ClockButtons)

function clockApplication() {
  const element = document.createElement("div")
  element.innerHTML = `
    <clock-face class="mfe-app"></clock-face>
    <clock-buttons class="mfe-app"></clock-buttons>
  `

  return element
}

const styles = document.createElement('style')
styles.innerHTML = `
.mfe-app {
  display: block;
  width: 50%;
  float:left;
}
`
document.head.appendChild(styles)
document.body.appendChild(clockApplication())
