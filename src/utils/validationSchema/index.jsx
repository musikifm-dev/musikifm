import * as yup from 'yup'

export const registerValidationSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required('Phone number is a required field')
    .min(6, 'Phone number  must be min 6 characters long')
    .max(14, 'Phone number  must be max 14 characters long'),
  fullName: yup
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
  email: yup
    .string()
    .required('Email is a required field')
    .trim('Email can not include whitespace')
    .email('Email must be a valid'),
  termsAndConditions: yup.boolean().oneOf([true], 'Terms & Conditions must be checked'),
})
