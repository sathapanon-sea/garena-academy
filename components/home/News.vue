<template>
  <b-row class="home-survey-icons-row mt-4 justify-content-center" v-if="newsCollection">
    <b-col
      lg="4"
      v-for="(n, i) in newsCollection.items"
      :key="`${n.sys.id}-${i}-${n.title || 'news'}`"
    >
      <NewsItem
        :title="n.title"
        :description="documentToHtmlString(n.content.json)"
        :id="n.sys.id"
        :imgSrc="n.imagesCollection.items[0].url + '?w=600&h=450'"
      />
    </b-col>
  </b-row>
</template>

<script lang="ts">
import Vue from 'vue'
import NewsItem from './NewsItem.vue'
import gql from 'graphql-tag'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default Vue.extend({
  name: 'News',
  components: {
    NewsItem,
  },
  data() {
    console.log('here')
    return {
      newsCollection: null,
    }
  },
  methods: {
    documentToHtmlString: documentToHtmlString,
  },
  fetchOnServer: false,
  async fetch() {
    const context = this.$nuxt.context
    const client = context.app.apolloProvider?.defaultClient

    const newsCollection = await client?.query({
      query: gql`
        query {
          newsCollection(limit: 3, where: { tags_contains_some: ["Home"] }) {
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
        }
      `,
    })

    this.newsCollection = newsCollection?.data.newsCollection
  },
})
</script>

<style lang="scss" scoped></style>
