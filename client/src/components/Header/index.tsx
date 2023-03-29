// node_modules
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// components
import Container from '../Container'
import Logo from '../Logo'
import LogoAccount from '../LogoAccount'
import Burger from '../Burger'
import BurgerMenu from '../BurgerMenu'

// styles
import './Header.css'

// utils
import { ROUTES } from '../../utils/const'

// BLL
import { useAppSelector, useAppDispatch } from '../../hooks/store'
import { toActive, toDiactive } from '../../store/reducers/burgerReducer'

const Header = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true)
  const isActive = useAppSelector(state => state.burger.isActive)
  const dispatch = useAppDispatch()

  const handleActiveBurger = () => {
    isActive ? dispatch(toDiactive()) : dispatch(toActive())
  }


  return (
    <>
      <Container>
        <header className='header'>
          <NavLink to={ROUTES.home}><Logo /></NavLink>
          <nav className='header__nav'>
            {isAuth
              ? <ul className='header__list'>
                <li className='header__item'>
                  <NavLink
                    className={({ isActive }) => isActive ? 'header__link header__link_active' : 'header__link'}
                    to={ROUTES.movies}>
                    Фильмы
                  </NavLink>
                </li>
                <li className='header__item'>
                  <NavLink
                    className={({ isActive }) => isActive ? 'header__link header__link_active' : 'header__link'}
                    to={ROUTES.savedMovies}>
                    Сохраненные фильмы
                  </NavLink>
                </li>
                <li className='header__item header__item_account'>
                  <NavLink
                    className={({ isActive }) => isActive ? 'header__link header__link_active' : 'header__link'}
                    to={ROUTES.profile}>
                    Аккаунт
                    <LogoAccount />
                  </NavLink>
                </li>
              </ul>
              : <ul className='header__list-auth'>
                <li className='header__item-auth'>
                  <NavLink
                    className='header__link-auth'
                    to={ROUTES.register}>
                    Регистрация
                  </NavLink>
                </li>
                <li className='header__item-auth' onClick={e => setIsAuth(true)}>
                  <NavLink
                    className='header__link-auth'
                    to={ROUTES.login}>
                    Войти
                  </NavLink>
                </li>
              </ul>}
          </nav>
          {isAuth && <Burger
            onClick={() => handleActiveBurger()}
            isActive={isActive}
          />}
        </header>

      </Container >
      {isAuth && <BurgerMenu isActive={isActive} closeMenu={() => dispatch(toDiactive())} />}
    </>
  )
}

export default Header