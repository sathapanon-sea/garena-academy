<template>
  <b-container fluid>
    <div
      class="learning-meterial-left-panel-pull-button bg-primary text-white d-block d-md-none"
      @click="onClickPullPanelButton"
    >
      <span
        :class="
          leftPanelOpen ? 'carousel-control-prev-icon' : 'carousel-control-next-icon'
        "
        aria-hidden="true"
      ></span>
    </div>
    <b-row class="mx-0">
      <b-col
        md="5"
        lg="4"
        class="learning-meterial-left-panel bg-primary text-left"
        :class="leftPanelOpen && 'open'"
      >
        <div class="learning-meterial-left-panel-content">
          <h2 class="text-white">หมวดอาชีพ</h2>
          <b-button
            class="learning-meterial-left-panel-button shadow"
            pill
            variant="primary"
            @click="onClickGroup(1)"
            :class="groupSelected === 1 && 'active'"
            >นักออกแบบเกม</b-button
          >
          <b-button
            class="learning-meterial-left-panel-button shadow"
            pill
            variant="primary"
            @click="onClickGroup(2)"
            :class="groupSelected === 2 && 'active'"
            >นักการตลาดและ<span style="white-space: nowrap"
              >ประชาสัมพันธ์เกม</span
            ></b-button
          >
          <b-button
            class="learning-meterial-left-panel-button shadow"
            pill
            variant="primary"
            @click="onClickGroup(3)"
            :class="groupSelected === 3 && 'active'"
            >นักกีฬา/นักพากย์เกม</b-button
          >
        </div>
      </b-col>
      <b-col cols="12" md="7" lg="8">
        <b-container class="px-0">
          <h1 class="text-primary mt-4">สื่อการสอน</h1>
          <p class="learning-meterial-subtitle mt-4 text-justify">
            Garena Academy ได้สร้างสรรค์คลังความรู้
            เพื่อเป็นแหล่งข้อมูลและรายละเอียดเกี่ยวกับอาชีพในสายงาน Game & eSports
            ในทุกมิติ เพื่อให้ครู อาจารย์ และผู้ปกครอง
            ได้เกิดความรู้และความเข้าใจอย่างชัดเจน
            และใช้เป็นแนวทางในการให้คำปรึกษาแก่นักเรียน นักศึกษา
            หรือเยาวชนที่มีความสนใจต้องการทำงานในสายงานนี้โดยเฉพาะ
          </p>
          <b-col cols="12">
            <b-row
              class="learning-meterial-group"
              :class="groupSelected === 1 && 'active'"
            >
              <b-col cols="12" lg="6"
                ><MaterialBox
                  title="Game Artist"
                  subTitle="เกมอาร์ตติส"
                  imgSrc="@/assets/job/game_artist.png"
                  videoLink="https://drive.google.com/uc?export=download&id=1I2t7UtM_PeBqgtVUl_mxMt0NzW8qqwiZ"
                  documentLink="https://drive.google.com/uc?export=download&id=1WYqz2HfThN4GD_1XZkBe7iE0CeLgFtcC"
              /></b-col>
              <b-col cols="12" lg="6"
                ><MaterialBox
                  title="Game Developer"
                  subTitle="นักพัฒนาเกม"
                  imgSrc="@/assets/job/game_developer.png"
                  videoLink="https://drive.google.com/uc?export=download&id=1Rc7-kj8Y9nUY7E-v2Gv_gCBxLnyK005e"
                  documentLink="https://drive.google.com/uc?export=download&id=1d0CVkipi3iKNC8ne2qWRErsCuCdNKF4u"
              /></b-col>
              <b-col cols="12" lg="6"
                ><MaterialBox
                  title="Game Designer"
                  subTitle="นักออกแบบเกม"
                  imgSrc="@/assets/job/game_designer.png"
                  videoLink="https://drive.google.com/uc?export=download&id=1PK7NSB5sS4-OFCEdtvFRcgC4D3eWDreK"
                  documentLink="https://drive.google.com/uc?export=download&id=11M4bn7GB-Ut-0v_Lnym2S72jO8lthGCY"
              /></b-col>
              <b-col cols="12" lg="6"
                ><MaterialBox
                  title="Game Animator"
                  subTitle="เกมแอนิเมเตอร์"
                  imgSrc="@/assets/job/game_animator.png"
                  videoLink="https://drive.google.com/uc?export=download&id=1_n86j9fAVCZuCN9jZauu0YQi8IDbP1vW"
                  documentLink="https://drive.google.com/uc?export=download&id=194bSXTHB6dmr-8z-f3h35hVcztrjeH4L"
              /></b-col>
              <b-col cols="12" lg="6"
                ><MaterialBox
                  title="Game QA Tester"
                  subTitle="นักทดสอบระบบเกม"
                  imgSrc="@/assets/job/game_QA tester.png"
                  videoLink="https://drive.google.com/uc?export=download&id=1bElA5vjIRZn5UzH_GL5_UmZoxXomfAtC"
                  documentLink="https://drive.google.com/uc?export=download&id=1pBxt_s0c6ham8ocaSfkdqjx-ppkJnxHH"
              /></b-col>
              <b-col cols="12" lg="6"
                ><MaterialBox
                  title="Game AR/VR Developer"
                  subTitle="นักพัฒนาเกม AR/VR"
                  imgSrc="@/assets/job/game_dev arvr.png"
                  videoLink="https://drive.google.com/uc?export=download&id=1tNQIrxNRmmjbGVknx0So4lWqYHOVRgF2"
                  documentLink="https://drive.google.com/uc?export=download&id=1sK_w0PTey3dvBT2aA-I-w2QfW-6FVRQv"
              /></b-col>

              <!-- todo change the jobs-->
              <b-col cols="12" lg="6"
                ><MaterialBox
                  title="Sound Designer (Game)"
                  subTitle="Sound Designer (Game)"
                  imgSrc="@/assets/job/sound-designer.png"
                  videoLink="https://drive.google.com/uc?export=download&id=1agxv2OH3WZ5dFegGo-I3Pm4gq_P_vHjv"
                  documentLink="https://drive.google.com/uc?export=download&id=17DnGzRVZhrcaLorTOrEg8mgdE-Kt2Ncm"
              /></b-col>

              <b-col cols="12" lg="6"
                ><MaterialBox
                  title="Technical Artist"
                  subTitle="Technical Artist"
                  imgSrc="@/assets/job/technical-artist.png"
                  videoLink="https://drive.google.com/uc?export=download&id=1EGy6Hh8iccOqStMMV5k-5e9V_9WtWfGz"
                  documentLink="https://drive.google.com/uc?export=download&id=1Y9FJtXnTawWvZz6gg0hDeR7-vSHeN2p8"
              /></b-col>
            </b-row>

            <b-row
              class="learning-meterial-group"
              :class="groupSelected === 2 && 'active'"
            >
              <b-col cols="12" lg="6"
                ><MaterialBox
                  title="Game Marketer"
                  subTitle="นักการตลาดด้านเกม"
                  imgSrc="@/assets/job/marketing.png"
                  videoLink="https://drive.google.com/uc?export=download&id=1AxbwDV4GwtnMW6hX3dN2Mj8HUa3sUqT9"
                  documentLink="https://drive.google.com/uc?export=download&id=1BTu-81U9Aknh3MtTZwkYXF-Z9z0O-FOh"
              /></b-col>
              <b-col cols="12" lg="6"
                ><MaterialBox
                  title="Game Master"
                  subTitle="เกมมาสเตอร์"
                  imgSrc="@/assets/job/game-master.png"
                  videoLink="https://drive.google.com/uc?export=download&id=1HHjQ-9xjTbhIfBlJvZU2TjbYYAEUnUMY"
                  documentLink="https://drive.google.com/uc?export=download&id=123p5mpBPeF6uSAbBqfg0q6YI9ZrjqlG5"
              /></b-col>
              <b-col cols="12" lg="6"
                ><MaterialBox
                  title="Game Journalist"
                  subTitle="นักข่าววงการเกม"
                  imgSrc="@/assets/job/journalist.png"
                  videoLink="https://drive.google.com/uc?export=download&id=1NhZOCD3vPgQBcYjssnaehQIeJFIqntos"
                  documentLink="https://drive.google.com/uc?export=download&id=1QQ0bIihk96k9LKt5Pmyix0XcyywSKVFQ"
              /></b-col>
              <b-col cols="12" lg="6"
                ><MaterialBox
                  title="eSports Broadcast Team"
                  subTitle="ทีมควบคุมการผลิตสื่อและถ่ายทอดสด"
                  imgSrc="@/assets/job/esport-team.png"
                  videoLink="https://drive.google.com/uc?export=download&id=1bINIA3OPbXTCIPW1-nWq7kS4bA7RzHwu"
                  documentLink="https://drive.google.com/uc?export=download&id=1senI05_ZqFDWpqoZomI5Q0cidjxbstXN"
              /></b-col>

              <!-- todo change the jobs-->
              <b-col cols="12" lg="6"
                ><MaterialBox
                  title="eSport Project Manager"
                  subTitle="eSport Project Manager"
                  imgSrc="@/assets/job/esports-project-manager.png"
                  videoLink="https://drive.google.com/uc?export=download&id=118sPO8CzjxyP71BDlEYWMFDDWjlddMjb"
                  documentLink="https://drive.google.com/uc?export=download&id=1D2xMfijEDuJ--MkD4cdS5fARFRWZ8FjS"
              /></b-col>
            </b-row>
            <b-row
              class="learning-meterial-group"
              :class="groupSelected === 3 && 'active'"
            >
              <b-col cols="12" lg="6"
                ><MaterialBox
                  title="Streamer"
                  subTitle="สตรีมเมอร์"
                  imgSrc="@/assets/job/streamer.png"
                  videoLink="https://drive.google.com/uc?export=download&id=1f8zLd4sHfacG7J7M8LjnNdHAjF730mce"
                  documentLink="https://drive.google.com/uc?export=download&id=1KdaRmOZIOt20LWZR3MX_CELsGGE3_-HD"
              /></b-col>
              <b-col cols="12" lg="6"
                ><MaterialBox
                  title="Shout Caster"
                  subTitle="นักพากย์การแข่งขันเกม"
                  imgSrc="@/assets/job/shout_caster.png"
                  videoLink="https://drive.google.com/uc?export=download&id=1i9E3UXp0DzRHDMNQ-kWFMq57BC-1RuxJ"
                  documentLink="https://drive.google.com/uc?export=download&id=1s1rH2MPvnUvI8R1F79ozRFTHrtxZ9qBc"
              /></b-col>
              <b-col cols="12" lg="6"
                ><MaterialBox
                  title="Game Caster"
                  subTitle="เกมแคสเตอร์"
                  imgSrc="@/assets/job/Gamecaster.png"
                  videoLink="https://drive.google.com/uc?export=download&id=1SKSKuWdXCdaOb9cdF19Fck6aDr99nOc0"
                  documentLink="https://drive.google.com/uc?export=download&id=1Qil31gOce-fH0uxpQBmo9U7Y85nM4R6-"
              /></b-col>
              <b-col cols="12" lg="6"
                ><MaterialBox
                  title="eSports Player"
                  subTitle="นักกีฬาอีสปอร์ต"
                  imgSrc="@/assets/job/esports_player.png"
                  videoLink="https://drive.google.com/uc?export=download&id=1lZTIJdh_F5aM28yYGgNClaufL7rtnQDJ"
                  documentLink="https://drive.google.com/uc?export=download&id=1zdBNIp7wPF8hGsGNX0uODPI8OgAFYF7x"
              /></b-col>
              <b-col cols="12" lg="6"
                ><MaterialBox
                  title="eSports Coach"
                  subTitle="ผู้ฝึกสอนกีฬาอีสปอร์ต"
                  imgSrc="@/assets/job/esportcoach.png"
                  videoLink="https://drive.google.com/uc?export=download&id=1bD6RQkSKtCYJP0Y3hUmznD-sTD8kUy_q"
                  documentLink="https://drive.google.com/uc?export=download&id=1OGXatjsNWRlEtnmd4hoL6ITSQV__rJ5x"
              /></b-col>
            </b-row>
          </b-col>
        </b-container>
      </b-col>
    </b-row>
    <Popup />
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import MaterialBox from '../components/learning-material/MaterialBox.vue'
import Popup from '../components/learning-material/Popup.vue'

