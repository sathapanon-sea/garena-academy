<template>
  <b-row
    v-if="partnerCollection"
    cols="2"
    cols-sm="3"
    cols-md="5"
    class="home-partner-icons mt-4 mx-auto justify-content-center"
  >
    <b-col v-for="(p, i) in partnerCollection.items" :key="i"
      ><PartnerItem :imgSrc="p.image.url" :link="p.link" />
    </b-col>
  </b-row>
</template>

<script lang="ts">
import Vue from 'vue'
import PartnerItem from './PartnerItem.vue'
import gql from 'graphql-tag'

export default Vue.extend({
  name: 'Partner',
  components: {
    PartnerItem,
  },
  data() {
    return {
      partnerCollection: null,
    }
  },
  async fetch() {
    const context = this.$nuxt.context
    const client = context.app.apolloProvider?.defaultClient

    const partnerCollection = await client?.query({
      query: gql`
        query {
          partnerCollection {
            items {
              link
              image {
                url
              }
            }
          }
        }
      `,
    })

    this.partnerCollection = partnerCollection?.data.partnerCollection
  },
})
</script>

<style lang="scss" scoped>
.home-partner-icons {
  max-width: 700px;
  margin: auto;
  img {
    padding-top: 15px;
    padding-bottom: 15px;
  }
}
</style>
