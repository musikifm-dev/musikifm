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

export const navLinks = [
  { route: route.home, text: 'HOME' },
  { route: route.moodFilter, text: 'MODD FILTER' },
  { route: route.podcast, text: 'PODCAST' },
  { route: route.blog, text: 'BLOG' },
  { route: route.video, text: 'VIDEO' },
  { route: route.schedule, text: 'SCHEDULE' },
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

  //DETAILS
  blogs: process.env.REACT_APP_URL_BLOGS,
  podcasts: process.env.REACT_APP_URL_PODCASTS,
  videos: process.env.REACT_APP_URL_VIDEOS,

  radio: process.env.REACT_APP_URL_RADIO,
  podcastReverse: process.env.REACT_APP_URL_PODCASTREVERSE
}
