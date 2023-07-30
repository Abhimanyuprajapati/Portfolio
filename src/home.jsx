import "./home.css";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
export const Home = () => {
    return (
    <div className="main">
        <div className="photo">

           <img src="https://raw.githubusercontent.com/Abhimanyuprajapati/Portfolio/main/src/assets/abhi.png" alt="Abhimanyu Prajapati" />
        </div>
        <div className="detail">
            <h1>I,m  Abhimanyu <span>Prajapati</span></h1>
            <p>Full Stack Web Developer</p>
            <div className="download">
                    <a href="https://raw.githubusercontent.com/Abhimanyuprajapati/Portfolio/844b4e896b7a679f1055dd3ea0e010083a36ace4/src/assets/Abhimanyu_Resume.pdf" download ><FileDownloadOutlinedIcon/> Download Resume</a>
            </div>
            <div className="socialmedia">
                <a href="https://www.linkedin.com/in/abhimanyu-prajapati-84b677215"><LinkedInIcon/></a>
                <a href="https://github.com/Abhimanyuprajapati"><GitHubIcon/></a>
                <a href="https://www.instagram.com/abhimanyuprajapati77/"><InstagramIcon/></a>
            </div>  
        </div>
        
    </div>
);
}



/**
 * <div class="pdf-container loaded" data-file="https://raw.githubusercontent.com/Abhimanyuprajapati/Portfolio/844b4e896b7a679f1055dd3ea0e010083a36ace4/src/assets/Abhimanyu_Resume.pdf" data-bcmap-dir="//viewscreen.githubusercontent.com/static/pdf" data-pdf-worker-js-path="/static/assets/pdf.worker-b0807d516e641f5fedeb.js"><canvas class="pdf-page" data-page="0" height="2588" width="2000"></canvas></div>
 */