import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowDownCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import Type from "./Type";


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 1000);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Computer Engineer", "Web Developer", "MNNITIAN" ,"Coder"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}> 
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
                <Col xs={12} md={6} xl={5}>
                <span className="tagline">Welcome to my World</span>
                </Col>
                 
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello,{" "}
                <span className="wave" role="img" aria-labelledby="wave">👋</span>
              </h1>
             
                
               <h1 className="heading-name">
                <strong className="main-name">I Am Niraj Gupta</strong>

               <h2 className="type_writter"> <span className="txt-rotate" dataPeriod="1000" ><span className="wrap">{text}</span></span></h2>
               

               <button herf="#About.js"><ArrowDownCircle size={40}  className="arrow"/></button>
              </h1>
               
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className="banner_logo">
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>

      </Container>
    </section>
  )
}
