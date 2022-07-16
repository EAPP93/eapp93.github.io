import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import * as yup from 'yup'

function ContactForm () {
  const schema = yup.object({
    firstName: yup.string().required('name is required'),
    lastName: yup.string().required('last name is required'),
    email: yup.string().required().email('email is required'),
    subject: yup.string().required('subject is required'),
    message: yup.string().required('the message is required')
  })

  interface MyFormInterface extends yup.InferType<typeof schema> {}

  const initialValues: MyFormInterface = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(
        values: MyFormInterface,
        { setSubmitting }: FormikHelpers<MyFormInterface>
      ) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 500)
      }}
    >
      <Form>
        <Field id="firstName" name="firstName" placeholder="Your First Name"/>
        <Field id="lastName" name="lastName" placeholder="Your Last Name"/>
        <Field id="email" name="email" type="email" placeholder="Your Email"/>
        <Field id="subject" name="subject" placeholder="Subject"/>
        <Field id="message" name="message" component="textarea" placeholder="Message"/>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default ContactForm
