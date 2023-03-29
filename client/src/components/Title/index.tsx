// styles
import './Title.css'

const Title = ({ title, id }: { title: string, id: string }) => {

  return (
    <h1 id={id} className='title'>{title}</h1>
  )
}


export default Title