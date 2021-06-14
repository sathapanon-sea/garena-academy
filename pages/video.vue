<template>
  <b-container fluid>
    <b-container fluid class="video-header-wrapper">
      <b-container class="video-header">
        <b-img-lazy fluid src="@/assets/video/headวิดีโอ_1.png" alt="headวิดีโอ_1" />
        <div class="video-title text-white text-left">
          <h2>วิดีโอ</h2>
          <p class="d-none d-sm-block">
            ประสบการณ์จากตัวจริงเสียงจริง! รับชมและรับฟังก่อนใคร!
          </p>
        </div>
      </b-container>
    </b-container>
    <b-container fluid class="video-block-selection">
      <b-container>
        <ul>
          <li :class="activeTabIndex === 0 && 'active'" @click="onChangeTab(0)">
            แนะนำอาชีพ
          </li>
          <li :class="activeTabIndex === 1 && 'active'" @click="onChangeTab(1)">
            วิดีโอรายการ: Level Up Your passion
          </li>
        </ul>
        <div class="clearfix"></div>
      </b-container>
    </b-container>
    <b-container
      class="video-tab mt-5"
      :class="activeTabIndex !== 0 ? 'd-none' : 'active'"
    >
      <b-row align-v="center" class="text-left">
        <b-col cols="12" md="7" order="2" order-md="1">
          <div class="video-main-placeholder">
            <b-embed
              type="iframe"
              aspect="16by9"
              :src="videoJobActive.link"
              allowfullscreen
            ></b-embed>
          </div>
        </b-col>
        <b-col cols="12" md="5" order="1" order-md="2">
          <h2 class="text-primary">{{ videoJobActive.title }}</h2>
          <p class="text-justify">{{ videoJobActive.subTitle }}</p>
          <div class="video-share text-right mb-3">
            <ShareButton :link="getYoutubeLinkFromEmbed(videoJobActive.link)" />
          </div>
        </b-col>
      </b-row>
      <VideoRow
        title="นักออกแบบและพัฒนาเกม"
        :videos="videoJob.artistDev"
        :onClickVideoItem="onClickVideoItem('videoJobActive')"
      />
      <VideoRow
        title="นักการตลาดและประชาสัมพันธ์เกม"
        :videos="videoJob.marketing"
        :onClickVideoItem="onClickVideoItem('videoJobActive')"
      />
      <VideoRow
        title="นักกีฬา/นักพากย์เกม"
        :videos="videoJob.eSport"
        :onClickVideoItem="onClickVideoItem('videoJobActive')"
      />
    </b-container>
    <b-container
      class="video-tab mt-5"
      :class="activeTabIndex !== 1 ? 'd-none' : 'active'"
    >
      <b-row align-v="center" class="text-left">
        <b-col cols="12" md="7" order="2" order-md="1">
          <div class="video-main-placeholder">
            <b-embed
              type="iframe"
              aspect="16by9"
              :src="videoLevelUpActive.link"
              allowfullscreen
            ></b-embed>
          </div>
        </b-col>
        <b-col cols="12" md="5" order="1" order-md="2">
          <h2 class="text-primary">{{ videoLevelUpActive.title }}</h2>
          <p class="text-justify">{{ videoLevelUpActive.subTitle }}</p>
          <div class="video-share text-right mb-3">
            <ShareButton :link="getYoutubeLinkFromEmbed(videoLevelUpActive.link)" />
          </div>
        </b-col>
      </b-row>
      <VideoRow
        title="วิดีโอรายการ: Level Up Your Passion"
        :videos="videosLevelUpPassion"
        :onClickVideoItem="onClickVideoItem('videoLevelUpActive')"
      />
    </b-container>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import VideoRow from '../components/video/VideoRow.vue'
import ShareButton from '../components/ShareButton.vue'

type VideoItem = { title: string; subTitle: string; link: string; imgSrc: string }

