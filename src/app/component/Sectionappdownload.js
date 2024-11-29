import { Card, Col, Row, Container, CardBody } from 'react-bootstrap'
import appdownload from '../assets/img/img-appdownload.png'
import playsorebtn from '../assets/img/ic-playsorebtn.svg'
import appstorebtn from '../assets/img/ic-appstorebtn.svg'
import Image from 'next/image'




export default function Sectionappdownload() {
  return (
    <>
    <div d='appdownload' className="w-100 bg-white mt-5 pb-0 p-0 bg-pos overflow-hidden">
    <Container>
    <Card className='border-0 '>
    <CardBody className='px-0 border-0 '>
    <Container>
        <Row className=' justify-center'>
        <Col className='bg-appdownload radius-15' lg='11'>
        <Row className='flex p-3'>
    <Col lg='6' md='6' sm='6' xs='6'>
 
                <Col xs='12' lg='12' md='12' sm='12'><p className='mt-5 fw-bold text-white text-3xl' >Download Twichihunt App</p></Col>
                <Col>
                    <p className='text-lg text-white fw-light'>
                  Scan to Shop, Play and Earn
                    </p>
                </Col>
                <Col>
                <Row>
                    <Col lg='5'>
                        <button>
                        <Image className='w-100'  src={playsorebtn} alt="twichihunt logo" />
                        </button>
                    </Col>
                    <Col lg='5'>
                    <button>
                        <Image className='w-100'  src={appstorebtn} alt="twichihunt logo" />
                        </button>
                    </Col>
                </Row>
                </Col>
    </Col>

    <Col lg='2' md='2' sm='2' ></Col>

    <Col lg='4' md='6' sm='6' xs='6'>
    <Image placeholder="blur" className='w-100'  src={appdownload} alt="twichihunt logo" />
    </Col>
    </Row>


        </Col>
        </Row>
    </Container>    
    </CardBody>
    </Card>

    </Container>
    </div>
    </>
  )
}
