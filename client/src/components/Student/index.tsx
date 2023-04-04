// components
import Container from 'components/Container'
import Title from '../Title'

// styles
import './Student.css'

// images
import avatar from 'images/avatar.jpg'

const Student = () => {


  return (
    <section className='student'>
      <Container>
        <Title id='student' title='Обо мне' />
        <div className="student__info">
          <div className="student__text">
            <h3 className="student__title">Владислав</h3>
            <p className="student__subtitle">Фронтенд-разработчик, 29 лет</p>
            <p className="student__desc">Я живу в Москве, закончил Московский инженерно-физический институт НИЯУ "МИФИ". У меня есть жена и дочь. Нравится играть на гитаре и в шахматы. Недавно начал писать код. С 2014 года работаю в АО "Корпорация "ВНИИЭМ" инженером в отделе комплексного проектирования космических аппаратов. На работе программировал на Python. После того, как прошел курс по веб-разработке, начал делать учебные сайты, сайты знакомым.</p>
            <a href="#" className="student__link">Github</a>
          </div>
          <div className='student__image-cont'>
            <img className='student__image' src={avatar} />
          </div>
        </div>
      </Container>

    </section>
  )
}


export default Student