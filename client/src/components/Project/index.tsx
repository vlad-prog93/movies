// components
import Container from '../Container'
import Title from '../Title'

// styles
import './Project.css'

const Project = () => {

  return (
    <section className='project'>
      <Container>
        <Title id='project' title={'О проекте'} />
        <ul className="project__list">
          <li className="poject__item">
            <h3 className="project__item-title">Дипломный проект включал 5 этапов</h3>
            <p className="project__item-desc">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
          <li className="poject__item">
            <h3 className="project__item-title">На выполнение диплома ушло 5 недель</h3>
            <p className="project__item-desc">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>

        <ul className="project__list-cal">
          <li className="project__item-cal">
            <p className="project__week">1 неделя</p>
            <p className="project__job">Back-end</p>
          </li>
          <li className="project__item-cal">
            <p className="project__week">4 недели</p>
            <p className="project__job">Front-end</p>
          </li>
        </ul>
      </Container>
    </section>
  )
}


export default Project