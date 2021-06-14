<template>
  <div>
    <b-img src="@/assets/home/popup/ครู_01.png" class="d-none" @load="onImageLoaded" />
    <b-img
      src="@/assets/home/popup/นักเรียน-05.png"
      class="d-none"
      @load="onImageLoaded"
    />
    <b-img
      src="@/assets/home/popup/บุคคลทั่วไป_01.png"
      class="d-none"
      @load="onImageLoaded"
    />
    <b-img
      src="@/assets/home/popup/bgwhitered.png"
      class="d-none"
      @load="onImageLoaded"
    />
    <b-modal
      id="popup-modal"
      hide-header
      hide-footer
      body-bg-variant="primary"
      no-close-on-backdrop
      centered
      content-class="shadow"
    >
      <div class="text-center">
        <div class="popup-logo d-none d-md-block">
          <b-img-lazy fluid src="@/assets/header/LogoGarenaAcademy_H.png" />
        </div>
        <div class="text-white pt-5 pt-md-0">
          <h2>คุณเป็นใคร?</h2>
          <h3 class="mt-3 mt-md-0">ครู | นักเรียน | บุคคลทั่วไป</h3>
        </div>

        <div class="popup-jobs d-block d-md-none">
          <b-img
            fluid-grow
            src="@/assets/home/popup/ครู_01.png"
            alt="ครู"
            v-bind:class="[jobActive === 0 ? 'popup-job-active' : '']"
          />
          <b-img
            fluid-grow
            src="@/assets/home/popup/นักเรียน-05.png"
            alt="นักเรียน"
            v-bind:class="[jobActive === 1 ? 'popup-job-active' : '']"
          />
          <b-img
            fluid-grow
            src="@/assets/home/popup/บุคคลทั่วไป_01.png"
            alt="บุคคลทั่วไป"
            v-bind:class="[jobActive === 2 ? 'popup-job-active' : '']"
          />
          <div class="popup-job-selector shadow">
            <div class="popup-job-title text-primary">
              <p v-bind:class="[jobActive === 0 ? 'popup-job-active' : '']">
                <span @click="onJobChanged('ครู', 1)">ค</span
                ><span @click="onJobChanged('ครู', 1)">รู</span>
                <span v-bind:class="[jobActive === 0 ? 'triangle-up' : '']"></span>
              </p>
              <p v-bind:class="[jobActive === 1 ? 'popup-job-active' : '']">
                <span @click="onJobChanged('นักเรียน', 2)">นั</span
                ><span @click="onJobChanged('นักเรียน', 2)">ก</span
                ><span @click="onJobChanged('นักเรียน', 2)">เ</span
                ><span @click="onJobChanged('นักเรียน', 2)">รี</span>ย<span
                  @click="onJobChanged('นักเรียน', 2)"
                  >น</span
                >
                <span v-bind:class="[jobActive === 1 ? 'triangle-up' : '']"></span>
              </p>
              <p v-bind:class="[jobActive === 2 ? 'popup-job-active' : '']">
                <span @click="onJobChanged('บุคคลทั่วไป', 3)">บุ</span>
                <span @click="onJobChanged('บุคคลทั่วไป', 3)">ค</span>
                <span @click="onJobChanged('บุคคลทั่วไป', 3)">ค</span>
                <span @click="onJobChanged('บุคคลทั่วไป', 3)">ล</span
                ><span @click="onJobChanged('บุคคลทั่วไป', 3)">ทั่</span
                ><span @click="onJobChanged('บุคคลทั่วไป', 3)">ว</span
                ><span @click="onJobChanged('บุคคลทั่วไป', 3)">ไ</span
                ><span @click="onJobChanged('บุคคลทั่วไป', 3)">ป</span>
                <span v-bind:class="[jobActive === 2 ? 'triangle-up' : '']"></span>
              </p>
            </div>
            <b-button
              class="popup-select-button mt-3"
              pill
              size="lg"
              variant="outline-primary"
              @click="onJobClicked"
              >Select</b-button
            >
          </div>
        </div>

        <div class="popup-jobs d-none d-sm-block">
          <b-row>
            <b-col
              cols="4"
              @click="onJobClicked"
              @mouseover="onJobFocused('ครู')"
              @mouseleave="onJobUnfocused"
            >
              <b-img fluid-grow src="@/assets/home/popup/ครู_01.png" alt="ครู" />
            </b-col>
            <b-col
              cols="4"
              @click="onJobClicked"
              @mouseover="onJobFocused('นักเรียน')"
              @mouseleave="onJobUnfocused"
            >
              <b-img
                fluid-grow
                src="@/assets/home/popup/นักเรียน-05.png"
                alt="นักเรียน"
              />
            </b-col>
            <b-col
              cols="4"
              @click="onJobClicked"
              @mouseover="onJobFocused('บุคคลทั่วไป')"
              @mouseleave="onJobUnfocused"
            >
              <b-img
                fluid-grow
                src="@/assets/home/popup/บุคคลทั่วไป_01.png"
                alt="บุคคลทั่วไป"
              />
            </b-col>
          </b-row>
        </div>
        <div class="position-absolute popup-job-selected bg-white d-none d-md-block">
          <h2 class="text-primary shadow">
            {{ selectedJob || 'โปรดเลือกอาชีพ' }}
          </h2>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Popup',
  data: () => ({
    selectedJob: '',
    imageLoadedCount: 0,
    jobActive: 1,
  }),
  methods: {
    async onJobFocused(job: string) {
      this.selectedJob = job
    },
    async onJobUnfocused() {
      this.selectedJob = ''
    },
    async onJobClicked() {
      this.$bvModal.hide('popup-modal')
      this.$cookies.set('job-selected', this.selectedJob, Infinity)
    },
    async onImageLoaded() {
      if (++this.imageLoadedCount >= 4) {
        this.$bvModal.show('popup-modal')
      }
    },
    async onJobChanged(job: string, index: number) {
      this.selectedJob = job
      this.jobActive = index - 1
    },
  },
})
</script>

