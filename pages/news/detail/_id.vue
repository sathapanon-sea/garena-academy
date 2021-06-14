<template>
  <div class="news-detail container-fluid container-md p-0" v-if="news">
    <b-row class="d-flex d-md-inline-block w-100 m-0 news-detail-images">
      <b-col cols="12" order="10" order-md="1">
        <h1 class="text-primary my-4">{{ news.title }}</h1>
      </b-col>
      <b-col
        cols="12"
        md="9"
        class="px-0 px-md-3 float-left"
        order="1"
        order-md="2"
        align-self="stretch"
      >
        <div class="news-image-placeholder main" :class="imgLoading && 'img-loading'">
          <b-spinner label="Loading..." class="news-main-loading text-white"></b-spinner>
          <b-img-lazy
            v-if="news.imagesCollection.items[0]"
            fluid-grow
            :src="news.imagesCollection.items[0].url"
            alt="news-main"
            ref="newsImageMain"
          />
        </div>
      </b-col>
      <b-col md="3" class="d-none d-md-flex float-right">
        <splide v-if="slides.length" :slides="slides" :options="options" ref="splide">
          <splide-slide v-for="(slide, i) in slides" :key="slide.src">
            <div
              class="news-image-placeholder"
              @click="onThumbImgClick(news.imagesCollection.items[i])"
            >
              <b-img-lazy
                v-if="news.imagesCollection.items[i]"
                fluid
                :src="news.imagesCollection.items[i].url + '?w=400&h=300'"
                alt="news-img"
              />
            </div>
          </splide-slide>
        </splide>
      </b-col>
      <b-col
        md="3"
        class="mt-0 mb-md-4 px-0 px-md-3 float-right d-flex d-md-none"
        order="2"
        order-md="3"
      >
        <splide
          v-if="slides.length"
          :slides="slides"
          :options="mobileOptions"
          ref="splide"
        >
          <splide-slide v-for="(slide, i) in slides" :key="slide.src">
            <div
              class="news-image-placeholder"
              @click="onThumbImgClick(news.imagesCollection.items[i])"
            >
              <b-img-lazy
                v-if="news.imagesCollection.items[i]"
                fluid
                :src="news.imagesCollection.items[i].url + '?w=400&h=300'"
                alt="news-img"
              />
            </div>
          </splide-slide>
        </splide>
      </b-col>
      <b-col cols="12" class="text-right float-right mt-4" order="3" order-md="4">
        <ShareButton :link="baseUrl + $route.path" />
      </b-col>
    </b-row>
    <b-container class="new-details-content text-justify mt-md-4">
      <p v-html="documentToHtmlString(news.content.json)"></p>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import gql from 'graphql-tag'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import ShareButton from '../../../components/ShareButton.vue'
import striptags from 'striptags'

type Image = {
  url: string
}

export default Vue.extend({
  name: 'NewsDetail',
  components: {
    ShareButton,
  },
  head() {
    const instance: any = this

    return {
      meta: [
        { property: 'og:type', content: 'article' },
        {
          property: 'og:title',
          hid: 'og:title',
          content: instance.news?.title,
        },
        {
          property: 'og:description',
          hid: 'og:description',
          content: striptags(documentToHtmlString(instance.news?.content.json)),
        },
        {
          property: 'og:image',
          hid: 'og:image',
          content: instance.news?.imagesCollection.items[0]?.url,
        },
      ],
    }
  },
  data(): { slides: {}[]; [key: string]: any } {
    return {
      imgLoading: false,
      newsId: this.$route.params.id,
      slides: [],
      options: {
        direction: 'ttb',
        autoHeight: true,
        height: '1px',
        gap: 22,
        perPage: 3,
        pagination: false,
      },
      mobileOptions: {
        perPage: 2,
        pagination: false,
      },
      baseUrl: '',
      news: null,
    }
  },
  mounted() {
    this.baseUrl = window.location.origin
    window.addEventListener('resize', this.onResize)

    this.onResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    documentToHtmlString: documentToHtmlString,
    onResize() {
      const mainNewsImg = document.querySelector('.news-image-placeholder.main')
      const splideTrack = document.querySelector('.splide .splide__track')
      splideTrack?.setAttribute(
        'style',
        `min-height: ${mainNewsImg?.clientHeight}px; max-height:${mainNewsImg?.clientHeight}px;`
      )
    },
    onThumbImgClick(image: Image) {
      const newsMainImage: any = this.$refs.newsImageMain
      const newsMainImageElement: HTMLElement = newsMainImage.$el

      const onImageLoaded = () => {
        newsMainImageElement.removeEventListener('load', onImageLoaded)
        this.imgLoading = false
      }

      this.imgLoading = true
      newsMainImageElement.addEventListener('load', onImageLoaded)
      newsMainImageElement.setAttribute('src', image.url)
    },
  },
  async fetch() {
    const context = this.$nuxt.context
    const client = context.app.apolloProvider?.defaultClient

    const news = await client?.query({
      query: gql`
        query getNews($id: String!) {
          news(id: $id) {
            title
            content {
              json
            }
            imagesCollection(limit: 20) {
              items {
                url
              }
            }
          }
        }
      `,
      variables: {
        id: context.route.params.id,
      },
    })

    this.news = news?.data.news
    this.slides = Array(this.news?.imagesCollection.items.length).fill({}) || []
    setTimeout(() => {
      process.client && this.onResize()
    }, 0)
  },
})
</script>

<style lang="scss">
.news-detail {
  div.news-image-placeholder {
    background-color: #808080;
    width: 100%;
    position: relative;
    padding-top: 75%;
    outline: 1px solid white;

    img {
      top: 0;
      left: 0;
      position: absolute;
    }

    &:not(.main) {
      img {
        cursor: pointer;
      }
    }

    .news-main-loading {
      display: none;
    }

    &.main.img-loading {
      img {
        filter: opacity(30%);
      }

      .news-main-loading {
        display: block;
        top: calc(50% - 12px);
        left: calc(50% - 12px);

        position: absolute;
        z-index: 100;
      }
    }

    @include media-breakpoint-down(md) {
      outline: 1px solid white;
    }
  }

  .news-detail-share-button {
    width: 40px;
    cursor: pointer;
  }
}

.splide {
  &.splide--slide {
    width: 100%;

    .splide__list {
      width: 100%;
    }

    .splide__arrow {
      background: transparent;
      fill: white;
      opacity: 1;
      background-color: black;

      &:disabled {
        display: none;
      }
    }
  }
}
</style>
