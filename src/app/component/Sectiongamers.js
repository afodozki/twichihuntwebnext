'use client'
import { useState } from 'react';
import { Card, Col, Row, Container } from "react-bootstrap";
import bannerslide1 from "../assets/img/banneradslide-1.png";
import bannerslide2 from "../assets/img/banneradslide-1.png";
import bannerslide3 from "../assets/img/banneradslide-1.png";
import bannerslide4 from "../assets/img/banneradslide-1.png";
import Image from 'next/image';
import icqrcode from "../assets/img/ic-qrcode.svg";
import { Modal } from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';
import Slider from "react-slick";
import Modalone from './modals/slideplayone/Modalone';
import Modaltwo from './modals/slideplayone/Modaltwo';
import Modalthree from './modals/slideplayone/Modalthree';
import Modalfour from './modals/slideplayone/Modalthree';
import Modalfive from './modals/slideplayone/Modalthree';
import Modalsix from './modals/slideplayone/Modalthree';
import Modalseven from './modals/slideplayone/Modalthree';
import Modaleight from './modals/slideplayone/Modalthree';
import Modalnine from './modals/slideplayone/Modalthree';
import Modalten from './modals/slideplayone/Modalten';

export default function Sectiongamers() {
    const [showmodalslide1one, setShowmodalslide1one] = useState(false);
    const handleshowmodalslide1one = () => setShowmodalslide1one(true);
    const handleclosemodalslide1one = () => setShowmodalslide1one(false);

    const [showmodalslide1two, setShowmodalslide1two] = useState(false);
    const handleshowmodalslide1two = () => setShowmodalslide1two(true);
    const handleclosemodalslide1two = () => setShowmodalslide1two(false);

    const [showmodalslide1three, setShowmodalslide1three] = useState(false);
    const handleshowmodalslide1three = () => setShowmodalslide1three(true);
    const handleclosemodalslide1three = () => setShowmodalslide1three(false);

    const [showmodalslide1four, setShowmodalslide1four] = useState(false);
    const handleshowmodalslide1four = () => setShowmodalslide1four(true);
    const handleclosemodalslide1four = () => setShowmodalslide1four(false);

    const [showmodalslide1five, setShowmodalslide1five] = useState(false);
    const handleshowmodalslide1five = () => setShowmodalslide1five(true);
    const handleclosemodalslide1five = () => setShowmodalslide1five(false);

    const [showmodalslide1six, setShowmodalslide1six] = useState(false);
    const handleshowmodalslide1six = () => setShowmodalslide1six(true);
    const handleclosemodalslide1six = () => setShowmodalslide1six(false);

    const [showmodalslide1seven, setShowmodalslide1seven] = useState(false);
    const handleshowmodalslide1seven = () => setShowmodalslide1seven(true);
    const handleclosemodalslide1seven = () => setShowmodalslide1seven(false);

    const [showmodalslide1eight, setShowmodalslide1eight] = useState(false);
    const handleshowmodalslide1eight = () => setShowmodalslide1eight(true);
    const handleclosemodalslide1eight = () => setShowmodalslide1eight(false);

    const [showmodalslide1nine, setShowmodalslide1nine] = useState(false);
    const handleshowmodalslide1nine = () => setShowmodalslide1nine(true);
    const handleclosemodalslide1nine = () => setShowmodalslide1nine(false);

    const [showmodalslide1ten, setShowmodalslide1ten] = useState(false);
    const handleshowmodalslide1ten = () => setShowmodalslide1ten(true);
    const handleclosemodalslide1ten = () => setShowmodalslide1ten(false);


    const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    LazyLoadImage: true,
    pauseOnHover: false,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    centerPadding: "50px",
  };
  return (
    <>
      <div className="w-100 bg-primary-alt mt-5 pb-0 p-0 bg-pos overflow-hidden">
        <Container>
          <Card className="border-0 bg-transparent ">
            <Card.Header className=" bg-primary-alt p-5 border-0">
              <Row className=" justify-center items-center">
                <Col>
                  <p className="text-primary-alt text-3xl text-center font-semibold">
                    Scan to play
                  </p>

                  <p className="text-center text-muted text-lg fw-light mb-0 font-semibold">
                    Hunt and scan Twichihunt QR codes.... amazing reward awaits
                    you{" "}
                  </p>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body className="px-0 no-bg bg-transparent border-0 ">
              <div className="row">
                <Col lg="12">
                  <Slider {...settings}>
                    <section className="px-3 relative w-full">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl w-40 h-14 flex items-center z-20 justify-center text-white text-base font-medium">
                        <button onClick={handleshowmodalslide1one}>
                          <Image
                            className=" w-12 radius-10"
                            src={icqrcode}
                            alt="bannerslides"
                          />
                        </button>
                      </div>

                      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 rounded-xl w-40 h-14 flex items-center z-20 justify-center text-white text-base font-medium">
                        <button onClick={handleshowmodalslide1two}>
                          <Image
                            className=" w-12 radius-10"
                            src={icqrcode}
                            alt="bannerslides"
                          />
                        </button>
                      </div>

                      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 rounded-xl w-40 h-14 flex items-center z-20 justify-center text-white text-base font-medium">
                        <button onClick={handleshowmodalslide1three}>
                          <Image
                            className=" w-12 radius-10"
                            src={icqrcode}
                            alt="bannerslides"
                          />
                        </button>
                      </div>

                      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl w-40 h-14 flex items-center z-20 justify-center text-white text-base font-medium">
                        <button onClick={handleshowmodalslide1four}>
                          <Image
                            className=" w-12 radius-10"
                            src={icqrcode}
                            alt="bannerslides"
                          />
                        </button>
                      </div>

                      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 rounded-xl w-40 h-14 flex items-center z-20 justify-center text-white text-base font-medium">
                        <button onClick={handleshowmodalslide1five}>
                          <Image
                            className=" w-12 radius-10"
                            src={icqrcode}
                            alt="bannerslides"
                          />
                        </button>
                      </div>

                      <div className="absolute top-1/3 right-1/4 -translate-x-1/3 -translate-y-1/2 rounded-xl w-40 h-14 flex items-center z-20 justify-center text-white text-base font-medium">
                        <button onClick={handleshowmodalslide1six}>
                          <Image
                            className=" w-12 radius-10"
                            src={icqrcode}
                            alt="bannerslides"
                          />
                        </button>
                      </div>

                      <div className="absolute top-1/4 right-1/4 -translate-x-1/6 -translate-y-1/2 rounded-xl w-40 h-14 flex items-center z-20 justify-center text-white text-base font-medium">
                        <button onClick={handleshowmodalslide1seven}>
                          <Image
                            className=" w-12 radius-10"
                            src={icqrcode}
                            alt="bannerslides"
                          />
                        </button>
                      </div>

                      <div className="absolute top-1/4 left-1/4 -translate-x-1/3 -translate-y-1/3 rounded-xl w-40 h-14 flex items-center z-20 justify-center text-white text-base font-medium">
                        <button onClick={handleshowmodalslide1eight}>
                          <Image
                            className=" w-12 radius-10"
                            src={icqrcode}
                            alt="bannerslides"
                          />
                        </button>
                      </div>

                      <div className="absolute top-1/4 right-1 -translate-x-1/2 -translate-y-1/2 rounded-xl w-40 h-14 flex items-center z-20 justify-center text-white text-base font-medium">
                        <button onClick={handleshowmodalslide1nine}>
                          <Image
                            className=" w-12 radius-10"
                            src={icqrcode}
                            alt="bannerslides"
                          />
                        </button>
                      </div>

                      <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 rounded-xl w-40 h-14 flex items-center z-20 justify-center text-white text-base font-medium">
                        <button onClick={handleshowmodalslide1ten}>
                          <Image
                            className=" w-12 radius-10"
                            src={icqrcode}
                            alt="bannerslides"
                          />
                        </button>
                      </div>

                      <Image
                        className="w-100 radius-10"
                        src={bannerslide1}
                        alt="bannerslides"
                      />
                    </section>
                    <section className="px-3">
                      <Image
                        className="w-100 radius-10"
                        src={bannerslide2}
                        alt="bannerslides"
                      />
                    </section>
                    <section className="px-3">
                      <Image
                        className="w-100 radius-10"
                        src={bannerslide3}
                        alt="bannerslides"
                      />
                    </section>
                    <section className="px-3">
                      <Image
                        className="w-100 radius-10"
                        src={bannerslide4}
                        alt="bannerslides"
                      />
                    </section>
                  </Slider>
                </Col>
              </div>
            </Card.Body>
          </Card>
        </Container>

{/* Modals slideplayone */}

    <Modal 
      className='modalrounded modalboard' 
      keyboard={false}
      size='md' 
      show={showmodalslide1one} 
      onHide={handleclosemodalslide1one} centered>
        <CloseButton onClick={handleclosemodalslide1one} className="mt-3 abs-close-modal" />
        <Modal.Body className='p-0'>
        <div><Modalone /></div>
          </Modal.Body>
      </Modal> 

        <Modal 
      className='modalrounded modalboard' 
      keyboard={false}
      size='md' 
      show={showmodalslide1two} 
      onHide={handleclosemodalslide1two} centered>
        <CloseButton onClick={handleclosemodalslide1two} className="mt-3 abs-close-modal" />
        <Modal.Body className='p-0'>
        <div><Modaltwo /></div>
          </Modal.Body>
      </Modal>        

      <Modal 
      className='modalrounded modalboard' 
      keyboard={false}
      size='md' 
      show={showmodalslide1three} 
      onHide={handleclosemodalslide1three} centered>
        <CloseButton onClick={handleclosemodalslide1three} className="mt-3 abs-close-modal" />
        <Modal.Body className='p-0'>
        <div><Modalthree /></div>
          </Modal.Body>
      </Modal>  

            <Modal 
      className='modalrounded modalboard' 
      keyboard={false}
      size='md' 
      show={showmodalslide1four} 
      onHide={handleclosemodalslide1four} centered>
        <CloseButton onClick={handleclosemodalslide1four} className="mt-3 abs-close-modal" />
        <Modal.Body className='p-0'>
        <div><Modalfour /></div>
          </Modal.Body>
      </Modal>  

                  <Modal 
      className='modalrounded modalboard' 
      keyboard={false}
      size='md' 
      show={showmodalslide1five} 
      onHide={handleclosemodalslide1five} centered>
        <CloseButton onClick={handleclosemodalslide1five} className="mt-3 abs-close-modal" />
        <Modal.Body className='p-0'>
        <div><Modalfive /></div>
          </Modal.Body>
      </Modal>        

      <Modal 
      className='modalrounded modalboard' 
      keyboard={false}
      size='md' 
      show={showmodalslide1six} 
      onHide={handleclosemodalslide1six} centered>
        <CloseButton onClick={handleclosemodalslide1six} className="mt-3 abs-close-modal" />
        <Modal.Body className='p-0'>
        <div><Modalsix /></div>
          </Modal.Body>
      </Modal> 

            <Modal 
      className='modalrounded modalboard' 
      keyboard={false}
      size='md' 
      show={showmodalslide1seven} 
      onHide={handleclosemodalslide1seven} centered>
        <CloseButton onClick={handleclosemodalslide1seven} className="mt-3 abs-close-modal" />
        <Modal.Body className='p-0'>
        <div><Modalseven /></div>
          </Modal.Body>
      </Modal> 

      <Modal 
      className='modalrounded modalboard' 
      keyboard={false}
      size='md' 
      show={showmodalslide1eight} 
      onHide={handleclosemodalslide1eight} centered>
        <CloseButton onClick={handleclosemodalslide1eight} className="mt-3 abs-close-modal" />
        <Modal.Body className='p-0'>
        <div><Modaleight /></div>
          </Modal.Body>
      </Modal> 

      <Modal 
      className='modalrounded modalboard' 
      keyboard={false}
      size='md' 
      show={showmodalslide1nine} 
      onHide={handleclosemodalslide1nine} centered>
        <CloseButton onClick={handleclosemodalslide1nine} className="mt-3 abs-close-modal" />
        <Modal.Body className='p-0'>
        <div><Modalnine /></div>
          </Modal.Body>
      </Modal> 

      <Modal 
      className='modalrounded modalboard' 
      keyboard={false}
      size='md' 
      show={showmodalslide1ten} 
      onHide={handleclosemodalslide1ten} centered>
        <CloseButton onClick={handleclosemodalslide1ten} className="mt-3 abs-close-modal" />
        <Modal.Body className='p-0'>
        <div><Modalten /></div>
          </Modal.Body>
      </Modal> 
       
      </div>
    </>
  );
}
