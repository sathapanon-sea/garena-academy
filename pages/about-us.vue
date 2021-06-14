<template>
  <b-container>
    <div class="about-us-alert">
      <b-alert
        :variant="sendEmailResult === 'error' ? 'danger' : 'success'"
        dismissible
        fade
        :show="dismissCountDown"
        @dismissed="dismissCountDown = 0"
      >
        {{
          sendEmailResult === 'error'
            ? 'ส่งข้อความผิดพลาด โปรดลองใหม่อีกครั้ง'
            : 'ส่งข้อความสำเร็จ'
        }}
      </b-alert>
    </div>
    <h1 class="text-primary mt-4">เกี่ยวกับเรา</h1>
    <b-row align-v="center">
      <b-col cols="12" md="5">
        <b-img-lazy
          fluid-grow
          class="footer-logo-2"
          src="@/static/LogoGarenaAcademy_Final.png"
          alt="LogoGarenaAcademy_Final"
      /></b-col>
      <b-col cols="12" md="7" class="text-justify mt-0 mt-md-5 about-text">
        <hr class="mb-4" />
        <p>
          Garena Academy แหล่งข้อมูลการเรียนรู้สำหรับเยาวชนรุ่นใหม่
          ที่จะช่วยส่งเสริมความสามารถและพัฒนาทักษะต่าง ๆ ที่จำเป็นในโลกดิจิทัล Garena
          Academy ปี 2563 จัดทำในหัวข้อ ‘Level Up Your Passion’
          โดยมุ่งเน้นการให้ความรู้ด้านอาชีพในอุตสาหกรรมเกมและ<span
            style="white-space: nowrap"
            >อีสปอร์ต</span
          >
          เพื่อเป็นการสร้างความเข้าใจเกี่ยวกับรายละเอียดอาชีพและเตรียมความพร้อมให้ผู้ที่มีความสนใจสามารถเข้าสู่ภาคธุรกิจและตลาดแรงงานได้ในอนาคต
        </p>
        <p>
          จากผลการสำรวจความสนใจของเยาวชนคนรุ่นใหม่ที่ระบุว่า อาชีพในอุตสาหกรรมเกมและ<span
            style="white-space: nowrap"
            >อีสปอร์ต</span
          >ได้รับความสนใจติดอันดับ 1 ใน 5 ประกอบกับการเติบโตของอุตสาหกรรมเกมและ<span
            style="white-space: nowrap"
            >อีสปอร์ต</span
          >ในปัจจุบัน ที่มีมูลค่าถึง 2.3 หมื่นล้านบาท
          และมีการคาดการณ์ว่าจะมีการเติบโตอย่างต่อเนื่อง จากปัจจัยต่าง ๆ
          ที่สนับสนุนเศรษฐกิจดิจิทัล ทั้งนโยบายภาครัฐ และสภาวะแวดล้อมต่าง ๆ
        </p>
        <p>
          จึงเป็นที่มาของการจัดทำโครงการในปีนี้ โดยนำเสนอ 15 อาชีพที่น่าสนใจ
          เพื่อเตรียมความพร้อมของบุคลากรที่จะมาประกอบอาชีพเหล่านี้ในอนาคต
          โครงการนี้ยังเป็นแหล่งข้อมูลให้กับผู้ปกครองและครู
          เพื่อเป็นแนวทางในการแนะนำอาชีพตามความสนใจของบุตรหลานและนักเรียนได้อีกด้วย
        </p>
        <hr class="mt-4" />
      </b-col>
    </b-row>
    <b-form @submit.stop.prevent @submit="onSubmit">
      <div class="mt-4 about-contact-form">
        <h5 class="text-primary">ติดต่อ Garena Academy</h5>
        <b-row class="text-left mt-4">
          <b-col cols="12" md="6" role="group">
            <label for="input-live"
              >ชื่อ-นามสกุล<span class="text-primary">*</span></label
            >
            <b-form-input trim v-model="name" id="name" required></b-form-input>
          </b-col>
          <b-col cols="12" md="6" role="group">
            <label for="input-live">โทรศัพท์</label>
            <b-form-input trim v-model="phone"></b-form-input>
          </b-col>
          <b-col cols="12" md="6" role="group">
            <label for="input-live">E-mail<span class="text-primary">*</span></label>
            <b-form-input trim type="email" v-model="email" required></b-form-input>
          </b-col>
          <b-col cols="12" md="6" role="group">
            <label for="input-live"
              >เรื่องที่ต้องการติดต่อ<span class="text-primary">*</span></label
            >
            <b-form-input trim v-model="subject" required></b-form-input>
          </b-col>
          <b-col cols="12" md="6" role="group">
            <label for="input-live">ที่อยู่</label>
            <b-form-textarea trim v-model="address"></b-form-textarea>
          </b-col>
          <b-col cols="12" md="6" role="group">
            <label for="input-live">รายละเอียด<span class="text-primary">*</span></label>
            <b-form-textarea trim v-model="description" required></b-form-textarea>
          </b-col>
        </b-row>
      </div>
      <div class="about-condition text-justify">
        <hr class="mb-4" />
        <h5 class="text-primary">เงื่อนไข</h5>
        <p>
          บริษัท การีนา ออนไลน์ (ประเทศไทย) จำกัด ("บริษัทฯ") ได้จัดทำเว็บไซต์
          <b-link
            class="text-primary"
            href="https://www.garenaacademy.com"
            target="_blank"
            >https://www.garenaacademy.com</b-link
          >
          ("เว็บไซต์") ขึ้น
          เพื่อสร้างสรรค์แหล่งการเรียนรู้และพัฒนาความสามารถแก่ผู้ที่มีความสนใจเกี่ยวกับอาชีพในสายงาน
          Game &amp; eSports ในทุกมิติ
          เพื่อให้ทุกท่านได้รับความรู้และเกิดความเข้าใจอย่างชัดเจน
          และใช้เป็นแนวทางในการให้คำปรึกษาแก่นักเรียน นักศึกษา เยาวชน
          หรือผู้ที่มีความสนใจในสายงานนี้โดยเฉพาะ รวมถึงการให้บริการเผยแพร่ข้อมูล
          การให้ข่าวสาร จัดกิจกรรมเพื่อการสื่อสาร รวมถึงบริการอื่นๆ
          ซึ่งสามารถเข้าถึงได้ภายในเว็บไซต์นี้
          แก่ผู้ลงทะเบียนสมัครเป็นสมาชิกและ/หรือผู้เยี่ยมชมทั่วไป (ซึ่งต่อไปนี้เรียกรวมว่า
          "ท่าน") ในการใช้ และเข้าชมเว็บไซต์นี้ โดยการใช้บริการ
          ทำการลงทะเบียนบัญชีกับบริษัทฯ หรือการเข้าชมเว็บไซต์ของบริษัทฯ
          ท่านได้ตกลงเปิดเผยข้อมูลส่วนบุคคลของท่านให้แก่บริษัทฯ
          เพื่อใช้ในวัตถุประสงค์การปรับปรุง และส่งเสริมการให้บริการ การตลาด
          การพัฒนาบริการของบริษัทฯ และเพื่อการศึกษา วิเคราะห์ วิจัย
          เพื่อการพัฒนาคุณภาพบริการ และตามที่กำหนดไว้ในนโยบายความเป็นส่วนตัวของบริษัทฯ
          ทั้งนี้
          ท่านยอมรับว่าท่านได้อ่านและเข้าใจในข้อกำหนดและเงื่อนไขตามนโยบายการให้บริการ (
          <b-link class="text-primary" href="https://www.garena.co.th/tos" target="_blank"
            >https://www.garena.co.th/tos</b-link
          >) และนโยบายความเป็นส่วนตัว (<b-link
            class="text-primary"
            href="https://www.garena.co.th/privacy"
            target="_blank"
            >https://www.garena.co.th/privacy</b-link
          >) ของบริษัทฯ แล้ว และท่านตกลงที่จะผูกพันและปฏิบัติตามนโยบายดังกล่าวทุกประการ
        </p>
        <hr class="mt-4" />
        <b-row>
          <b-col class="text-center text-md-right">
            <b-form-checkbox
              class="about-form-agreement-checkbox mr-3"
              v-model="agree"
              :value="agree"
              name="checkbox"
              :required="agree.length === 0"
              >ยอมรับเงื่อนไข</b-form-checkbox
            >
            <vue-recaptcha
              :sitekey="recaptchaSiteKey"
              @verify="onCaptchaVerified"
              @expired="onCaptchaExpired"
              ref="recaptcha"
              size="invisible"
            >
            </vue-recaptcha>
            <b-button
              :disabled="submitting"
              pill
              type="submit"
              variant="primary"
              class="about-form-send-button"
              >ส่ง</b-button
            >
          </b-col>
        </b-row>
      </div>
    </b-form>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import VueRecaptcha from 'vue-recaptcha'

