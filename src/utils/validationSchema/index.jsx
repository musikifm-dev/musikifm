import * as yup from 'yup'

export const registerValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Name & Surname is a required field')
    .min(3, 'Name & Surname  must be at least 3 characters long')
    .max(30, 'Name & Surname  must be max 30 characters long')
    .matches(/[a-zA-ZığüşöçİĞÜŞÖÇ]/, 'Name & Surname can only contain Latin letters.'),
  password: yup
    .string('Password must be string')
    .required('Password is a required field')
    .min(7, 'Password is too short - should be 7 chars minimum.')
    .max(12, 'Password is too long - should be 12 chars minimum.')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$!~'%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,15}$/,
      'Password can only contain Latin letters.',
    ),
  // confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
  email: yup
    .string()
    .required('Email is a required field')
    .trim('Email can not include whitespace')
    .email('Email must be a valid'),
  phone: yup
    .string()
    .required('Phone number is a required field')
    .min(6, 'Phone number  must be min 6 characters long')
    .max(14, 'Phone number  must be max 14 characters long'),
  terms: yup.boolean().oneOf([true], 'Terms & Conditions must be checked'),
})

export const loginValidationSchema = yup.object({
  usernameEmail: yup
    .string('Username/Email must be string')
    .required('Username or Email is a required field')
    .test('is-username', 'Enter a Valid Username or Email', (value) => {
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const usernameRegex = /^[a-zA-Z0-9ığüşöçİĞÜŞÖÇ]{4,10}$/

      let isValidEmail = emailRegex.test(value)
      let isValidUsername = usernameRegex.test(value)
      console.log({ email: isValidEmail, username: isValidUsername })
      if (!isValidEmail && !isValidUsername) {
        return false
      }
      return true
    }),
  // email: yup.string().test('is-email', 'Enter a Valid Email', (value) => {
  //   const emailRegex =
  //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   let isValidEmail = emailRegex.test(value)

  //   if (!isValidEmail) {
  //     console.log('email')
  //     return false
  //   }
  //   return true
  // }),
  // username: yup
  //   .string()
  //   .required('Name is a required field')
  //   .trim()
  //   .min(3, 'Name & Surname  must be at least 3 characters long')
  //   .max(30, 'Name & Surname  must be max 30 characters long')
  //   .matches(/[a-zA-ZığüşöçİĞÜŞÖÇ]/, 'Name & Surname can only contain Latin letters.'),
  password: yup
    .string('Password must be string')
    .required('Password is a required field')
    .trim()
    .min(7, 'Password is too short - should be 7 chars minimum.')
    .max(12, 'Password is too long - should be 12 chars minimum.')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$!~'%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,15}$/,
      'Password must contain latin letters, 1 uppercase and 1 special characters',
    ),
  // email: yup
  //   .string()
  //   .required('Email is a required field')
  //   .trim('Email can not include whitespace')
  //   .email('Email must be a valid'),
})
