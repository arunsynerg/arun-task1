import logo from '../../Assets/com-logo.jpg'
import { Link } from 'react-scroll';
import './Nav.css'
import { useState } from "react";
function Nav(){

    const [screen, setScreen] = useState(false);
    const clickeve = ()=>{
        return (setScreen((screen ? false : true)))
    }
    return(
        <div className='nav'>
        <div className='nav-container'>
            <div className='nav-logo'>
                <img src={logo} alt='logo' />
                <p>fruit shop caption</p>
            </div>
            <div className='nav-item-container'>
                <ul className='nav-items'>
                    <li>Home</li>
                    <li>About</li>
                    <li>services</li>
                    <li>Contact</li>
                </ul>
                
            </div>
        </div>
        </div>
    )
}
export default Nav;
