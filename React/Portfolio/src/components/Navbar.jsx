import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import {Link} from 'react-scroll'
import pic from '../assets/image.png'

function Navbar() {
  const [menu, setMenu] = useState(false)

  const navItems = [
    {
      id:1,
      text: "Home"
    },
    {
      id: 2,
      text: "About"
    },
    {
      id:1,
      text: "Portfolio"
    },
    {
      id:1,
      text: "Experience"
    },
    {
      id:1,
      text: "Contact"
    }
  ]


  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 bottom-0 navbar z-10 bg-slate-50'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex space-x-2'>
            <img src={pic} alt="" className='h-12 w-12 rounded-full' />
            <h1 className='font-semibold text-xl cursor-pointer'>Kuna<span className='text-green-700 text-2xl'>L</span>
            <p className='text-sm'>Web Developer</p></h1>
          </div>
          <div>
            <ul className='hidden md:flex space-x-8'>
              {
                navItems.map(({id,text}) => (
                  <li key={id} className='hover:scale-105 duration-200 cursor-pointer'>
                    <Link to={text} 
                    smooth = {true}
                    duration={500}
                    offset={-70}
                    activeClass='active'
                    >{text}</Link>
                    
                    </li>
                ))

              }
            </ul>
            <div onClick={() => setMenu(!menu)} className='md:hidden'>{menu ? <IoIosCloseCircle size={35}/> : <MdMenu size={28} />}</div>
          </div>
        </div>
        {
          menu && 
          <div>
            <ul className='md:hidden h-screen font-semibold flex flex-col items-center justify-center space-y-3 text-xl'>
              {
                navItems.map(({id,text}) => (
                  <li key={id} className='hover:scale-105 duration-200 cursor-pointer'>{text}</li>
                ))
              }
          </ul>
        </div>
        }
      </div>
    </>
  )
}

export default Navbar