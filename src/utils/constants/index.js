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

export const RE_DIGIT = new RegExp(/^\d+$/)

export const APP = {
  login: process.env.REACT_APP_URL_LOGIN,
  register: process.env.REACT_APP_URL_REGISTER,
  userData: process.env.REACT_APP_URL_USERDATA,

  base: process.env.REACT_APP_URL_BASE,
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
