import save1 from "../assets/images/save-now-1.jpg"
import save2 from "../assets/images/save-now-2.jpg"
import save3 from "../assets/images/save-now-3.jpg"
import save4 from "../assets/images/save-now-4.jpg"
import save5 from "../assets/images/save-now-5.jpg"

function Save() {
    return (
        <>
            <main>
                <h1 className='font-bold text-[24px] relative left-5 top-8 xl:top-0 w-fit'>Save now on standout styles</h1>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6 mt-10'>
                    <div className='relative left-3 hover:cursor-pointer'>
                        <img src={save1} className='w-[147px] h-[150px] object-cover rounded-2xl xl:w-[200px] xl:h-[200px]' />
                        <h1 className='font-semibold text-[18px] ml-2 w-[160px]'>Summer Hosting up to 30% off</h1>
                    </div>
                    <div className='relative left-3 hover:cursor-pointer'>
                        <img src={save2} className='w-[147px] h-[150px] object-cover rounded-2xl xl:w-[200px] xl:h-[200px]' />
                        <h1 className='font-semibold text-[18px] ml-2 w-[160px]'>Teacher Gifts up to 20% off</h1>
                    </div>
                    <div className='relative left-3 hover:cursor-pointer'>
                        <img src={save3} className='w-[147px] h-[150px] object-cover rounded-2xl xl:w-[200px] xl:h-[200px]' />
                        <h1 className='font-semibold text-[18px] ml-2 w-[160px]'>Summer Style up to 20% off</h1>
                    </div>
                    <div className='relative left-3 hover:cursor-pointer'>
                        <img src={save4} className='w-[147px] h-[150px] object-cover rounded-2xl xl:w-[200px] xl:h-[200px]' />
                        <h1 className='font-semibold text-[18px] ml-2 w-[160px]'>Birthday Gifts up to 20% off</h1>
                    </div>
                    <div className='relative left-3 hover:cursor-pointer'>
                        <img src={save5} className='w-[147px] h-[150px] object-cover rounded-2xl xl:w-[200px] xl:h-[200px]' />
                        <h1 className='font-semibold text-[18px] ml-2 w-[160px]'>Travel Accessories up to 30% off</h1>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Save