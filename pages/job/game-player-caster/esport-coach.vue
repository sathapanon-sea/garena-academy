<template>
  <b-container fluid>
    <JobDetail
      :mainImg="mainImg"
      mainVideoLink="https://www.youtube.com/embed/4Hjuf1xIpZg"
      :title="title"
      :subTitle="subTitle"
      :description="description"
      skillMainDescription="eSports Coach เป็นอาชีพที่ต้องฝึกสอนและบริหารทีมนักกีฬา เพื่อเข้าแข่งขันกีฬาอีสปอร์ต ซึ่งต้องอาศัยทักษะหลากหลายด้าน ได้แก่"
      :skills="[
        {
          title: 'ความเชี่ยวชาญด้านเกม',
          description:
            'มีความรู้รอบด้านอย่างลึกซึ้ง และมีประสบการณ์ในการแข่งขัน โค้ชจะต้องมีความรู้ความเข้าใจในเกมที่ใช้ในการแข่งขัน เช่น โค้ชของทีมที่แข่งขันเกม RoV (Arena of Valor) จะต้องเข้าใจเทคนิคการเล่นต่างๆ เพื่อนำมาวิเคราะห์และวางกลยุทธ์ที่สร้างความได้เปรียบให้ทีม นอกจากความรู้เรื่องตัวเกมแล้วยังต้องมีความรู้เรื่องของคู่แข่ง และสภาพแวดล้อมอื่นๆ ที่ส่งผลต่อการพัฒนานักกีฬา ความเชี่ยวชาญที่โค้ชแสดงออกมาให้นักกีฬาเห็น จะทำให้โค้ชมีความน่าเชื่อถือ เกิดความเคารพจากตัวนักกีฬา ซึ่งเป็นส่วนสำคัญมากในการสร้างความสัมพันธ์กับคนในทีม ให้มีความเชื่อใจ รับฟัง และปฏิบัติตามคำแนะนำ กฎระเบียบต่างๆ ของโค้ช',
          imgSrc: 'esport-coach/เชี่ยวชาญเกม.png',
        },
        {
          title: 'คิดวิเคราะห์และวางกลยุทธ์ได้อย่างมีชั้นเชิง',
          description:
            'พื้นฐานของการเป็น eSports Coach คือ ต้องเป็นคนช่างสังเกตและสามารถคิดวิเคราะห์ได้อย่างรอบด้าน จะต้องรู้จักสังเกตวิธีการเล่นและความถนัดของนักกีฬาแต่ละคน เพื่อแก้ไขจุดอ่อนและส่งเสริมจุดแข็ง ทั้งในระหว่างการฝึกซ้อม โดยเฉพาะอย่างยิ่งในระหว่างการแข่งขัน เพื่อสามารถปรับข้อด้อยและกลยุทธ์การเล่นให้รับมือกับคู่แข่งได้ทันที นอกจากนี้ การวิเคราะห์เกมได้ว่าแผนการเล่นแบบไหนที่จะสามารถทำให้ทีมชนะคู่ต่อสู้ก็เป็นสิ่งสำคัญ จึงจำเป็นต้องมีข้อมูลสถิติการเล่นของทั้งทีมนักกีฬาของตัวเองและทีมคู่แข่ง เพื่อนำมาคิดวางแผนกลยุทธ์ในการแข่งขัน',
          imgSrc: 'esport-coach/คิดวิเคราะห์.png',
        },
        {
          title: 'ทักษะด้านการบริหารจัดการ',
          description:
            'eSports Coach ต้องมีทักษะในการบริหารงานจัดการที่ดี โดยเฉพาะการจัดการด้านบุคคล เพราะจำเป็นที่จะต้องบริหารความสามัคคี ความร่วมแรงร่วมใจในการแข่งขัน และการยอมรับซึ่งกันและกันของนักกีฬาในทีม บริหารจัดการเวลาฝึกซ้อม การใช้ชีวิตของนักกีฬา ไม่ว่าจะเป็นด้านโภชนาการหรือการพักผ่อน โดยต้องสามารถวางแผนการทำงานของทีม เริ่มตั้งแต่ขั้นตอนการเตรียมตัวฝึกซ้อมจนไปจนถึงจบการแข่งขัน และดูแลจัดการนักกีฬาซึ่งมีความแตกต่างกันในทีมให้ปฏิบัติตามแผนการฝึกซ้อมและการแข่งขันที่วางไว้',
          imgSrc: 'esport-coach/บริหารจัดการ.png',
        },
        {
          title: 'ทักษะในการสื่อสารและพูดโน้มน้าวใจ',
          description:
            'หัวใจสำคัญที่ทำให้เกิดประสิทธิภาพในการพัฒนาและดูแลนักกีฬาในทีมคือ การสื่อสารอย่างชัดเจน ตรงประเด็น และมีศิลปะในการสื่อสาร เพราะนักกีฬาแต่ละคนมีพื้นฐานความสามารถและนิสัยที่แตกต่างกัน eSports Coach มีหน้าที่ทั้งควบคุมให้นักกีฬาเกิดความเคารพเชื่อฟัง ในขณะเดียวกันก็ต้องสร้างกำลังใจให้นักกีฬาด้วยเพื่อให้มีสภาพจิตใจที่ดี มีสมาธิและสามารถเอาชนะอุปสรรคต่างๆ ได้ และไม่ว่าผลการแข่งขันจะไม่ชนะตามที่คาดหวังก็จะต้องสื่อสารให้นักกีฬามีกำลังใจ ชี้แจงให้เห็นข้อผิดพลาดที่ควรจะปรับปรุง เพื่อพัฒนาฝีมือให้พร้อมสำหรับการแข่งขันในครั้งต่อไป',
          imgSrc: 'esport-coach/สื่อสาร.png',
        },
      ]"
      :hasUniqueSkill="false"
      characterChartImg="@/assets/job/esport-coach/character.png"
      :characterDetails="[
        'มีภาวะผู้นำ เป็นแบบอย่างที่ดี วางตัวอย่างเหมาะสมน่าเชื่อถือ พร้อมนำพาทีมไปสู่ความสำเร็จอย่างมีแบบแผน',
        'มีทัศนคติที่ดี ในสถานการณ์กดดัน ต้องสามารถสร้างกำลังใจให้แก่ทีม',
        'ใฝ่หาความรู้ ศึกษาหาความรู้ใหม่ๆ อยู่เสมอ',
        'มีความอดทนสูง สามารถรับมือกับปัญหา ความกดดันต่างๆที่เกิดขึ้นได้',
        'มีระเบียบวินัย เมื่อกำหนดเป้าหมายแล้ว ระเบียบวินัยในการฝึกซ้อมจะเป็นสิ่งที่นำพาไปสู่ความสำเร็จ',
      ]"
      roleImg="@/assets/job/esport-coach/role.png"
      :roles="[
        {
          title: 'กำหนดเวลาฝึกซ้อม',
          description: 'ให้กับนักกีฬา',
        },
        {
          title: 'คิดค้นกลยุทธ์ใหม่',
          description: 'เพื่อใช้ร่วมกันในทีม',
        },
        {
          title: 'ประเมินสมรรถนะ (performance)',
          description: 'เพื่อระบุสิ่งที่นักกีฬาจะต้องพัฒนาเพิ่มเติม',
        },
      ]"
      incomeDescription="รายได้เฉลี่ย 15,000-100,000 บาทต่อเดือน รายได้ของอาชีพนี้อยู่ในเกณฑ์ดีและมีความมั่นคง แต่ทั้งนี้ขึ้นอยู่กับปัจจัยหลายด้าน ไม่ว่าจะเป็นประสบการณ์และความมีชื่อเสียงของ eSports Coach เอง ชื่อเสียงของทีมนักกีฬาที่ฝึกสอน ประเภทของเกมที่ฝึกสอน และสโมสรที่สังกัด ซึ่งนอกเหนือจากเงินเดือนประจำแล้ว อาจจะได้รับรายได้ที่เป็นส่วนแบ่งจากรางวัลการแข่งขันตามแต่ละข้อตกลงกับสโมสรต้นสังกัด และอาจมีเงินโบนัสหรือสวัสดิการอื่นๆ เพิ่มเติมด้วย เช่น ค่าเดินทาง ค่าที่พักระหว่างการแข่งขัน การฝึกอบรมทักษะเพิ่มเติม"
      :recommendLv="[
        'รู้จักตัวเอง ถามตัวเองว่ามีความสามารถในการเล่นเกมและความรู้เกี่ยวกับเกมในระดับใด และประเมินว่าเราสามารถทำงานเป็นทีมได้หรือไม่ เพราะ eSports Coach ต้องสามารถฝึกสอนทีมและดูแลนักกีฬาได้',
        'เข้าแข่งขันเป็นนักกีฬาอีสปอร์ต เพื่อเก็บเกี่ยวประสบการณ์ให้ได้มากที่สุด',
        'เรียนรู้ไม่รู้จบ ศึกษาหาความรู้และพัฒนาฝีมือในด้านอีสปอร์ตอยู่เสมอ เพราะวงการนี้มีการเติบโตและเปลี่ยนแปลงตลอดเวลา',
      ]"
      recommendCourseDescription="โค้ชกีฬาอีสปอร์ตก็ไม่ต่างกับอาชีพโค้ชในกีฬาประเภทอื่นๆ คือ จำเป็นที่จะต้องมีประสบการณ์ในการแข่งขันกีฬาอีสปอร์ตแบบมืออาชีพมาก่อน โดยไม่จำเป็นต้องเรียนจบในสาขาวิชาที่เกี่ยวข้องกับด้านกีฬา และอาชีพนี้ไม่มีการเปิดสอนในสาขาวิชาใดเป็นการเฉพาะ แต่ต้องอาศัยทักษะที่มีความหลากหลาย ซึ่งการมีความรู้พื้นฐานในบางสาขาวิชาก็จะช่วยให้การบริหารจัดการทีมมีประสิทธิภาพมากยิ่งขึ้น เช่น สาขาวิชาด้านการบริหารจัดการ ทักษะด้านสถิติ และด้านคอมพิวเตอร์"
      recommendImg="@/assets/job/esport-coach/recommend-course.png"
      :recommendCourseDetails="[
        {
          header: 'ด้านการบริหารจัดการ',
          details: [
            {
              place: 'คณะบริหารธุรกิจ',
              courses: ['สาขาวิชา/ภาควิชาการจัดการ'],
            },
          ],
        },
        {
          header: 'ด้านสถิติ',
          details: [
            {
              place: 'คณะพาณิชยศาสตร์และการบัญชี',
              courses: ['สาขาวิชา/ภาควิชาสถิติ'],
            },
            {
              place: 'คณะวิทยาศาสตร์ สาขาวิชา/ภาควิชาสถิติ ',
              courses: ['สาขาวิชา/ภาควิชาสถิติ'],
            },
          ],
        },
        {
          header: 'ด้านคอมพิวเตอร์',
          details: [
            {
              place: 'คณะวิศวกรรมศาสตร์',
              courses: ['สาขาวิชา/ภาควิชาวิศวกรรมคอมพิวเตอร์ '],
            },
            {
              place: 'คณะวิทยาศาสตร์และเทคโนโลยี',
              courses: ['สาขาวิชา/ภาควิชาวิทยาการคอมพิวเตอร์'],
            },
          ],
        },
      ]"
    />
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import JobDetail from '../../../components/job/JobDetail.vue'

