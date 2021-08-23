import dotenv from 'dotenv'

dotenv.config()

export default {
  ssr: true,
  head: {
    title: 'Garena Academy',
    script: [
      {
        src:
          'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit',
        async: true,
        defer: true,
      },
      { src: 'pixel.js', type: 'text/javascript' }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        property: 'og:title',
        hid: 'og:title',
        content: 'Garena Academy',
      },
      {
        property: 'og:description',
        hid: 'og:description',
        content:
          'แหล่งการเรียนรู้และพัฒนาความสามารถด้านเกมและอีสปอร์ตอย่างสร้างสรรค์แก่เยาวชนคนรุ่นใหม่และผู้ที่มีความสนใจทุกคน',
      },
      {
        property: 'og:image',
        hid: 'og:image',
        content: '/LogoGarenaAcademy_Final.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap',
        rel: 'stylesheet',
      },
    ],
  },
  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
  },
  loading: { color: '#fff' },
  css: [],
  transition: {
    css: false,
  },
  plugins: [
    '~/plugins/vue-apollo',
    '~/plugins/vue-cookie',
    '~/plugins/vue-splide.client',
    '~/plugins/vue-gtag',
    '~/directives/plaintext',
  ],
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/style-resources'],
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
    extend(config, { isClient, loaders: { vue } }) {
      vue.transformAssetUrls = {
        img: 'src',
        image: 'xlink:href',
        'b-avatar': 'src',
        'b-img': 'src',
        'b-img-lazy': ['src', 'blank-src'],
        'b-card': 'img-src',
        'b-card-img': 'src',
        'b-card-img-lazy': ['src', 'blank-src'],
        'b-carousel-slide': 'img-src',
        'b-embed': 'src',
        JobCircle: 'imgSrc',
        JobRowMobile: 'imgSrc',
        MaterialBox: 'imgSrc',
        PartnerItem: 'imgSrc',
        JobDetail: [
          'mainImg',
          'jobVariantImg1',
          'jobVariantImg2',
          'characterChartImg',
          'roleImg',
          'recommendImg',
        ],
        JobMain: ['mainImgSrc'],
      }
    },
  },
  buildModules: ['@nuxt/typescript-build'],
  bootstrapVue: {
    bootstrapCSS: true,
    bootstrapVueCSS: false,
    componentPlugins: [
      'LayoutPlugin',
      'ModalPlugin',
      'NavbarPlugin',
      'ImagePlugin',
      'ButtonPlugin',
      'BadgePlugin',
      'CarouselPlugin',
      'FormInputPlugin',
      'FormTextareaPlugin',
      'FormRadioPlugin',
      'FormCheckboxPlugin',
      'LinkPlugin',
      'FormGroupPlugin',
      'FormPlugin',
      'SpinnerPlugin',
      'FormSelectPlugin',
      'EmbedPlugin',
      'PaginationNavPlugin',
      'AlertPlugin',
    ],
  },

  styleResources: {
    scss: ['~/assets/style.scss'],
  },
}
