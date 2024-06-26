import { Component } from "react";
import "./NavbarStyles.css";

class Navbar extends Component{ 
    render(){
        return(
            <nav className="NavbarItems">
            <h1 className="NavbarLogo">Trippy</h1>
            <ul className="NavbarMenu">
                <li>
                    <a href="/">
                    <i className="fa fa-home" aria-hidden="true"></i>Home</a>
                </li>
            </ul>
            </nav>
        )
    }

}
export default Navbar;