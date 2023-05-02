import { ChangeEvent } from 'react'
import './MyInput.css'

interface Props {
  id: string,
  type: string,
  disabled: boolean,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const MyInput = (props: Props) => {
  return (
    <input className='myinput' {...props} />
  )
}

export default MyInput