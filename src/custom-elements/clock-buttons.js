import Vue from 'vue'
import App from '../../apps/clock-buttons/src/App.vue'

Vue.config.productionTip = false

export class ClockButtons extends HTMLElement {
  connectedCallback() {
    const element = document.createElement('div')
    element.setAttribute('id', 'app')

    this.appendChild(element)

    new Vue({
      render: h => h(App),
    }).$mount('#app')
    
  }

  diconnectedCallback(){
    
  }
}
