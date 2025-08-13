import React from 'react'
import card1 from "../assets/images/card-1.jpg"
import card2 from "../assets/images/card-2.jpg"
import card3 from "../assets/images/card-3.jpg"
import card4 from "../assets/images/card-4.jpg"
import card5 from "../assets/images/card-5.jpg"

function Best() {
  return (
    <>
      <main className='overflow-x-hidden'>
        <h1 className='font-bold text-[24px] relative left-5 top-8 xl:top-0 w-fit'>Discover our best of summer 2025</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6 mt-10'>
          <div className='relative left-3 hover:cursor-pointer w-fit'>
            <img src={card1} className='w-[147px] h-[150px] object-cover rounded-2xl xl:w-[200px] xl:h-[200px]' />
            <h1 className='font-semibold text-[18px] ml-2 w-[160px]'>New Arrivals</h1>
          </div>
          <div className='relative left-3 hover:cursor-pointer w-fit'>
            <img src={card2} className='w-[147px] h-[150px] object-cover rounded-2xl xl:w-[200px] xl:h-[200px]' />
            <h1 className='font-semibold text-[18px] ml-2 w-[160px]'>Top 100 Summer Bestseller</h1>
          </div>
          <div className='relative left-3 hover:cursor-pointer w-fit'>
            <img src={card3} className='w-[147px] h-[150px] object-cover rounded-2xl xl:w-[200px] xl:h-[200px]' />
            <h1 className='font-semibold text-[18px] ml-2 w-[160px]'>Top 100 Summer Linen Finds</h1>
          </div>
          <div className='relative left-3 hover:cursor-pointer w-fit'>
            <img src={card4} className='w-[147px] h-[150px] object-cover rounded-2xl xl:w-[200px] xl:h-[200px]' />
            <h1 className='font-semibold text-[18px] ml-2 w-[160px]'>Top 100 Summer Hosting Essential</h1>
          </div>
          <div className='relative left-3 hover:cursor-pointer w-fit'>
            <img src={card5} className='w-[147px] h-[150px] object-cover rounded-2xl xl:w-[200px] xl:h-[200px]' />
            <h1 className='font-semibold text-[18px] ml-2 w-[160px]'>Top 100 Back To School Essential</h1>
          </div>
        </div>
      </main>
    </>
  )
}

export default Best