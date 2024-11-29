import { Card, Container, Row, Col, CardBody, CardFooter, CardHeader } from 'react-bootstrap'
import bannersectionphones from '../assets/img/bannersectionphones.jpg'
import Image from 'next/image';
import imgproducts from '../assets/img/img-products.jpg'
import { Button } from 'react-bootstrap';
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Sectionphones() {
  return (
    <>
    <div className="w-100 bg-white pb-0 p-0 bg-pos overflow-hidden">
    <Container>

<Card className='border-0'>

    <CardHeader className='p-0'>
    <a href='/phones'>
<Image placeholder="blur" className='w-100'  src={bannersectionphones} alt="product logo" />
</a>      
    </CardHeader>

    <CardBody className='px-0'>
    <Row className='rowrap-resp'>

        <Col xs='6' lg='2' md='3' sm='6'>
            <Card className='border-0 mb-3'>
                <CardBody className='border-0'>
             <a href='/'>
             <Image placeholder="blur" className='w-100 p-0 max-h-full w-100 overflow-lip overflow-clip'  src={imgproducts} alt="product logo" />
             </a>
                </CardBody>
            <CardFooter className='px-2 border-0 bg-transparent'>
                  <Row>
                        <Col><p className=' text-ellipsis overflow-hidden whitespace-nowrap font-weight-medium mb-2'>Product Name</p></Col>
                        <Col lg='10' xs='10'><p className='font-bold mb-0 text-amount'>23,0952</p></Col>
                        <Col lg='2' xs='2' className='p-0'>   <Button className='bg-transparent btn-light my-0 p-0 border-0'><MdOutlineShoppingCart size={20} color='#303030' /></Button></Col>
                    </Row> 
            </CardFooter>    

          
            </Card>
        </Col>

        <Col xs='6' lg='2' md='3' sm='6'>
            <Card className='border-0 mb-3'>
                <CardBody className='border-0'>
             <a href='/'>
             <Image placeholder="blur" className='w-100 p-0 max-h-full w-100 overflow-lip overflow-clip'  src={imgproducts} alt="product logo" />
             </a>
                </CardBody>
            <CardFooter className='px-2 border-0 bg-transparent'>
                  <Row>
                        <Col><p className=' text-ellipsis overflow-hidden whitespace-nowrap font-weight-medium mb-2'>Product Name</p></Col>
                        <Col lg='10' xs='10'><p className='font-bold mb-0 text-amount'>23,0952</p></Col>
                        <Col lg='2' xs='2' className='p-0'>   <Button className='bg-transparent btn-light my-0 p-0 border-0'><MdOutlineShoppingCart size={20} color='#303030' /></Button></Col>
                    </Row> 
            </CardFooter>    

          
            </Card>
        </Col>

        <Col xs='6' lg='2' md='3' sm='6'>
            <Card className='border-0 mb-3'>
                <CardBody className='border-0'>
             <a href='/'>
             <Image placeholder="blur" className='w-100 p-0 max-h-full w-100 overflow-lip overflow-clip'  src={imgproducts} alt="product logo" />
             </a>
                </CardBody>
            <CardFooter className='px-2 border-0 bg-transparent'>
                  <Row>
                        <Col><p className=' text-ellipsis overflow-hidden whitespace-nowrap font-weight-medium mb-2'>Product Name</p></Col>
                        <Col lg='10' xs='10'><p className='font-bold mb-0 text-amount'>23,0952</p></Col>
                        <Col lg='2' xs='2' className='p-0'>   <Button className='bg-transparent btn-light my-0 p-0 border-0'><MdOutlineShoppingCart size={20} color='#303030' /></Button></Col>
                    </Row> 
            </CardFooter>    

          
            </Card>
        </Col>

        <Col xs='6' lg='2' md='3' sm='6'>
            <Card className='border-0 mb-3'>
                <CardBody className='border-0'>
             <a href='/'>
             <Image placeholder="blur" className='w-100 p-0 max-h-full w-100 overflow-lip overflow-clip'  src={imgproducts} alt="product logo" />
             </a>
                </CardBody>
            <CardFooter className='px-2 border-0 bg-transparent'>
                  <Row>
                        <Col><p className=' text-ellipsis overflow-hidden whitespace-nowrap font-weight-medium mb-2'>Product Name</p></Col>
                        <Col lg='10' xs='10'><p className='font-bold mb-0 text-amount'>23,0952</p></Col>
                        <Col lg='2' xs='2' className='p-0'>   <Button className='bg-transparent btn-light my-0 p-0 border-0'><MdOutlineShoppingCart size={20} color='#303030' /></Button></Col>
                    </Row> 
            </CardFooter>    

          
            </Card>
        </Col>

        <Col xs='6' lg='2' md='3' sm='6'>
            <Card className='border-0 mb-3'>
                <CardBody className='border-0'>
             <a href='/'>
             <Image placeholder="blur" className='w-100 p-0 max-h-full w-100 overflow-lip overflow-clip'  src={imgproducts} alt="product logo" />
             </a>
                </CardBody>
            <CardFooter className='px-2 border-0 bg-transparent'>
                  <Row>
                        <Col><p className=' text-ellipsis overflow-hidden whitespace-nowrap font-weight-medium mb-2'>Product Name</p></Col>
                        <Col lg='10' xs='10'><p className='font-bold mb-0 text-amount'>23,0952</p></Col>
                        <Col lg='2' xs='2' className='p-0'>   <Button className='bg-transparent btn-light my-0 p-0 border-0'><MdOutlineShoppingCart size={20} color='#303030' /></Button></Col>
                    </Row> 
            </CardFooter>    

          
            </Card>
        </Col>

        <Col xs='6' lg='2' md='3' sm='6'>
            <Card className='border-0 mb-3'>
                <CardBody className='border-0'>
             <a href='/'>
             <Image placeholder="blur" className='w-100 p-0 max-h-full w-100 overflow-lip overflow-clip'  src={imgproducts} alt="product logo" />
             </a>
                </CardBody>
            <CardFooter className='px-2 border-0 bg-transparent'>
                  <Row>
                        <Col><p className=' text-ellipsis overflow-hidden whitespace-nowrap font-weight-medium mb-2'>Product Name</p></Col>
                        <Col lg='10' xs='10'><p className='font-bold mb-0 text-amount'>23,0952</p></Col>
                        <Col lg='2' xs='2' className='p-0'>   <Button className='bg-transparent btn-light my-0 p-0 border-0'><MdOutlineShoppingCart size={20} color='#303030' /></Button></Col>
                    </Row> 
            </CardFooter>    

          
            </Card>
        </Col>

        <Col xs='6' lg='2' md='3' sm='6'>
            <Card className='border-0 mb-3'>
                <CardBody className='border-0'>
             <a href='/'>
             <Image placeholder="blur" className='w-100 p-0 max-h-full w-100 overflow-lip overflow-clip'  src={imgproducts} alt="product logo" />
             </a>
                </CardBody>
            <CardFooter className='px-2 border-0 bg-transparent'>
                  <Row>
                        <Col><p className=' text-ellipsis overflow-hidden whitespace-nowrap font-weight-medium mb-2'>Product Name</p></Col>
                        <Col lg='10' xs='10'><p className='font-bold mb-0 text-amount'>23,0952</p></Col>
                        <Col lg='2' xs='2' className='p-0'>   <Button className='bg-transparent btn-light my-0 p-0 border-0'><MdOutlineShoppingCart size={20} color='#303030' /></Button></Col>
                    </Row> 
            </CardFooter>    

          
            </Card>
        </Col>

    </Row>
        
    </CardBody>
</Card>


    </Container>
    </div>
    </>
  )
}
