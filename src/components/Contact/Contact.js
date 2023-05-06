import classes from "./Contact.module.css"
import { FaYoutube, FaLinkedin, FaInstagramSquare, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion"

const handleURL = (url) => {
    return () => window.open(url, "_blank")
}
const Contact = () => {
    return ( 
        <div className={classes.Contact} id="contact">
            <div className={classes.ContactIcons}>
                <motion.div
                whileHover={{scale: 1.3}}>
                    <FaYoutube color="white" size="30px" style={{ padding: "1%" }} onClick={handleURL("https://www.youtube.com/watch?v=9U_9ryTFzaA")} />
                </motion.div>
                <motion.div
                whileHover={{scale: 1.3}}>
                    <FaInstagramSquare color="white" size="30px" style={{ padding: "1%" }} onClick={handleURL("https://www.youtube.com/watch?v=8w0Hj3BJEQw")} />
                </motion.div>
                <motion.div
                whileHover={{scale: 1.3}}>
                    <FaGithub color="white" size="30px" style={{ padding: "1%" }} onClick={handleURL("https://www.youtube.com/watch?v=_dcXGG58JpQ")} />
                </motion.div>
                <motion.div
                whileHover={{scale: 1.3}}>
                    <FaLinkedin color="white" size="30px" style={{ padding: "1%" }} onClick={handleURL("https://www.youtube.com/watch?v=bhZKHBIPYPA")} />
                </motion.div>
                
            </div>
            
        </div>
     );
}
 
export default Contact;