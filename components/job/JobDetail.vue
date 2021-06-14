<template>
  <b-container fluid class="job-detail-wrapper d-block">
    <b-badge variant="primary" class="job-detail-title my-4 px-4 mx-4"
      >{{ title }}
      <p class="mt-1 mb-0">{{ subTitle }}</p></b-badge
    >
    <b-container class="job-detail-container bg-white shadow mb-5">
      <b-img fluid-grow class="job-detail-pic" :src="mainImg" alt="job-detail-main-img" />
      <div v-if="mainVideoLink" class="job-detail-video mt-5">
        <b-embed
          type="iframe"
          aspect="16by9"
          :src="mainVideoLink"
          allowfullscreen
        ></b-embed>
      </div>
      <h3 class="text-primary mt-4">{{ title }}</h3>
      <p class="text-justify" v-html="description"></p>
      <b-row v-if="hasJobVariant" class="job-detail-variants mb-5">
        <b-col cols="12" md="6" class="p-3">
          <b-row align-v="center">
            <b-col cols="12" class="text-center mb-3 mb-sm-0"
              ><h5 class="m-0">{{ jobVariantTitle1 }}</h5></b-col
            >
          </b-row>
          <p class="mt-4 text-justify">
            {{ jobVariantDescription1 }}
          </p>
        </b-col>
        <b-col cols="12" md="6" class="p-3">
          <b-row align-v="center">
            <b-col cols="12" class="text-center mb-3 mb-sm-0"
              ><h5 class="m-0">{{ jobVariantTitle2 }}</h5></b-col
            >
          </b-row>
          <p class="mt-4 text-justify">
            {{ jobVariantDescription2 }}
          </p>
        </b-col>
      </b-row>
      <h3 class="job-detail-section">คุณสมบัติและทักษะ (Skill)</h3>
      <p class="job-detail-skill-description text-justify">
        {{ skillMainDescription }}
      </p>
      <b-row v-if="skills" class="job-detail-skills mt-5 pb-5 justify-content-center">
        <b-col
          v-for="(s, i) in skills"
          :key="i"
          cols="12"
          :md="skills.length % 2 === 0 || skills.length % 3 === 1 ? 6 : 4"
          class="pt-3"
        >
          <b-img-lazy
            fluid
            :src="require('@/assets/job/' + s.imgSrc)"
            alt="job-detail-skill-img1"
          />
          <h5 class="mt-3">{{ s.title }}</h5>
          <p class="mt-4 text-justify" v-html="s.description"></p>
        </b-col>
      </b-row>
      <b-row v-if="hasUniqueSkill" class="job-detail-unique-skills">
        <b-col cols="12" lg="8">
          <h5 class="text-primary">
            {{ uniqueSkillHeader1 }}
          </h5>
          <b-row class="mt-4">
            <b-col cols="12" lg="6">
              <h6>{{ uniqueSkill1Title1 }}</h6>
              <p class="mt-4 text-justify">
                {{ uniqueSkill1Description1 }}
              </p>
            </b-col>
            <b-col cols="12" lg="6">
              <h6>{{ uniqueSkill1Title2 }}</h6>
              <p class="mt-4 text-justify">
                {{ uniqueSkill1Description2 }}
              </p>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" lg="4">
          <h5 class="text-primary">
            {{ uniqueSkillHeader2 }}
          </h5>
          <h6>{{ uniqueSkill2Title1 }}</h6>
          <p class="mt-4 text-justify" v-html="uniqueSkill2Description1"></p>
          <h6>{{ uniqueSkill2Title2 }}</h6>
          <p class="mt-4 text-justify" v-html="uniqueSkill2Description2"></p>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <h3 class="job-detail-section">บุคลิกลักษณะ (Character)</h3>
      <b-row class="mt-5">
        <b-col cols="12" lg="7">
          <div class="job-character-chart mb-5 mb-lg-0">
            <b-img-lazy
              v-if="characterChartImg"
              fluid
              :src="characterChartImg"
              alt="job-detail-character-img"
            />
          </div>
        </b-col>
        <b-col cols="12" lg="5" class="job-character-details text-left">
          <b-row align-v="center" class="text-center text-lg-left">
            <b-col cols="12" v-for="(c, i) in characterDetails" :key="i">
              <p class="text-justify" v-html="c"></p
            ></b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="mt-5 text-justify" v-if="characterAddition">
          <p>{{ characterAddition }}</p>
        </b-col>
      </b-row>
      <h3 class="job-detail-section mt-5">
        บทบาทและหน้าที่ (Roles and responsibilities)
      </h3>
      <b-row class="job-roles mt-5">
        <b-col cols="12" lg="6" class="job-roles-left">
          <b-row align-v="center" class="text-justify text-white h-100">
            <b-col
              cols="12"
              v-for="r in roles"
              class="py-5"
              :key="r.title"
              :style="`height: ${100 / roles.length}%`"
            >
              <div>
                <h3>{{ r.title }}</h3>
                <p class="text-justify">
                  {{ r.description }}
                </p>
              </div></b-col
            >
          </b-row>
        </b-col>
        <b-col cols="12" lg="6" class="job-roles-right pl-lg-5">
          <div class="job-roles d-none d-lg-flex">
            <b-img-lazy fluid :src="roleImg" alt="job-detail-role-img" />
          </div>
          <b-badge pill variant="primary" class="job-roles-income-title my-5 px-4"
            >รายได้ (Income)</b-badge
          >
          <p class="text-justify" v-html="incomeDescription"></p>
        </b-col>

        <b-col cols="12" class="mt-2 mt-lg-5" v-if="roleAddition">
          <p class="text-justify" v-html="roleAddition"></p>
        </b-col>
      </b-row>
      <h3 class="job-detail-section mt-5">คำแนะนำเพื่อเริ่มต้นอาชีพ</h3>
      <b-row class="job-advices-mobile d-flex d-lg-none text-left shadow mx-2 mx-sm-0">
        <b-col cols="12" md="6" v-for="(r, i) in recommendLv" :key="i"
          ><h5>LV{{ i + 1 }}</h5>
          <p class="text-justify" v-html="r"></p
        ></b-col>
      </b-row>
      <div class="job-advices-wrapper d-none d-lg-block">
        <b-img-lazy fluid class="" src="@/assets/job/jump.png" alt="jump" />
        <b-row class="job-advices">
          <template v-for="(r, i) in Array.prototype.reverse.apply(recommendLv)">
            <b-col cols="1" :offset="3 - i" :key="'lv' + i"
              ><h5>LV{{ recommendLv.length - i }}</h5></b-col
            >
            <b-col
              :cols="String(8 + i)"
              :class="`job-advice-lv${recommendLv.length - i}`"
              :key="i"
              ><p class="text-justify" v-html="r"></p
            ></b-col>
          </template>
        </b-row>
      </div>
      <div v-if="recommendAddtion" class="mt-5">
        <p class="text-justify">{{ recommendAddtion }}</p>
      </div>
      <h3 class="job-detail-section mt-5">แนะนำหลักสูตรการเรียนการสอน</h3>
    </b-container>
    <b-container fluid class="job-class-advices-wrapper d-block mt-5">
      <b-container>
        <b-row class="job-class-advices text-white text-left p-5">
          <b-col cols="12"
            ><p class="text-justify">
              {{ recommendCourseDescription }}
            </p>
          </b-col>
          <b-col cols="12" lg="5">
            <div v-for="r in recommendCourseDetails" :key="r.header">
              <p>
                <strong>{{ r.header && `&#8226; ${r.header}` }}</strong>
              </p>
              <div
                v-for="d in r.details"
                :key="d.place"
                class="job-detail-recommend-course"
              >
                <p>
                  <strong>- {{ d.place }}</strong>
                </p>
                <ul>
                  <li v-for="(c, i) in d.courses" :key="i">
                    <p>
                      {{ c }}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
          <b-col
            cols="12"
            lg="7"
            class="job-class-advices-image-col d-none d-lg-flex"
            align-self="center"
          >
            <b-img-lazy fluid :src="recommendImg" alt="job-detail-recommend-img" />
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'JobDetail',
  props: {
    mainImg: String,
    mainVideoLink: String,
    title: String,
    subTitle: String,
    description: String,
    hasJobVariant: Boolean,
    jobVariantImg1: String,
    jobVariantTitle1: String,
    jobVariantDescription1: String,
    jobVariantImg2: String,
    jobVariantTitle2: String,
    jobVariantDescription2: String,
    skillMainDescription: String,
    skills: Array,
    hasUniqueSkill: Boolean,
    uniqueSkillHeader1: String,
    uniqueSkill1Title1: String,
    uniqueSkill1Description1: String,
    uniqueSkill1Title2: String,
    uniqueSkill1Description2: String,
    uniqueSkillHeader2: String,
    uniqueSkill2Title1: String,
    uniqueSkill2Description1: String,
    uniqueSkill2Title2: String,
    uniqueSkill2Description2: String,
    characterChartImg: String,
    characterDetails: Array,
    characterAddition: String,
    roles: Array,
    roleImg: String,
    roleAddition: String,
    incomeDescription: String,
    recommendLv: Array,
    recommendAddtion: String,
    recommendCourseDescription: String,
    recommendCourseDetails: Array,
    recommendImg: String,
  },
})
</script>

