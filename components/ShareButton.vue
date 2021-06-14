<template>
  <div>
    <div class="share-alert">
      <b-alert
        variant="info"
        dismissible
        fade
        :show="dismissCountDown"
        @dismissed="dismissCountDown = 0"
      >
        {{ alertMessage }}
      </b-alert>
    </div>
    <div>
      <b-img
        class="share-button"
        src="@/assets/แชร์เฟส.png"
        alt="แชร์เฟส"
        @click="onFacebookShare"
      />
      <b-img
        class="share-button ml-2"
        src="@/assets/แชร์ลิงค์.png"
        alt="แชร์ลิงค์"
        @click="onLinkShare"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ShareButton',
  props: {
    link: String,
  },
  data: () => ({
    alertMessage: '',
    dismissCountDown: 0,
  }),
  methods: {
    onFacebookShare() {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${this.link}`, '_blank')
    },
    onLinkShare() {
      navigator.clipboard.writeText(this.link)
      this.alertMessage = 'คัดลอกลิ้งค์สำเร็จ'
      this.dismissCountDown = 5
    },
  },
})
</script>

<style scoped lang="scss">
.share-alert {
  position: fixed;
  z-index: 10;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
}
.share-button {
  width: 40px;
  cursor: pointer;
}
</style>
