import "./home.css";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { About } from "./about";
import { Skill } from "./skill";
import { Project } from "./project";
import { Contact } from "./contact";

export const Home = () => {
    return (
        <>

            <marquee> <h1>This Portfolio is not Updated</h1>
            </marquee>
            <div className="main">
                <div className="photo">
                    <img src="https://raw.githubusercontent.com/Abhimanyuprajapati/Portfolio/main/src/assets/abhi.png" alt="Abhimanyu Prajapati" />
                </div>
                <div className="detail">
                    <h1>I,m  Abhimanyu <span>Prajapati</span></h1>
                    <p>Full Stack Web Developer</p>
                    <div className="download">
                        <a href="https://raw.githubusercontent.com/Abhimanyuprajapati/Portfolio/844b4e896b7a679f1055dd3ea0e010083a36ace4/src/assets/Abhimanyu_Resume.pdf" download ><FileDownloadOutlinedIcon /> Download Resume</a>
                    </div>
                    <div className="socialmedia">
                        <a href="https://www.linkedin.com/in/abhimanyu-prajapati-84b677215"><LinkedInIcon /></a>
                        <a href="https://github.com/Abhimanyuprajapati"><GitHubIcon /></a>
                        <a href="https://www.instagram.com/abhimanyuprajapati77/"><InstagramIcon /></a>
                    </div>
                </div>

            </div>
            <About />
            <Skill />
            <Project />
            <Contact />
        </>
    );
}