import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import App from '../../apps/react-app/src/App'

export class ReactApp extends HTMLElement {
  connectedCallback() {
    render(<App/>, this)
  }

  diconnectedCallback(){
    unmountComponentAtNode(this)
  }
}

