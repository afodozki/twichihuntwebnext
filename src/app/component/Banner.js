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

export default function Banner() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    LazyLoadImage: true,
    pauseOnHover: false,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-100 mt-4 pb-0 p-0 bg-pos overflow-hidden">
      <Container>
        <Row className="resp-reverse">
          <Col className="d-lg-block d-none" lg="3" md="3" sm="12">
            <div className=" align-v-center flex-column">
              <ListGroup>
                <ListGroupItem className=" border-0 bg-transparent pl-0">
                  <h6 className="d-flex">
                    <IoFilter size={20}  color="#303030" /> <span className="pl-5 d-block px-2">Category</span>
                  </h6>
                </ListGroupItem>
                <ListGroup.Item className="border-0 bg-transparent pl-0">
                  <a className="d-block" href="/">
                    <Row>
                      <i className="icw-50">
                        <Image alt="ic-cat" src={iccat} />
                      </i>
                      Food
                    </Row>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent pl-0">
                  <a className="d-block" href="/">
                    <Row>
                      <i className="icw-50">
                        <Image alt="ic-cat" src={iccat} />
                      </i>
                      Food
                    </Row>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent pl-0">
                  <a className="d-block" href="/">
                    <Row>
                      <i className="icw-50">
                        <Image alt="ic-cat" src={iccat} />
                      </i>
                      Food
                    </Row>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent pl-0">
                  <a className="d-block" href="/">
                    <Row>
                      <i className="icw-50">
                        <Image alt="ic-cat" src={iccat} />
                      </i>
                      Food
                    </Row>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent pl-0">
                  <a className="d-block" href="/">
                    <Row>
                      <i className="icw-50">
                        <Image alt="ic-cat" src={iccat} />
                      </i>
                      Food
                    </Row>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent pl-0">
                  <a className="d-block" href="/">
                    <Row>
                      <i className="icw-50">
                        <Image alt="ic-cat" src={iccat} />
                      </i>
                      Food
                    </Row>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent pl-0">
                  <a className="d-block" href="/">
                    <Row>
                      <i className="icw-50">
                        <Image alt="ic-cat" src={iccat} />
                      </i>
                      Food
                    </Row>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent pl-0">
                  <a className="d-block" href="/">
                    <Row>
                      <i className="icw-50">
                        <Image alt="ic-cat" src={iccat} />
                      </i>
                      Food
                    </Row>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent pl-0">
                  <a className="d-block" href="/">
                    <Row>
                      <i className="icw-50">
                        <Image alt="ic-cat" src={iccat} />
                      </i>
                      Food
                    </Row>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent pl-0">
                  <a className="d-block" href="/">
                    <Row>
                      <i className="icw-50">
                        <Image alt="ic-cat" src={iccat} />
                      </i>
                      Food
                    </Row>
                  </a>
                </ListGroup.Item>

              </ListGroup>
            </div>
          </Col>
          <Col className="d-lg-block" lg="9" md="12" sm="12">
            <Slider {...settings}>
              <section>
                <Image
                  className="w-100 radius-10"
                  src={bannerslide1}
                  alt="bannerslides"
                />
              </section>
              <section>
                <Image
                  className="w-100 radius-10"
                  src={bannerslide2}
                  alt="bannerslides"
                />
              </section>
              <section>
                <Image
                  className="w-100 radius-10"
                  src={bannerslide3}
                  alt="bannerslides"
                />
              </section>
              <section>
                <Image
                  className="w-100 radius-10"
                  src={bannerslide4}
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
