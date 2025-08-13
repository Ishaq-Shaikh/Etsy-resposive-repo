import diora from "../assets/images/diora-img.jpg"
import diorappf from "../assets/images/diora-ppf-img.jpg"
import hazy from "../assets/images/hazy-img.jpg"
import hazyppf from "../assets/images/hazy-ppf-img.jpg"
import blop from "../assets/images/blobsand-img.jpg"
import blopppf from "../assets/images/blobsand-ppf-img.jpg"
import { FaRegHeart } from "react-icons/fa";

function Discover() {
    return (
        <>
            <main >
                <div className="lg:flex ">
                    <div className="mt-20 sm:ml-35 md:ml-45 lg:relative lg:right-35 lg:ml-30 lg:mt-30">
                        <p className="text-[12px] text-[#5B5B5B] w-fit font-extrabold mt-4 relative left-30 lg:left-35">Local finds? Etsy has it.</p>
                        <h1 className="text-[24px] font-semibold relative left-15 lg:left-20 w-fit">Discover shops in India</h1>
                        <button className="border-[1.5px] border-black rounded-full  w-[268px] h-[48px] relative left-14 mt-6 font-semibold hover:cursor-pointer lg:w-[301px] lg:h-[48px]">Shop from local workers</button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3">
                        <div className="flex mt-6 h-[175px] w-[360px] border border-gray-400 rounded-2xl ml-2 hover:cursor-pointer sm:block sm:w-[180px] sm:h-[320px] md:w-[226px] md:h-[320px] lg:w-[180px] xl:w-[260px] xl:h-[400px]">
                            <img src={diora} className="h-[175px] w-[180px] rounded-l-2xl sm:rounded-none sm:rounded-t-2xl sm:h-[260px] md:w-[226px] xl:w-[260px] xl:h-[330px]" />
                            <div className="flex justify-center items-center gap-2 ml-4 sm:mt-4 sm:mr-6">
                                <img src={diorappf} className="border border-black h-[40px] rounded-full" />
                                <h1 className="font-bold">Dioraindia</h1>
                            </div>
                        </div>
                        <div className="flex mt-6 h-[175px] w-[360px] border border-gray-400 rounded-2xl ml-2 hover:cursor-pointer sm:block sm:w-[180px] sm:h-[320px] md:w-[226px] md:h-[320px] lg:w-[180px] xl:w-[260px] xl:h-[400px]">
                            <img src={hazy} className="h-[175px] w-[190px] rounded-l-2xl sm:rounded-none sm:rounded-t-2xl sm:h-[260px] md:w-[226px] xl:w-[260px] xl:h-[330px]" />
                            <div className="flex justify-center items-center gap-2 ml-4 sm:mt-4 sm:mr-6">
                                <img src={hazyppf} className="border border-black h-[40px] rounded-full" />
                                <h1 className="font-bold">HazyPalette</h1>
                            </div>
                        </div>
                        <div className="flex mt-6 h-[175px] w-[360px] border border-gray-400 rounded-2xl ml-2 hover:cursor-pointer sm:block sm:w-[180px] sm:h-[320px] md:w-[226px] md:h-[320px] lg:w-[180px] xl:w-[260px] xl:h-[400px]">
                            <img src={blop} className="h-[175px] w-[180px] rounded-l-2xl sm:rounded-none sm:rounded-t-2xl sm:h-[260px] md:w-[226px] xl:w-[260px] xl:h-[330px]" />
                            <div className="flex justify-center items-center gap-2 ml-4 sm:mt-4 sm:mr-6">
                                <img src={blopppf} className="border border-black h-[40px] rounded-full" />
                                <h1 className="font-bold">Blobsand</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Discover 