import "./home.css";

export const Home = () => {
    return (<div className="main">
        <div className="photo">
        {/* <img src="../src/assets/profile/IMG20221125210002.jpg" alt="Abhimanyu Prajapati" /> */}
        {/* <img src="../src/assets/profile/Screenshot 2023-07-23 163742.png" alt="Abhimanyu Prajapati" /> */}
        {/* <img src="../src/assets/profile/Screenshot 2023-07-25 213636.png" alt="Abhimanyu Prajapati" /> */}
        <img src="../src/assets/profile/abhi.png" alt="Abhimanyu Prajapati" />
        </div>
        <div className="detail">
            <h1>I,m Abhimanyu <span>Prajapati</span></h1>
            <p>Full Stack Web Developer</p>
        </div>
  </div>
);
}
