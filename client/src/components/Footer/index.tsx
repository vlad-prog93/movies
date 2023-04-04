// node_modules
import Container from '../Container'

// styles
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <ul className='footer__list'>
          <li className='footer__item'>&copy; {new Date().getFullYear()}</li>
          <li className='footer__item'>
            <a
              className='footer__link'
              href='https://practicum.yandex.ru'
              target='_blank'
              rel='noreferrer'
            >Яндекс.Практикум
            </a>
          </li>
          <li className='footer__item'>
            <a
              className='footer__link'
              href='https://github.com/vlad-prog93'
              target='_blank'
              rel='noreferrer'
            >Github
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  )
}

export default Footer