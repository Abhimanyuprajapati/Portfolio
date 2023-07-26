import "./contact.css";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';

export const Contact = () => {
   return (
      <>
         <div className="contact">
            <div className="contact1">
           
               <div>
               <h2 className="contact3">GET IN TOUCH</h2>
               <div className="contact2">
                  <h3>
                     <PhoneIcon style={{ color: "red", marginRight:"5px" ,marginBottom:"-5px" }} /> +91 9969268448
                  </h3>
               </div>
               <div className="contact2">
                  <h3>
                  <MailIcon style={{ color: "#DB4437" , marginRight:"5px" ,marginBottom:"-5px"}} />{" "}
                     <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=prajapatiabhimanyu18@gmail.com"
                        target="_blank"
                     >
                        prajapatiabhimanyu18@gmail.com
                     </a>
                  </h3>
               </div>
               <div className="contact2">
                  <h3>
                     <LinkedInIcon
                        style={{
                           color: "blue",
                           backgroundColor: "white",
                           borderRadius: "10px",
                           marginRight:"10px",
                           marginBottom:"-5px"
                        }}
                     />
                     <a href="https://www.linkedin.com/in/abhimanyu-prajapati-84b677215">
                        https://www.linkedin.com/in/abhimanyu-prajapati-84b677215
                     </a>
                  </h3>
               </div>
               <div className="contact2">
                  <h3>
                     <GitHubIcon style={{ marginRight:"5px" ,marginBottom:"-5px"}} />
                     <a href="https://github.com/Abhimanyuprajapati">
                     https://github.com/Abhimanyuprajapati
                     </a>
                  </h3>
               </div>
               <div className="contact2">
                  <h3>
                     <LocationOnIcon style={{ color: "yellow", marginRight:"5px" ,marginBottom:"-5px"}} /> Kalwa (East) near
                     Mukund Company Thane-400605
                  </h3>
               </div>
               </div>
              
               <div className="contact4">
                  <img
                     src="https://t3.ftcdn.net/jpg/06/08/82/50/360_F_608825085_MuQopoWCJQJ8BUa4u2z1DECXtkuoVLmj.jpg"
                     alt="contact us"
                  />
               </div>
            </div>
         </div>
      </>
   );
};
