import 'rsuite/dist/rsuite.min.css';
import "./Home.css" 
import UpperNavbar from "./UpperNavbar"
import Train from './Train';
const Home = () => {
  return (
    // <UpperNavbar />
    <div className='grid'>
      <UpperNavbar />
      {/* <br></br> */}
      <Train />
    </div>
  )
}

export default Home



    
    