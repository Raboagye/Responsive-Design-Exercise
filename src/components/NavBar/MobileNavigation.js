import NavLinks from "./NavLinks";
import classes from "./NavBar.module.css"
import {CgMenuRound} from "react-icons/cg"
import { useState } from "react";
import {CgCloseO} from "react-icons/cg"

const MobileNavigation = () => {
    const [open, setOpen] = useState(false)

    const HamburgeIcon = <CgMenuRound className={classes.Hamburger}
        size="40px" color="white" onClick={() => setOpen(!open)} />

    const CloseIcon = <CgCloseO className={classes.Hamburger}
        size="40px" color="white" onClick={() => setOpen(!open)} />

    
    // const CloseMobileMenu =() => setOpen(false)



    return (
        <nav className={classes.MobileNavigation}>
            {open ? CloseIcon : HamburgeIcon}
            {open && <NavLinks CloseMobileMenu={()=>setOpen(false)} />}
        </nav>

    );
}

export default MobileNavigation;