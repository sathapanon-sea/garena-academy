<template>
  <b-modal
    id="learning-material-popup-modal"
    hide-footer
    body-bg-variant="white"
    centered
    no-close-on-backdrop
    content-class="shadow"
    scrollable
  >
    <template #modal-title>
      <b-container class="text-center">
        <b-img-lazy
          class="learning-material-popup-modal-logo"
          src="@/assets/header/LogoGarenaAcademy_H.png"
          alt="LogoGarenaAcademy_H"
        />
      </b-container>
    </template>
    <b-container class="text-center">
      <div class="learning-material-popup-modal-alert">
        <b-alert
          :variant="sendResult === 'error' ? 'danger' : 'success'"
          dismissible
          fade
          :show="dismissCountDown"
          @dismissed="dismissCountDown = 0"
        >
          {{
            sendResult === 'error'
              ? 'ส่งข้อความผิดพลาด โปรดลองใหม่อีกครั้ง'
              : 'ส่งข้อความสำเร็จ'
          }}
        </b-alert>
      </div>
      <h5 class="text-primary font-weight-light mt-3">กรอกข้อมูลเพื่อดาวน์โหลด</h5>
      <b-form @submit.stop.prevent @submit="onSubmit">
        <div class="text-left learning-material-popup-modal-form mt-4">
          <b-form-group>
            <template v-slot:label> เพศ<span class="text-primary">*</span> </template>
            <b-form-radio v-model="sex" name="sex-radios" value="ชาย" required
              >ชาย</b-form-radio
            >
            <b-form-radio v-model="sex" name="sex-radios" value="หญิง" required
              >หญิง</b-form-radio
            >
          </b-form-group>

          <b-form-group>
            <template v-slot:label> อายุ<span class="text-primary">*</span> </template>
            <b-form-radio v-model="age" name="age-radios" value="11 – 15" required
              >11 – 15</b-form-radio
            >
            <b-form-radio v-model="age" name="age-radios" value="16 – 19" required
              >16 – 19</b-form-radio
            >
            <b-form-radio v-model="age" name="age-radios" value="19 – 22" required
              >19 – 22</b-form-radio
            >
            <b-form-radio v-model="age" name="age-radios" value="23 – 30" required
              >23 – 30</b-form-radio
            >
            <b-form-radio v-model="age" name="age-radios" value="31 ปีขึ้นไป" required
              >31 ปีขึ้นไป
            </b-form-radio>
          </b-form-group>
          <b-form-group>
            <template v-slot:label>
              ระดับการศึกษา<span class="text-primary">*</span>
            </template>
            <b-form-select
              required
              v-model="educationSelected"
              :options="educationOptions"
            ></b-form-select>
          </b-form-group>
          <b-form-group>
            <template v-slot:label> สถานภาพ<span class="text-primary">*</span></template>
            <b-form-select
              required
              v-model="statusSelected"
              :options="statusOptions"
            ></b-form-select>
          </b-form-group>
          <b-form-group>
            <template v-slot:label> จังหวัด<span class="text-primary">*</span> </template>
            <b-form-select
              required
              v-model="citySelected"
              :options="cityOptions"
            ></b-form-select>
          </b-form-group>
          <b-form-group>
            <template v-slot:label>
              จุดประสงค์ในการใช้เอกสารสื่อการเรียนการสอน (ตอบได้มากกว่า 1 ข้อ)<span
                class="text-primary"
                >*</span
              >
            </template>
            <b-form-checkbox
              v-for="option in reasonOptions"
              v-model="reasonSelected"
              :key="option.value"
              :value="option.value"
              name="checkbox"
              :required="reasonSelected.length === 0"
            >
              {{ option.text }}
              <b-form-input
                v-if="option.value === reasonOptions[4].value"
                class="my-2"
                :class="
                  reasonSelected.includes(reasonOptions[4].value) ? 'd-block' : 'd-none'
                "
                :required="reasonSelected.includes(reasonOptions[4].value)"
                placeholder="โปรดระบุ"
                v-model="otherReason"
              ></b-form-input>
            </b-form-checkbox>
          </b-form-group>
          <b-form-group>
            <template v-slot:label>
              รู้จักเว็บไซต์จากช่องทางใด<span class="text-primary">*</span>
            </template>
            <b-form-checkbox
              v-for="option in referenceOptions"
              v-model="referenceSelected"
              :key="option.value"
              :value="option.value"
              name="checkbox"
              :required="referenceSelected.length === 0"
            >
              {{ option.text }}
              <b-form-input
                class="my-2"
                :class="referenceSelected.includes(option.value) ? 'd-block' : 'd-none'"
                :required="referenceSelected.includes(option.value)"
                v-model="referenceDetails[option.value]"
                placeholder="โปรดระบุ"
              ></b-form-input>
            </b-form-checkbox>
          </b-form-group>
        </div>

        <hr class="mt-4" />

        <div class="learning-material-popup-modal-terms-and-conditions text-justify">
          <h5 class="font-weight-light text-primary mt-4">เงื่อนไข</h5>
          <p class="border p-3 rounded">
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
            แก่ผู้ลงทะเบียนสมัครเป็นสมาชิกและ/หรือผู้เยี่ยมชมทั่วไป
            (ซึ่งต่อไปนี้เรียกรวมว่า "ท่าน") ในการใช้ และเข้าชมเว็บไซต์นี้ โดยการใช้บริการ
            ทำการลงทะเบียนบัญชีกับบริษัทฯ หรือการเข้าชมเว็บไซต์ของบริษัทฯ
            ท่านได้ตกลงเปิดเผยข้อมูลส่วนบุคคลของท่านให้แก่บริษัทฯ
            เพื่อใช้ในวัตถุประสงค์การปรับปรุง และส่งเสริมการให้บริการ การตลาด
            การพัฒนาบริการของบริษัทฯ และเพื่อการศึกษา วิเคราะห์ วิจัย
            เพื่อการพัฒนาคุณภาพบริการ และตามที่กำหนดไว้ในนโยบายความเป็นส่วนตัวของบริษัทฯ
            ทั้งนี้
            ท่านยอมรับว่าท่านได้อ่านและเข้าใจในข้อกำหนดและเงื่อนไขตามนโยบายการให้บริการ
            (<b-link
              class="text-primary"
              href="https://www.garena.co.th/tos"
              target="_blank"
              >https://www.garena.co.th/tos</b-link
            >) และนโยบายความเป็นส่วนตัว (<b-link
              class="text-primary"
              href="https://www.garena.co.th/privacy"
              target="_blank"
              >https://www.garena.co.th/privacy</b-link
            >) ของบริษัทฯ แล้ว และท่านตกลงที่จะผูกพันและปฏิบัติตามนโยบายดังกล่าวทุกประการ
          </p>
          <b-form-checkbox
            class="mr-3 text-center"
            v-model="agree"
            :value="agree"
            name="checkbox"
            :required="agree.length === 0"
            ><h6>ยอมรับเงื่อนไข</h6></b-form-checkbox
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
            pill
            variant="primary"
            type="submit"
            class="w-100 mt-4"
            :disabled="submitting"
            >ส่ง</b-button
          >
        </div>
      </b-form>
    </b-container>
  </b-modal>
