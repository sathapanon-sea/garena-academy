<template>
  <nuxt-link :to="`/news/detail/${id}`" class="nav-link">
    <div class="news text-dark">
      <div class="news-item-placeholder">
        <b-img-lazy v-if="imgSrc" fluid :src="imgSrc" alt="paint" />
      </div>
      <h4 class="my-4 my-lg-3">{{ title }}</h4>
      <p class="text-justify" v-html="description" v-plaintext></p>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NewsItem',
  props: {
    title: String,
    description: String,
    id: String,
    imgSrc: String,
  },
})
</script>

<style lang="scss" scoped>
.news {
  .news-item-placeholder {
    width: 100%;
    padding-top: 75%;
    background-color: #808080;
    position: relative;
    overflow: hidden;

    img {
      top: 0;
      left: 0;
      position: absolute;

      transition: all 0.5s ease;

      &:hover {
        transform: scale(1.25);
      }
    }
  }

  h4 {
    @include lineClamp(2);
  }

  p {
    @include lineClamp(2);

    @include media-breakpoint-down(md) {
      display: none;
    }
  }
}
</style>
