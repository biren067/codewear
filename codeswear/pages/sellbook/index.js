import React, { useRef, useState } from 'react'
import { BsBook } from 'react-icons/bs'
import Image from 'next/image'

function index() {
    const imageRef2 = useRef(null)
    const [image2, setImage2] = useState("")
    const [username, setUserName] = useState("Birendra kumar")
    const [mobileContact, setmobileContact] = useState("933456949")
    const [emailContact, setemailContact] = useState("birendrabitian@gmail.com")
    const handleImageClick = () => {
        console.log(imageRef2.current)
        imageRef2.current.click()

    }
    const onImageChange = (event) => {
        const file = event.target.files[0];
        console.log("KK", event)
        setImage2(file)
    }


    return (
        <>
            {/* page block */}
            <div className='py-4 flex-col item-center justify-center'>
                {/* Heading for item sell */}
                <div className=''>
                    <div className='bg-slate-400 text-center my-5 py-2 text-xl font-semibold'>Post your Item to Sell</div>
                    {/* Book basic info */}
                    <div className='bg-slate-500 '>
                        {/* title */}
                        <div className='ml-20'>
                            <div>Title:</div>
                            <input type="text" placeholder='Title of book' size={48}
                                className='border-2  rounded border-gray-500'>

                            </input>
                        </div>
                        {/* Description */}
                        <div className='ml-20 border-t-2'>
                            <div>Description:</div>
                            <textarea rows={5} cols={50}
                                className='border-2  rounded border-gray-500'>
                            </textarea>
                        </div>
                        {/* price */}
                        <div className='ml-20 border-t-2'>
                            <div>Price(₹)</div>
                            <div>

                                <input type="text" placeholder='Title of book' size={48}
                                    className='border-2  rounded border-gray-500'>

                                </input>
                            </div>

                        </div>
                        {/* upload images */}
                        <div className='ml-20 border-t-2'>
                            <div>Upload Images of the Items:</div>
                            <div className='flex-col md:flex-row justify-around items-center'>

                                <div >

                                    {image2 ?
                                        (<Image alt="" src={URL.createObjectURL(image2)} width={100} height={100} />)

                                        : (<BsBook size={100} className='text-lg p-1' />)

                                    }

                                    <input type="file" ref={imageRef2} onChange={onImageChange} style={{ "display": "none" }} />
                                </div>
                                <div className='inline-block m-2 p-1 border-2 rounded'>

                                    <div onClick={() => { imageRef2.current.click() }} >

                                        {image2 ?
                                            (<Image alt="" src={URL.createObjectURL(image2)} width={100} height={100} />)

                                            : (<BsBook size={100} className='text-lg p-1' />)

                                        }

                                        <input type="file" ref={imageRef2} onChange={onImageChange} style={{ "display": "none" }} />
                                    </div>

                                </div>
                            </div>

                        </div>
                        {/* Location confirmation */}
                        <div className='ml-20 border-t-2'>
                            <div className='pt-4 pb-2'>Confirm your Location</div>
                            <div>
                                <div>start<sup>*</sup></div>
                                <select name="state" className='rounded'>
                                    <option value="ap">Arunachal Pradesh</option>
                                    <option value="Goa">Goa</option>
                                    <option value="JH">Jharkhand</option>
                                    <option value="Br">Bihar</option>
                                </select>
                            </div>
                        </div>
                        {/* user detial */}
                        <div className='ml-20 border-t-2 my-2'>
                            <p>REVIEW YOUR DETAILS</p>
                            <div><label>Name:</label><span className='text-lg text-cyan-500'>{username}</span></div>
                            <div>
                                <label>Mobile:</label><span className='text-lg text-cyan-500'>{mobileContact}</span></div>
                            <div><label>Email:</label><span className='text-lg text-cyan-500'>{emailContact}</span></div>

                        </div>
                        {/* post button */}
                        <div className='ml-20 border-t-2'>
                            <button className='bg-green-400 px-3 py-2 text-bold rounded m-2 border-green-200 border-2 font-bold'> Post Item</button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default index