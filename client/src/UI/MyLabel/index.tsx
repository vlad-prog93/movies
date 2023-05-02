import './MyLabel.css'

interface Props {
  htmlFor: string,
  text: string
}

const MyLabel = ({ htmlFor, text }: Props) => {
  return (
    <label className='mylabel' htmlFor={htmlFor}>{text}</label>
  )
}

export default MyLabel