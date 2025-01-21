import React, { useEffect, useRef } from 'react'
import Img from "../../public/vite.svg";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [isintial, setisintial] = useState(true)
  let timerid = useRef(null);
  const modalhandler = (duration) => {
    clearInterval(timerid.current)
    timerid.current = setInterval(() => {
      setModalOpen(true)
    }, duration);
  }
  useEffect(() => {
    if (isintial) {
      modalhandler(10000)
      setisintial(false)
    }
    return ()=> clearInterval(timerid.current)
  }, [])
  const handleClose = () => {
    setModalOpen(false)
    modalhandler(30000)
  }


  return (
    <div className='w-full font-[gilroy] h-screen py-32 px-5'>
      <h2 className='md:text-5xl font-semibold text-center text-3xl'>welcome to the homepage</h2>
      <div className='w-full flex justify-center gap-5 flex-col items-center'>
        <button onClick={() => setModalOpen(true)} className='text-white mt-5 bg-emerald-500 rounded-full py-1 px-3 text-sm md:text-xs'>New Arrival</button>
        {modalOpen && <div className='w-[50vh] overflow-hidden relative h-[50vh] bg-white rounded-2xl opacity-90'>
          <div className='imgdiv h-52 w-full'>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p className='font-semibold text-xs mt-5 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, ad temporibus dolore sit quam placeat laboriosam aliquid beatae repudiandae dignissimos neque reprehenderit blanditiis optio voluptatem.</p>
            <button onClick={handleClose} className='bg-black opacity-70 absolute top-2 right-2 text-white h-5 w-5 rounded-full flex justify-center items-center'><IoMdClose /></button>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Home