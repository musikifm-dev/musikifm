export const route = {
  home: '/',
  podcast: '/podcast',
  moodFilter: '/moodFilter',
  blog: '/blog',
  video: '/video',
  songs: '/songs',
  login: '/login',
  smsVerification: 'sms-verification',
  emailVerification: '/email-verification',
  profile: '/profile',
  register: '/register',
  accountSettings: '/account-settings',
  schedule: '/schedule',
  library: '/library',
}

export const offCanvasLinks = [
  { route: route.home, text: 'HOME' },
  { route: route.moodFilter, text: 'MOOD FILTER' },
  { route: route.podcast, text: 'PODCAST' },
  { route: route.blog, text: 'BLOG' },
  { route: route.video, text: 'VIDEO' },
  { route: route.schedule, text: 'SCHEDULE' },
]

export const navbarAuthenticatedLinks = [
  { route: route.podcast, text: 'Podcast' },
  { route: '/', text: 'Song' },
  { route: route.video, text: 'Videos' },
]

export const authLinks = [
  { route: route.login, text: 'Login' },
  { route: route.register, text: 'Sign In' },
]

export const renderBreakPoints = (breakpoints) => {
  switch (breakpoints) {
    case 'hero':
      return {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          resistanceRatio: 0,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 15,
          resistanceRatio: 0,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
          resistanceRatio: 0,
        },
        992: {
          slidesPerView: 1.2,
          spaceBetween: 20,
          resistanceRatio: 0,
        },
        1280: {
          slidesPerView: 1.2,
          spaceBetween: 15,
          resistanceRatio: 0,
        },
        1400: {
          slidesPerView: 1.2,
          spaceBetween: 20,
          resistanceRatio: 0,
        },
      }
    case 'podcast':
      return {
        320: {
          slidesPerView: 1.5,
          spaceBetween: 20,
          resistanceRatio: 0,
        },
        576: {
          slidesPerView: 2.2,
          spaceBetween: 15,
          resistanceRatio: 0,
        },
        768: {
          slidesPerView: 2.7,
          spaceBetween: 20,
          resistanceRatio: 0,
        },
        992: {
          slidesPerView: 4.4,
          spaceBetween: 15.5,
          resistanceRatio: 0,
        },
        1366: {
          slidesPerView: 7.4,
          spaceBetween: 15.5,
          resistanceRatio: 0,
        },
        1600: {
          slidesPerView: 6.4,
          spaceBetween: 21,
          resistanceRatio: 0,
        },
        1789: {
          slidesPerView: 6.4,
          spaceBetween: 23.9,
          resistanceRatio: 0,
        },
        1920: {
          slidesPerView: 5.4,
          spaceBetween: 29.9,
          resistanceRatio: 0,
        },
        2500: {
          slidesPerView: 6.2,
          spaceBetween: 30,
          resistanceRatio: 0,
        },
      }
    case 'blog':
      return {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 20,
          resistanceRatio: 0,
        },
        576: {
          slidesPerView: 1.5,
          spaceBetween: 10,
          resistanceRatio: 0,
        },
        768: {
          slidesPerView: 2.2,
          spaceBetween: 10,
          resistanceRatio: 0,
        },
        992: {
          slidesPerView: 3.5,
          spaceBetween: 15.5,
          resistanceRatio: 0,
        },
        1366: {
          slidesPerView: 5.2,
          spaceBetween: 18.2,
          resistanceRatio: 0,
        },
        1600: {
          slidesPerView: 5.2,
          spaceBetween: 21,
          resistanceRatio: 0,
        },
        1789: {
          slidesPerView: 5.2,
          spaceBetween: 20,
          resistanceRatio: 0,
        },
        1920: {
          slidesPerView: 4.5,
          spaceBetween: 20,
          resistanceRatio: 0,
        },
        2500: {
          slidesPerView: 5.2,
          spaceBetween: 20,
          resistanceRatio: 0,
        },
      }
    case 'video':
      return {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 20,
          resistanceRatio: 0,
        },
        576: {
          slidesPerView: 1.2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
          resistanceRatio: 0,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15.5,
          resistanceRatio: 0,
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 20,
          resistanceRatio: 0,
        },
        1600: {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
        1789: {
          slidesPerView: 3.5,
          spaceBetween: 20,
          resistanceRatio: 0,
        },
        1920: {
          slidesPerView: 3.2,
          spaceBetween: 20,
          resistanceRatio: 0,
        },
        2500: {
          slidesPerView: 4.2,
          spaceBetween: 20,
          resistanceRatio: 0,
        },
      }
    default:
      return null
  }
}

export const RE_DIGIT = new RegExp(/^\d+$/)

export const APP = {
  login: process.env.REACT_APP_URL_LOGIN,
  register: process.env.REACT_APP_URL_REGISTER,
  userData: process.env.REACT_APP_URL_USERDATA,

  adminBase: process.env.REACT_APP_URL_ADMINBASE,
  dataBase: process.env.REACT_APP_URL_DATABASE,

  home: process.env.REACT_APP_URL_HOME,
  //REPORT
  blog: process.env.REACT_APP_URL_BLOG,
  podcast: process.env.REACT_APP_URL_PODCAST,
  video: process.env.REACT_APP_URL_VIDEO,
  videoHomeSlider: process.env.REACT_APP_URL_VIDEO_HOMESLIDER,

  //DETAILS
  blogs: process.env.REACT_APP_URL_BLOGS,
  podcasts: process.env.REACT_APP_URL_PODCASTS,
  videos: process.env.REACT_APP_URL_VIDEOS,

  //TAGS
  podcastTags: process.env.REACT_APP_URL_PODCAST_TAGS,
  blogTags: process.env.REACT_APP_URL_BLOG_TAGS,

  // PODCAST REVERSE
  podcastReverse: process.env.REACT_APP_URL_PODCASTREVERSE,

  // RADIO
  radio: process.env.REACT_APP_URL_RADIO,
}
