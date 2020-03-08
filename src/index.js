import { ReactApp } from "./custom-elements/react-app"
import { VueApp } from "./custom-elements/vue-app"

window.customElements.define("react-app", ReactApp)
window.customElements.define("vue-app", VueApp)

function compositionPage() {
  const element = document.createElement("div")
  element.innerHTML = `
    <react-app class="mfe-app"></react-app>
    <vue-app class="mfe-app"></vue-app>
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
document.body.appendChild(compositionPage())
