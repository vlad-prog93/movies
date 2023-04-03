import Intro from '../components/Intro'
import Project from '../components/Project'
import Student from '../components/Student'
import Techs from '../components/Techs'
import './Home.css'


const Home = () => {
  return (
    <main className='home'>
      <Intro />
      <Project />
      <Techs />
      {/* <Student /> */}
    </main>
  )
}

export default Home