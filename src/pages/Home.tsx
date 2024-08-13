import {accountImg, cartImg, emailImg, loveImg, phoneImg, arrowDown} from "../utils";
import "./Home.css" 
// import { Navbar, Nav } from 'rsuite';
// import CogIcon from '@rsuite/icons/legacy/Cog';
// import UnoCSS from 'unocss/vite'
import { Navbar, Nav } from 'rsuite';

import 'rsuite/dist/rsuite.min.css';
const Home = () => {
  return (
    
  <Navbar appearance="inverse" className="bg-#7E33E0 h-40px w-100% px-15">
    <Nav className="">
      <Nav.Item className="gap-2 pt-0">
        <img src={emailImg} alt="email" width={20} height={20}/>
        <p>mmahmudi1103@gmail.com</p>
      </Nav.Item>
      <Nav.Item className="gap-2 pt-0">
        <img src={phoneImg} alt="phone" width={14} height={14}/>
        <p>(08123)456789</p>
      </Nav.Item>
    </Nav>
    <Nav pullRight>
      <Nav.Item className="gap-2 pt-0">
        <p>English</p>
        <img src={arrowDown} alt="drop-down" width={14} height={14}/> 
      </Nav.Item>
      <Nav.Item className="gap-2 pt-0">
        <p>USD</p>
        <img src={arrowDown} alt="drop-down" width={14} height={14}/>  
      </Nav.Item>
      <Nav.Item className="gap-2 pt-0">
        <p>Login</p>
        <img src={accountImg} alt="account" width={14} height={14}/>
      </Nav.Item>
      <Nav.Item className="gap-2 pt-0">
        <p>Wishlist</p>
        <img src={loveImg} alt="wishlist" width={14} height={14}/>
      </Nav.Item>
      <Nav.Item className="gap-2 pt-0">
        <img src={cartImg} alt="cart" width={18} height={18}/>  
      </Nav.Item>
    </Nav>
  </Navbar> 
  )
}

export default Home



    
    