</template>

<script lang="ts">
import Vue from 'vue'
import VueRecaptcha from 'vue-recaptcha'
import { cities } from './cities'

export default Vue.extend({
  name: 'Popup',
  components: { VueRecaptcha },
  data() {
    return {
      sex: '',
      age: '',
      educationSelected: null,
      educationOptions: [
        { selected: true, text: 'เลือกระดับการศึกษา' },
        'มัธยมศึกษาตอนต้น',
        'มัธยมศึกษาตอนปลาย',
        'ปวช.',
        'ปวส.',
        'ปริญญาตรี',
        'ปริญญาโทขึ้นไป',
      ],
      statusSelected: null,
      statusOptions: [
        { selected: true, text: 'เลือกสถานภาพ' },
        'กำลังศึกษา',
        'ผู้ปกครอง',
        'อาจารย์ (ระดับมัธยมศึกษา)',
        'อาจารย์  (ระดับปริญญาตรีขึ้นไป)',
        'ปริญญาตรี',
        'อื่น ๆ',
      ],
      citySelected: null,
      cityOptions: [{ selected: true, text: 'เลือกจังหวัด ' }, ...cities],
      reasonSelected: [],
      reasonOptions: [
        'เพื่อศึกษาข้อมูลเพิ่มเติมเกี่ยวกับอาชีพในวงการเกมและอีสปอร์ต',
        'เพื่อใช้เป็นสื่อการเรียนการสอนให้แก่นักเรียนและนักศึกษา',
        'เพื่อใช้เป็นข้อมูลประกอบการตัดสินใจในการศึกษาต่อของบุตร',
        'เพื่อใช้ประกอบการทำรายงาน',
      ]
        .map(v => ({ value: v, text: v }))
        .concat({ text: 'อื่น ๆ', value: '__other_option__' }),
      otherReason: '',
      referenceSelected: [],
      referenceOptions: [
        'เว็บไซต์',
        'Facebook Fanpage',
        'หนังสือพิมพ์',
        'รายการโทรทัศน์',
        'Influencer',
      ]
        .map(v => ({ value: v, text: v }))
        .concat({ text: 'อื่น ๆ', value: '__other_option__' }),
      referenceDetails: {
        เว็บไซต์: '',
        'Facebook Fanpage': '',
        หนังสือพิมพ์: '',
        รายการโทรทัศน์: '',
        Influencer: '',
        'อื่น ๆ': '',
      },
      agree: [],
      submitting: false,
      sendResult: '',
      dismissCountDown: 0,
      recaptchaSiteKey: process.env.NUXT_ENV_RECAPTCHA_SITE_KEY,
    }
  },
  methods: {
    async onSubmit() {
      this.submitting = true
      const recaptcha: any = this.$refs.recaptcha
      recaptcha.execute()
    },

    async onCaptchaVerified(recaptchaToken: string) {
      const recaptcha: any = this.$refs.recaptcha
      recaptcha.reset()

      const response = await fetch('api/google-form', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
          sex: this.sex,
          age: this.age,
          education: this.educationSelected,
          status: this.statusSelected,
          city: this.citySelected,
          reason: this.reasonSelected,
          otherReason: this.otherReason,
          reference: this.referenceSelected,
          referenceDetails: this.referenceDetails,
          recaptchaToken: recaptchaToken,
        }),
      })

      if (!response.ok) {
        this.sendResult = 'error'
        this.dismissCountDown = 5

        return
      }

      this.submitting = false
      this.$cookies.set('download-form-submitted', '1')
      this.$bvModal.hide('learning-material-popup-modal')
    },
    onCaptchaExpired: function () {
      const recaptcha: any = this.$refs.recaptcha
      recaptcha.reset()
    },
  },
})
</script>

<style lang="scss">
#learning-material-popup-modal {
  .modal-dialog {
    @include media-breakpoint-down(sm) {
      height: 100%;
    }
  }

  .learning-material-popup-modal-alert {
    position: fixed;
    z-index: 10;
    left: 50%;
    transform: translateX(-50%);
  }

  .modal-content {
    border: 0;

    @include media-breakpoint-down(sm) {
      height: 100%;
    }

    legend {
      font-weight: 400;
    }
  }

  .modal-title {
    width: 100%;
  }

  .learning-material-popup-modal-logo {
    width: 200px;
  }

  .learning-material-popup-modal-form {
    font-weight: 200;
    font-size: 18px;
  }

  .learning-material-popup-modal-form {
    .custom-control-label {
      width: 100%;

      input::placeholder {
        color: rgba(0, 0, 0, 0.25);
      }
    }
  }
}
</style>
