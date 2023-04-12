// node_modules
import { useState } from 'react'

// styles
import Header from 'components/Header'
import './Profile.css'

const Profile = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [name, setName] = useState<string>('Владислав')
  const [mail, setMail] = useState<string>('pochta@yandex.ru')

  return (
    <>
      <Header />
      <section className='profile'>
        <h2 className='profile__title'>Привет, Владислав!</h2>
        <form className='profile__form'>
          <div className='profile__group'>
            <input
              id='profile-name'
              className='profile__input'
              type='text'
              disabled={isEdit}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className='profile__label' htmlFor='profile-name'>Имя</label>
          </div>
          {isEdit && <div className='profile__line' />}
          <div className='profile__group'>
            <input
              id='profile-email'
              className='profile__input'
              type='email'
              disabled={isEdit}
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <label className='profile__label' htmlFor='profile-email'>E-mail</label>
          </div>
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