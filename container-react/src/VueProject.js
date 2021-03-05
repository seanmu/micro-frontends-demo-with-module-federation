import React, { PureComponent } from "react";
// import vueProject from "vueProject/VueProject";
// import("home/Content");
import("home/VueSub");

class VueProject extends PureComponent {
  componentDidMount() {
    if (window.renderVue) {
      window.renderVue();
    }
  }

  componentWillUnmount() {
    if (window.unmountVue) {
      window.unmountVue();
    }
  }

  render() {
    return <div id="vueRoot"></div>;
  }
}

export default VueProject;
