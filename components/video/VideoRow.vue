<template>
  <div class="text-left mt-4">
    <hr />
    <h5>{{ title }}</h5>
    <b-row class="video-row">
      <b-col
        v-for="(v, i) in videos"
        :key="i"
        cols="12"
        md="6"
        lg="4"
        class="video-cell mb-4"
        @click="onClickVideoItem(v, i)"
      >
        <div class="video-placeholder">
          <b-img-lazy
            v-if="v.imgSrc"
            fluid-grow
            :src="require('@/assets/video/' + v.imgSrc)"
            alt="viddeo-img"
          />
        </div>
        <h6 class="text-primary my-3">{{ v.thumbTitle || v.title }}</h6>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'VideoRow',
  props: {
    title: String,
    videos: Array,
    onClickVideoItem: Function,
    thumbTitle: String,
  },
})
</script>

<style scoped lang="scss">
.video-row {
  .video-cell {
    cursor: pointer;
  }

  .video-placeholder {
    background-color: white;
    width: 100%;
    position: relative;
    overflow: hidden;
    padding-top: 75%;

    img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  h6 {
    background-color: #eee;
    padding: 5px 10px;
    height: 70px;
  }
}
</style>
