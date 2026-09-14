import "../App.css";
import video from "../assets/video.mp4";
import Holding_thumb from "../assets/Holding_thumb.webp";
import { useState } from "react";

function Home(props) {
  const [hoveresImgIndex, setHoverImgIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("Design");

  const { data, companies, studioData } = props;
  // console.log(data)
  // console.log(companies)

  return (
    <div className="home-container">
      <div className="sec-1">
        <p>
          Sundown is a multi-disciplinary
          <br /> studio focused on creating
          <br /> unique, end-to-end experiences
          <br /> and environments.
        </p>
        <p>
          SPACES <br />
          THAT <br />
          INSPIRE
        </p>
      </div>
      <div className="circle-2"></div>
      <div className="circle-3"></div>
      <div className="circle-4"></div>
      <div className="sec-2">
        <video src={video} muted autoPlay loop />
      </div>

      <div className="sec-3">
        <div className="sec3-content">
          <div className="circle"></div>
          <h1>EXPERIENCES</h1>
          <div className="circle"></div>
          <h1>CONTENT</h1>
          <div className="circle"></div>
          <h1>ENVIRONMENTS</h1>
          <div className="circle"></div>
          <h1>EXPERIENCES</h1>
          <div className="circle"></div>
          <h1>CONTENT</h1>
          <div className="circle"></div>
          <h1>ENVIRONMENTS</h1>
          <div className="circle"></div>
          <h1>EXPERIENCES</h1>
          <div className="circle"></div>
          <h1>CONTENT</h1>
          <div className="circle"></div>
          <h1>ENVIRONMENTS</h1>
        </div>

      </div>

      <div className="sec-4">
        <div className="sec4-1">
          <p>
            We are a group of design-
            <br />
            driven, goal-focused creators,
            <br /> producers, and designers who
            <br /> believe that the details make
            <br /> all the difference.
          </p>
          <div className="circle-1"></div>
        </div>
        <div className="sec4-2">
          <img src={Holding_thumb} />
          <p> 
            We love to create, we love to solve, we love to collaborate, and we
            love to turn amazing ideas into reality. We’re here to partner with
            you through every step of the process and know that relationships
            are the most important things we build.
          </p>
        </div>
      </div>
      <div>
        <h2>FEATURED PROJECTS</h2>
        {data.map((elem, idx) => {
          return (
            <div
              className="sec-5"
              key={idx}
              onMouseEnter={() => {
                setHoverImgIndex(idx);
              }}
              onMouseLeave={() => {
                setHoverImgIndex(null);
              }}
            >
              <h1>{elem.text}</h1>
              <div>
                <p>{elem.company}</p>
                <p>{elem.categories}</p>
              </div>
              {/* {hoveresImgIndex===idx && (<img src={elem.image} className="hovered-Img"/>)} */}
            </div>
          );
        })}
      </div>
      <div className="project-btn">
        <h1>All Ptojects -&gt;</h1>
      </div>
      <div className="sec6-container">
        <div className="sec-6">
          <div className="sec6-first">
            <h1
              className={activeTab === "Design" ? "active" : ""}
              onClick={() => setActiveTab("Design")}
            >
              Design
            </h1>
            <h1
              className={activeTab === "Project" ? "active" : ""}
              onClick={() => setActiveTab("Project")}
            >
              Project
            </h1>
            <h1
              className={activeTab === "Execution" ? "active" : ""}
              onClick={() => setActiveTab("Execution")}
            >
              Execution
            </h1>
            <p>{studioData[activeTab].content}</p>
          </div>
          <div
            className="sec6-second"
            style={{
              backgroundImage: `url(${studioData[activeTab].image})`,
            }}
          ></div>
        </div>
      </div>

      <div className="section-title">
        <span></span>
        <p>WHO WE WORK WITH</p>
      </div>
      <div className="sec7-container">
        {companies.map((ele, index) => {
          return (
            <div key={index} className="sec-7">
              <img src={ele.logo} />
              <p>{ele.contents}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
