import heroImg from "../assets/images/main-img-1.jpg"
import heroImg2 from "../assets/images/main-img-2.jpg"

function Hero() {
  return (
    <>
      <header className="overflow-hidden flex">
        <div className='h-[400px] w-[360px] rounded-2xl bg-[#FFFBD8] mt-5 ml-4.5 relative sm:w-[500px] sm:h-[286px] sm:flex sm:flex-row md:w-[720px] lg:w-[900px] lg:h-[390px] xl:left-4 xl:w-[500px] xl:h-[400px] hover:cursor-pointer lg:left-4'>
          <h1 className='font-play text-[30px] tracking-wider relative top-5 left-8 w-fit sm:h-[85px] md:text-[35px]'>Classroom's Calling</h1>
          <div className='relative top-6 left-22 text-[20px] z-5 w-fit sm:top-35 sm:-left-28 sm:h-[75px] lg:top-45 xl:block xl:top-45 xl:text-[20px]'>
            <p className="sm:w-[186px]">Get special supplies</p>
            <p className='ml-4 lg:ml-0 xl:ml-4'>from small shops</p>
          </div>
          <img src={heroImg} className="relative top-8 rounded-b-2xl rounded-t-[44%] object-cover sm:top-0 sm:rounded-l-none sm:rounded-t-none sm:-left-6 sm:rounded-r-2xl sm:w-[250px] md:left-20 lg:w-[500px] xl:w-[300px]" />
          <div className="w-fit">
            <button className="relative bottom-13 left-30 z-50 bg-[#222222] text-white h-[48px] w-[122px] rounded-full font-semibold hover:cursor-pointer sm:-left-130 sm:top-55 lg:top-80 lg:-left-180 xl:-left-160">Get Started</button>
          </div>
        </div>
        <div className="hidden xl:block">
          <img src={heroImg2} className="h-[400px] w-[400px] relative top-5 left-80 rounded-2xl" />
          <div className="relative left-85 bottom-15 text-[24px] text-white font-bold">
            <p>School Suplies</p>
            <p>Shop Now</p>
          </div>
        </div>
      </header>
    </>
  )
}

export default Hero