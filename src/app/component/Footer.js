import logo from '../assets/img/logo.png'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from 'next/image';

export default function Footer() {
  return (




<footer className="bg-white dark:bg-gray-900 mt-5">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4 md:gap-3 sm:gap-3">
       
          <div className="mb-6 md:mb-0 grid grid-cols-2">
              <a href="/" className="flex items-center">
                  <Image src={logo} className="h-12 me-3" alt="Twichihunt Logo" />
              </a>
          </div>
          <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase"></h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="/">About</a>
                      </li>
                      <li className="mb-3 fw-light text-sm text-muted">
                          <a href="/">About Twichihunt</a>
                      </li>
                      <li className="mb-3 fw-light text-sm text-muted">
                          <a href="/">How it works</a>
                      </li>
                         <li className="mb-3 fw-light text-sm text-muted">
                          <a href="/">Shop on Twichihunt</a>
                      </li>
                  </ul>
              </div>
      
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"></h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="/">Shop</a>
                      </li>
                      <li className="mb-3 fw-light text-sm text-muted">
                          <a href="/">Shop on Twichihunt</a>
                      </li>
                      <li className="mb-3 fw-light text-sm text-muted">
                          <a href="/">How it works</a>
                      </li>
                         <li className="mb-3 fw-light text-sm text-muted">
                          <a href="/">Hunt Twichihunt QR codes</a>
                      </li>
                  </ul>
              </div>


              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"></h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="/">Sell</a>
                      </li>
                      <li className="mb-3 fw-light text-sm text-muted">
                          <a href="/">Open a store for free</a>
                      </li>
                      <li className="mb-3 fw-light text-sm text-muted">
                          <a href="/">Sell on Twichihunt</a>
                      </li>
                         <li className="mb-3 fw-light text-sm text-muted">
                          <a href="/">How it works</a>
                      </li>
                  </ul>
              </div>

          <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"></h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="/">Reach Us</a>
                      </li>
                      <li className="mb-3 fw-light text-sm text-muted">
                          <a href="/">Hello@twichihunt.com</a>
                      </li>
                      <li className="mb-3 fw-light text-sm text-muted">
                          <a href="/">09069779845</a>
                      </li>
                  
                      
                  </ul>
              </div>





         
      </div>
      <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> <a href="/">Privacy </a>. <a href="/">Terms & conditions </a>
          </span>
          <div className="flex mt-3 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaFacebook />
                 
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaInstagram />
                 
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaTwitter />

              </a>
         
          </div>
      </div>
    </div>
</footer>


  )
}
