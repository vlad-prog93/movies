// node_modules
import { useLocation } from 'react-router-dom'

// styles
import './Card.css'

// utils
import { ROUTES } from 'utils/const'

// images
import one from 'images/png_films/film_1.png'


const Card = () => {
  const location = useLocation()

  return (
    <li className='card'>
      <div className='card__img-con'>
        <img className='card__img' src={one} alt='foto' />
        <a
          className='card__link'
          href='https://yandex.ru'
          target='_blank'
          rel='noreferrer'
        />
      </div>
      <div className='card__text-con'>
        <p className='card__text'>33 слова о дизайне</p>
        {location.pathname === ROUTES.movies
          ? <button className='card__button' />
          : <button className='card__button card__button-delete' />}
      </div>
      <p className='card__time'>1ч42м</p>
    </li>
  )
}


export default Card