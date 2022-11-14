import * as yup from 'yup'

export const registerValidationSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required('Phone number is a required field')
    .trim('Phonenumber can not include whitespace')
    .min(6)
    .max(14),
  fullName: yup
    .string()
    .required('Name & Surname is a required field')
    .min(3, 'Name & Surname  must be at least 3 characters long')
    .max(30, 'Name & Surname  must be max 30 characters long'),
  password: yup
    .string()
    .required('Password is a required field')
    .min(7, 'Password is too short - should be 7 chars minimum.')
    .max(12, 'Password is too long - should be 12 chars minimum.')
    .matches(/[a-zA-ZığüşöçİĞÜŞÖÇ]/, 'Password can only contain Latin letters.'),
  email: yup.string().required('Email is a required field').trim('Email can not include whitespace').email(),
//   terms: yup.boolean().oneOf([false], 'Message'), 
})
