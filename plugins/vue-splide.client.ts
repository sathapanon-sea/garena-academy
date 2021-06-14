import Vue from 'vue'
import type { Plugin } from '@nuxt/types'
// @ts-ignore
import VueSplide from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'


const plugin: Plugin = (_ctx, _inject) => {
  Vue.use(VueSplide)
}

export default plugin