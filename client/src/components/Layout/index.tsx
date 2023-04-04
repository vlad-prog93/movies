// components
import Footer from 'components/Footer'
import Header from 'components/Header'

// styles
import './Layout.css'

interface Props {
  children: JSX.Element | React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout