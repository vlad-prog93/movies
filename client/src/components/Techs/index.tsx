// components
import Container from 'components/Container'
import Title from 'components/Title'

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
          {['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'].map((item) => <li key={item} className="techs__item">{item}</li>)}
        </ul>
      </Container>
    </section>
  )
}


export default Techs