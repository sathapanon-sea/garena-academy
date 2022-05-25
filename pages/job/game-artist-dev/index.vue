<template>
  <b-container fluid class="d-block mt-4">
    <JobMain
      title="นักออกแบบและพัฒนาเกม"
      description="อาชีพของผู้ที่ทำหน้าที่ออกแบบและวาดภาพองค์ประกอบต่างๆในเกมให้เห็นเป็นภาพที่สวยงามสมจริงหรือตามจินตนาการ อาทิ ฉากหลัง วิว ทิวทิศน์ วัตถุต่างๆ ไม่ว่าจะเป็นยานพาหนะ อาวุธ บ้านเรือน สัตว์ รวมทั้งตัวละครและเครื่องแต่งกายให้ปรากฎเป็นภาพตามเรื่องราวในเกม"
      mainImgSrc="@/assets/job/นักออกแบบและพัฒนาเกม.png"
      :jobData="[
        {
          imgSrc: 'game_artist',
          title: 'Game Artist',
          subTitle: 'เกมอาร์ตติส',
          link: '/job/game-artist-dev/game-artist',
        },
        {
          imgSrc: 'game_animator',
          title: 'Game Animator',
          subTitle: 'เกมแอนิเมเตอร์',
          link: '/job/game-artist-dev/game-animator',
        },
        {
          imgSrc: 'game_developer',
          title: 'Game Developer',
          subTitle: 'นักพัฒนาเกม',
          link: '/job/game-artist-dev/game-developer',
        },
        {
          imgSrc: 'game_QA tester',
          title: 'Game QA Tester',
          subTitle: 'นักทดสอบระบบเกม',
          link: '/job/game-artist-dev/game-qa',
        },
        {
          imgSrc: 'game_designer',
          title: 'Game Designer',
          subTitle: 'นักออกแบบเกม',
          link: '/job/game-artist-dev/game-designer',
        },
        {
          imgSrc: 'game_dev arvr',
          title: 'Game AR/VR Developer',
          subTitle: 'นักพัฒนาเกม AR/VR',
          link: '/job/game-artist-dev/game-arvr-developer',
          smallText: true,
        },
        {
          imgSrc: 'sound-designer',
          title: 'Sound Designer (Game)',
          subTitle: 'นักออกแบบเสียง',
          link: '/job/game-artist-dev/sound-designer',
        },
        {
          imgSrc: 'technical-artist',
          title: 'Technical Artist',
          subTitle: 'Technical Artist',
          link: '/job/game-artist-dev/technical-artist',
        },
      ]"
    />
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import JobMain from '../../../components/job/JobMain.vue'

export default Vue.extend({
  name: 'GameArtistAndDevMain',
  components: {
    JobMain,
  },
  head: {
    title: 'หมวดนักออกแบบและพัฒนาเกม',
  },
})
</script>

<style lang="scss" scoped></style>
