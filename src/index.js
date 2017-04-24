import React, { Component } from 'react';
import MobileDetect from 'mobile-detect';

const withUserAgent = ComposedComponent => class extends Component {
  constructor(props) {
    super(props);
    /* eslint-disable no-undef */
    const md = new MobileDetect(window.navigator.userAgent);
    /* eslint-enable no-undef */

    this.state = {
      ua: {
        mobile: md.mobile(),
        phone: md.phone(),
        tablet: md.tablet(),
        os: md.os(),
        md,
      },
    };
  }
  render() {
    /* eslint-disable */
    return <ComposedComponent ua={this.state.ua} {...this.props} />;
    /* eslint-enable */
  }
};

export default withUserAgent;
