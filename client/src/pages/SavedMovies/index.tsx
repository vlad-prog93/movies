import Search from 'components/Search'
import './SavedMovies.css'
import Container from 'components/Container'
import CardList from 'components/CardList'


const SavedMovies = () => {
  return (
    <section className='saved-movies'>

      <Container>
        <Search />
        <CardList />
      </Container>
    </section>

  )
}

export default SavedMovies