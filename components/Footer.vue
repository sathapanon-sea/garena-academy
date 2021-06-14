<template>
  <footer class="footer pb-4 mt-4 pt-0">
    <hr />
    <b-container fluid>
      <b-row class="no-gutters" align-h="between">
        <b-col cols="2" class="text-left pl-5">
          <nuxt-link to="/about-us" class="nav-link p-0">
            <b-img-lazy
              class="footer-contact"
              src="@/assets/footer/contact.png"
              alt="contact"
            />
          </nuxt-link>
        </b-col>
        <b-col cols="10" class="text-right pr-4 pr-sm-5">
          <div>
            <b-img-lazy
              class="footer-logo-1"
              src="@/assets/footer/Garena_logont-01.png"
              alt="Garena_logont-01-1"
            />
            <b-img-lazy
              class="footer-logo-2"
              src="@/static/LogoGarenaAcademy_Final.png"
              alt="LogoGarenaAcademy_Final"
            />
          </div>
          <p class="footer-copyright text-secondary">
            COPYRIGHT © GARENA ONLINE. TRADEMARKS BELONG TO THEIR RESPECTIVE OWNERS. ALL
            RIGHT RESERVED. |
            <b-link href="https://www.garena.co.th/tos" target="_blank"
              >TERM OF SERVICE</b-link
            >
            |
            <b-link href="https://www.garena.co.th/privacy" target="_blank"
              >PRIVACY POLICY</b-link
            >
          </p>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer',
})
</script>

<style scoped lang="scss">
.footer {
  background-color: white;

  .footer-logo-1,
  .footer-logo-2 {
    height: 85px;
  }
  .footer-copyright {
    font-size: 0.6em;
    line-height: 1.5;
    font-weight: 400;
  }
}
</style>
