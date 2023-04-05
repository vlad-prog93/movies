// styles
import './Search.css'

const Search = () => {
  return (
    <div className='search'>
      <form className='search__form'>
        <div className='search__text-cont'>
          <input className='search__input' type='text' placeholder='Фильм' />
          <button type='submit' className='search__button' />
        </div>
        <div className='search__checkbox-cont'>
          <input id='short-movies' className='search__checkbox' type='checkbox' />
          <label className='search__checkbox-label' htmlFor='short-movies' />
          <span className='search__checkbox-text'>Короткометражки</span>
        </div>
      </form>
    </div>
  )
}

export default Search