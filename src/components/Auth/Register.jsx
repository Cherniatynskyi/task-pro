import React from 'react';
import { Formik } from 'formik';
import { Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './Auth.module.css';
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';

const nameRegExp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{2,32}$/;

const emailRegExp =
  /^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$/;
// /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const passwordRegExp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,64}$/;

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(nameRegExp, 'Enter a valid name*')
    .required('Name is required*'),
  email: Yup.string()
    .matches(emailRegExp, 'Enter a valid Email*')
    .email('Enter a valid Email*')
    .required('Email is required*'),
  password: Yup.string()
    .required('Password is required*')
    .matches(passwordRegExp, 'Password must meet the requirements*'),
});

export const Register = () => {
  // const dispatch = useDispatch();

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   dispatch(
  //     register({
  //       name: form.elements.name.value,
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   );
  //   form.reset();
  // };

  return (
    <div className={css.registerForm}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={schema}
        // onSubmit={handleSubmit}
      >
        <Form>
          <ErrorMessage name="name" component="div" />
          <Field
            className={css.field}
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <ErrorMessage name="email" component="div" />
          <Field
            className={css.field}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage name="password" component="div" />
          <Field
            className={css.field}
            type="password"
            name="password"
            placeholder="Create a password"
          />

          <button className={css.button} type="submit">
            Register Now
          </button>
        </Form>
      </Formik>
    </div>
  );
};

// * Підправити стилі на виведення помилки
// * звірити валідації
// * підключити зміну теми