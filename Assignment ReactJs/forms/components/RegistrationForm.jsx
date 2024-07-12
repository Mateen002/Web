import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = () => {
  return (
    <div>
      <h1>Registration Form</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          address: '',
          gender: '',
          country: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
          address: Yup.string().required('Required'),
          gender: Yup.string().required('Required'),
          country: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className='fields'>
              <label htmlFor="name">Name</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className='fields'>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className='fields'>
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <div className='fields'>
              <label htmlFor="address">Address</label>
              <Field name="address" type="text" />
              <ErrorMessage name="address" component="div" className="error" />
            </div>
            
            <div className='fields'>
              <label>Gender</label>
              <div role="group" aria-labelledby="radio-group" className='fields'>
                <label>
                  <Field type="radio" name="gender" value="male" />
                  Male
                </label>
                <label>
                  <Field type="radio" name="gender" value="female" />
                  Female
                </label>
              </div>
              <ErrorMessage name="gender" component="div" className="error" />
            </div>
            <div className='fields'>
              <label htmlFor="country">Country</label>
              <Field as="select" name="country">
                <option value="">Select your country</option>
                <option value="pakistan">Pakistan</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
              </Field>
              <ErrorMessage name="country" component="div" className="error" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
