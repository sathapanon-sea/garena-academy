<template>
  <div class="header">
    <b-navbar
      class="bg-white shadow-sm"
      toggleable="lg"
      type="light"
      fixed="top"
      :class="navBarClass"
    >
      <b-navbar-brand
        ><nuxt-link to="/"
          ><b-img
            class="header-logo ml-3 ml-sm-5"
            src="@/assets/header/LogoGarenaAcademy_H.png"
            alt="LogoGarenaAcademy_H" /></nuxt-link
      ></b-navbar-brand>
      <b-navbar-toggle
        target="nav-collapse"
        class="shadow-sm header-nav-collapse"
      ></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav> </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <nuxt-link to="/job" class="nav-link d-block d-lg-none">อาชีพ</nuxt-link>
          <div
            class="header-job-dropdown-wrapper d-none d-lg-block"
            :class="
              (this.$route.path.startsWith('/job/') || this.$route.path === '/job') &&
              'active'
            "
            @mouseenter="onJobEnter"
            @mouseleave="onJobLeave"
          >
            <b-nav-item-dropdown text="อาชีพ" ref="jobDropdown">
              <b-row cols="2">
                <b-col cols="12">
                  <b-dropdown-group header="นักออกแบบและพัฒนาเกม" />
                </b-col>
                <b-col>
                  <b-dropdown-item
                    ><nuxt-link to="/job/game-artist-dev/game-developer" class="nav-link"
                      >นักพัฒนาเกม</nuxt-link
                    ></b-dropdown-item
                  >
                </b-col>
                <b-col>
                  <b-dropdown-item
                    ><nuxt-link to="/job/game-artist-dev/game-artist" class="nav-link"
                      >เกมอาร์ตติส</nuxt-link
                    ></b-dropdown-item
                  >
                </b-col>
                <b-col>
                  <b-dropdown-item
                    ><nuxt-link to="/job/game-artist-dev/game-animator" class="nav-link"
                      >เกมแอนิเมเตอร์</nuxt-link
                    ></b-dropdown-item
                  >
                </b-col>
                <b-col>
                  <b-dropdown-item
                    ><nuxt-link to="/job/game-artist-dev/game-designer" class="nav-link"
                      >นักออกแบบเกม</nuxt-link
                    ></b-dropdown-item
                  >
                </b-col>
                <b-col>
                  <b-dropdown-item
                    ><nuxt-link to="/job/game-artist-dev/game-qa" class="nav-link"
                      >นักทดสอบระบบเกม</nuxt-link
                    ></b-dropdown-item
                  >
                </b-col>
                <b-col>
                  <b-dropdown-item
                    ><nuxt-link
                      to="/job/game-artist-dev/game-arvr-developer"
                      class="nav-link"
                      >นักพัฒนาเกม AR/VR</nuxt-link
                    ></b-dropdown-item
                  >
                </b-col>
                <b-col cols="12">
                  <b-dropdown-divider />
                  <b-dropdown-group header="นักกีฬา/นักพากย์เกม" />
                </b-col>
                <b-col>
                  <b-dropdown-item
                    ><nuxt-link to="/job/game-player-caster/streamer" class="nav-link"
                      >สตรีมเมอร์</nuxt-link
                    ></b-dropdown-item
                  >
                </b-col>
                <b-col>
                  <b-dropdown-item
                    ><nuxt-link to="/job/game-player-caster/shout-caster" class="nav-link"
                      >นักพากย์การแข่งขันเกม</nuxt-link
                    ></b-dropdown-item
                  >
                </b-col>
                <b-col>
                  <b-dropdown-item
                    ><nuxt-link to="/job/game-player-caster/game-caster" class="nav-link"
                      >เกมแคสเตอร์</nuxt-link
                    ></b-dropdown-item
                  >
                </b-col>
                <b-col>
                  <b-dropdown-item
                    ><nuxt-link
                      to="/job/game-player-caster/esport-player"
                      class="nav-link"
                      >นักกีฬาอีสปอร์ต</nuxt-link
                    ></b-dropdown-item
                  >
                </b-col>
                <b-col>
                  <b-dropdown-item
                    ><nuxt-link to="/job/game-player-caster/esport-coach" class="nav-link"
                      >ผู้ฝึกสอนกีฬาอีสปอร์ต</nuxt-link
                    ></b-dropdown-item
                  >
                </b-col>
                <b-col cols="12">
                  <b-dropdown-divider />
                  <b-dropdown-group header="นักการตลาดและประชาสัมพันธ์เกม" />
                </b-col>
                <b-col>
                  <b-dropdown-item
                    ><nuxt-link to="/job/game-marketing-ads/marketing" class="nav-link"
                      >นักการตลาดด้านเกม</nuxt-link
                    ></b-dropdown-item
                  >
                </b-col>
                <b-col>
                  <b-dropdown-item
                    ><nuxt-link to="/job/game-marketing-ads/game-master" class="nav-link"
                      >เกมมาสเตอร์</nuxt-link
                    ></b-dropdown-item
                  >
                </b-col>
                <b-col>
                  <b-dropdown-item
                    ><nuxt-link to="/job/game-marketing-ads/journalist" class="nav-link"
                      >นักข่าววงการเกม</nuxt-link
                    ></b-dropdown-item
                  >
                </b-col>
                <b-col cols="12">
                  <b-dropdown-item
                    ><nuxt-link to="/job/game-marketing-ads/esport-team" class="nav-link"
                      >ทีมควบคุมการผลิตสื่อและถ่ายทอดสด</nuxt-link
                    ></b-dropdown-item
                  >
                </b-col>
              </b-row>
            </b-nav-item-dropdown>
          </div>
          <nuxt-link to="/video" class="nav-link">วิดีโอ</nuxt-link>
          <nuxt-link to="/job-assessment" class="nav-link">แบบประเมินอาชีพ</nuxt-link>
          <nuxt-link to="/news" class="nav-link">ข่าว/กิจกรรม</nuxt-link>
          <nuxt-link to="/learning-material" class="nav-link">สื่อการสอน</nuxt-link>
          <nuxt-link to="/about-us" class="nav-link">เกี่ยวกับเรา</nuxt-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',
  data: (): { [key: string]: any; navBar: HTMLElement | null } => ({
    prevScrollpos: 0,
    navBarClass: 'show',
    navBar: null,
  }),
  mounted() {
    this.navBar = document.getElementById('nav-collapse')
    window.addEventListener('scroll', this.onScroll)
    document
      .querySelector('.nav-link.dropdown-toggle')
      ?.addEventListener('click', this.onJobClick)
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
    document
      .querySelector('.nav-link.dropdown-toggle')
      ?.removeEventListener('click', this.onJobClick)
  },
  methods: {
    onJobClick() {
      this.$router.push('/job')
    },
    onJobEnter() {
      const jobDropdown: any = this.$refs.jobDropdown
      jobDropdown.visible = true
    },
    onJobLeave() {
      const jobDropdown: any = this.$refs.jobDropdown
      jobDropdown.visible = false
    },
    onScroll() {
      const currentScrollPos = window.pageYOffset

      if (
        this.navBar?.classList.contains('show') ||
        document.body.clientHeight <= window.innerHeight + 80
      ) {
        this.navBarClass = 'show'
      } else {
        if (
          (this.prevScrollpos > 80 && this.prevScrollpos < currentScrollPos) ||
          document.body.clientHeight <= currentScrollPos + window.innerHeight + 10
        ) {
          this.navBarClass = 'hide'
        } else {
          this.navBarClass = 'show'
        }
      }

      this.prevScrollpos = currentScrollPos
    },
  },
})
</script>

<style lang="scss">
.header {
  .header-logo {
    width: 150px;
  }

  .header-nav-collapse {
    border-radius: 60px;
    width: 60px;
    height: 60px;
  }

  .navbar {
    transition: 0.5s ease;

    &.show {
      top: 0;
    }

    &.hide {
      top: -85px;
    }
  }

  .nav-link {
    &:hover {
      color: $primary !important;
    }
    &.active {
      color: $primary !important;
    }
  }

  .header-job-dropdown-wrapper {
    padding-bottom: 5px;
    margin-bottom: -5px;

    .dropdown-item:active {
      background-color: #e9ecef;
    }

    &.active {
      .nav-link {
        &.dropdown-toggle {
          color: $primary !important;
        }
      }
    }
  }

  .navbar-nav {
    .show {
      .dropdown-menu {
        width: 500px;
        overflow-y: auto;
        overflow-x: hidden;

        @media screen and (max-height: 700px) {
          height: 100%;
          min-height: 85vh;
        }
      }

      .nav-link {
        color: rgba(0, 0, 0, 0.5) !important;

        &:hover,
        &.active {
          color: $primary !important;
        }
      }
    }

    .dropdown-header {
      font-size: 16px;
    }

    * {
      outline: 0;
    }
  }
}
</style>
