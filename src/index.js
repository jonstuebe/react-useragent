import React, { Component, useEffect, useState } from "react";
import MobileDetect from "mobile-detect";

const getUserAgent = () => {
  const md = new MobileDetect(window.navigator.userAgent);
  return {
    mobile: md.mobile(),
    phone: md.phone(),
    tablet: md.tablet(),
    os: md.os(),
    md
  };
};

export const useUserAgent = () => {
  const [ua, setUa] = useState({});

  useEffect(() => {
    setUa(getUserAgent());
  });

  return ua;
}

export const withUserAgent = ComposedComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = { ua: getUserAgent() };
    }
    render() {
      return <ComposedComponent ua={this.state.ua} {...this.props} />;
    }
  };

export class UserAgent extends Component {
  constructor(props) {
    super(props);
    this.state = { ua: getUserAgent() };
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