export default Vue.extend({
  name: 'LearningMaterial',
  components: {
    MaterialBox,
    Popup,
  },
  head: {
    title: 'สื่อการสอน',
  },
  data: () => ({
    leftPanelOpen: false,
    groupSelected: 1,
  }),
  methods: {
    onClickPullPanelButton() {
      this.leftPanelOpen = !this.leftPanelOpen
    },
    onClickGroup(index: number) {
      this.groupSelected = index
      this.leftPanelOpen = false
    },
  },
})
</script>

<style lang="scss" scoped>
.learning-meterial-left-panel-pull-button {
  position: fixed;
  left: 0;
  padding: 10px 10px;
  font-size: 30px;
  border-radius: 0 100px 100px 0;
  cursor: pointer;
  z-index: 1000;
}

.learning-meterial-left-panel {
  margin-bottom: -24px;
  margin-top: 80px;
  position: relative;
  left: -15px;
  max-width: 360px;

  @include media-breakpoint-down(sm) {
    position: fixed;
    left: -100%;
    width: 50%;
    min-width: 220px;
    height: 100%;
    z-index: 100;
    transition: all 0.5s ease;

    &.open {
      left: -15px;
    }
  }

  &:before {
    height: 85px;
    width: calc(100% - 15px);
    position: absolute;
    background-color: $primary;
    content: '';
    top: -80px;
    border-radius: 0 200px 0 0;
  }

  &:after {
    height: calc(100% + 80px);
    width: 27.5%;
    position: absolute;
    background-color: #941e23;
    content: '';
    top: -80px;

    @include media-breakpoint-down(sm) {
      width: 0;
    }
  }

  .learning-meterial-left-panel-content {
    padding-left: 37.5%;

    @include media-breakpoint-down(sm) {
      padding-left: 10%;
    }
  }

  .learning-meterial-left-panel-button {
    display: block;
    height: auto;
    min-height: 40px;
    width: 100%;
    max-width: 200px;
    margin-top: 20px;

    &.active {
      background-color: white !important;
      color: $primary !important;
      cursor: default;
    }

    @include media-breakpoint-up(lg) {
      font-size: 14px;
    }
  }
}

.learning-meterial-group {
  display: none;

  &.active {
    display: flex;
  }
}

.learning-meterial-subtitle {
  width: 80%;
  margin: auto;
}
</style>
