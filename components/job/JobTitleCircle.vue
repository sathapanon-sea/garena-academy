<template>
  <div class="job-title-circle text-primary shadow">
    <h3>{{ title }}</h3>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'JobTitleCircle',
  props: {
    title: String,
  },
})
</script>

<style lang="scss" scoped>
.job-title-circle {
  $size: 28vw;

  height: $size;
  width: $size;
  border-radius: $size;
  margin: auto;

  h3 {
    font-size: 2.3vw;
    transform: translateY(-50%);
    position: relative;
    top: 50%;
  }
}
</style>
