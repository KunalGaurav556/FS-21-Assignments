import React from 'react'
import pic from '../assets/image.png'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 left-box order-2 md:order-1' >
                <span className='text-xl'>Welcome In My Feed</span>
                <div className='flex flex-row space-x-2 text-2xl md:text-4xl '>
                <h1>Hello, I'm a </h1>
                {/* <span > Developer</span> */}
                <ReactTyped
                   className='text-red-600 font-bold'
                   strings={["Developer", "Programmer", "Coder"]}
                   typeSpeed={40} 
                   backSpeed={50} loop
                />
                </div>
                <br />
                <p className='text-sm md:text-md text-justify font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus asperiores accusamus esse, impedit libero dicta facilis, obcaecati minima iusto distinctio eum minus saepe omnis. Laudantium tempora rem error non animi recusandae vero corrupti at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, neque!</p>
                <br />
                {/* social Media icons */}
                <div className='flex justify-between flex-col md:flex-row space-y-6 md:space-y-0 items-center'>
                    <div>
                        <h1>Available on</h1>
                        <ul className='flex space-x-5 py-2'>
                            <li><FaSquareFacebook className='text-2xl cursor-pointer' />
                        </li>
                            <li><FaInstagramSquare className='text-2xl cursor-pointer'/>
                        </li>
                            <li><FaLinkedin className='text-2xl cursor-pointer' />
                            </li>
                            <li><BsTelegram className='text-2xl cursor-pointer' /></li>
                        </ul>
                    </div>
                    <div>
                        <h1>Currently Working on</h1>
                        <div className='flex space-x-5 py-2'>
                            <FaReact className='text-2xl cursor-pointer' />
                            <SiMongodb  className='text-2xl cursor-pointer'/>
                            <SiExpress className='text-2xl cursor-pointer' />
                            <RiNodejsLine className='text-2xl cursor-pointer'/>   
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 md:order-2'>
                <img src={pic} alt=""  className='rounded-full w-[450] h-[450px]'/>
            </div>
        </div>
        <br />
        <hr />
    </div>
    
  )
}

export default Home