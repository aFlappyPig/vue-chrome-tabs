import ChromeTabs from "./vue-chromeTabs.vue";

// 导出模块
export default ChromeTabs;

//global 情况下 自动安装
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component("chrome-tabs", ChromeTabs);
}