<style lang="scss">
#popup-modal {
  .modal-dialog {
    max-width: 90%;

    @include media-breakpoint-down(sm) {
      height: 100%;
      max-width: 100%;
      margin: 0;
    }
  }

  .modal-content {
    border: 0;

    @include media-breakpoint-down(sm) {
      height: 100%;
    }
  }

  .modal-body {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
    overflow: hidden;

    @include media-breakpoint-up(md) {
      background-image: url('../assets/home/popup/bgwhitered.png');
      background-size: 100%;
      background-repeat: no-repeat;
      border-radius: 10px;
    }
  }
}
.popup-logo {
  width: 150px;
  position: absolute;
  top: 15px;
  left: 15px;
}

.popup-job-selected {
  margin: auto;
  width: 100%;
  height: 60px;
  margin-top: -80px;
  position: relative;
  z-index: 10;

  h2 {
    line-height: 60px;
  }
}
.popup-jobs {
  @include media-breakpoint-up(md) {
    div.row {
      div[class*='col'] {
        z-index: 0;

        img {
          cursor: pointer;
          transition: 0.5s ease;

          &:hover {
            opacity: 1;
            transform: scale(1.25);
          }
        }

        &:hover {
          z-index: 1;
        }

        &:nth-child(1) {
          right: 5%;
        }

        &:nth-child(2) {
          transform: scale(1.3);
        }

        &:nth-child(3) {
          left: 2.5%;
        }
      }
    }
  }

  @include media-breakpoint-down(sm) {
    img {
      position: fixed;
      transition: 0.5s ease;
      left: 0%;
      top: 100%;
      transform: scale(0);

      &.popup-job-active {
        transition: all 0.5s ease;
        transform: scale(1);
        top: 25vh;
      }
    }

    .popup-job-selector {
      width: 125%;
      height: 125%;
      border-radius: 500px;
      background-color: white;
      position: fixed;
      left: -12.5%;
      bottom: -100%;

      .popup-job-title {
        position: relative;
        height: 100px;
        width: 100%;
        top: 40px;

        .triangle-up {
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid $primary;
          position: absolute;
        }

        p {
          font-weight: 400;
          display: block;
          width: 100%;
          position: absolute;
          font-size: 1.5em;
          opacity: 0.3;

          &.popup-job-active {
            opacity: 1;
          }

          span {
            position: relative;
          }

          &:nth-child(1) {
            transform: translateX(-27%);

            span {
              z-index: 3000;
              display: inline-block;
              top: 50px;

              @include media-breakpoint-down(xs) {
                top: 25px;
              }

              @for $i from 1 through 10 {
                &:nth-child(#{$i}) {
                  transform: translate(#{$i * -4 + 20}px, #{$i * -7.5}px)
                    rotate(#{$i * -1 - 35}deg);
                }
              }
            }

            .triangle-up {
              top: 190%;
            }
          }
          &:nth-child(2) {
            top: -20px;
            z-index: 2000;

            .triangle-up {
              bottom: -10px;
              left: calc(50% - 10px);
            }

            span {
              z-index: 2000;
            }
          }
          &:nth-child(3) {
            transform: translateX(30%);

            bottom: 25%;

            @include media-breakpoint-down(xs) {
              bottom: 55%;
            }

            span {
              display: inline-block;
              z-index: 1000;
              @for $i from 1 through 10 {
                &:nth-child(#{$i}) {
                  transform: translate(#{$i * -3.5}px, #{$i * 8}px)
                    rotate(#{$i * 1 + 30}deg);
                }
              }
            }

            .triangle-up {
              top: -30%;
              left: calc(48%);
            }
          }
        }
      }

      .popup-select-button {
        width: 150px;
        position: absolute;
        bottom: calc(80% + 25px);
        left: calc(50% - 75px);
      }
    }
  }
}
</style>
