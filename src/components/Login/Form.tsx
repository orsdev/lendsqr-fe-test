import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import cn from 'clsx'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import PasswordButton from './PasswordButton'

const ValidationSchema = Yup.object({
  email: Yup.string().email('Email not valid').required('Email is required'),
  password: Yup.string().required('Password is required')
})

const LoginForm = () => {
  const navigate = useNavigate()
  const [inputType, setInputType] = useState<'password' | 'text'>('password')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scroll(0, 10)
    }
  }, [])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      navigate('/dashboard/users')
    }
  })

  return (
    <div className="login__form">
      <header>
        <h1 className="login__form__title">Welcome!</h1>
        <p className="login__form__info">Enter details to login.</p>
      </header>
      <form className="login__form--form" onSubmit={formik.handleSubmit}>
        <div className="login__form__group">
          <div className="login__form__input--wrapper">
            <input
              type="text"
              name="email"
              className={cn(
                formik.touched.email === true &&
                  Boolean(formik.errors.email) &&
                  'login__form__error',
                'login__form__input'
              )}
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          {(formik.touched.email ?? false) && Boolean(formik.errors.email) ? (
            <span className="login__form__error--message" role="alert">
              {formik.errors.email}
            </span>
          ) : null}
        </div>
        <div className="login__form__group">
          <div className="login__form__input--wrapper">
            <input
              type={inputType}
              name="password"
              className={cn(
                formik.touched.password === true &&
                  Boolean(formik.errors.password) &&
                  'login__form__error',
                'login__form__input'
              )}
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <PasswordButton
              type={inputType}
              onClick={() => {
                if (inputType === 'text') {
                  setInputType('password')
                } else {
                  setInputType('text')
                }
              }}
            />
          </div>
          {(formik.touched.password ?? false) &&
          Boolean(formik.errors.password) ? (
            <span className="login__form__error--message" role="alert">
              {formik.errors.password}
            </span>
          ) : null}
        </div>
        <div className="login__form__group">
          <Link to="">
            <span className="login__form__link">Forgot Password?</span>
          </Link>
        </div>
        <div>
          <Button
            type="default"
            htmlType="submit"
            className="login__form__button"
          >
            Log in
          </Button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
