import React from 'react'
import "./main.css"

const Main = () => {
  return (
    <div className='min-h-screen bg-black'>
        <div className='mx-4 md:mx-20'>
        <div className='flex pt-4 md:justify-between md:p-4 items-center space-x-2  flex-col md:flex-row'>
            <a href="#" className='cursor-pointer'> <img src="./assets/LearniumLogo.svg" alt="" /></a>
            <a href="https://bit.ly/tryLearniumDemo" className='md:flex md:space-x-2 md:items-center md:font-bold md:text-base md:text-neutral-400 cursor-pointer'> <p>Try demo</p> <i class="fa-solid fa-chevron-right"></i></a> 
        </div>
        <div className='flex justify-center items-center'>
            <video className='w-full h-64 md:w-96 md:h-96' autoplay loop src="./assets/mesh.mp4"></video>
        </div>
        <div className='lg:flex justify-center md:block text-center'>
            
                <p className='text font-black tracking-[-0.04em] text-6xl md:text-8xl lightr'>Innovate.</p>
                <p className='text font-black tracking-[-0.04em] text-6xl md:text-8xl lightr'>Educate.</p>
                <p className='text font-black tracking-[-0.04em] text-6xl md:text-8xl lightr'>Thrive.</p>
            
            {/* <p className='text font-black tracking-[-0.04em] text-6xl md:text-8xl'><span>Innovate.</span></p>
            <p className='text font-black tracking-[-0.04em] text-6xl md:text-8xl'><span>Educate.</span></p>
            <p className='text font-black tracking-[-0.04em] text-6xl md:text-8xl'><span>Thrive.</span></p> */}
            
        </div>
         <div className='pt-8 text-center'>
            <p className='flex justify-center items-center gradient-text1 text-sm md:text-2xl font-medium'>Unlock Tomorrow's Education with AI Today</p>
            <p className='flex justify-center items-center gradient-text1 text-sm md:text-2xl font-medium'>Be Part of the Learning Revolution – Get on the</p>
            <p className='flex justify-center items-center gradient-text1 text-sm md:text-2xl font-medium'>Waitlist for Exclusive Access.</p>
            
            <div className='flex justify-center items-center pt-8'>
                <a href="https://bit.ly/learniumWaitlist">
                   <button className='text-black bg-white cursor-pointer rounded-full px-6 py-3 md:px-14 md:py-4 space-x-2 hover:scale-105'>
                <i class="fa-regular fa-envelope"></i>
                <span className='lightr'>Join the Waitlist</span>
                <i class="fa-solid fa-chevron-right text-neutral-400"></i>
            </button> 
                </a>
                
            </div>
            
            </div>
        </div>

        <a href="https://bit.ly/tryLearniumDemo">
          <div className='flex justify-center items-center pt-8'>
            <button className='text-neutral-400 cursor-pointer sm:hidden space-x-2 hover:scale-105'>
          <span>Try demo</span>
          
          <i className="fa-solid fa-chevron-right"></i>
        </button>
        </div>  
        </a>

        
        
         <footer className='flex space-x-2 justify-center pt-6 items-center font-normal text-sm text-neutral-700'>
                <p>&copy; 2023 Learnium. All rights reserved.</p>
                </footer>

                
    </div>
  )
}

export default Main