import './home.scss'
import Navbar from '../components/navbar/Navbar'
import Featured from '../components/navbar/featured/Featured'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured />
    </div>
  )
}

export default Home
