import React from 'react'
import ReactDOM from 'react-dom'
import logoSrc from 'images/logo.png'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <img src={logoSrc} width="40" />
        <a href="/landing.html">Sign out</a>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app-root'))

// Each entry must accept hot reloading explicitly.
if (module.hot) {
  module.hot.accept()
}
