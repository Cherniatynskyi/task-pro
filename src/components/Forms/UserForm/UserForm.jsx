import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { fetchUser, updateUser } from '../../redux/users/operations';

import { Formik } from 'formik';
import { Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ImageInput from './ImgInput.jsx';
import sprite from '../../../images/sprite.svg';
import css from './UserForm.module.css';

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 6 characters')
    .max(32, 'Name must be no more than 16 characters')
    .required('Name is required*'),
  email: Yup.string()
    .matches(emailRegExp, 'Enter a valid Email*')
    .email('Enter a valid Email*')
    .required('Email is required*'),
  password: Yup.string()
    .matches(/^(?=.*[a-z])/, 'Password must meet the requirements*')
    .min(8, 'Password must be at least 6 characters')
    .max(64, 'Password must be no more than 16 characters')
    .required('Password is required*'),
});

export const UserForm = () => {
  // const selectCurrentUser = state => state.currentUser;
  // const currentUser = useSelector(selectCurrentUser);
  // const dispatch = useDispatch();
  // const { id } = useParams();
  // const [user, setUser] = useState(currentUser);

  // useEffect(() => {
  //   dispatch;
  //   (fetchUser(id));
  // }, [dispatch, id]);
  // const handleChange = e => {
  //   setUser(prevUser => ({ ...prevUser, [e.target.name]: e.target.value }));
  // };
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch(updateUser({ ...user }));
  // };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleClickPasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className={css.formWrap}>
        <h2 className={css.formTitle}>Edit profile</h2>
        <Formik
          initialValues={{
            avatar: '',
            avatarURL: '',
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={schema}
          // onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className={css.avatar}>
                <label className={css.userAvaWrapper}>
                  <img src={``} alt="" className={css.userImg} width={68} />
                  <label htmlFor="avatar" className={css.iconBtnPlus}>
                    <ImageInput />
                    <svg className={css.iconPlus} width="10" height="10">
                      <use xlinkHref={`${sprite}#icon-plus`} />
                    </svg>
                  </label>
                </label>
              </div>
              <div className={css.fieldWrapper}>
                <Field
                  className={css.field}
                  // value={user.name}
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  // onChange={handleChange}
                />
              </div>
              {errors.name && touched.name ? (
                <ErrorMessage name="name">
                  {errorMsg => (
                    <div className={css.errorMessage}>{errorMsg}</div>
                  )}
                </ErrorMessage>
              ) : (
                <div className={css.notError}></div>
              )}
              <div className={css.fieldWrapper}>
                <Field
                  className={css.field}
                  // value={user.email}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  // onChange={handleChange}
                />
              </div>
              {errors.email && touched.email ? (
                <ErrorMessage name="email">
                  {errorMsg => (
                    <div className={css.errorMessage}>{errorMsg}</div>
                  )}
                </ErrorMessage>
              ) : (
                <div className={css.notError}></div>
              )}
              <div className={css.fieldWrapper}>
                <Field
                  className={css.field}
                  type={passwordVisible ? 'text' : 'password'}
                  // value={user.password}
                  name="password"
                  placeholder="Create a password"
                  // onChange={handleChange}
                />
                {passwordVisible ? (
                  <button
                    className={css.iconBtn}
                    type="button"
                    onClick={handleClickPasswordVisibility}
                  >
                    <svg
                      className={css.iconEye}
                      // className={css.iconEye}
                      width="18"
                      height="18"
                    >
                      <use href={`${sprite}#icon-eye`} />
                    </svg>
                  </button>
                ) : (
                  <button
                    className={css.iconBtn}
                    type="button"
                    onClick={handleClickPasswordVisibility}
                  >
                    <svg className={css.iconEye} width="18" height="18">
                      <use href={`${sprite}#icon-eye`} />
                    </svg>
                  </button>
                )}
              </div>
              {errors.password && touched.password ? (
                <ErrorMessage name="password">
                  {errorMsg => (
                    <div className={css.errorMessage}>{errorMsg}</div>
                  )}
                </ErrorMessage>
              ) : (
                <div className={css.notError}></div>
              )}
              <button className={css.btnSend} type="submit">
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
