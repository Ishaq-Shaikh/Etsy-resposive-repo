import logo from "../assets/images/logo.svg"
import server from "../assets/images/server.png"
import { FaRegHeart } from "react-icons/fa";
import { GoGift } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";
import { RiMenu2Line } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  return (
    <>
      <nav className="w-full h-[120px] overflow-x-hidden">
        <div className="flex justify-between items-center py-3 px-3">
          <div>
            <img src={logo} className="h-7 sm:h-10" />
          </div>
          <div className="flex gap-8">
            <p className="text-[12px] font-semibold hover:cursor-pointer">Sign in</p>
            <div className="border-[2px] border-black rounded-full p-[2px]">
              <img src={server} className="hover:cursor-pointer" />
            </div>
            <FaRegHeart size={20} className="hover:cursor-pointer" />
            <GoGift size={20} className="hover:cursor-pointer" />
            <LuShoppingCart size={20} className="hover:cursor-pointer" />
          </div>
        </div>
        <div className="flex gap-4 pl-4 absolute">
          <div className="flex relative bottom-10 left-35 gap-2">
            <IoMdMenu size={20} className="hidden lg:block hover:cursor-pointer" />
            <p className="hidden lg:block text-[12px] font-semibold hover:cursor-pointer">Categories</p>
          </div>
          <RiMenu2Line size={25} className="mt-3.5 lg:hidden" />
          <div className=" w-[315px] h-[48px] border-2 border-[#222222] rounded-full flex justify-between sm:w-[540px] md:w-[670px] lg:w-[433px] lg:relative lg:left-40 lg:bottom-14">
            <input type="text" placeholder="Search for anything" className="p-3 border-none outline-none w-[270px] sm:w-[515px] md:w-[643px] lg:w-[384px]" />
            <div className="text-white bg-flamingo w-[38px] h-[38px] rounded-full mt-1 mr-2 hover:mt-0 hover:mr-0 hover:w-[47px] hover:h-[44px] hover:rounded-r-full hover:rounded-l-none hover:bg-[#F69A6C] transition-all duration-300 ease-in-out">
              <IoSearch className="text-2xl mt-1.5 ml-2 hover:mt-3 hover:ml-3 transition-all duration-30 ease-in-out hover:cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="hidden lg:block ">
          <div className="flex justify-center items-center font-semibold gap-8 text-[12px] mt-5 w-full">
            <p className="flex gap-2"><GoGift size={15} className="hover:cursor-pointer" />Gifts</p>
            <p>Fast Delivery: School Finds</p>
            <p>Home Favourites</p>
            <p>Fashion Finds</p>
            <p>Registry</p>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar