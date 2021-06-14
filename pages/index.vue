<template>
  <div>
    <Banner />
    <b-container class="pl-5 pr-5">
      <b-container class="home-survey-box mt-5 shadow p-5 mb-5 bg-white">
        <h3>ค้นหาอาชีพที่ใช่</h3>
        <b-row class="home-survey-icons-row mt-4 justify-content-sm-center">
          <b-col cols="6" sm="2"
            ><b-img-lazy fluid src="@/assets/home/paint.png" alt="paint"
          /></b-col>
          <b-col cols="6" sm="2"
            ><b-img-lazy fluid src="@/assets/home/sheet.png" alt="sheet"
          /></b-col>
          <b-col cols="6" sm="2"
            ><b-img-lazy fluid src="@/assets/home/cube.png" alt="cube"
          /></b-col>
          <b-col cols="6" sm="2"
            ><b-img-lazy fluid src="@/assets/home/poster.png" alt="poster"
          /></b-col>
        </b-row>
        <hr class="mt-4" />
        <b-link
          href="https://garenaacademy.careervisathailand.com/login/"
          target="_blank"
          class="text-white"
        >
          <b-button class="home-start-survey-button mt-3" pill variant="primary"
            >เริ่มทำแบบประเมิน</b-button
          ></b-link
        >
      </b-container>
      <b-container class="home-news mt-5">
        <b-row>
          <h3 class="m-auto m-lg-0 float-lg-left">ข่าวสาร/กิจกรรม</h3>
        </b-row>
        <News />
        <nuxt-link to="/news" class="nav-link">
          <b-button
            class="home-news-read-more-button mt-3"
            pill
            variant="outline-secondary"
            >อ่านเพิ่มเติม</b-button
          ></nuxt-link
        >
      </b-container>
      <b-container class="home-partner mt-5">
        <b-row>
          <b-col
            ><div class="position-absolute home-partner-title">
              <span class="bg-white px-3 px-lg-5 h3">Partner</span>
            </div></b-col
          >
          <b-col cols="12"><hr /></b-col>
        </b-row>
        <Partner />
      </b-container>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import News from '../components/home/News.vue'
import Partner from '../components/home/Partner.vue'
import Banner from '../components/home/Banner.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    News,
    Partner,
    Banner,
  },
})
</script>

<style lang="scss" scoped>
.home-survey-box {
  position: relative;
  z-index: 100;
  max-width: 600px;
  border-radius: 25px;

  .home-start-survey-button {
    width: 300px;

    @include media-breakpoint-down(xs) {
      width: 200px;
    }
  }
}
.home-survey-icons-row img {
  padding-top: 15px;
  padding-bottom: 15px;
  width: 50px;

  @include media-breakpoint-down(sm) {
    width: 75px;
  }
}
.home-partner-title {
  z-index: 1;
  width: calc(100% - 30px);
}
.home-news {
  max-width: 1000px;
  position: relative;
  z-index: 1;
}
.home-news-read-more-button {
  width: 150px;
}
</style>
