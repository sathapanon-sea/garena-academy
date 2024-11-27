<template>
  <div>
    <b-row
      v-if="partnerCollection"
      v-for="r in partnerCollection.pr"
      cols="1"
      cols-sm="1"
      cols-md="8"
      class="home-partner-icons mt-4 mx-auto justify-content-center"
    >
      <b-col v-for="(p, i) in partnerCollection[r]" :key="i"
        ><PartnerItem :imgSrc="p.image.url" :link="p.link" />
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PartnerItem from './PartnerItem.vue'
// import gql from 'graphql-tag'

export default Vue.extend({
  name: 'Partner',
  components: {
    PartnerItem,
  },
  data() {
    return {
      partnerCollection: [],
    }
  },
  async fetch() {
    // const context = this.$nuxt.context
    // const client = context.app.apolloProvider?.defaultClient

    // const partnerCollection = await client?.query({
    //   query: gql`
    //     query {
    //       partnerCollection {
    //         items {
    //           link
    //           image {
    //             url
    //           }
    //         }
    //       }
    //     }
    //   `,
    // })

    // this.partnerCollection = partnerCollection?.data.partnerCollection
    const response = await fetch(
      'https://cdn-webth.garenanow.com/webth/cdn/garena/academy/partner.json'
    )
    const partnerCollection = await response.json()
    this.partnerCollection = partnerCollection
  },
  // old logo
  // {
  //   link: 'https://www.depa.or.th/th/home',
  //   image: {
  //     url:
  //       'https://images.ctfassets.net/3hwcvrtzzbzy/DZaLXxBxBBgIn3PoyD6ab/867cc31727593fd82ae139283dd6285c/2Depa.png',
  //   },
  // },
  // {
  //   link: 'http://www.tacga.or.th/',
  //   image: {
  //     url:
  //       'https://images.ctfassets.net/3hwcvrtzzbzy/3t3C55SmZ5OLZ5h5jee8Ad/f64c0c656f56c6be3ccdbe571340f9ae/3TACGA.png',
  //   },
  // },
  // // {
  // //   link: 'https://www.tyithailand.or.th/',
  // //   image: {
  // //     url:
  // //       'https://images.ctfassets.net/3hwcvrtzzbzy/3Qs8UumwCcvd7PymfMHIlH/648711d5f358f552483254aab199f5c3/4TYI.png',
  // //   },
  // // },
  // {
  //   link: 'https://mahidol.ac.th/th/',
  //   image: {
  //     url:
  //       'https://images.ctfassets.net/3hwcvrtzzbzy/4fkb8cuDlE3CysXykAcBse/e38a01a339856a9b64b576d55d7f747d/5Mahidol.png',
  //   },
  // },
  // {
  //   link: 'https://cim.ssru.ac.th/',
  //   image: {
  //     url:
  //       'https://images.ctfassets.net/3hwcvrtzzbzy/7hFrmbXgRZvKt6RRa5HJyA/c53b5ad74ef778add9e3cdf56cd3f7e1/6innovationm.png',
  //   },
  // },
  // {
  //   link: 'https://ant.dpu.ac.th/',
  //   image: {
  //     url:
  //       'https://images.ctfassets.net/3hwcvrtzzbzy/7sF5ykQTZhaCio4ylCgHFU/8572c4606e9ebbf96636b3b0486befbc/7ANT.png',
  //   },
  // },
  // {
  //   link: 'https://www.bu.ac.th/th/',
  //   image: {
  //     url:
  //       'https://images.ctfassets.net/3hwcvrtzzbzy/2A8On7sxWrNhu7msQR3tOO/b35f4ca66ab5d11ffe11c91c090a7c3e/8BU.png',
  //   },
  // },
  // {
  //   link: 'https://business.utcc.ac.th/',
  //   image: {
  //     url:
  //       'https://images.ctfassets.net/3hwcvrtzzbzy/4TQJbgiAdOAH8qPrrz0rjU/f78ebca3f82209427f2243cfb02eedff/9UTCC.png',
  //   },
  // },
  // {
  //   link: 'https://www.dd-dt.com/',
  //   image: {
  //     url:
  //       'https://images.ctfassets.net/3hwcvrtzzbzy/7zZrXu6QDKCyibW3UH98KL/0c4796551326dc28ec0a97c37f78dee6/6KMUTT.png',
  //   },
  // },
  // {
  //   link: 'https://www.spu.ac.th/fac/sdm/th/d',
  //   image: {
  //     url:
  //       'https://images.ctfassets.net/3hwcvrtzzbzy/5rEC6oMdgm4Xoi9tkk0118/2a221fe681126129c48aa6a457807c15/11digitalSPU.png',
  //   },
  // },
  // {
  //   link: 'https://www.truedigitalpark.com/home',
  //   image: {
  //     url:
  //       'https://images.ctfassets.net/3hwcvrtzzbzy/2onvE0XGr9zkCwPS4b6kik/9ba9d2dffcd185bd325106908fbb0024/12TrueDigitalpark.png',
  //   },
  // },
  // {
  //   link: 'http://www.ygg-cg.com/',
  //   image: {
  //     url:
  //       'https://images.ctfassets.net/3hwcvrtzzbzy/5rNJyPtQo23GEuGMarnJtH/8a0c8fadd0bb051f1eddd1355280a20c/13Yggdrazil.png',
  //   },
  // },
  // {
  //   link: 'https://www.careervisathailand.com/',
  //   image: {
  //     url:
  //       'https://images.ctfassets.net/3hwcvrtzzbzy/6GOcMRJQKhMRzlCmbzQN2k/8a1cddc7ac87d31908820ae6de5c4db4/14CareerVisa.png',
  //   },
  // },
})
</script>

<style lang="scss" scoped>
.home-partner-icons {
  max-width: 1000px;
  margin: auto;
  align-items: center;
  > div {
    max-width: calc(100% / 7);
    @media screen and (max-width: 1024px) {
      max-width: 100%;
    }
  }
  img {
    padding-top: 15px;
    padding-bottom: 15px;
  }
}
</style>
