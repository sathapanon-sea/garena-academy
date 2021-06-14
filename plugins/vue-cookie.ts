import Vue from 'vue'
import VueCookies, { VueCookies as VueCookiesType }  from 'vue-cookies'
import type { Plugin } from '@nuxt/types'

declare module 'vue/types/vue' {
  interface Vue {
    $cookies: VueCookiesType
  }
}

const plugin: Plugin = (_ctx, _inject) => {
  Vue.use(VueCookies)
}

export default plugin