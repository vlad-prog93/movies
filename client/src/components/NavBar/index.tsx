// styles
import './NavBar.css'

const NavBar = () => {
  return (
    <ul className='navbar'>
      <li className="navbar__item">
        <a href="#project" className="navbar__link">
          О проекте
        </a>
      </li>
      <li className="navbar__item">
        <a href="#techs" className="navbar__link">
          Технологии
        </a>
      </li>
      <li className="navbar__item">
        <a href="#student" className="navbar__link">
          Студент
        </a>
      </li>
    </ul>
  )
}

export default NavBar