import Vue from 'vue'

Vue.directive('plaintext', {
  bind(el) {
    el.innerHTML = el.innerText
  },
})
