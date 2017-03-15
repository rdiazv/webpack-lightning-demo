import React from 'react'
import ReactDOM from 'react-dom'
import logoSrc from 'images/logo.png'
import LazyComponent from 'components/LazyComponent'

if (__DEBUG__) {
  console.warn('You are in development mode :)')
}

class App extends React.Component {
  state = {
    showBigComponent: false,
  }

  handleChange = event => {
    this.setState({
      showBigComponent: event.target.checked,
    })
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <img src={logoSrc} width="40" />
        <a href="/landing.html">Sign out</a>

        <br />
        <br />

        <label>
          <input
            checked={this.state.showBigComponent}
            onChange={this.handleChange}
            type="checkbox"
          />
          Show BigComponent
        </label>

        {this.state.showBigComponent &&
          <LazyComponent
            load={() =>
              // import('some-module') is analysed STATICALLY (so it can't be a variable statement)
              // by webpack to create an additional chunk that loads 'some-module' asynchronously.
              import('components/BigComponent')
            }
          />
        }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app-root'))

// Each entry must accept hot reloading explicitly.
if (module.hot) {
  module.hot.accept()
}
