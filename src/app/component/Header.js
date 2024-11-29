'use client'
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";
import logo from '../assets/img/logo.png'
import { Modal } from 'react-bootstrap';
import Link from "next/link"
import Image from 'next/image';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import Modalauth from './modals/Modalauth';


export default function Header() {

  const [showmodalauth, setShowmodalauth] = useState(false);
  const handleshowmodalauth = () => setShowmodalauth(true);
  const handleclosemodalauth = () => setShowmodalauth(false);


  return (
    <header className=" no-bg bd-0 container">
    <Navbar className=" flex  flex-wrap justify-between mt-2 pt-0 pb-0" expand="lg">
    <Nav className='w-full'>
    
  
  <Nav className='flex flex-row w-full justify-between'>
  <div className='flex w-full items-center'>
  <Link href="/">
  <Image className="logo-img" alt="logo" src= {logo} />
 </Link>  
  </div>
  
  <div className='flex w-full items-center'>
   <Form className='w-full me-4 hidden lg:block md:block' inline>
          <InputGroup className='w-full'>
            
            <Form.Control
              placeholder="Search"
              aria-label="Username"
              className=' radius-10'
              aria-describedby="basic-addon1"
            /><InputGroup.Text className=' position-absolute bg-transparent border-0 p-0 right-0 z-ind99' id="basic-addon1">
              <Button className='bg-transparent btn-light pt-2 border-0'><IoFilter size={20} color='#303030' /></Button>
            </InputGroup.Text>
          </InputGroup>
    </Form>
  </div>
  
  <div className='flex w-full items-center justify-end '>
    <Link href="./login" className="mx-1 hidden lg:block md:block px-3 text-medium font-weight-medium mb-2 btn-sm" variant="actionlight" size="md">Shop</Link>
    <Link href="./login" className="mx-1 hidden lg:block md:block px-3 text-medium font-weight-medium  mb-2 btn-sm" variant="actionlight" size="md">Sell</Link>
    <Link href="./login" className="mx-1 hidden lg:block md:block px-3 text-medium font-weight-medium  mb-2 btn-sm" variant="actionlight" size="md">Play</Link>
    <span onClick={() => window.location.replace("/#appdownload")} to="./login" className="mx-1 hidden lg:block md:block px-3 text-medium font-weight-medium whitespace-nowrap mb-2 btn-sm" size="md">Get App</span>
    <span onClick={handleshowmodalauth} to="./login" className="px-2  btn mb-2 btn-md"  size="md">  <MdOutlineShoppingCart size={25} /></span>
    <span onClick={handleshowmodalauth} to="./login" className="px-2  btn mb-2 btn-md" size="md">  <FaRegCircleUser size={25} /></span>
    {/* <Link href="./login" className="mx-2 px-4 my-2 btn mb-2 btn-actionlight btn-sm" variant="actionlight" size="md">Login</Link> */}
    {/* <Link href="./signup" className="mx-2 px-4 my-2 btn mb-2 btn-actionred btn-sm" variant="actionred" size="md">Sign up</Link> */}
    </div>
  
  
    </Nav>
    </Nav>
  
  
      <Nav className="m-auto mt-2 w-full">
      <Form className='w-full block lg:hidden md:hidden' inline>
          <InputGroup className='w-full'>
            
            <Form.Control
              placeholder="Search"
              aria-label="Username"
              className=' radius-10'
              aria-describedby="basic-addon1"
            /><InputGroup.Text className=' position-absolute bg-transparent border-0 p-0 right-0 z-ind99' id="basic-addon1">
              <Button className='bg-transparent btn-light pt-2 border-0'><IoFilter size={20} color='#303030' /></Button>
            </InputGroup.Text>
          </InputGroup>
    </Form>
     
  
        {/* <Link className="nav-link" to="./personal">Personal</Link>
        <Link className="nav-link" to="./agent">Agent</Link> */}
      </Nav>
  
  
  </Navbar>
  
  <Modal 
      className='modalrounded modalboard' 
      keyboard={false}
      size='md' 
      show={showmodalauth} 
      onHide={handleclosemodalauth} centered>
   
        <Modal.Body className='p-0'>
        <div><Modalauth /></div>
          </Modal.Body>
      </Modal> 
    </header>
  )
}




