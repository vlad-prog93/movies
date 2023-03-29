// components
import Container from '../Container'
import Title from '../Title'

// styles
import './Techs.css'

const Techs = () => {


  return (
    <section className='techs'>
      <Container>
        <Title id={'techs'} title={'Технологии'} />
        <h2 className='techs__title'>7 технологий</h2>
        <p className="techs__desc">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__list">
          {['HTML', 'CSS', 'JS', 'TS', 'React', 'Redux', 'Git', 'Express.js', 'mongoDB'].map((item) => <li className="techs__item">{item}</li>)}
        </ul>
      </Container>
    </section>
  )
}


export default Techs