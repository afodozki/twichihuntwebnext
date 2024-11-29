// import { Metadata } from 'next'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'
import './animate.css'
import Scrolltop from './component/Scroltotop'
import { Plus_Jakarta_Sans } from 'next/font/google'
//import GoogleAnalytics from './component/Googleanalytics'
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

const fontjarkarta = Plus_Jakarta_Sans({ subsets: ['latin'] })


export const metadata = {
  title: 'Twichihunt | Providing innovative solutions to peculiar challenges through innovation and speed of execution, improving lives, communities and business',
  description: 'Digital Banking, Personal Banking and Private Banking, Bank Accounts, Loans and Investments for Individuals and Businesses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   <link rel="icon" type="image/svg+xml" href="/img/favicon.ico" />
   <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />

   <meta name="google-site-verification" content="TW5SijoFGFTuTetTSF88VQx3AXp4dt9ELup6pT4onQU" />
   </head>
      <body className={fontjarkarta.className}>
        {children}
        <Scrolltop />
        </body>
    </html>
  );
}
