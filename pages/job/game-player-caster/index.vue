<template>
  <b-container fluid class="d-block mt-4">
    <JobMain
      title="นักกีฬาและนักพากย์เกม"
      description=""
      mainImgSrc="@/assets/job/นักกีฬาและนักพากย์เกม.png"
      :jobData="[
        {
          imgSrc: 'streamer',
          title: 'Streamer',
          subTitle: 'สตรีมเมอร์',
          link: '/job/game-player-caster/streamer',
        },
        {
          imgSrc: 'shout_caster',
          title: 'Shout Caster',
          subTitle: 'นักพากย์การแข่งขันเกม',
          link: '/job/game-player-caster/shout-caster',
        },
        {
          imgSrc: 'Gamecaster',
          title: 'Game Caster',
          subTitle: 'เกมแคสเตอร์',
          link: '/job/game-player-caster/game-caster',
        },
        {
          imgSrc: 'esports_player',
          title: 'Esport Player',
          subTitle: 'นักกีฬาอีสปอร์ต',
          link: '/job/game-player-caster/esport-player',
        },
        {
          imgSrc: 'esportcoach',
          title: 'Esport Coach',
          subTitle: 'ผู้ฝึกสอนกีฬาอีสปอร์ต',
          link: '/job/game-player-caster/esport-coach',
        },
      ]"
    />
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import JobMain from '../../../components/job/JobMain.vue'

export default Vue.extend({
  name: 'GamePlayerAndCasterMain',
  components: {
    JobMain,
  },
  head: {
    title: 'หมวดนักกีฬาและนักพากย์เกม',
  },
})
</script>

<style lang="scss" scoped></style>
