import NavLinks from "./NavLinks";
import classes from "./NavBar.module.css"
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext()

const Navigation = (props) => {

  // const [close, setClose] = useState(false)

  const CloseMobileMenu =() => {
    // setClose(true)
    props.getData(true)
  }
    

    return ( 
          <nav className={classes.Navigation}>

           { <NavLinks CloseMobileMenu={CloseMobileMenu}  />} 

          </nav>

     );
}
 
export default Navigation;