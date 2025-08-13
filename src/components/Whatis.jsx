import { HiOutlineDotsHorizontal } from "react-icons/hi";

function Whatis() {
    return (
        <>
            <main>
                <div className='h-[1180px] w-full bg-[#FFFBD8] mt-8 overflow-hidden sm:h-[1240px] md:h-[1260px] xl:h-[1280px]'>
                    <div className="pt-10 pl-15 sm:pl-35 md:pl-48 lg:pl-80 xl:pl-120">
                        <h1 className='h-[34px] text-[31px] font-light pl-4 w-fit sm:text-[42px]' id="heading">What is Etsy India?</h1>
                        <p className="mt-2 text-[16px] w-fit text-[#595959] underline hover:cursor-pointer sm:pl-12 sm:pt-6">Read our wounderfully weired story.</p>
                    </div>
                    <div className="sm:ml-10 xl:ml-40">
                        <div>
                            <p className=" text-[16px] w-fit pt-16 pl-8 font-light sm:w-[520px] sm:h-[81px] md:w-[648px] lg:w-[900px]">Etsy is a global marketplace for creative and one-of-a-kind goods. It’s home to a universe of special, extraordinary items, <span className="hidden sm:inline">from unique home decor pieces to trending fashion finds. Founded in</span> <span className="hidden md:inline">2005, Etsy began its Indian journey in 2018</span></p>
                            <button className="bg-[#e0deca] w-[48px] h-[24px] rounded-full ml-8 mt-3 hover:bg-[#D4D1B4] hover:cursor-pointer sm:mt-22 xl:mt-15"><HiOutlineDotsHorizontal className="relative bottom-2 left-1" size={40} /></button>
                        </div>
                        <div className="pl-8 pt-8">
                            <h1 className="text-[18px] text-[#2638C0] font-bold w-fit">Why choose Etsy?</h1>
                            <p className="text-[16px] font-semibold w-fit">A community doing good</p>
                            <p className="text-[16px] font-light w-fit sm:w-[520px] sm:h-[81px] md:w-[648px] lg:w-[900px]">Etsy is where people come together to make, sell, buy, and collect unique items. <span className="hidden sm:inline">We’re also a community pushing for positive change </span><span className="hidden md:inline">for small businesses, people</span><span className="hidden lg:inline">, and the planet. Here are some of the ways we’re making a</span></p>
                            <button className="relative bg-[#e0deca] w-[48px] h-[24px] rounded-full ml-1 mt-3 hover:bg-[#D4D1B4] hover:cursor-pointer xl:mt-0"><HiOutlineDotsHorizontal className="relative bottom-2 left-1" size={40} /></button>
                        </div>
                        <div className="pl-8 pt-8">
                            <h1 className="text-[18px] text-[#2638C0] font-bold w-fit">What can you shop on Etsy?</h1>
                            <p className="text-[16px] font-light w-fit sm:w-[520px] sm:h-[81px] md:w-[648px] lg:w-[900px]">The imagination of Etsy sellers can run far and wide, which makes our platform a home to more than 100 million active <span className="hidden sm:inline">listings across home, style, and gifts. Some of our popular categories </span><span className="hidden md:inline">include:</span></p>
                            <button className="relative bg-[#e0deca] w-[48px] h-[24px] rounded-full ml-1 mt-3 hover:bg-[#D4D1B4] hover:cursor-pointer xl:mt-0"><HiOutlineDotsHorizontal className="relative bottom-2 left-1" size={40} /></button>
                        </div>
                        <div className="pl-8 pt-8">
                            <h1 className="text-[18px] text-[#2638C0] font-bold w-fit">How to buy on Etsy?</h1>
                            <p className="text-[16px] font-light w-fit sm:w-[520px] sm:h-[81px] md:w-[648px] lg:w-[900px]">If you’re looking for something specific, start by putting in the keywords in our search and then using filters to narrow <span className="hidden sm:inline">down the results. You can even message the sellers with any questions or</span><span className="hidden md:inline">requests you may have before placing an order</span><span className="hidden lg:inline">with them</span></p>
                            <button className="relative bg-[#e0deca] w-[48px] h-[24px] rounded-full ml-1 mt-3 hover:bg-[#D4D1B4] hover:cursor-pointer xl:mt-0"><HiOutlineDotsHorizontal className="relative bottom-2 left-1" size={40} /></button>
                        </div>
                        <div className="pl-8 pt-8">
                            <h1 className="text-[18px] text-[#2638C0] font-bold w-fit">How to sell on Etsy?</h1>
                            <p className="text-[16px] font-light w-fit sm:w-[520px] sm:h-[81px] md:w-[648px] lg:w-[900px]">You can sell handmade goods, vintage items, and craft supplies on Etsy. With low fees, powerful tools, and support <span className="hidden sm:inline">and education, we help creative entrepreneurs start, manage, and scale their</span><span className="hidden md:inline">businesses. Want to open a shop? All it takes is Rs</span><span className="hidden lg:inline">. 16* to start selling on Etsy.</span></p>
                            <button className="relative bg-[#e0deca] w-[48px] h-[24px] rounded-full ml-1 mt-3 hover:bg-[#D4D1B4] hover:cursor-pointer xl:mt-0"><HiOutlineDotsHorizontal className="relative bottom-2 left-1" size={40} /></button>
                        </div>
                        <div className="sm:ml-12 md:ml-25 lg:ml-55 xl:ml-60 xl:pt-16">
                            <h1 className="w-fit ml-6 mt-8 text-[16px] font-bold sm:text-[19px]">Have a question? Well, we’ve got some answers.</h1>
                            <button className="w-[174px] h-[48px] border-2 rounded-full text-[16px] font-semibold mt-6 ml-25 hover:cursor-pointer sm:ml-40"> Go To Help Center</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Whatis