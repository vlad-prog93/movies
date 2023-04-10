// node_modules
import { useState } from 'react'

// styles
import Header from 'components/Header'
import './Profile.css'

const Profile = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false)

  return (
    <>
      <Header />
      <section className='profile'>
        <h2 className='profile__title'>Привет, Владислав!</h2>
        <form className='profile__form'>
          <label className='profile__label' htmlFor='profile-name'>Имя</label>
          <input
            id='profile-name'
            className='profile__input'
            type='text'
            disabled={isEdit}
            value={'Владислав'} />
          {isEdit && <div className='profile__line' />}
          <label className='profile__label' htmlFor='profile-email'>E-mail</label>
          <input
            id='profile-email'
            className='profile__input'
            type='email'
            disabled={isEdit}
            value={'pochta@yandex.ru'} />
          <div className='profile__button-con'>
            <button type='button' className='profile__button-edit' onClick={() => setIsEdit(prev => !prev)}>
              {isEdit ? 'Редактировать' : 'Сохранить'}
            </button>
            <button className='profile__button-exit'>Выйти из аккаунта</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Profile