export default Vue.extend({
  name: 'Video',
  components: {
    VideoRow,
    ShareButton,
  },
  data: () => {
    const videoJob = {
      artistDev: [
        {
          title: 'Lv99 แนะแนวอาชีพ เกมอาร์ตติส',
          subTitle: 'คุณกิตติชัย เรืองชัยชาญ และคุณ อติวิศว์ เศรษฐนิธิศ',
          link: 'https://www.youtube.com/embed/7WQK9JL2kUA',
          imgSrc: 'เกมอาร์ตติส-01.png',
          thumbTitle: 'Game Artist',
        },
        {
          title: 'Lv99 แนะแนวอาชีพ นักพัฒนาเกม',
          subTitle: 'อาจารย์นุ้ย ผศ.บัญญพลต์ พูลสวัสดิ์',
          link: 'https://www.youtube.com/embed/B3QZi2B_QT0',
          imgSrc: 'นักพัฒนาเกม-01.png',
          thumbTitle: 'Game Developer',
        },
        {
          title: 'Lv99 แนะแนวอาชีพ เกมแอนิเมเตอร์',
          subTitle: 'คุณกรีฑา โสดา และคุณอโนชา สำรองทรัพย์',
          link: 'https://www.youtube.com/embed/FuQka5qtz2k',
          imgSrc: 'เกมแอนิเมเตอร์-01.png',
          thumbTitle: 'Game Animator',
        },
        {
          title: 'Lv99 แนะแนวอาชีพ นักออกแบบเกม',
          subTitle: 'คุณโม พชร ธารากิจ และ คุณ ออฟ สาธิต ลิมป์อำไพศาล',
          link: 'https://www.youtube.com/embed/7dXW8PEmWxY',
          imgSrc: 'นักออกแบบเกม-01.png',
          thumbTitle: 'Game Designer',
        },
        {
          title: 'Lv 99 แนะแนวอาชีพ นักพัฒนาเกม AR/VR',
          subTitle: '',
          link: 'https://www.youtube.com/embed/nepRFwZ91-E',
          imgSrc: 'นักออกแบบเกมarvr-01.png',
          thumbTitle: 'Game AR/VR Developer',
        },
        {
          title: 'Lv 99 แนะแนวอาชีพ นักทดสอบระบบเกม',
          subTitle: '',
          link: 'https://www.youtube.com/embed/xSAtpGK4IAQ',
          imgSrc: 'นักทดสอบ-01.png',
          thumbTitle: 'Game QA Tester',
        },
      ],
      marketing: [
        {
          title: 'Lv99 แนะแนวอาชีพ นักข่าววงการเกม',
          subTitle: 'GamingDose',
          link: 'https://www.youtube.com/embed/GQmuTjt2cms',
          imgSrc: 'นักข่าว-01.png',
          thumbTitle: 'Game Journalist',
        },
        {
          title: 'Lv99 แนะแนวอาชีพ นักการตลาดด้านเกม',
          subTitle: 'คุณเอ็ม วริทธิ์นันท์ ไตรรัตโนภาส',
          link: 'https://www.youtube.com/embed/wnbkEVgDkhk',
          imgSrc: 'นักการตลาด-01.png',
          thumbTitle: 'Game Marketer',
        },
        {
          title: 'Lv 99 แนะแนวอาชีพ ทีมควบคุมการผลิตสื่อและถ่ายทอดสด',
          subTitle: '',
          link: 'https://www.youtube.com/embed/w8ilyUbYp-k',
          imgSrc: 'ทีมถ่ายทอด-01.png',
          thumbTitle: 'eSports Broadcast Team',
        },
        {
          title: 'Lv99 แนะแนวอาชีพ เกมมาสเตอร์',
          subTitle: '',
          link: 'https://www.youtube.com/embed/wkMLYsBQm6E',
          imgSrc: 'เกมมาสเตอร์-01.png',
          thumbTitle: 'Game Master',
        },
      ],
      eSport: [
        {
          title: 'Lv99 แนะแนวอาชีพ นักกีฬาอีสปอร์ต',
          subTitle: 'MeMarkz',
          link: 'https://www.youtube.com/embed/wwTqqTGbT5g',
          imgSrc: 'นักกีฬา-01.png',
          thumbTitle: 'eSports Player',
        },
        {
          title: 'Lv99 แนะแนวอาชีพ ผู้ฝึกสอนกีฬาอีสปอร์ต',
          subTitle: 'โค้ชป้อม',
          link: 'https://www.youtube.com/embed/4Hjuf1xIpZg',
          imgSrc: 'โค้ช-01.png',
          thumbTitle: 'eSports Coach',
        },
        {
          title: 'Lv99 แนะแนวอาชีพ เกมแคสเตอร์',
          subTitle: 'ลุงพี TeamGarryMovieThai',
          link: 'https://www.youtube.com/embed/DCdVFo_Vrig',
          imgSrc: 'เกมแคสเตอร์-01.png',
          thumbTitle: 'Game Caster',
        },
        {
          title: 'Lv99 แนะแนวอาชีพ นักพากย์การแข่งขันเกม',
          subTitle: 'Xyclopz',
          link: 'https://www.youtube.com/embed/9eTB-06gikQ',
          imgSrc: 'นักพากย์-01.png',
          thumbTitle: 'Shout Caster',
        },
        {
          title: 'Lv99 แนะแนวอาชีพ สตรีมเมอร์',
          subTitle: 'Patiiz PTZ',
          link: 'https://www.youtube.com/embed/nuV78Yp3jAw',
          imgSrc: 'สตรีมเมอร์-01.png',
          thumbTitle: 'Streamer',
        },
      ],
    }

    const videosLevelUpPassion = [
      {
        title: 'EP1 - เส้นทาง Content Creator สาวสุดปังของ Softpomz',
        subTitle:
          'Content Creator ทำอะไร ? ใครที่มีคำถาม ใครที่สงสัย เส้นทางอาชีพนี้ต้องทำอะไร เป็นมายังไง วันนี้รายการ Garena Academy Level Up Your Passion มีคำตอบให้เพื่อน ๆ ทุกคนแล้ว!!',
        link: 'https://www.youtube.com/embed/6fektOL_7Qs',
        imgSrc: 'EP1.jpg',
      },
      {
        title:
          'EP2 - ต้องฝ่าฟันแค่ไหนกว่าจะได้ขึ้นเวทีอีสปอร์ต คุยกับ MeMarkz โค้ชป้อม และพี่วินซี่',
        subTitle:
          '1 ในความใฝ่ฝันของวัยรุ่น คือวันหนึ่งเราจะได้ยืนเท่ ๆ บนเวทีการแข่งขันอีสปอร์ต แต่เราเคยรู้เบื้องหลังของคนเหล่านี้ไหม ไม่ว่าจะเป็นนักกีฬาอีสปอร์ต โค้ช นักพากย์ เส้นทางของพวกเขาเป็นยังไง',
        link: 'https://www.youtube.com/embed/8ZBJW3dvt4Y',
        imgSrc: 'EP2.jpg',
      },
      {
        title: 'EP3 - ใช้ชีวิตแบบ Creative สุดจี๊ดไปกับอิสระ ฮาตะ',
        subTitle:
          'มาฟังพี่อิส อิสระ ฮาตะ พูดคุยถึงแรงบันดาลใจในการใช้ชีวิตและการทำงานในวงการ Social Media ในยุคแรก ๆ กันในรายการ Garena Academy Level Up Your Passion ใน EP 3 ใช้ชีวิตแบบ Creative สุดจี๊ดไปกับอิสระ ฮาตะ',
        link: 'https://www.youtube.com/embed/s3pVLwk260U',
        imgSrc: 'EP3.jpg',
      },
      {
        title:
          'EP4 - ล้วงลึกทำอย่างไรให้เกมดัง กับอาชีพ Game Marketer และ Game Journalis',
        subTitle: '',
        link: 'https://www.youtube.com/embed/r9k1Q-xxh48',
        imgSrc: 'EP4.jpg',
      },
      {
        title: 'EP5 - มองเกมผ่านนักจิตวิทยา – พี่หมอสมิทธิ์',
        subTitle:
          'โรคติดเกมจริง ๆ แล้วเป็นอย่างไร? Balance ชีวิตตัวเองยังไงให้พอดี Garena Academy EP5 สมิทธิ์ เอกปิยะกุล นักจิตวิทยาคลินิกปฏิบัติการ โรงพยาบาลศรีธัญญา เล่าอย่างล้วงลึก',
        link: 'https://www.youtube.com/embed/2cn30Je7n7M',
        imgSrc: 'EP5.jpg',
      },
      {
        title: 'EP6 - สร้างเกมจากความคิดสู่โลกเสมือนจริง',
        subTitle:
          'พบกับเบื้องหลังวงการเกมแบบเจาะลึกอย่างที่ไม่เคยเจอที่รายการไหนมาก่อน กับ Garena Academy EP 6 กับ Game Designer, Game Animator และ Game Developer',
        link: 'https://www.youtube.com/embed/OvCrvqJD3fs',
        imgSrc: 'EP6.jpg',
      },
      {
        title: 'EP7 - ต้องเก่งแค่ไหนถึงจะเป็น กายหงิด',
        subTitle:
          'Episode สุดท้ายของรายการ Garena Academy Level Up Your Passion กับ Streamer Caster คนดัง! ที่เอ่ยชื่อไปใคร ๆ ก็รู้จักอย่าง กายหงิด ที่จะมาปล่อยของสุดฤทธิ์ในรายการ ห้ามพลาดเลย!',
        link: 'https://www.youtube.com/embed/WHYqG6PvZOI',
        imgSrc: 'EP7.jpg',
      },
    ]

    return {
      activeTabIndex: 0,
      videosLevelUpPassion,
      videoLevelUpActive: videosLevelUpPassion[0],
      videoJob,
      videoJobActive: videoJob.artistDev[0],
    }
  },
  methods: {
    getYoutubeLinkFromEmbed(embedLink: string) {
      return embedLink.replace('www.youtube.com/embed', 'youtu.be')
    },
    onChangeTab(index: number) {
      this.activeTabIndex = index
    },
    onClickVideoItem(section: string) {
      return (video: VideoItem) => {
        const scrollToVideo = () => {
          const videoBlockSelection = document.querySelector('.video-block-selection')
          const scrollTo =
            (videoBlockSelection?.getBoundingClientRect().bottom || 0) +
            window.scrollY -
            80
          window.scroll({
            top: scrollTo,
            behavior: 'smooth',
          })
        }

        const self: any = this
        if (video.link !== self[section].link) {
          const iFrame: any = document.querySelector(
            '.video-tab.active .embed-responsive > iframe'
          )
          iFrame.onload = () => {
            scrollToVideo()
          }

          self[section] = video
        } else {
          scrollToVideo()
        }
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.video-header-wrapper {
  background-image: url('../assets/video/headวิดีโอ_bg.png');
  background-color: $primary;
  background-repeat: repeat-x;
  background-size: contain;
  display: block;

  .video-header {
    position: relative;
  }

  .video-title {
    top: 40%;
    left: 25%;
    position: absolute;

    h2 {
      font-size: 3vw;
      margin-bottom: 0;

      @include media-breakpoint-down(xs) {
        font-size: 6vw;
      }
    }
  }
}

.video-block-selection {
  background-color: $primary;
  display: block;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      float: left;
      background-color: $primary;
      color: white;
      display: block;
      border-radius: 10px 10px 0 0;
      padding: 5px 25px;
      cursor: pointer;

      @include media-breakpoint-down(xs) {
        font-size: 14px;
        padding: 5px 10px;
      }

      &.active {
        color: $primary;
        background-color: white;
        cursor: default;
      }
    }
  }
}

.video-main-placeholder {
  background-color: #808080;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;

  .embed-responsive {
    position: absolute;
    top: 0;
    left: 0;
  }
}

.video-share {
  img {
    width: 40px;
    cursor: pointer;
  }
}
</style>
