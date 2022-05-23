<template>
  <div
    @click="imgSrc && animateTo(link)"
    class="d-inline-block job-circle-link text-white"
    :class="[!imgSrc && 'empty', this.jobClicked && 'clicked']"
  >
    <div class="job-circle-inner shadow">
      <b-img-lazy fluid v-if="imgSrc" :src="imgSrc" alt="job-circle-img" />
      <div class="job-circle-detail" :class="smallText && 'small-text'">
        <h3>{{ title }}</h3>
        <p>{{ subTitle }}</p>
        <b-link v-if="imgSrc">> อ่านเพิ่มเติม</b-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { Route } from 'vue-router'

export default Vue.extend({
  name: 'JobCircle',
  data: () => ({
    jobClicked: false,
  }),
  props: {
    imgSrc: String,
    title: String,
    subTitle: String,
    link: String,
    smallText: Boolean,
  },
  watch: {
    $route(to: Route) {
      if (to.path === this.$route.path) {
        this.jobClicked = false
      }
    },
  },
  methods: {
    async animateTo(to: string) {
      this.jobClicked = true
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.$router.push(to)
    },
  },
})
</script>

<style lang="scss" scoped>
.job-circle-link {
  $size: 16.66vw;

  height: $size;
  width: $size;
  border-radius: $size;
  margin: auto;
  position: relative;
  cursor: pointer;

  .job-circle-inner {
    width: 100%;
    height: 100%;
    border-radius: $size;

    background-color: #e67a7e;

    &:hover {
      background-color: $primary;
    }

    &:after {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      transform: scale(0);
      border-radius: 100%;
      position: relative;
      background-color: $primary;
      z-index: -1;
    }
  }

  &.clicked {
    @keyframes fade {
      0% {
        animation-timing-function: ease;
        opacity: 1;
      }
      50% {
        animation-timing-function: ease;
        opacity: 1;
      }
      100% {
        animation-timing-function: ease;
        opacity: 0;
      }
    }

    z-index: 50000;

    .job-circle-inner {
      position: relative;
      z-index: 50000;

      &:after {
        z-index: 50000;
        transform: scale(20);
        transition: all 1.5s ease;
      }

      > * {
        z-index: 50001;
        animation: fade 1s;
        opacity: 0;
      }
    }
  }

  &.empty {
    cursor: default;
    visibility: hidden;

    .job-circle-inner {
      background-color: #ffbfc1;
    }
  }

  img {
    position: absolute;
    bottom: 15%;
    left: 0;
    transform: scale(0.6);
  }

  .job-circle-detail {
    position: absolute;
    width: 100%;
    margin-left: 50%;
    transform: translateX(-50%);
    top: 60%;

    h3 {
      font-size: 1.3vw;
      margin: 0;
    }

    p {
      font-size: 1vw;
      margin: 0;
      padding: 0;
    }

    &.small-text {
      h3 {
        font-size: 1.25vw;
      }

      p {
        font-size: 0.85vw;
      }
    }

    a {
      font-size: 1vw;
      margin: 0;
      color: white;
    }
  }
}
</style>
