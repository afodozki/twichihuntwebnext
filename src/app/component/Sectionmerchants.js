import { Card, CardBody, CardHeader, Container } from 'react-bootstrap'
import bannersectionmerchants from '../assets/img/bannersectionmerchants.jpg'
import imgcat1 from '../assets/img/img-merchants.png'
import Image from 'next/image'

export default function Sectionmerchants() {
  return (
    <>
    <div className="w-100 bg-white pb-0 p-0 bg-pos overflow-hidden">
    <Container>
    <Card className='border-0 '>
    <CardHeader className='p-0 border-0 bg-transparent'>
        <a href='/merchants'>
<Image placeholder="blur" className='w-100'  src={bannersectionmerchants} alt="product logo" />
</a>
    </CardHeader>

    <CardBody>
       <div className="mb-4 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4 md:gap-3 sm:gap-3">
<div className=' pb-0'>

<a href='/merchants'>
<Card className="bg-transparent max-h-40 radius-15 mb-0 text-white">
<Image placeholder="blur" className='w-80'  src={imgcat1} alt="twichihunt logo" />
</Card>    
</a>
    </div>

    <div className=' pb-0'>

<a href='/merchants'>
<Card className="bg-transparent max-h-40 radius-15 mb-0 text-white">
<Image placeholder="blur" className='w-80'  src={imgcat1} alt="twichihunt logo" />

</Card>    
</a>
    </div>

    <div className=' pb-0'>

<a href='/merchants'>
<Card className="bg-transparent max-h-40 radius-15 mb-0 text-white">
<Image placeholder="blur" className='w-80'  src={imgcat1} alt="twichihunt logo" />

</Card>    
</a>
    </div>

    <div className=' pb-0'>

<a href='/merchants'>
<Card className="bg-transparent max-h-40 radius-15 mb-0 text-white">
<Image placeholder="blur" className='w-80'  src={imgcat1} alt="twichihunt logo" />

</Card>    
</a>
    </div>

    <div className=' pb-0'>

<a href='/merchants'>
<Card className="bg-transparent max-h-40 radius-15 mb-0 text-white">
<Image placeholder="blur" className='w-80'  src={imgcat1} alt="twichihunt logo" />

</Card>    
</a>
    </div>

    <div className=' pb-0'>

<a href='/merchants'>
<Card className="bg-transparent max-h-40 radius-15 mb-0 text-white">
<Image placeholder="blur" className='w-80'  src={imgcat1} alt="twichihunt logo" />

</Card>    
</a>
    </div>

    <div className=' pb-0'>

<a href='/merchants'>
<Card className="bg-transparent max-h-40 radius-15 mb-0 text-white">
<Image placeholder="blur" className='w-80'  src={imgcat1} alt="twichihunt logo" />

</Card>    
</a>
    </div>
    </div>
    </CardBody>




    </Card>

    </Container>
    </div>
    </>
  )
}
