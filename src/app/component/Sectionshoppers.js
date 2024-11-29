import { Card, Col, Row, Container, CardHeader, CardBody } from 'react-bootstrap'
import imgscantobuy from '../assets/img/img-scantobuy.png'
import imgqrcodeinfo from '../assets/img/img-qrcodeinfo.png'
import { FaArrowRight } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import Image from 'next/image';
import Link from "next/link"



export default function Sectionshoppers() {
  return (
    <>
    <div className="w-100 bg-white pb-0 p-0 bg-pos overflow-hidden">
    <Container>
    <Card className='border-0 '>
    <CardHeader className=' bg-primary-alt p-3 border-0'>
    <Row className=' justify-between items-center'>
         <Col><p className='text-primary-alt mb-0 font-semibold'>Shop from anywhere</p> </Col>
         <Col><Link className='text-primary-alt font-semibold text-right' href='/faq'><span className='mb-0 hidden lg:flex md:flex justify-end items-center'>Frequently Asked Questions <FaArrowRight className='mx-2' /> </span>
         <span className='mb-0 flex lg:hidden md:hidden sm:block justify-end items-center'>FAQ <FaArrowRight className='mx-2' /> </span>
         </Link></Col>   
    </Row>
    </CardHeader>

    <CardBody className='px-0 border-0 '>
    <div className="row">
<Col lg='5'><a href='/merchants'>
<Card className="bg-transparent border-0 radius-15 mb-0 text-white">
<Image placeholder="blur" className=' w-100'  src={imgscantobuy} alt="twichihunt logo" />
</Card>    
</a></Col>
<Col lg='7'>
<a href='/merchants'>
<Card className="bg-transparent border-0  radius-15 mb-0 text-white">

<Row className='flex flex-wrap p-3'>
<Col lg='4' md='6' sm='6' xs='6'>
    <Card className='cardshoppers radius-10 mb-4'>
        <CardBody className='p-4 radius-10'>
        <Row>
            <Col xs='12' lg='12' md='12' sm='12'>
                <p className='mb-4'><MdDownloadForOffline size={30} /></p>
            </Col>
            <Col xs='12' lg='12' md='12' sm='12'><p className='fs-5 fw-bold' >Download App</p></Col>
            <Col>
                <p className='text-xs fw-light'>
                Download the Twichihunt app from Google Playstore or Appstore
                </p>
            </Col>
        </Row>
        </CardBody>
    </Card>
</Col>

<Col lg='4' md='6' sm='6' xs='6'>
    <Card className='cardshoppers radius-10 mb-4'>
        <CardBody className='p-4 radius-10'>
        <Row>
            <Col xs='12' lg='12' md='12' sm='12'>
                <p className='mb-4'><MdDownloadForOffline size={30} /></p>
            </Col>
            <Col xs='12' lg='12' md='12' sm='12'><p className='fs-5 fw-bold' >Download App</p></Col>
            <Col>
                <p className='text-xs fw-light'>
                Download the Twichihunt app from Google Playstore or Appstore
                </p>
            </Col>
        </Row>
        </CardBody>
    </Card>
</Col>

<Col lg='4' md='6' sm='6' xs='6'>
    <Card className='cardshoppers radius-10 mb-4'>
        <CardBody className='p-4 radius-10'>
        <Row>
            <Col xs='12' lg='12' md='12' sm='12'>
                <p className='mb-4'><MdDownloadForOffline size={30} /></p>
            </Col>
            <Col xs='12' lg='12' md='12' sm='12'><p className='fs-5 fw-bold' >Download App</p></Col>
            <Col>
                <p className='text-xs fw-light'>
                Download the Twichihunt app from Google Playstore or Appstore
                </p>
            </Col>
        </Row>
        </CardBody>
    </Card>
</Col>

<Col lg='4' md='6' sm='6' xs='6'>
    <Card className='cardshoppers radius-10 mb-4'>
        <CardBody className='p-4 radius-10'>
        <Row>
            <Col xs='12' lg='12' md='12' sm='12'>
                <p className='mb-4'><MdDownloadForOffline size={30} /></p>
            </Col>
            <Col xs='12' lg='12' md='12' sm='12'><p className='fs-5 fw-bold' >Download App</p></Col>
            <Col>
                <p className='text-xs fw-light'>
                Download the Twichihunt app from Google Playstore or Appstore
                </p>
            </Col>
        </Row>
        </CardBody>
    </Card>
</Col>

<Col lg='4' md='6' sm='6' xs='6'>
    <Card className='cardshoppers radius-10 mb-4'>
        <CardBody className='p-4 radius-10'>
        <Row>
            <Col xs='12' lg='12' md='12' sm='12'>
                <p className='mb-4'><MdDownloadForOffline size={30} /></p>
            </Col>
            <Col xs='12' lg='12' md='12' sm='12'><p className='fs-5 fw-bold' >Download App</p></Col>
            <Col>
                <p className='text-xs fw-light'>
                Download the Twichihunt app from Google Playstore or Appstore
                </p>
            </Col>
        </Row>
        </CardBody>
    </Card>
</Col>

<Col lg='4' md='6' sm='6' xs='6'>
    <Card className='cardshoppers radius-10 mb-4'>
        <CardBody className='p-4 radius-10'>
        <Row>
            <Col xs='12' lg='12' md='12' sm='12'>
                <p className='mb-4'><MdDownloadForOffline size={30} /></p>
            </Col>
            <Col xs='12' lg='12' md='12' sm='12'><p className='fs-5 fw-bold' >Download App</p></Col>
            <Col>
                <p className='text-xs fw-light'>
                Download the Twichihunt app from Google Playstore or Appstore
                </p>
            </Col>
        </Row>
        </CardBody>
    </Card>
</Col>

</Row>

</Card>    
</a>
</Col>

</div>
</CardBody>

</Card>

    </Container>
    </div>
    </>
  )
}
