import classes from "./NavBar.module.css"
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [close, setClose] = useState(true)
    const [previousValue, setPreviousValue] = useState(0)

    const scrolling = () => {
        if (window.scrollY > previousValue + 0.2) {
            setClose(false)
            setPreviousValue(window.scrollY)
            
        } else {
            setClose(true)
            setPreviousValue(window.scrollY)
        }

        
    }

    useEffect(()=> {
        window.addEventListener('scroll', scrolling )
        return () => window.removeEventListener('scroll', scrolling)
    })

    
    return ( 
        <div className={close? classes.NavBar : classes.navBar}>
           { <Navigation getData={(data)=> setClose(data)}/>} 
            <MobileNavigation />  
        </div>
     );
}
 
export default NavBar;