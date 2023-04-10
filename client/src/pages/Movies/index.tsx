// components
import Container from 'components/Container'
import Search from 'components/Search'

// styles
import './Movies.css'
import CardList from 'components/CardList'


const Movies = () => {
  return (
    <section className='movies'>
      <Container>
        <Search />
        <CardList />
      </Container>
    </section>
  )
}

export default Movies