<template>
  <b-container fluid class="bg-primary mw-100 py-4 d-block overflow-hidden">
    <b-badge pill variant="primary" class="job-title">อาชีพ</b-badge>

    <div
      class="container-flex container-md text-center px-0 mt-5 job-selection text-white"
    >
      <div
        class="job-selection-mobile d-block d-md-none"
        :class="`focus-${jobSelectionIndex}`"
      >
        <div :class="jobSelectionIndex === 1 && 'focus'">
          <nuxt-link to="/job/game-marketing-ads" class="nav-link">
            <div class="job-circle shadow">
              <b-img-lazy
                fluid
                src="@/assets/job/นักการตลาดและประชาสัมพันธ์เกม.png"
                alt="นักการตลาดและประชาสัมพันธ์เกม"
              />
            </div>
          </nuxt-link>
          <p>
            นักการตลาดและประชาสัมพันธ์เกม
            <span
              @click="onClickChangeJob(2)"
              class="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </p>
        </div>

        <div :class="jobSelectionIndex === 2 && 'focus'">
          <nuxt-link to="/job/game-artist-dev" class="nav-link">
            <div class="job-circle shadow">
              <b-img-lazy
                fluid
                src="@/assets/job/นักออกแบบและพัฒนาเกม.png"
                alt="นักออกแบบและพัฒนาเกม"
              />
            </div>
          </nuxt-link>
          <p>
            <span
              @click="onClickChangeJob(1)"
              class="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            นักออกแบบและพัฒนาเกม
            <span
              @click="onClickChangeJob(3)"
              class="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </p>
        </div>

        <div :class="jobSelectionIndex === 3 && 'focus'">
          <nuxt-link to="/job/game-player-caster" class="nav-link"
            ><div class="job-circle shadow">
              <b-img-lazy
                fluid
                src="@/assets/job/นักกีฬาและนักพากย์เกม.png"
                alt="นักกีฬาและนักพากย์เกม"
              />
            </div>
          </nuxt-link>
          <p>
            <span
              @click="onClickChangeJob(2)"
              class="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            นักกีฬา/นักพากย์เกม
          </p>
        </div>
      </div>

      <b-row cols="1" cols-md="3" class="d-none d-md-flex">
        <b-col>
          <div
            class="job-circle-container"
            @click="animateTo(1, '/job/game-marketing-ads')"
            :class="this.jobClicked === 1 && 'clicked'"
          >
            <div class="job-circle shadow">
              <b-img-lazy
                fluid
                src="@/assets/job/นักการตลาดและประชาสัมพันธ์เกม.png"
                alt="นักการตลาดและประชาสัมพันธ์เกม"
              />
            </div>
          </div>
          <p>นักการตลาดและประชาสัมพันธ์เกม</p>
        </b-col>
        <b-col
          ><div
            class="job-circle-container"
            @click="animateTo(2, '/job/game-artist-dev')"
            :class="this.jobClicked === 2 && 'clicked'"
          >
            <div class="job-circle shadow">
              <b-img-lazy
                fluid
                src="@/assets/job/นักออกแบบและพัฒนาเกม.png"
                alt="นักออกแบบและพัฒนาเกม"
              />
            </div>
            <p>นักออกแบบและพัฒนาเกม</p>
          </div>
        </b-col>
        <b-col>
          <div
            class="job-circle-container"
            @click="animateTo(3, '/job/game-player-caster')"
            :class="this.jobClicked === 3 && 'clicked'"
          >
            <div class="job-circle shadow">
              <b-img-lazy
                fluid
                src="@/assets/job/นักกีฬาและนักพากย์เกม.png"
                alt="นักกีฬาและนักพากย์เกม"
              />
            </div>
            <p>นักกีฬา/นักพากย์เกม</p>
          </div></b-col
        >
      </b-row>
    </div>

    <!-- <b-container class="job-survey-box mt-5 shadow p-5 mb-5 bg-white">
      <h3>ค้นหาอาชีพที่ใช่</h3>
      <b-link
        href="https://garenaacademy.careervisathailand.com/login/"
        target="_blank"
        class="text-white"
      >
        <b-button class="job-start-survey-button mt-3" pill variant="primary"
          >เริ่มทำแบบประเมิน</b-button
        ></b-link
      >
    </b-container> -->
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import type { Route } from 'vue-router'

