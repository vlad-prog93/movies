// styles
import Card from 'components/Card'
import './CardList.css'

const CardList = () => {

  return (
    <section className='cardlist'>
      <ul className='cardlist__list'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
      <button className='cardlist__button'>Ещё</button>
    </section>
  )
}


export default CardList