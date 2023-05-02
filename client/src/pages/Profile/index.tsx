// node_modules
import { useState } from 'react'

// styles
import Header from 'components/Header'
import './Profile.css'

// UI
import MyInput from 'UI/MyInput'
import MyLabel from 'UI/MyLabel'

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
            <MyInput
              id='profile-name'
              type='text'
              disabled={isEdit}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <MyLabel text='Имя' htmlFor='profile-name' />
          </div>
          {isEdit && <div className='profile__line' />}
          <div className='profile__group'>
            <MyInput
              id='profile-email'
              type='email'
              disabled={isEdit}
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <MyLabel text='E-mail' htmlFor='profile-email' />
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