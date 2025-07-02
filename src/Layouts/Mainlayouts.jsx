import Header from '../component/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'

function Mainlayouts() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Mainlayouts
