import SliderAction from './component/SliderAction.vue';

const install = (Vue) => {
  if (install.installed) return;
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }
  Vue.component(SliderAction.name, SliderAction);
};
export { SliderAction };
export default { install };
