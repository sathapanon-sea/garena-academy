<template>
  <nuxt-link :to="link" class="nav-link">
    <b-row class="job-row-mobile shadow-sm text-left text-secondary" align-v="center">
      <b-col cols="4" sm="3">
        <b-img-lazy fluid :src="imgSrc" alt="job-row-mobile-img" class="ml-4" />
      </b-col>
      <b-col cols="8" sm="9" class="job-col-mobile-text">
        <h3>{{ title }}</h3>
        <p>{{ subTitle }}</p>
      </b-col>
    </b-row>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'JobRowMobile',
  props: {
    imgSrc: String,
    title: String,
    subTitle: String,
    link: String
  }
})
</script>

<style lang="scss" scoped>
.job-row-mobile {
  width: 100%;
  height: 100px;
  border-radius: 50px;
  border: 1px solid #eee;
  margin: auto;
  margin-top: 50px;
  cursor: pointer;
  background: white;
  position: relative;

  &:last-child {
    margin-bottom: 50px;
  }

  img {
    position: absolute;
    width: 80px;
    top: 0;
    left: 0;
    transform: translateY(-50%);
  }

  .job-col-mobile-text {
    display: inline-block;

    h3 {
      font-size: 24px;
      margin: 0;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    p {
      font-size: 18px;
      margin-bottom: 0;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>
