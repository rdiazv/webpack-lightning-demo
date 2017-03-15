console.warn('Hello World')

// Each entry must accept hot reloading explicitly.
if (module.hot) {
  module.hot.accept()
}
