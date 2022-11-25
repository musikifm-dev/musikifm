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
}

export const navLinks = [
  { route: route.home, text: 'Home' },
  { route: route.moodFilter, text: 'Mood Filter' },
  { route: route.podcast, text: 'Podcast' },
  { route: route.blog, text: 'Blog' },
  { route: route.video, text: 'Video' },
]

export const RE_DIGIT = new RegExp(/^\d+$/)

export const APP = {
  login: process.env.REACT_APP_URL_LOGIN,
  register: process.env.REACT_APP_URL_REGISTER,

  base: process.env.REACT_APP_URL_BASE,

  //REPORT
  blog: process.env.REACT_APP_URL_BLOG, 
  podcast: process.env.REACT_APP_URL_PODCAST,
  video: process.env.REACT_APP_URL_VIDEO,

  //DETAILS
  blogs: process.env.REACT_APP_URL_BLOGS,
  podcasts: process.env.REACT_APP_URL_PODCAST,
  videos: process.env.REACT_APP_URL_VIDEOS,

  radio: process.env.REACT_APP_URL_RADIO,
}
