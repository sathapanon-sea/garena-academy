<template>
  <div class="material-box text-secondary shadow pb-5 mt-4">
    <b-img-lazy fluid :src="imgSrc" alt="material-box-img" />
    <div>
      <div>
        <h3>{{ title }}</h3>
        <p>{{ subTitle }}</p>
      </div>
      <hr />
      <b-button
        class="material-box-download-video-button shadow mr-2"
        pill
        variant="outline"
        @click="onDownloadClick('video')"
      >
        <b-img-lazy fluid src="@/assets/learning-material/ไอคอนวิดีโอ.png" alt="video" />
        <span class="text-primary">วิดีโอ</span></b-button
      >
      <b-button
        class="material-box-download-document-button shadow"
        pill
        variant="outline"
        @click="onDownloadClick('document')"
      >
        <b-img-lazy
          fluid
          src="@/assets/learning-material/ไอคอนเอกสาร.png"
          alt="document"
        /><span class="text-primary">เอกสาร</span></b-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { BvModalEvent } from 'bootstrap-vue'

export default Vue.extend({
  name: 'MaterialBox',
  props: {
    imgSrc: String,
    title: String,
    subTitle: String,
    videoLink: String,
    documentLink: String,
  },
  methods: {
    onDownloadClick(type: 'video' | 'document') {
      this.openDownload(type)
      // if (this.$cookies.get('download-form-submitted') === '1') {
      //   return this.openDownload(type)
      // }

      // // this.$bvModal.show('learning-material-popup-modal')
      // this.$root.$once('bv::modal::hide', (event: BvModalEvent, modalId: string) => {
      //   if (event.trigger === 'event') {
      //     this.openDownload(type)
      //   }
      // })
    },

    openDownload(type: 'video' | 'document') {
      const job = this.$cookies.get('job-selected')
      job &&
        this.$gtag.set({
          user_properties: {
            job_title: job,
          },
        })
      this.$gtag.event('download', { download_type: this.title + '-' + type })

      window.open(type === 'video' ? this.videoLink : this.documentLink, '_blank')
    },
  },
})
</script>

<style lang="scss" scoped>
.material-box {
  padding: 25px;
  border-radius: 25px;
  transform: scale(1);

  @include media-breakpoint-up(md) {
    transform: scale(0.8);
  }

  img {
    height: 20vw;

    @include media-breakpoint-down(sm) {
      height: 50vw;
    }
  }

  .material-box-download-video-button,
  .material-box-download-document-button {
    width: 120px;

    img {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }

    span {
      font-size: 20px;
    }

    &:hover {
      background-color: #ddd;
    }
  }
}
</style>
