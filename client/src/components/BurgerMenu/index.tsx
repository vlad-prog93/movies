// node_modules
import { NavLink } from 'react-router-dom'

// components
import LogoAccount from 'components/LogoAccount'

// styles
import './BurgerMenu.css'

// utils
import { ROUTES } from 'utils/const'

interface BurgerMenuPropsI {
  isActive: boolean,
  closeMenu: () => void
}

const BurgerMenu = ({ isActive, closeMenu }: BurgerMenuPropsI) => {

  return (
    <div className={isActive ? 'burger-menu' : 'burger-menu burger-menu_hidden'} onClick={() => closeMenu()}>
      <ul className='burger-menu__list' onClick={e => e.stopPropagation()}>
        <li className='burger-menu__item'>
          <NavLink
            className={({ isActive }) => isActive
              ? 'burger-menu__link burger-menu__link_active'
              : 'burger-menu__link'}
            to={ROUTES.home} onClick={closeMenu} end>
            Главная
          </NavLink>
        </li>
        <li className='burger-menu__item'>
          <NavLink
            className={({ isActive }) => isActive
              ? 'burger-menu__link burger-menu__link_active'
              : 'burger-menu__link'}
            to={ROUTES.movies} onClick={closeMenu}>
            Фильмы
          </NavLink>
        </li>
        <li className='burger-menu__item'>
          <NavLink
            className={({ isActive }) => isActive
              ? 'burger-menu__link burger-menu__link_active'
              : 'burger-menu__link'}
            to={ROUTES.savedMovies} onClick={closeMenu}>
            Сохраненные фильмы
          </NavLink>
        </li>
        <li className='burger-menu__item burger-menu__item_account'>
          <NavLink
            className={({ isActive }) => isActive
              ? 'burger-menu__link burger-menu__link_active'
              : 'burger-menu__link'}
            to={ROUTES.profile} onClick={closeMenu}>
            Аккаунт
            <LogoAccount />
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default BurgerMenu
