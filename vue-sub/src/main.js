import { createApp } from "vue";
import App from "./App.vue";
console.log("this is main.js");
let app;
const init = () => {
  app = createApp(App);
  app.mount(`#vueRoot`);
};

init();

window.renderVue = init;

window.unmountVue = () => {
  app.unmount();
};

// window.renderVue = (id) => {
// const app = createApp(App);
// app.mount(`#vueRoot`);
// };
