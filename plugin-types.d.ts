import Vue from 'vue'
import { BvModal } from 'bootstrap-vue'

declare module 'vue/types/vue' {
  interface Vue {
    readonly $bvModal: BvModal
  }
}
