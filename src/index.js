import React, { Component } from "react";
import MobileDetect from "mobile-detect";

const getUserAgent = () => {
  const md = new MobileDetect(window.navigator.userAgent);
  const state = {
    ua: {
      mobile: md.mobile(),
      phone: md.phone(),
      tablet: md.tablet(),
      os: md.os(),
      md
    }
  };
  return state;
};

export const withUserAgent = ComposedComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = getUserAgent();
    }
    render() {
      return <ComposedComponent ua={this.state.ua} {...this.props} />;
    }
  };

export class UserAgent extends Component {
  constructor(props) {
    super(props);
    this.state = getUserAgent();
  }
  render() {
    const { children, render } = this.props;
    if (children) {
      return children(this.state);
    }
    if (render) {
      return render(this.state);
    }
    console.error(
      "Component UserAgent:",
      "no children or render prop are present"
    );
    return null;
  }
}
