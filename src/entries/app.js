import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return <h1>Hello World</h1>
  }
}

ReactDOM.render(<App />, document.getElementById('app-root'))

// Each entry must accept hot reloading explicitly.
if (module.hot) {
  module.hot.accept()
}
