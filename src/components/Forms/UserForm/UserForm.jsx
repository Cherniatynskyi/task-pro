import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

import { selectUser } from '../../../redux/auth/selector.js';
import { updaterUserData } from '../../../redux/auth/authThunks.js';

import ImageInput from './ImgInput.jsx';
import sprite from '../../../images/sprite.svg';
import css from './UserForm.module.css';

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const schema = Yup.object().shape({
  avatar: Yup.mixed().test('fileType', 'Invalid file format', value => {
    if (!value) return true;
    const supportedFormats = ['image/png', 'image/jpeg', 'image/jpg'];
    return supportedFormats.includes(value.type);
  }),
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
    .max(64, 'Password must be no more than 16 characters'),
});

export const UserForm = () => {
  const user = useSelector(selectUser);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [image, setPreviewImage] = useState(null);
  const dispatch = useDispatch();
  const {t} = useTranslation()

  const handleImageChange = imageUrl => {
    setPreviewImage(imageUrl);
  };

  const createUserDataFormData = infoUser => {
    const formData = new FormData();
    console.log(infoUser);
    if (infoUser.password) {
      formData.append('password', infoUser.password);
    }
    formData.append('name', infoUser.name);
    formData.append('email', infoUser.email);
    formData.append('avatarURL', infoUser.avatarURL);

    return formData;
  };

  const handleSubmit = (values, { resetForm, setFieldValue }) => {
    const newUserData = {
      name: values.name,
      email: values.email,
      avatarURL: values.avatar,
      ...(values.password && { password: values.password }),
    };

    const userData = createUserDataFormData(newUserData);

    dispatch(updaterUserData(userData));

    resetForm();

    setFieldValue('name', values.name);
    setFieldValue('email', values.email);
  };

  const handleClickPasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <h2 className={css.formTitle}>{t('form.edt-prf')}</h2>
        <Formik
          initialValues={{
            avatar: '',
            avatarURL: user.avatarURL,
            name: user.name,
            email: user.email,
            password: '',
          }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className={css.avatar}>
              <label className={css.userAvaWrapper}>
                {image || user.avatarURL ? (
                  <img
                    src={image ? image : user.avatarURL}
                    alt=""
                    className={css.userImg}
                    width={68}
                  />
                ) : (
                  <div className={css.userIconBtn}>
                    <svg className={css.userIcon}>
                      <use href={`${sprite}#icon-user2`} />
                    </svg>
                  </div>
                )}

                <label htmlFor="avatar" className={css.iconBtnPlus}>
                  <ImageInput handleChange={handleImageChange} />

                  <svg className={css.iconPlus} width="10" height="10">
                    <use xlinkHref={`${sprite}#icon-plus`} />
                  </svg>
                </label>
              </label>
            </div>
            <div className={css.fieldWrapper}>
              <Field
                className={css.field}
                type="text"
                name="name"
                placeholder={t('form.name-prf')}
              />
              <ErrorMessage name="name">
                {errorMsg => <div className={css.errorMessage}>{errorMsg}</div>}
              </ErrorMessage>
            </div>
            <div className={css.fieldWrapper}>
              <Field
                className={css.field}
                type="email"
                name="email"
                placeholder={t('form.mail-prf')}
              />
              <ErrorMessage name="email">
                {errorMsg => <div className={css.errorMessage}>{errorMsg}</div>}
              </ErrorMessage>
            </div>
            <div className={css.fieldWrapper}>
              <Field
                className={css.field}
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder={t('form.psw-prf')}
              />
              {passwordVisible ? (
                <button
                  className={css.iconBtn}
                  type="button"
                  onClick={handleClickPasswordVisibility}
                >
                  <svg className={css.iconEye} width="18" height="18">
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
              <ErrorMessage name="password">
                {errorMsg => <div className={css.errorMessage}>{errorMsg}</div>}
              </ErrorMessage>
            </div>
            <button className={css.btnSend} type="submit">
            {t('form.send-btn')}
            </button>
          </Form>
        </Formik>
    </>
  );
};
