<template>
  <b-container fluid class="d-block mt-4">
    <JobMain
      title="นักการตลาดและประชาสัมพันธ์เกม"
      description=""
      mainImgSrc="@/assets/job/นักการตลาดและประชาสัมพันธ์เกม.png"
      :jobData="[
        {
          imgSrc: '',
          title: '',
          subTitle: '',
          link: '',
        },
        {
          imgSrc: 'marketing',
          title: 'Marketing',
          subTitle: 'นักการตลาดด้านเกม',
          link: '/job/game-marketing-ads/marketing',
        },
        {
          imgSrc: 'game-master',
          title: 'Game Master',
          subTitle: 'เกมมาสเตอร์',
          link: '/job/game-marketing-ads/game-master',
        },
        {
          imgSrc: 'journalist',
          title: 'Journalist',
          subTitle: 'นักข่าววงการเกม',
          link: '/job/game-marketing-ads/journalist',
        },
        {
          imgSrc: 'esport-team',
          title: 'eSports Broadcast Team',
          subTitle: 'ทีมควบคุมการผลิตสื่อและถ่ายทอดสด',
          link: '/job/game-marketing-ads/esport-team',
          smallText: true,
        },
        {
          imgSrc: '',
          title: '',
          subTitle: '',
          link: '',
        },
      ]"
    />
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import JobMain from '../../../components/job/JobMain.vue'

export default Vue.extend({
  name: 'GameMarketingAndAdsMain',
  components: {
    JobMain,
  },
})
</script>

<style lang="scss" scoped></style>
