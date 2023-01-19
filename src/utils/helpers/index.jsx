export function padTo2Digits(num) {
  return num.toString().padStart(2, '0')
}

// export function isValidEmail(email) {
//   return /\S+@\S+\.\S+/.test(email)
// }

export const isValidEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  )
}

export const refreshPage = () => {
  return window.location.reload(false)
}

export const renderComponent = (component) => {
  switch (typeof component) {
    case 'function':
      return component()
    default:
      return component
  }
}

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
