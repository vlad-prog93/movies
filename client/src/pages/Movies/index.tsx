// components
import Container from 'components/Container'
import Search from 'components/Search'

// styles
import './Movies.css'


const Movies = () => {
  return (
    <section className='movies'>
      <Container>
        <Search />
      </Container>
    </section>
  )
}

export default Movies