<style lang="scss" scoped>
.job-detail-wrapper {
  &:before {
    display: block;
    content: '';
    background-color: $primary;
    width: 100%;
    height: 750px;
    position: absolute;
    z-index: -100;
  }

  &:after {
    display: block;
    content: '';
    width: 100%;
    height: 65vw;
    position: absolute;
    z-index: -100;
    top: 740px;
    background-image: url('../../assets/job/redonly.png');
    background-size: 100%;
    background-repeat: no-repeat;
  }

  .job-detail-title {
    min-height: 65px;
    white-space: normal;
    font-weight: 400;
    font-size: 30px;
  }

  .job-detail-container {
    margin-top: 120px;
    border-radius: 30px;
    padding: 0 80px;

    @include media-breakpoint-down(md) {
      padding-bottom: 80px;
    }

    @include media-breakpoint-down(sm) {
      padding: 0 30px;
      padding-bottom: 30px;
    }

    .job-detail-pic {
      margin-top: -120px;
    }

    .job-detail-video-placeholder {
      background-color: #808080;
      margin: auto;
      width: 85%;
      position: relative;
      overflow: hidden;
      padding-top: 52.5%;

      @include media-breakpoint-down(sm) {
        width: 100%;
      }
    }

    .job-detail-variants {
      border: 1px solid rgba(0, 0, 0, 0.5);
      border-radius: 25px;

      > div[class*='col-'] {
        &:nth-child(2) {
          border-left: 1px solid rgba(0, 0, 0, 0.5);

          @include media-breakpoint-down(sm) {
            border-left: 0;
            border-top: 1px solid rgba(0, 0, 0, 0.5);
          }
        }
      }

      h5 {
        font-size: 1.5vw;

        @include media-breakpoint-down(sm) {
          font-size: 20px;
        }
      }

      img {
        height: 80px;
      }
    }

    .job-detail-skills {
      h5 {
        font-size: 1.5vw;
        min-height: 50px;

        @include media-breakpoint-down(sm) {
          font-size: 20px;
        }
      }

      img {
        height: 80px;
      }
    }
  }

  .job-detail-section {
    background-color: $primary;
    color: white;
    border-radius: 50px;
    padding: 8px 0;
    margin: 20px 0;
    width: 90vw;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
  }

  .job-detail-skill-description {
    margin: auto;

    @include media-breakpoint-down(sm) {
      width: auto;
    }
  }

  .job-detail-skills {
    img {
      height: 80px;

      @include media-breakpoint-down(sm) {
        margin-top: 24px;
      }
    }
  }

  .job-detail-unique-skills {
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 25px;
    margin: 0 -80px;
    padding: 0 60px;

    @include media-breakpoint-down(md) {
      margin: 0;
    }

    > div[class*='col-'] {
      padding: 20px;

      &:nth-child(2) {
        border-left: 1px solid rgba(0, 0, 0, 0.5);

        @include media-breakpoint-down(md) {
          border-left: 0;
          border-top: 1px solid rgba(0, 0, 0, 0.5);
        }
      }
    }
  }

  .job-character-details {
    @include media-breakpoint-down(md) {
      max-width: 65%;
      min-width: 300px;
      margin: auto;
    }

    div[class*='col-'] {
      height: 120px;
      border-top: 1px solid rgba(0, 0, 0, 0.5);

      &:last-child {
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      }

      p {
        margin-top: 60px;
        transform: translateY(-50%);
      }
    }
  }

  .job-roles-left {
    padding: 0 50px;
    background-color: $primary;

    div[class*='col-'] {
      border-bottom: 1px solid white;
      display: flex;
      align-items: center;

      &:last-child {
        border-bottom: none;
      }
    }
  }

  .job-roles-right {
    .job-roles-income-title {
      font-size: 24px;
      font-weight: 400;
      width: 80%;
    }
  }

  .job-advices-wrapper {
    position: relative;

    img {
      position: absolute;
      height: 400px;
      z-index: 10;
      top: -40px;
      left: -30px;
    }
  }

  .job-advices {
    $job-advice-row-height: 160px;

    div[class*='col-'] {
      height: $job-advice-row-height;

      h5,
      p {
        margin-top: $job-advice-row-height / 2;
        transform: translateY(-50%);
      }

      p {
        font-weight: 300;
      }
    }

    div.col-1 {
      color: white;
      background-color: $primary;
    }

    .job-advice-lv1 {
      background-color: $primary;
      color: white;
    }

    .job-advice-lv2 {
      background-color: #d4575d;
      color: white;
    }

    .job-advice-lv3 {
      background-color: #ff9ca1;
    }

    .job-advice-lv4 {
      background-color: #ffd1d3;
    }
  }

  .job-advices-mobile {
    div[class*='col-'] {
      &:nth-child(even) {
        @include media-breakpoint-up(md) {
          box-shadow: inset 0 0.5rem 1rem rgb(0 0 0 / 15%);
        }
      }
    }

    h5 {
      padding: 5px 20px;
      margin: 0 -15px;
      color: white;
      background: $primary;
    }

    p {
      padding: 15px 10px;
    }
  }

  .job-class-advices-wrapper {
    @include media-breakpoint-down(md) {
      background-color: $primary;
    }

    .job-class-advices {
      background-color: $primary;
      border-radius: 40px;

      ul {
        list-style: none;
        padding-left: 20px;
      }
    }

    .job-detail-recommend-course {
      padding-left: 20px;

      p {
        margin-bottom: 5px;
      }
    }
  }

  .job-class-advices-image-col {
    img {
      position: relative;
      right: -65px;
    }
  }
}
</style>
