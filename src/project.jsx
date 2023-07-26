import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './project.css'


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
                <img src="./src/assets/project/project1/Screenshot 2023-07-24 131610.png" alt="project1" />
                <img src="./src/assets/project/project1/Screenshot 2023-07-24 131654.png" alt="project1" />
                <img src="./src/assets/project/project1/Screenshot 2023-07-24 131721.png" alt="project1" />
                <img src="./src/assets/project/project1/Screenshot 2023-07-24 131747.png" alt="project1" />
                <img src="./src/assets/project/project1/Screenshot 2023-07-24 131817.png" alt="project1" />
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
              <img src="./src/assets/project/project2/Screenshot 2023-07-24 132254.png" alt="project2" />
              <img src="./src/assets/project/project2/Screenshot 2023-07-24 132312.png" alt="project2" />
              <img src="./src/assets/project/project2/Screenshot 2023-07-24 132347.png" alt="project2" />
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
              <img src="./src/assets/project/project3/Screenshot 2023-07-24 132704.png" alt="project3" />
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
              <img src="./src/assets/project/project4/Screenshot 2023-07-24 132914.png" alt="project4" />
              <img src="./src/assets/project/project4/Screenshot 2023-07-24 132952.png" alt="project4" />
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
              <img src="./src/assets/project/project5/Screenshot 2023-07-24 133324.png" alt="project5" />
              <img src="./src/assets/project/project5/Screenshot 2023-07-24 133355.png" alt="project5" />
              <img src="./src/assets/project/project5/Screenshot 2023-07-24 133421.png" alt="project5" />
              <img src="./src/assets/project/project5/Screenshot 2023-07-24 133443.png" alt="project5" />
              <img src="./src/assets/project/project5/Screenshot 2023-07-24 133502.png" alt="project5" />
              <img src="./src/assets/project/project5/Screenshot 2023-07-24 133521.png" alt="project5" />
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
              <img src="./src/assets/project/project1/Screenshot 2023-07-24 131610.png" alt="project1" />
              <img src="./src/assets/project/project1/Screenshot 2023-07-24 131654.png" alt="project1" />
              <img src="./src/assets/project/project1/Screenshot 2023-07-24 131721.png" alt="project1" />
              <img src="./src/assets/project/project1/Screenshot 2023-07-24 131747.png" alt="project1" />
              <img src="./src/assets/project/project1/Screenshot 2023-07-24 131817.png" alt="project1" />
            </Carousel>
            <div className="project5">
               <h3>Clone Of Microsoft Digital Note Website</h3>
               <p>This is the simple clone of the website</p>
               <p>
                <b>Tech Stack : </b>HTML,CSS
               </p>
            </div>
          </div>
      </div>
    </>
  )
}

