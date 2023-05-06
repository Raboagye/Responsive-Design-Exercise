import classes from "./Youtube.module.css"
import PageHeader from "./../PageHeader/PageHeader"
import cleanCode from "./../../img/cod.jpg"
import neatCode from "./../../img/codiing.jpg"
import niceCode from "./../../img/codded.jpg"
import background from "./../../img/backgroundd.jpg"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { useAnimation } from "framer-motion"

const playbtnSvg = (url) => {
    return (
        <div className={classes.Playbtn} onClick={ (e) => window.open(url, "_blank").focus}>
            <motion.svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="24%" height="24%" viewBox="0 0 1280.000000 1280.000000"
                preserveAspectRatio="xMidYMid meet"
                whileHover={{scale: 2}}>
                <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                    fill="#b9dhh" stroke="none">
                    <path d="M4620 6400 c0 -2286 3 -2861 13 -2857 6 2 939 540 2072 1194 1133
                654 2243 1295 2467 1424 315 181 404 237 395 246 -7 6 -311 184 -677 396 -366
                211 -1469 848 -2452 1415 -983 568 -1794 1035 -1803 1038 -13 6 -15 -288 -15
                -2856z"/>
                </g>
            </motion.svg>

        </div>
    )
}

const youtubevideos = (url, thumbnail, description) => {
    return (
        <div className={classes.VideoContainer}>
            <div className={classes.Thumbnail}>
                {playbtnSvg(url)}
                <img src={thumbnail} alt="thumbnail"/>
            </div>
            <div className={classes.Text}>
                {description}
            </div>
        </div>
    )
}



const cleanCodeVideoDescription = "You may also want to include a brief overview of your background and areas of expertise, as well as any notable achievements or notable clients you have worked with"
const neatCodeVideoDescription = "Remember to keep your introduction brief and to the point, while also highlighting the value that you can bring to potential clients or employers"
const niceCodeVideoDescription = "Remember to keep your introduction short and to the point, while also giving your viewers an idea of what they can expect from your channel"

const Youtube = () => {
    const {ref, inView} = useInView({threshold: 0.2})

    const animation = useAnimation()

    useEffect(() => {
        if(inView) {
            animation.start({
                x: 0,
                transition: {
                    type: "spring", duration: 1, bounce: 0.3
                }
            })
        }

        if(!inView) {
            animation.start({
                x: "-100vw"
            })
        }
        console.log("useEffect hook inView", inView)
    }, [inView])
    return ( 
        <div className={classes.Youtube} id="youtube">
            <img className={classes.Background} src={background} alt="background stars"/>
            <PageHeader title="I am also on YouTube"/>
            <div ref={ref} className={classes.YoutubeContent}>
                <div className={classes.Paragraph}>
                    <p>
                    Thank you for taking the time to view my portfolio. I hope you enjoy it and please don't hesitate to contact me if you have any questions or would like to collaborate on a project."
                    </p>
                </div>
                <motion.div className={classes.videos}
                animate={animation}>
                    {youtubevideos("https://www.youtube.com/watch?v=n4XWfwLHeLM", cleanCode, cleanCodeVideoDescription)}
                    {youtubevideos("https://www.youtube.com/watch?v=bPS9i-7qqnE", neatCode, neatCodeVideoDescription)}
                    {youtubevideos("https://www.youtube.com/watch?v=wEOFjFzXGK4", niceCode, niceCodeVideoDescription)}
                </motion.div>
                
            </div>
        </div>
     );
}
 
export default Youtube;