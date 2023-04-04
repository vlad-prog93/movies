// components
import Container from '../Container'

// styles
import './Portfolio.css'

// images
import imgStaticSite from '../../images/научиться_учиться.gif'
import imgAdaptiveSite from '../../images/путешествие_по_России.gif'
import imgApplication from '../../images/одностраничное_приложение.gif'
import imgCloud from '../../images/облачное_хранилище.png'

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <Container>
        <h3 className='portfolio__title'>Портфолио</h3>
        <ul className='portfolio__list'>
          <li className='portfolio__item'>
            <input id='1' className='portfolio__input' type="checkbox" defaultChecked={true} />
            <label className='portfolio__label' htmlFor='1'>
              <h5 className='portfolio__subtitle'>Статичный сайт</h5>
              <div className="arrow">
                <span className="arrow-left"></span>
                <span className="arrow-right"></span>
              </div>
            </label>
            <div className='portfolio__contain-info'>
              <div className="portfolio__img-cont"><img src={imgStaticSite} alt="Сайт" /></div>
              <div className="portfolio__text">
                <p>При разработке статичного сайта были освоены следующие инструменты:</p>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Методология БЭМ</li>
                  <li>Анимация через @keyframes</li>
                  <li>Видеопросмотр на сайте</li>
                </ul>
                <p className='portfolio__text-link'>Исходный код можно посмотреть на -&gt;
                  <a
                    className='portfolio__link'
                    href="https://github.com/vlad-prog93/how-to-learn"
                    target='_blank'
                    rel='noreferrer'
                  > GitHub</a>
                </p>
              </div>
            </div>
          </li>
          <li className='portfolio__item'>
            <input id='2' className='portfolio__input' type="checkbox" defaultChecked={true} />
            <label className='portfolio__label' htmlFor='2'>
              <h5 className='portfolio__subtitle'>Адаптивный сайт</h5>
              <div className="arrow">
                <span className="arrow-left"></span>
                <span className="arrow-right"></span>
              </div>
            </label>
            <div className='portfolio__contain-info'>
              <div className="portfolio__img-cont"><img src={imgAdaptiveSite} alt="Сайт" /></div>
              <div className="portfolio__text">
                <p>При разработке адаптивного сайта были освоены следующие инструменты:</p>
                <ul>
                  <li>FlexBox</li>
                  <li>GridLayout</li>
                  <li>Адаптивные размеры шрифтов</li>
                </ul>
                <p className='portfolio__text-link'>Исходный код можно посмотреть на -&gt;
                  <a className='portfolio__link'
                    href="https://github.com/vlad-prog93/adaptive-site-project"
                    target='_blank'
                    rel='noreferrer'
                  > GitHub</a></p>
              </div>
            </div>
          </li>
          <li className='portfolio__item'>
            <input id='3' className='portfolio__input' type="checkbox" defaultChecked={true} />
            <label className='portfolio__label' htmlFor='3'>
              <h5 className='portfolio__subtitle'>Одностраничное приложение</h5>
              <div className="arrow">
                <span className="arrow-left"></span>
                <span className="arrow-right"></span>
              </div>
            </label>
            <div className='portfolio__contain-info'>
              <div className="portfolio__img-cont"><img src={imgApplication} alt="Сайт" /></div>
              <div className="portfolio__text">
                <p>Одностраничное приложение разрабатывалась двумя способами:</p>
                <ol>
                  <li>На чистом JS</li>
                  <li>На ReactJS</li>
                </ol>
                <br />
                <p>На реакт приложении использовался стек MERN:</p>
                <ul>
                  <li>Express.js</li>
                  <li>ReactJS</li>
                  <li>MongoDB</li>
                  <li>Node.js</li>
                </ul>
                <p>Реализована авторизация, кастомная валидация и другое...</p>
                <p className='portfolio__text-link'>Исходный код можно посмотреть на -&gt;
                  <a className='portfolio__link'
                    href="https://github.com/vlad-prog93/react-mesto-api-full"
                    target='_blank'
                    rel='noreferrer'
                  > GitHub</a></p>
              </div>
            </div>
          </li>
          <li className='portfolio__item'>
            <input id='4' className='portfolio__input' type="checkbox" defaultChecked={true} />
            <label className='portfolio__label' htmlFor='4'>
              <h5 className='portfolio__subtitle'>Облачное хранилище</h5>
              <div className="arrow">
                <span className="arrow-left"></span>
                <span className="arrow-right"></span>
              </div>
            </label>
            <div className='portfolio__contain-info'>
              <div className="portfolio__img-cont"><img src={imgCloud} alt="Сайт" /></div>
              <div className="portfolio__text">
                <p>При разработке облачного хранилища использовался стек MERN</p>
                <ul>
                  <li>В данном приложении использовался стейт менеджер Redux</li>
                  <li>Реализована админ панель</li>
                  <li>Более подробный функционал представлен на GitHub</li>
                </ul>
                <br />

                <p className='portfolio__text-link'>Исходный код можно посмотреть на -&gt;
                  <a className='portfolio__link'
                    href="https://github.com/vlad-prog93/cloud"
                    target='_blank'
                    rel='noreferrer'
                  > GitHub</a></p>
              </div>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  )
}

export default Portfolio