export default Vue.extend({
  name: 'AboutUs',
  data: () => ({
    name: '',
    phone: '',
    email: '',
    subject: '',
    address: '',
    description: '',
    agree: [],
    recaptchaSiteKey: process.env.NUXT_ENV_RECAPTCHA_SITE_KEY,
    submitting: false,
    sendEmailResult: '',
    dismissCountDown: 0,
  }),
  components: { VueRecaptcha },
  methods: {
    async onSubmit() {
      this.submitting = true
      const recaptcha: any = this.$refs.recaptcha
      recaptcha.execute()
    },
    async onCaptchaVerified(recaptchaToken: string) {
      const recaptcha: any = this.$refs.recaptcha
      recaptcha.reset()
      this.sendEmailResult = ''

      const response = await fetch('api/send-email', {
        method: 'POST',
        body: JSON.stringify({
          email: this.email,
          phone: this.phone,
          name: this.name,
          subject: this.subject,
          address: this.address,
          description: this.description,
          recaptchaToken: recaptchaToken,
        }),
      })

      if (response.ok) {
        this.sendEmailResult = 'success'
      } else {
        this.sendEmailResult = 'error'
      }

      this.dismissCountDown = 5
      this.submitting = false
    },
    onCaptchaExpired: function () {
      const recaptcha: any = this.$refs.recaptcha
      recaptcha.reset()
    },
  },
})
</script>

<style lang="scss" scoped>
p {
  padding: 0 10px;
}

.about-us-alert {
  position: fixed;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
}

.about-text {
  hr {
    height: 2px;
  }
}

.about-contact-form {
  .row > div {
    margin: 15px 0;
  }

  label {
    font-size: 17px;
  }

  input,
  textarea {
    border: 1px solid $primary;
    border-radius: 20px;
  }

  textarea {
    height: 120px;
  }
}

.about-condition {
  hr {
    height: 2px;
    border-color: $primary;
  }

  .custom-checkbox {
    display: inline-block;
  }
  .about-form-send-button {
    width: 80px;
  }
  .about-form-agreement-checkbox {
    + div {
      display: inline-block;
    }
  }
}
</style>
