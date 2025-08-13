import server from "../assets/images/server.png"
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
    return (
        <>
            <footer className="bg-[#222222] h-[185px] w-full text-white sm:h-[140px] md:h-[120px] lg:h-[80px]">
                <div className="lg:flex justify-between items-center lg:px-4">
                    <div className="text-[12px] font-bold flex gap-4 justify-center items-center hover:cursor-pointer w-[249px] h-[42px] ml-18 pt-8 sm:ml-50 md:ml-70 lg:m-0">
                        <img src={server} className="h-[20px] w-[20px]" />
                        <p>India</p>
                        <div className="border border-l-white h-[18px]"></div>
                        <p>English(IN)</p>
                        <div className="border border-l-white h-[18px]"></div>
                        <p>₹(INR)</p>
                    </div>
                    <div className="md:flex justify-center items-center lg:mt-6">
                        <div className="mt-8 ml-35 sm:ml-67 md:ml-0 lg:m-0">
                            <p className="w-[140px] h-[18px] flex justify-center items-center gap-2 text-[12px]">
                                <FaRegCopyright />2025 Etsy, Inc.
                            </p>
                        </div>
                        <div className="flex flex-wrap text-[12px] gap-8 justify-center items-center mt-4 ml-6 sm:ml-8 md:ml-0 md:mt-8 lg:m-0">
                            <p className="underline hover:cursor-pointer">Terms of use</p>
                            <p className="underline hover:cursor-pointer">Privacy</p>
                            <p className="underline hover:cursor-pointer">Interest-based ads</p>
                            <p className="underline hover:cursor-pointer">local shops</p>
                            <p className="underline hover:cursor-pointer">Region</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer