import Intro from 'components/Intro'
import Portfolio from 'components/Portfolio'
import Project from 'components/Project'
import Student from 'components/Student'
import Techs from 'components/Techs'
import './Home.css'


const Home = () => {
  return (
    <main className='home'>
      <Intro />
      <Project />
      <Techs />
      <Student />
      <Portfolio />
    </main>
  )
}

export default Home