import Vue from 'vue'
import App from '../../apps/vue-app/src/App.vue'

Vue.config.productionTip = false

export class VueApp extends HTMLElement {
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
