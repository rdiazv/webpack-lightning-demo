import React from 'react'

export default class LazyComponent extends React.Component {
  static propTypes = {
    load: React.PropTypes.func.isRequired,
  }

  state = {
    component: null,
  }

  componentWillMount() {
    this.props.load().then(module => {
      this.setState({
        component: module.default,
      })
    })
  }

  render() {
    const loading = this.state.component == null

    if (loading) {
      return <div style={{ backgroundColor: 'red' }}>Loading...</div>
    }

    return <this.state.component />
  }
}
