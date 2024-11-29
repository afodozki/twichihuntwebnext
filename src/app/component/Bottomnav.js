import { GoHomeFill } from "react-icons/go";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { MdStore } from "react-icons/md";
import { IoQrCode } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import Link from "next/link"


export default function Bottomnav() {
  return (


<div className="block lg:hidden md:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
    <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
        <Link href='/' type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <GoHomeFill className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-500" />
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-500">Home</span>
        </Link>
        <Link href='/shop' type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <RiShoppingBag3Fill className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-500" />
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-500">Shop</span>
        </Link>
        <Link href='/sell' type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">

        <MdStore className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-500"/>

            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-500">Sell</span>
        </Link>
        <Link href='/play' type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <IoQrCode className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-500" />
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-500">Play</span>
        </Link>
        <Link href='/info' type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <FaCircleInfo className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-500" />

            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-500">More</span>
        </Link>
    </div>
</div>

  )
}
