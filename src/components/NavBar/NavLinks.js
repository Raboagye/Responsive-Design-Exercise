import { motion } from "framer-motion";

const NavLinks = (props) => {
    return ( 
        <motion.ul>
        
                    <li>
                        <a href="/" onClick={()=> props.CloseMobileMenu()}>Home</a>
                    </li>
                    <li>
                        <a href="/#about" onClick={()=> props.CloseMobileMenu()}>About Me</a>
                    </li>
                    <li>
                        <a href="/#skills" onClick={()=> props.CloseMobileMenu()}>Skills</a>
                    </li>
                    <li>
                        <a href="/#youtube" onClick={()=> props.CloseMobileMenu()}>YouTube</a>
                    </li>
                    <li>
                        <a href="/#contact" onClick={()=> props.CloseMobileMenu()}>Contact</a>
                    </li>
         </motion.ul>
     );
}
 
export default NavLinks;