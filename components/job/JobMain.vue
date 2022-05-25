<template>
  <b-container fluid class="d-block mt-4">
    <div class="d-none" v-for="(j, i) in jobData" :key="i">
      <b-img
        :src="j.imgSrc && require('@/assets/job/' + j.imgSrc + '.png')"
        @load="onImageLoaded"
      />
    </div>

    <b-container class="d-block d-lg-none">
      <b-row align-v="center">
        <b-col cols="12" sm="6" class="text-center text-sm-right">
          <h3 class="text-primary">{{ title }}</h3>
          <p v-if="description">{{ description }}</p>
        </b-col>
        <b-col cols="12" sm="6">
          <b-img-lazy fluid :src="mainImgSrc" alt="job-main-img" />
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="d-block d-lg-none position-relative">
      <b-container fluid class="job-mobile-rows-wrapper"></b-container>
      <b-container>
        <b-row cols="1">
          <b-col>
            <JobRowMobile
              v-for="(j, i) in jobData.filter(j => j.imgSrc)"
              :key="i"
              :imgSrc="j.imgSrc && require('@/assets/job/' + j.imgSrc + '.png')"
              :title="j.title"
              :subTitle="j.subTitle"
              :link="j.link"
            />
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <b-container fluid class="d-none d-lg-block">
      <JobTitleCircle :title="title" />
      <div
        class="job-circle-row"
        :class="[readyForAnimate && 'animate', jobData.length % 2 === 0 ? 'even' : 'odd']"
      >
        <JobCircle
          v-for="(j, i) in jobData"
          :key="i"
          :imgSrc="j.imgSrc && require('@/assets/job/' + j.imgSrc + '.png')"
          :title="j.title"
          :subTitle="j.subTitle"
          :link="j.link"
          :smallText="j.smallText"
        />
      </div>
    </b-container>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import JobTitleCircle from '../../components/job/JobTitleCircle.vue'
import JobCircle from '../../components/job/JobCircle.vue'
import JobRowMobile from '../../components/job/JobRowMobile.vue'

export default Vue.extend({
  name: 'JobMain',
  data: () => ({
    selectedJob: '',
    imageLoadedCount: 0,
    jobActive: 1,
    readyForAnimate: false,
  }),
  components: {
    JobTitleCircle,
    JobCircle,
    JobRowMobile,
  },
  props: {
    title: String,
    mainImgSrc: String,
    description: String,
    jobData: Array,
  },
  methods: {
    async onImageLoaded() {
      const job: any[] = this.jobData

      if (++this.imageLoadedCount >= job.filter(j => j.imgSrc).length) {
        this.readyForAnimate = true
      }
    },
  },
})
</script>

<style lang="scss">
@keyframes xAxisFar {
  0% {
    animation-timing-function: ease-in;
    transform: translateX(-600%);
  }
}

@keyframes yAxisFar {
  75% {
    animation-timing-function: ease-in;
    transform: translateY(calc(300% - 50px));
  }
}

@keyframes xAxisMiddle {
  0% {
    animation-timing-function: ease-in;
    transform: translateX(-600%);
  }
}

@keyframes yAxisMiddle {
  75% {
    animation-timing-function: ease-in;
    transform: translateY(calc(300% - 280px));
  }
}

@keyframes xAxisNear {
  0% {
    animation-timing-function: ease-in;
    transform: translateX(-600%);
  }
}

@keyframes yAxisNear {
  75% {
    animation-timing-function: ease-in;
    transform: translateY(200%);
  }
}

