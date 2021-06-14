<template>
  <div class="home-banner bg-primary" :class="buttonClicked && 'clicked'">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="5000"
      controls
      indicators
      style="text-shadow: 1px 1px 2px #333"
      v-if="homeBannerCollection"
    >
      <b-carousel-slide v-for="(b, i) in homeBannerCollection.items" :key="i">
        <b-row class="pt-5 px-md-5 text-white m-0">
          <b-col cols="12" md="7" order="2" order-md="1"
            ><div class="home-banner-image-holder">
              <b-img-lazy
                class="mt-4 mt-md-0"
                fluid-grow
                :src="b.image.url"
                alt="home-banner"
              /></div
          ></b-col>
          <b-col
            cols="12"
            md="5"
            align-self="center"
            class="d-none d-md-flex"
            order-md="2"
          >
            <b-row cols="1">
              <b-col>
                <h3 class="px-3 banner-title-wrapper">
                  <i
                    class="banner-title"
                    v-for="(c, i) in 'LEVEL UP YOUR PASSION!'"
                    :key="i"
                    >{{ c.trim() || '&nbsp;' }}</i
                  >
                </h3>
              </b-col>
              <b-col>
                <p class="mt-4">{{ b.subTitle }}</p>
              </b-col>
              <b-col>
                <b-button
                  class="home-banner-start-button mt-3 bg-white text-primary"
                  pill
                  @click="animateTo(i + 1)"
                  :class="buttonClicked === i + 1 && 'clicked'"
                  >{{ b.buttonText }}</b-button
                >
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" md="5" order="3" order-md="2" class="d-block d-md-none"
            ><h3 class="mt-5 px-3">
              <i>LEVEL UP YOUR PASSION!</i>
            </h3>
          </b-col>
          <b-col cols="12" md="5" order="1" order-md="3" class="d-block d-md-none">
            <p class="mt-4">{{ b.subTitle }}</p>
          </b-col>
          <b-col cols="12" md="5" order="4" order-md="4" class="d-block d-md-none mb-4">
            <b-link to="/job">
              <b-button
                class="home-banner-start-button mt-3 bg-white text-primary"
                pill
                >{{ b.buttonText }}</b-button
              >
            </b-link>
          </b-col>
        </b-row>
      </b-carousel-slide>
    </b-carousel>
    <b-img-lazy
      fluid-grow
      src="@/assets/home/bghome.png"
      alt="bghome"
      class="home-background"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import gql from 'graphql-tag'
import type { Route } from 'vue-router'

export default Vue.extend({
  name: 'Banner',
  data() {
    return {
      slide: 0,
      homeBannerCollection: null,
      buttonClicked: 0,
    }
  },
  watch: {
    $route(to: Route) {
      if (to.path === this.$route.path) {
        this.buttonClicked = 0
      }
    },
  },
  async fetch() {
    const context = this.$nuxt.context
    const client = context.app.apolloProvider?.defaultClient

    const homeBannerCollection = await client?.query({
      query: gql`
        query {
          homeBannerCollection(limit: 5, order: order_ASC) {
            items {
              subTitle
              buttonText
              image {
                url
              }
            }
          }
        }
      `,
    })

    this.homeBannerCollection = homeBannerCollection?.data.homeBannerCollection
  },
  methods: {
    async animateTo(index: number, to: string) {
      this.buttonClicked = index

      await new Promise(resolve => setTimeout(resolve, 1000))
      this.$router.push('/job')
    },
  },
})
</script>

<style lang="scss">
.home-background {
  position: relative;
  margin-bottom: -35%;
  top: -1px;
  z-index: -100;

  @include media-breakpoint-down(sm) {
    margin-bottom: -40%;
  }

  @include media-breakpoint-up(xl) {
    margin-bottom: -30%;
  }
}

.carousel-inner {
  overflow: visible !important;
}

.carousel-caption {
  left: 0 !important;
  width: 100%;
  position: relative !important;
  font-family: 'Kanit', sans-serif !important;
}

.carousel-control-next,
.carousel-control-prev {
  z-index: 1000 !important;
}

.carousel-indicators li {
  height: 8px !important;
  width: 8px !important;
  border: none !important;
  outline: none !important;
  border-radius: 100%;
}

.home-banner {
  position: relative;
  z-index: 0;

  &.clicked {
    z-index: 500;
    transition: all 2s ease;
  }

  @include media-breakpoint-up(md) {
    h3 {
      font-size: 3vw;
    }

    p {
      font-size: 1.5vw;
    }
  }

  .home-banner-image-holder {
    width: 100%;
    position: relative;
    padding-top: 75%;
    overflow: hidden;

    img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
    }
  }
}
.home-banner-start-button {
  font-size: 28px;
  font-weight: 600;
  width: 180px;

  &:after {
    content: '';
    display: block;
    background-color: white;
    border-radius: 100%;
    margin-top: -30px;
    position: relative;
    z-index: -1000;
    width: 30px;
    height: 30px;
  }

  &.clicked {
    position: relative;
    z-index: 50000;

    &:after {
      z-index: 50000;
      transform: scale(350);
      transition: all 2.5s ease;
    }
  }
}

.banner-title-wrapper {
  white-space: nowrap;
  overflow-y: hidden;

  .banner-title {
    display: inline-block;
    position: relative;
    top: 50px;
    opacity: 0;

    @for $i from 1 through 22 {
      &:nth-child(#{$i}) {
        animation: move-text 0.5s forwards #{0.75 + $i * 0.025}s;
      }
    }
  }

  @keyframes move-text {
    100% {
      top: 0;
      opacity: 1;
    }
  }
}
</style>
