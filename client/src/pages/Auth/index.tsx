// node_modules
import { useLocation, Link } from 'react-router-dom'
import { useState } from 'react'

// styles
import './Auth.css'
import Logo from 'components/Logo'
import MyInput from 'UI/MyInput'
import MyLabel from 'UI/MyLabel'
import { ROUTES } from 'utils/const'


const Auth = () => {
  const [name, setName] = useState<string>('')
  const [mail, setMail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const location = useLocation()

  if (location.pathname === '/register') {
    return (
      <section className='auth'>
        <Logo />
        <h1 className='auth__title'>Добро пожаловать!</h1>
        <form className='auth__auth__form' action="POST">
          <div className='auth__group'>
            <MyInput
              id='auth-name'
              type='text'
              disabled={false}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <MyLabel text='Имя' htmlFor='auth-name' />
          </div>
          <div className='auth__group'>
            <MyInput
              id='auth-email'
              type='email'
              disabled={false}
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <MyLabel text='E-mail' htmlFor='auth-email' />
          </div>
          <div className='auth__group'>
            <MyInput
              id='auth-password'
              type='password'
              disabled={false}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <MyLabel text='Пароль' htmlFor='auth-password' />
          </div>
          <div className='auth__button-cont'>
            <button className='auth__button'>Зарегистрироваться</button>
            <p className='auth__info'>Уже зарегистрированы? <Link className='auth__info-link' to={ROUTES.login}>Войти</Link></p>
          </div>
        </form>
      </section>
    )
  }

  return (
    <h1>Login</h1>
  )
}

export default Auth