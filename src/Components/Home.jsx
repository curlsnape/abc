import React, { useEffect, useRef, useState } from 'react'
import { IoMdClose } from "react-icons/io";

function Home() {
  const [ismodalopen, setismodalopen] = useState(false)
  const [isinitial, setisinitial] = useState(true)
  const timerid = useRef(null)
  const modalhandler = (duration) => {
    clearInterval(timerid.current)
    timerid.current = setInterval(() => {
      setismodalopen(true)
    }, duration);
  }
  useEffect(() => {
    if (isinitial) {
      modalhandler(10000)
      setisinitial(false)
    }
    return () => clearInterval(timerid.current)
  }, [])
  const handleclose = () => {
    setismodalopen(false)
    modalhandler(20000)
  }

  return (
    <div className='w-full h-screen py-20 bg-zinc-300 flex flex-col items-center font-[gilroy]'>
      <h2 className='font-semibold text-center text-2xl my-5 sm:text-5xl '>Welcome to my Homepage</h2>
      <p className='font-semibold text-center text-sm '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, voluptates quidem! Recusandae quaerat soluta nobis, enim impedit esse ratione quibusdam, doloremque, aspernatur earum hic excepturi.</p>
      {ismodalopen && <div className='md:w-[50vh] w-[40vh] relative overflow-hidden h-[50vh] rounded-2xl bg-zinc-200 shadow-lg mt-5'>
        <div className='w-full h-52 '>
          <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1608571424266-edeb9bbefdec?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        </div>
        <p className='text-xs mt-5 font-semibold text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio culpa sequi dignissimos qui sint nobis ipsa. Officia odit itaque iste inventore incidunt autem neque ut exercitationem, quam rerum dolor quasi?</p>
        <button onClick={handleclose} className='absolute h-5 w-5 bg-black top-2 flex justify-center items-center text-white rounded-full opacity-75 right-2'><IoMdClose /></button>
      </div>}
    </div>
  )


}

export default Home