import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import App from '../../apps/clock-face/src/App'

export class ClockFace extends HTMLElement {
  connectedCallback() {
    render(<App/>, this)
  }

  diconnectedCallback(){
    unmountComponentAtNode(this)
  }
}

