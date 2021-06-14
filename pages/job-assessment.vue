<template>
  <b-container fluid class="job-assessment-banner">
    <b-container class="position-relative">
      <b-badge pill variant="primary" class="job-assessment-title mt-4"
        >แบบประเมินอาชีพ</b-badge
      >
      <b-img-lazy
        class="mb-5 mt-3 d-none d-md-inline-block"
        fluid
        src="@/assets/job-assessment/textonly.png"
        alt="textonly"
      />
      <b-img-lazy
        class="mb-5 mt-3 d-inline-block d-md-none"
        fluid
        src="@/assets/job-assessment/mobiletextonly.png"
        alt="textonly"
      />
      <b-row align-h="end" class="job-assessment-button-row pb-5 pb-md-0">
        <b-col cols="12" md="4" offset-md="8" class="job-assessment-button">
          <b-img-lazy
            fluid
            src="@/assets/job-assessment/ปุ่มonly_1.png"
            alt="ปุ่มonly_1"
          />
          <b-link
            href="https://garenaacademy.careervisathailand.com/login/"
            target="_blank"
            >เริ่มทำแบบประเมิน</b-link
          >
        </b-col>
        <b-col cols="12" md="4" offset-md="8">
          <b-img-lazy
            fluid
            src="@/assets/job-assessment/รับรองcareervisa.png"
            alt="รับรองcareervisa"
          />
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'JobAssessment',
})
</script>

<style lang="scss" scoped>
.job-assessment-banner {
  display: block;
  width: 100%;
  background: rgb(193, 40, 45);
  background: linear-gradient(180deg, rgba(193, 40, 45, 1) 50%, rgba(0, 0, 0, 1) 180%);

  .job-assessment-title {
    height: 60px;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    padding-left: 25px;
    padding-right: 25px;
  }

  .job-assessment-button-row {
    position: absolute;
    bottom: 30px;
    right: 0;

    @include media-breakpoint-down(sm) {
      position: static;
    }

    .job-assessment-button {
      img {
        position: relative;
        cursor: pointer;
      }

      a {
        white-space: nowrap;
        font-size: 20px;
        color: white;
        position: absolute;
        top: calc(50% - 5px);
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;

        @include media-breakpoint-down(sm) {
          top: calc(50% - 10px);
          font-size: 26px;
        }
      }
    }
  }
}
</style>
