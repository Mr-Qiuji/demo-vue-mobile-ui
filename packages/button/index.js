import VUiButton from './src/button.vue'

VUiButton.install = function (Vue) {
  Vue.component(VUiButton.name, VUiButton)
}

export default VUiButton;