<template>
  <b-container fluid id="app">
    <Header />
    <div class="main-content">
      <nuxt keep-alive />
    </div>
    <Footer />
    <client-only>
      <!-- <Popup
        v-if="
          showPopup &&
          this.$route.name !== 'NotFound' &&
          !this.$cookies.get('job-selected')
        "
      /> -->
    </client-only>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
// import Popup from '../components/Popup.vue'

export default Vue.extend({
  name: 'app',
  data() {
    return {
      // showPopup: false,
    }
  },
  components: {
    Header,
    Footer,
    // Popup,
  },
  mounted() {
    // this.showPopup = true

    // const job = this.$cookies.get('job-selected')
    // job &&
    //   this.$gtag.set({
    //     user_properties: {
    //       job_title: job,
    //     },
    //   })

    this.$gtag.set({ page_path: this.$route.path, page_title: document.title })
    this.$gtag.event('page_view')
  },
})
</script>

<style lang="scss">
* {
  font-family: 'Kanit', sans-serif;
}

p {
  font-weight: 200;
  font-size: 17px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  .main-content,
  .footer {
    padding-top: 80px;

    a:not(.page-link) {
      text-decoration: none;
      padding: 0;
    }
  }
}

.container-fluid {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.7) !important;
}
</style>