export default Vue.extend({
  name: 'EsportCoach',
  components: {
    JobDetail,
  },
  data() {
    return {
      mainImg: require('@/assets/job/esport-coach/main.png'),
      title: 'ผู้ฝึกสอนกีฬาอีสปอร์ต',
      subTitle: '(eSports Coach)',
      description:
        'หรือโค้ชของนักกีฬาอีสปอร์ต มีหน้าที่คล้ายกันกับโค้ชกีฬาประเภทอื่นๆ ในการสนับสนุนและส่งเสริมให้นักกีฬาได้ใช้ทักษะของแต่ละคนที่มีอยู่ และพัฒนาให้มีประสิทธิภาพมากที่สุด โดยโค้ชอาจจะไม่ได้มีฝีมือการเล่นที่เก่งกว่าตัวนักกีฬา แต่จะเป็นผู้มองหาจุดแข็ง ข้อดี ข้อเสีย ของนักกีฬา เพื่อพัฒนาปรับปรุงแก้ไขและจัดการในภาพรวมให้นักกีฬาทุกคนในทีมสามารถใช้จุดแข็งของตัวเองนำพาทีมไปสู่ชัยชนะในการแข่งขัน นอกจากนี้ ยังมีหน้าที่วางแผนกลยุทธ์การแข่งขัน กำหนดตำแหน่งผู้เล่น รับผิดชอบด้านการฝึกซ้อม การเก็บตัว และการเข้าแข่งขัน รวมทั้งยังต้องให้คำปรึกษาแก่นักกีฬาทั้งประเภททีมและบุคคล และที่สำคัญยังเป็นศูนย์รวมจิตใจของทีมหรือของนักกีฬาอีสปอร์ตในการสร้างแรงจูงใจและรักษาไว้ซึ่งแรงจูงใจนั้น เพื่อให้นักกีฬามีขวัญและกำลังใจในการแข่งขัน',
    }
  },
  head() {
    const instance: any = this

    return {
      title: 'อาชีพผู้ฝึกสอนกีฬาอีสปอร์ต',
      meta: [
        { property: 'og:type', content: 'article' },
        {
          property: 'og:title',
          hid: 'og:title',
          content: instance.title + ' ' + instance.subTitle,
        },
        {
          property: 'og:description',
          hid: 'og:description',
          content: instance.description,
        },
        { property: 'og:image', hid: 'og:image', content: instance.mainImg },
      ],
    }
  },
})
</script>

<style lang="scss" scoped></style>
