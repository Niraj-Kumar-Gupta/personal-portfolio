import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp from "../assets/img/color-sharp.png"
import about_banner from "../assets/img/about-banner.jpg";
import absolute_image from "../assets/img/absolute-image.jpg";
import abc from "../assets/img/abc.jpg";
import abd from "../assets/img/abd.jpg";
import { library, icon } from '@fortawesome/fontawesome-svg-core';


export const Skills2 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
           <section className="skill2" id="skills2">
            <div className="container">
                <div className="col-12">
                    <div className="skill2-bx wow zoomIn">
                     <h1>Academic Details</h1>
                     <br></br>
                     <br></br>
                        <Row className="align-items-center" >

                            <Col size={12} md={6}>

                              <figure className="about-banner">

                                <img src={about_banner} width="800" height="652" loading="lazy" alt="Ethans Photo"
                                  className="img-cover" />

                                <img src={absolute_image}  loading="lazy" alt="Ethan's Photo"
                                  className="abs-img" />

                                  <img src={abc}  loading="lazy" alt="Ethan's Photo"
                                  className="abc-img" />

                                  <img src={abd}  loading="lazy" alt="Ethan's Photo"
                                  className="abd-img" />
                                
                              </figure>
                              </Col>

                              <Col size={12} md={6}>
                               <TrackVisibility>
                                   {({ isVisible }) =>
                                  <div className={isVisible ? "animate__animated animate__fadein" : ""}>

                                   
                                 <section className="timeline">

                                    <div className="title-wrapper">
                                      <div className="icon-box">
                                        <h4>👨‍🎓</h4>
                                      </div>

                                      <h3 className="head">Education</h3>
                                    </div>

                                    <ol className="timeline-list">

                                      <li className="timeline-item">

                                        <h4 className="h5 timeline-item-title" > National Institute Of Technology ,Allahabad</h4>

                                        <span>2020 — currently</span>

                                        <p className="timeline-text">
                                         Computer Science And Engineering.
                                        </p>

                                      </li>

                                      <li className="timeline-item">

                                        <h4 className="h5 timeline-item-title">Shikshadeep +2 science , Biratnagar Nepal</h4>

                                        <span>2017 — 2019</span>

                                        <p className="timeline-text">
                                        Intermediate in Science
                                        </p>

                                      </li>

                                      <li className="timeline-item">

                                        <h4 className="h5 timeline-item-title">Shree Budhilal Bidya Munar Secondary School</h4>

                                        <span>2005 — 2016</span>

                                        <p className="timeline-text">
                                           Schooling...
                                        </p>

                                      </li>

                                    </ol>

                                  </section>
                              </div>}
                            </TrackVisibility>
                        </Col>
                    </Row>
                 </div>
             </div>
           </div>
           <img className="background-image-left" src={colorSharp} alt="Image" />
           
      </section>
   
   
  )
}
