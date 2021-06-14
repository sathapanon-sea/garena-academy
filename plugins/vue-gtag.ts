import Vue from 'vue'
import VueGtag, { VueGtag as VueGtagType } from 'vue-gtag'
import type { Plugin } from '@nuxt/types'

declare module 'vue/types/vue' {
  interface Vue {
    $gtag: VueGtagType
  }
}

const plugin: Plugin = (ctx, _inject) => {
  const { app } = ctx

  Vue.use(VueGtag, {
    config: {
      id: process.env.NUXT_ENV_GTAG_ID,
    },
  })
}

export default plugin
