import React from 'react'
import ReactDOM from 'react-dom'

class Landing extends React.Component {
  render() {
    return (
      <div>
        <h1>Landing</h1>
        <a href="/">Sign in</a>
      </div>
    )
  }
}

ReactDOM.render(<Landing />, document.getElementById('app-root'))

// Each entry must accept hot reloading explicitly.
if (module.hot) {
  module.hot.accept()
}
