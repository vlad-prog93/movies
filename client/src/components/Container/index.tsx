import './Container.css'

interface Props {
  children: JSX.Element | React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className='container'>
      {children}
    </div>
  )
}

export default Container