export default Vue.extend({
  name: 'Job',
  head: {
    title: 'หมวดอาชีพ',
  },
  data: () => ({
    jobSelectionIndex: 2,
    jobClicked: 0,
  }),
  watch: {
    $route(to: Route) {
      if (to.path === this.$route.path) {
        this.jobClicked = 0
      }
    },
  },
  methods: {
    onClickChangeJob(index: number) {
      this.jobSelectionIndex = index
    },

    async animateTo(index: number, to: string) {
      this.jobClicked = index

      await new Promise(resolve => setTimeout(resolve, 1000))
      this.$router.push(to)
    },
  },
})
</script>

<style lang="scss" scoped>
.job-title {
  width: 150px;
  height: 60px;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  border: 1px solid white;
}

.job-selection {
  $size: 15vw;

  .job-circle {
    width: $size;
    height: $size;
    max-width: 200px;
    max-height: 200px;

    background-color: white;
    border-radius: 100%;
    margin: auto;
    position: relative;
    cursor: pointer;

    @include media-breakpoint-down(md) {
      transform: scale(1.2);
    }

    @include media-breakpoint-down(sm) {
      width: 70%;
      height: 70%;
      transform: scale(1);
    }

    img {
      transform: scale(1.3);
      width: 100%;
      height: 100%;
    }
  }

  p {
    margin-top: 35px;
    color: white;

    @include media-breakpoint-down(sm) {
      margin-top: 40px;
    }
  }
}

.job-survey-box {
  position: relative;
  z-index: 100;
  max-width: 600px;
  border-radius: 25px;

  .job-start-survey-button {
    width: 300px;

    @include media-breakpoint-down(xs) {
      width: 200px;
    }
  }
}

.job-selection-mobile {
  position: relative;

  &.focus-1 {
    > div {
      &:nth-of-type(2) {
        right: 0;
        transform: translate(50%, -25%) scale(0.5);
      }

      &:nth-of-type(3) {
        right: 0;
        transform: translate(100%, -50%) scale(0.33);
        z-index: -10;
      }
    }
  }

  &.focus-2 {
    > div {
      &:nth-of-type(1) {
        transform: translate(-50%, -25%) scale(0.5);
      }

      &:nth-of-type(3) {
        right: 0;
        transform: translate(50%, -25%) scale(0.5);
      }
    }
  }

  &.focus-3 {
    > div {
      &:nth-of-type(1) {
        transform: translate(-100%, -50%) scale(0.33);
        z-index: -10;
      }

      &:nth-of-type(2) {
        transform: translate(-50%, -25%) scale(0.5);
      }
    }
  }

  > div {
    position: absolute;
    top: 0;
    transition: all 0.5s ease;

    span {
      display: none;
      position: relative;
      top: 4px;
      transform: scaleY(1.5);
      padding: 0 15px;
    }

    &.focus {
      position: relative !important;
      transform: translate(0, 0) scale(1) !important;

      p {
        font-size: 20px;
      }

      span {
        display: inline-block;
        cursor: pointer;

        * {
          font-size: 30px;
          margin-bottom: -4px;
        }
      }
    }
  }
}

.job-circle-container {
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
      animation-timing-function: ease-out;
      opacity: 0;
    }
  }

  .job-circle:after {
    content: '';
    display: block;
    background-color: white;
    border-radius: 100%;
    margin: auto;
    position: relative;
    transform: translateY(-100%);
    z-index: -1000;
    width: 15vw;
    height: 15vw;
  }

  &.clicked {
    position: relative;
    z-index: 50000;

    .job-circle {
      &:after {
        z-index: 50000;
        transform: scale(20);
        transition: all 1s ease;
      }

      img {
        animation: fade 1s;
        opacity: 0;
        position: relative;
        z-index: 50001;
      }
    }
  }
}

.bg-primary {
  padding: 130px 0;
}
</style>
