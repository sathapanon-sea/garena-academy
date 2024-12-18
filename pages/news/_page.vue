<template>
  <b-container fluid>
    <h1 class="text-primary mt-4">ข่าว/กิจกรรม</h1>
    <b-container fluid v-if="news && news.main.items.length">
      <b-row class="mx-0 mt-4 d-flex d-md-none">
        <b-col cols="12" class="px-0 px-md-3">
          <nuxt-link :to="`/news/detail/${news.main.items[0].sys.id}`" class="nav-link">
            <div class="news-placeholder">
              <b-img-lazy
                v-if="news.main.items[0].imagesCollection.items[0]"
                fluid
                :src="news.main.items[0].imagesCollection.items[0].url"
                alt="news-main"
              />
              <h5>{{ news.main.items[0].title }}</h5>
            </div>
          </nuxt-link>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row
        align-v="center"
        class="mt-5 px-4 d-none d-md-flex"
        v-if="news && news.main.items.length"
      >
        <b-col>
          <nuxt-link :to="`/news/detail/${news.main.items[0].sys.id}`" class="nav-link">
            <div class="news-placeholder main">
              <b-img-lazy
                v-if="news.main.items[0].imagesCollection.items[0]"
                fluid
                :src="news.main.items[0].imagesCollection.items[0].url"
                alt="news-main"
              />
            </div>
          </nuxt-link>
        </b-col>
        <b-col class="text-left news-main">
          <nuxt-link :to="`/news/detail/${news.main.items[0].sys.id}`" class="nav-link">
            <h3 class="text-dark">{{ news.main.items[0].title }}</h3>
          </nuxt-link>
          <p
            class="text-justify"
            v-plaintext
            v-html="documentToHtmlString(news.main.items[0].content.json)"
          ></p>
          <div class="text-right">
            <ShareButton :link="`${baseUrl}/news/detail/${news.main.items[0].sys.id}`" />
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div
      class="container-fluid container-md p-0"
      v-if="news && news.newsCollection.items.length"
    >
      <b-row class="mx-0">
        <b-col
          v-for="(n, i) in news.newsCollection.items"
          :key="`${n.sys.id}-${i}-${n.title}`"
          cols="6"
          md="4"
          class="mt-0 mt-md-5 px-0 px-md-3"
        >
          <nuxt-link :to="`/news/detail/${n.sys.id}`" class="nav-link">
            <div class="news-placeholder">
              <b-img-lazy
                v-if="n.imagesCollection.items[0]"
                fluid
                :src="n.imagesCollection.items[0].url"
                alt="news-main"
              />
              <h5>{{ n.title }}</h5>
            </div>
          </nuxt-link>
        </b-col>
        <b-col
          v-for="i in Math.max(6 - news.newsCollection.items.length, 0)"
          :key="i"
          cols="6"
          md="4"
          class="mt-0 mt-md-5 px-0 px-md-3"
        >
          <div class="news-placeholder empty"></div>
        </b-col>
      </b-row>
    </div>
    <b-container>
      <div class="news-pagination mt-5" v-if="news">
        <b-pagination-nav
          align="center"
          :link-gen="linkGen"
          :number-of-pages="Math.ceil(news.count.total / 6)"
          use-router
        ></b-pagination-nav>
      </div>
    </b-container>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import gql from 'graphql-tag'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import ShareButton from '../../components/ShareButton.vue'

export default Vue.extend({
  name: 'News',
  components: {
    ShareButton,
  },
  head: {
    title: 'ข่าวและกิจกรรม',
  },
  data() {
    return {
      baseUrl: '',
      news: null,
    }
  },
  mounted() {
    this.baseUrl = window.location.origin
  },
  methods: {
    documentToHtmlString: documentToHtmlString,
    linkGen(pageNum: number) {
      return pageNum === 1 ? '/news' : `/news/${pageNum}`
    },
  },
  fetchOnServer: false,
  async fetch() {
    const context = this.$nuxt.context
    const client = context.app.apolloProvider?.defaultClient

    const news = await client?.query({
      query: gql`
        query getNewsCollection($skip: Int!) {
          main: newsCollection(limit: 1, where: { tags_contains_some: ["Main"] }) {
            items {
              sys {
                id
              }
              title
              content {
                json
              }
              imagesCollection(limit: 1) {
                items {
                  url
                }
              }
            }
          }
          newsCollection(skip: $skip, limit: 6, where: { tags_contains_none: ["Main"] }) {
            items {
              sys {
                id
              }
              title
              content {
                json
              }
              imagesCollection(limit: 1) {
                items {
                  url
                }
              }
            }
          }
          count: newsCollection(where: { tags_contains_none: ["Main"] }) {
            total
          }
        }
      `,
      variables: {
        skip: ((Number(context.route.params.page) || 1) - 1) * 6,
      },
    })

    this.news = news?.data
  },
})
</script>

<style lang="scss" scoped>
.about-us-alert {
  position: fixed;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
}

div.news-placeholder {
  background-color: #808080;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-top: 75%;

  &.empty {
    background-color: white;
    cursor: default;
  }

  img {
    top: 0;
    left: 0;
    position: absolute;
    transition: all 0.5s ease;

    &:hover {
      transform: scale(1.25);
    }
  }

  @include media-breakpoint-down(md) {
    outline: 1px solid white;
  }

  h5 {
    position: absolute;
    bottom: 10px;
    width: 100%;
    color: white;
    text-shadow: 1px 1px 4px black;

    @include lineClamp(1);
  }
}

.news-share-button {
  width: 40px;
  cursor: pointer;
}

.news-main {
  h3 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    @include lineClamp(2);
  }

  p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    @include lineClamp(6);
  }
}
</style>
