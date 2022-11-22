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
