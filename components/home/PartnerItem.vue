<template>
  <b-link :href="link || '#'" target="_blank" class="nav-link p-0">
    <b-img-lazy fluid :src="imgSrc" class="partner-item" alt="partner-item" />
  </b-link>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PartnerItem',
  props: {
    imgSrc: String,
    link: String,
  },
})
</script>

<style lang="scss" scoped>
img.partner-item {
  aspect-ratio: 300 / 150;
  object-fit: contain;
  @media screen and (max-width: 1024px) {
    max-width: 35%;
    margin: 0;
  }
}
</style>
