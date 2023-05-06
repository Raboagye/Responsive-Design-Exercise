import PageHeader from "../PageHeader/PageHeader";
import classes from "./Skills.module.css"
import CodeThinking from "./../../img/Codethinking.svg"


const listTitleStyle = {fontWeight: 900, color: "#9B1FE8", marginBottom: '4px'}
const backendSkills =
    <ul >
        <li style={listTitleStyle}>BACKEND</li>
        <li>Scala - java - SQL</li>
        <li>AKA - Spring - Boot/</li>
        <li>Slick</li>
    </ul>

const frontendSkills =
    <ul>
        <li style={listTitleStyle}>FRONTEND</li>
        <li>React Js - HTML - CSS </li>
        <li>REDUX</li>
    </ul>
const computerSkills =
    <ul>
        <li style={listTitleStyle}>MICROSOFT</li>
        <li>Microsoft excel - Powerpoint</li>
        <li>Microsoft word - Ms Project</li>
    </ul>

const engineeringSkills =
    <ul>
        <li style={listTitleStyle}>EGINEERING</li>
        <li>Engineering Desing, Matlab</li>
        <li>Engineering Mathematics</li>
    </ul>

const fieldworkSkills =
    <ul>
        <li style={listTitleStyle}>FIELD WORKS</li>
        <li>Anglogold Ashanti - Ramoth</li>
        <li>Electricity company of Ghana</li>
    </ul>

const labworkSkills =
    <ul>
        <li style={listTitleStyle}>Lab WORKS</li>
        <li>Rwesck Knust</li>
        <li>Environmental Sanitation</li>
    </ul>

const totalSkills = [backendSkills, frontendSkills, computerSkills, engineeringSkills, fieldworkSkills, labworkSkills ]


const Skills = () => {
    return ( 
        <div className={classes.Skills} id="skills">
            <PageHeader title="What about the skills" />
            <p>
                To ensure success, a website manager must display an excellent understanding of content management systems (CMS) and technology infrastructures using CSS, Firewalls, IDS/IPS, Web-Proxy, and Security Audits. Top candidates will be comfortable troubleshooting the website and constantly improving the User Experience (UX) of the website.
            </p>
            <div className={classes.Container}>
                <img src={CodeThinking} alt="code thinking" />
                {totalSkills.map((skills)=> {
                    return (
                        <div className={classes.List}>
                            {skills}
                        </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Skills;