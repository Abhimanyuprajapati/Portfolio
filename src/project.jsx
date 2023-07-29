import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './project.css'

// this is for responsive banner
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
export const Project = () => {
  return (
    <>
      <div className="project">
          <div className="project1">
            <h1>Projects</h1>
            <p>Things I’ve built so far</p>
          </div>
          <div className="project2">
            <Carousel responsive={responsive}
              swipeable={false}
              draggable={false}
              infinite={true}
              autoPlay={2000}
              autoPlaySpeed={2000}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              >
                <img src="../assets/img1.png" alt="project1" />
                <img src="../assets/img2.png" alt="project1" />
                <img src="../assets/img3.png" alt="project1" />
                <img src="../assets/img4.png" alt="project1" />
                <img src="../assets/img5.png" alt="project1" />
              </Carousel>
              
              <div className="project5">
                <h3>Clone Of Microsoft Digital Note Website</h3>
                <p>This is the simple clone of the website</p>
                <p>
                  <b>Tech Stack : </b>HTML,CSS
                </p>
              </div>
          </div>
          <div className="project2">
          <Carousel responsive={responsive}
              swipeable={false}
              draggable={false}
              infinite={true}
              autoPlay={2000}
              autoPlaySpeed={2000}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              >
              <img src="./src/assets/img6.png" alt="project2" />
              <img src="./src/assets/img7.png" alt="project2" />
              <img src="./src/assets/img8.png" alt="project2" />
            </Carousel>
            <div className="project5">
               <h3>Money Making Website</h3>
               <p>This is the simple money making website made by me related to stock market</p>
               <p>
                <b>Tech Stack : </b>HTML,CSS
               </p>
            </div>
          </div>
          <div className="project2">
          <Carousel responsive={responsive}
              swipeable={false}
              draggable={false}
              infinite={true}
              autoPlay={2000}
              autoPlaySpeed={2000}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              >
              <img src="./src/assets/img9.png" alt="project3" />
            </Carousel>
            <div className="project5">
               <h3>Quotes Generating Website</h3>
               <p>This is the simple website which generate the quotes for us</p>
               <p>
                <b>Tech Stack : </b>HTML,CSS,JAVASCRIPT,HEROPATTERN,CSS LOADERS,TYPE FIT API
               </p>
            </div>
          </div>
          <div className="project2">
          <Carousel responsive={responsive}
              swipeable={false}
              draggable={false}
              infinite={true}
              autoPlay={2000}
              autoPlaySpeed={2000}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              >
              <img src="./src/assets/img10.png" alt="project4" />
              <img src="./src/assets/img11.png" alt="project4" />
            </Carousel>
            <div className="project5">
               <h3>INFINITY IMAGE WEBSITE</h3>
               <p>This is the simple website which gives the infinite image to us</p>
               <p>
                <b>Tech Stack : </b>HTML,CSS,JAVASCRIPT,UNSPLASH API
               </p>
            </div>
          </div>
          <div className="project2">
          <Carousel responsive={responsive}
              swipeable={false}
              draggable={false}
              infinite={true}
              autoPlay={2000}
              autoPlaySpeed={2000}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              >
              <img src="./src/assets/img12.png" alt="project5" />
              <img src="./src/assets/img13.png" alt="project5" />
              <img src="./src/assets/img14.png" alt="project5" />
              <img src="./src/assets/img15.png" alt="project5" />
              <img src="./src/assets/img16.png" alt="project5" />
              <img src="./src/assets/img17.png" alt="project5" />
            </Carousel>
            <div className="project5">
               <h3>FLIGA INDIA WEBSITE</h3>
               <p>This is the simple website of fliga india</p>
               <p>
                <b>Tech Stack : </b>HTML,CSS,BASIC FIGMA,REACT JS
               </p>
            </div>
          </div>
          <div className="project2">
          <Carousel responsive={responsive}
              swipeable={false}
              draggable={false}
              infinite={true}
              autoPlay={2000}
              autoPlaySpeed={2000}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              >
              <img src="./src/assets/img18.jpg" alt="project1" />
              <img src="./src/assets/img19.jpg" alt="project1" />
              <img src="./src/assets/img20.jpg" alt="project1" />
              <img src="./src/assets/img21.jpg" alt="project1" />
              <img src="./src/assets/img22.jpg" alt="project1" />
            </Carousel>
            <div className="project5">
               <h3>PORTFOLIO WEBSITE</h3>
               <p>This is the simple portfolio of the website</p>
               <p>
                <b>Tech Stack : </b>HTML,CSS,REACT JS
               </p>
            </div>
          </div>
      </div>
    </>
  )
}