.job-circle-row {
  margin-top: 30px;
  margin-bottom: 100px;
  visibility: hidden;
  &.even {
    @media only screen and (max-width: 1800px) {
      margin-top: 100px;
    }

    @media only screen and (max-width: 1600px) {
      margin-top: 150px;
    }

    @media only screen and (max-width: 1400px) {
      margin-top: 200px;
    }

    @media only screen and (max-width: 1200px) {
      margin-top: 250px;
    }
  }

  &.animate {
    visibility: visible;

    &.even {
      .job-circle-link {
        position: relative;
        display: inline-block;
        width: 16.66%;

        &:nth-child(1) {
          animation: xAxisFar 2.1s;

          .job-circle-inner {
            animation: yAxisFar 2.1s;
          }
        }

        &:nth-child(2) {
          animation: xAxisMiddle 1.9s;

          .job-circle-inner {
            animation: yAxisMiddle 1.9s;
          }
        }

        &:nth-child(3) {
          animation: xAxisNear 1.75s;

          .job-circle-inner {
            animation: yAxisNear 1.75s;
          }
        }

        &:nth-child(4) {
          animation: xAxisNear 1.3s;

          .job-circle-inner {
            animation: yAxisNear 1.3s;
          }
        }

        &:nth-child(5) {
          animation: xAxisMiddle 1.15s;

          .job-circle-inner {
            animation: yAxisMiddle 1.15s;
          }
        }

        &:nth-child(6) {
          animation: xAxisFar 1s;

          .job-circle-inner {
            animation: yAxisFar 1s;
          }
        }

        &:nth-child(7) {
          animation: xAxisFar 1.6s;

          .job-circle-inner {
            animation: yAxisFar 1.6s;
          }
        }

        &:nth-child(8) {
          animation: xAxisFar 1.45s;

          .job-circle-inner {
            animation: yAxisFar 1.45s;
          }
        }

        &:nth-child(1),
        &:nth-child(6) {
          transform: scale(0.6);
          top: -535px;
        }

        &:nth-child(2),
        &:nth-child(5) {
          transform: scale(0.7);
          top: -340px;
        }

        &:nth-child(3),
        &:nth-child(4) {
          transform: scale(0.8);
          top: -120px;
        }

        &:nth-child(7),
        &:nth-child(8) {
          transform: scale(0.9);
          top: -260px;
        }

        &:nth-child(1) {
          left: 100px;
        }

        &:nth-child(2) {
          right: 80px;
        }

        &:nth-child(3) {
          right: 220px;
        }

        &:nth-child(4) {
          left: 220px;
        }

        &:nth-child(5) {
          left: 80px;
        }
        &:nth-child(6) {
          right: 100px;
        }
        &:nth-child(7) {
          left: 0px;
        }
        &:nth-child(8) {
          right: 0px;
        }
      }
    }

    &.odd {
      .job-circle-link {
        position: relative;
        display: inline-block;
        width: 16.66%;

        &:nth-child(1) {
          animation: xAxisFar 1.75s;

          .job-circle-inner {
            animation: yAxisFar 1.75s;
          }
        }

        &:nth-child(2) {
          animation: xAxisMiddle 1.6s;

          .job-circle-inner {
            animation: yAxisMiddle 1.6s;
          }
        }

        &:nth-child(3) {
          animation: xAxisNear 1.45s;

          .job-circle-inner {
            animation: yAxisNear 1.45s;
          }
        }

        &:nth-child(4) {
          animation: xAxisNear 1.3s;

          .job-circle-inner {
            animation: yAxisNear 1.3s;
          }
        }

        &:nth-child(5) {
          animation: xAxisFar 1.15s;

          .job-circle-inner {
            animation: yAxisFar 1.15s;
          }
        }

        &:nth-child(1),
        &:nth-child(5) {
          transform: scale(0.9);
          top: -280px;
        }

        &:nth-child(3) {
          transform: scale(1.2);
          top: 50px;
        }

        &:nth-child(2),
        &:nth-child(4) {
          transform: scale(1);
          top: -80px;
        }

        &:nth-child(1) {
          left: 20px;
        }

        &:nth-child(2) {
          right: 40px;
        }

        &:nth-child(3) {
          right: 0px;
          h3 {
            font-size: 1.3vw;
          }
        }

        &:nth-child(4) {
          left: 40px;
        }

        &:nth-child(5) {
          right: 20px;
        }
      }
    }
  }
}

.job-mobile-rows-wrapper {
  display: block;
  height: 100%;
  width: 100%;
  background: $primary;
  position: absolute;
  top: 130px;
  z-index: -10;

  &:before {
    display: block;
    width: 100%;
    height: 50px;
    background-color: $primary;
    border-radius: 50%;
    content: '1';
    position: relative;
    top: -25px;
  }
}
</style>
