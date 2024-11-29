'use client'
import ListGroup from "react-bootstrap/ListGroup";
import Slider from "react-slick";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, ListGroupItem } from "react-bootstrap";
import iccat from "../assets/img/ic-cat.png";
import { IoFilter } from "react-icons/io5";
import bannerslide1 from "../assets/img/bannerslide-1.png";
import bannerslide2 from "../assets/img/bannerslide-2.png";
import bannerslide3 from "../assets/img/bannerslide-3.png";
import bannerslide4 from "../assets/img/bannerslide-4.png";
import Image from "next/image";

export default function Banneronly() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    LazyLoadImage: true,
    pauseOnHover: false,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 9000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{ maxHeight:"100vh"}} className="w-100 m-0 pb-0 p-0 bg-pos overflow-hidden">
      <Container fluid>
        <Row className="resp-reverse">
     
          <Col className="d-lg-block" lg="12" md="12" sm="12">
            <Slider {...settings}>
              <section>
                <Image
                  className="w-100"
                  src={bannerslide1}
                  alt="bannerslides"
                />
              </section>
              <section>
                <Image
                  className="w-100"
                  src={bannerslide2}
                  alt="bannerslides"
                />
              </section>
              <section>
                <Image
                  className="w-100"
                  src={bannerslide3}
                  alt="bannerslides"
                />
              </section>
              <section>
                <Image
                  className="w-100 "
                  src={bannerslide1}
                  alt="bannerslides"
                />
              </section>
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
