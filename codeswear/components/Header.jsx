import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { AiOutlineShoppingCart, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { GrClearOption } from 'react-icons/gr'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
function Header() {
    const value = useSelector(state => state.cartItems.cartitems)
    const ref = useRef()
    const cartToggle = () => {
        if (ref.current.classList.contains("translate-x-full")) {  // it is hidden
            ref.current.classList.remove("translate-x-full")
            ref.current.classList.add("translate-x-0")

        } else if (ref.current.classList.contains("translate-x-0")) { // it is visible
            ref.current.classList.remove("translate-x-0")
            ref.current.classList.add("translate-x-full")
        }
    }
    return (
        <div className='flex flex-col items-center justify-center md:justify-between md:flex-row md-3 py-4 shadow-md'>
            <div className='logo'>
                <Link href="/">
                    <Image src="/logo4.png" width={40} height={20} alt="not found" />
                </Link>
            </div>
            <div className='div'>
                <ul className='flex flex-col md:flex-row gap-2 font-bold md:text-md'>
                    <Link href={"/"}><li>Home</li></Link>
                    <Link href={"/tshirt"}><li>T-shirt</li></Link>
                    <Link href={"/hoodies"}><li>Hoodies</li></Link>
                    <Link href={"/mugs"}><li>Mug</li></Link>
                    <Link href={"/contact"}><li>Contact</li></Link>
                    <Link href={"/about"}><li>About</li></Link>
                </ul>
            </div>

            <div className='mr-10'>
                {/* <div onClick={cartToggle} className='cart absolute right-0 top-4 mx-3 cursor-pointer'> */}
                <Link href="/sellbook/" className="mx-2 px-3 py-1 text-gray-800  rounded-md font-bold bg-yellow-300">Sell</Link>
                <div onClick={cartToggle} className='flex justify-between items-center absolute right-0 top-4 mx-3 cursor-pointer'>



                    <AiOutlineShoppingCart className="text-xl md:text-4xl" /><span>{value != 0 && value.length}</span>
                </div>
            </div>

            {/* Cart side bar  */}
            <div ref={ref} className='sidebar text-xs md:text-md z-10 w-60 md:w-80 bg-blue-100 absolute right-0 top-0 py-10 px-5 md:px-10 transform transition-transform translate-x-full'>

                <div onClick={cartToggle} className='cross absolute right-2 top-5 cursor-pointer text-2xl text-blue-500'>
                    <AiFillCloseCircle />
                </div>
                <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
                <ol className='list-decimal font-semibold'>
                    <li className='my-1 md:my-3'>
                        <div className='flex  items-around justify-center'>
                            <div className='w-[1/3] font-semibold'>bonsfasfss adfsfsf dsdfsdf sfsfsdfs sdlsdfjsl ldjlsflsjflksjflksflkjdsaj fsfsdfsd</div>
                            <div className='w-[2/3] font-semibold flex items-center justify-center text-lg'>
                                <AiFillMinusCircle className="cursor-pointer text-blue-500 mx-1" />
                                33
                                <AiFillPlusCircle className="cursor-pointer text-blue-500 mx-1" />
                            </div>
                        </div>

                    </li>

                    <li className='my-1 md:my-3'>
                        <div className='flex  items-around justify-center'>
                            <div className='w-[1/3] font-semibold'>bonsfasfss adfsfsf dsdfsdf sfsfsdfs sdlsdfjsl ldjlsflsjflksjflksflkjdsaj fsfsdfsd</div>
                            <div className='w-[2/3] font-semibold flex items-center justify-center text-lg'>
                                <AiFillMinusCircle className="cursor-pointer text-blue-500 mx-1" />
                                33
                                <AiFillPlusCircle className="cursor-pointer text-blue-500 mx-1" />
                            </div>
                        </div>

                    </li>

                    <li className='my-1 md:my-3'>
                        <div className='flex  items-around justify-center'>
                            <div className='w-[1/3] font-semibold'>bonsfasfss adfsfsf dsdfsdf sfsfsdfs sdlsdfjsl ldjlsflsjflksjflksflkjdsaj fsfsdfsd</div>
                            <div className='w-[2/3] font-semibold flex items-center justify-center text-lg'>
                                <AiFillMinusCircle className="cursor-pointer text-blue-500 mx-1" />
                                33
                                <AiFillPlusCircle className="cursor-pointer text-blue-500 mx-1" />
                            </div>
                        </div>

                    </li>


                    <li className='my-1 md:my-3'>
                        <div className='flex  items-around justify-center'>
                            <div className='w-[1/3] font-semibold'>bonsfasfss adfsfsf dsdfsdf sfsfsdfs sdlsdfjsl ldjlsflsjflksjflksflkjdsaj fsfsdfsd</div>
                            <div className='w-[2/3] font-semibold flex items-center justify-center text-lg'>
                                <AiFillMinusCircle className="cursor-pointer text-blue-500 mx-1" />
                                33
                                <AiFillPlusCircle className="cursor-pointer text-blue-500 mx-1" />
                            </div>
                        </div>

                    </li>


                    <li className='my-1 md:my-3'>
                        <div className='flex  items-around justify-center'>
                            <div className='w-[1/3] font-semibold'>bonsfasfss adfsfsf dsdfsdf sfsfsdfs sdlsdfjsl ldjlsflsjflksjflksflkjdsaj fsfsdfsd</div>
                            <div className='w-[2/3] font-semibold flex items-center justify-center text-lg'>
                                <AiFillMinusCircle className="cursor-pointer text-blue-500 mx-1" />
                                33
                                <AiFillPlusCircle className="cursor-pointer text-blue-500 mx-1" />
                            </div>
                        </div>

                    </li>

                </ol>
                {/* <button className="flex mx-auto mt-4 md:mt-8 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    <BsFillBagCheckFill className='m-1' />
                    Checkout</button> */}
                <div className='flex items-center justify-around mx-auto'>
                    <button className="flex  mt-2  md:mt-0 text-white bg-blue-500 border-0 py-1 px-2 focus:outline-none hover:bg-blue-600 rounded text-lg">
                        <BsFillBagCheckFill className='m-1' />
                        Checkout</button>
                    <button className="flex mt-2 md:mt-0 text-white bg-blue-500 border-0 py-1 px-2 focus:outline-none hover:bg-blue-600 rounded text-lg">
                        {/* <GrClearOption className='m-1 t' /> */}
                        Clean</button>
                </div>


            </div>
        </div>
    )
}

export default Header