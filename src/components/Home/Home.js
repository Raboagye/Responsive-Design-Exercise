import classes from "./Home.module.css"
import picc from "./../../img/codding.png"
import pic from "./../../img/coddded.png"
import Waveline from "./Waveline";
import { motion } from "framer-motion";

const Home = () => {
    return ( 
        <div className={classes.Home} id="home">
            <Waveline />
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello World</h1>
                <h1 className={classes.welcome}>Welcome to my website</h1>
            </div>
            <img className={classes.Code} src={pic} alt="code" />
            <motion.img className={classes.BinaryWorld} src={picc} alt="Binary World" 
            initial={{scale:0}}
            animate={{scale:1}}
            transition={{delay:1.6, duration: 1}}/>
        </div>
     );
}
 
export default Home;