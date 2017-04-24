import React, { Component } from 'react'
import MobileDetect from 'mobile-detect'

const withUserAgent = ComposedComponent => class extends Component {
  constructor (props) {
    super(props)
    const md = new MobileDetect(window.navigator.userAgent)

    this.state = {
      ua: {
        mobile: md.mobile(),
        phone: md.phone(),
        tablet: md.tablet(),
        os: md.os(),
        md
      }
    }
  }
  render () {
    return <ComposedComponent ua={this.state.ua} {...this.props} />
  }
}

export default withUserAgent
