import classes from "./About.module.css"
import PageHeader from "../PageHeader/PageHeader";
import me from "./../../img/code.jpeg"
const About = () => {
    return ( 
        <div className={classes.AboutMe} id="about">
            <PageHeader title={"About Me"} />
            <div className={classes.Container}>
                <div className={classes.text}>
                    <h2>Hello! I am Richard</h2>
                    <p>
                        We are looking for specialists who will help our team to manage our websites by overseeing their functionality, evaluating and managing their performance, facilitating hosting and server management, and developing, maintaining, and updating websites' content.
                        We expect this specialist to have meticulous attention to detail and outstanding problem-solving skills.
                        To ensure success, a website manager must display an excellent understanding of content management systems (CMS) and technology infrastructures using CSS, Firewalls, IDS/IPS, Web-Proxy, and Security Audits. Top candidates will be comfortable troubleshooting the website and constantly improving the User Experience (UX) of the website.
                    </p>
                </div>
                <div className={classes.Photo}>
                    <img className={classes.me} src={me} alt="Profile Photo" />
                </div>
            </div>


        </div>
     );
}
 
export default About;