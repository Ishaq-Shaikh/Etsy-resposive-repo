import sGift1 from "../assets/images/gift-for-you-1.jpg"
import sGift2 from "../assets/images/gift-for-you-2.jpg"
import sGift3 from "../assets/images/gift-for-you-3.jpg"
import sGift4 from "../assets/images/gift-for-you-4.jpg"
import sGift5 from "../assets/images/gift-for-you-5.jpg"

function Gift() {
    return (
        <>
            <main className="overflow-x-hiddenhidden">
                <div className="">
                    <h1 className='text-[16px] font-semibold relative top-4 left-4 w-[200px]'>Gift as special as they are</h1>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:grid-cols-4 xl:grid-cols-5">
                    <div className="w-[180px] h-[88px] border border-black rounded-2xl relative top-6 flex left-2 hover:cursor-pointer">
                        <img src={sGift1} className="w-[70px] h-[75px] rounded-2xl relative top-1.5 left-2" />
                        <h1 className="font-semibold relative top-8 left-4 w-fit h-[20px]">Host Gifts</h1>
                    </div>
                    <div className="w-[180px] h-[88px] border border-black rounded-2xl relative top-6 flex left-2 hover:cursor-pointer">
                        <img src={sGift2} className="w-[70px] h-[75px] rounded-2xl relative top-1.5 left-2" />
                        <h1 className="font-semibold relative top-4 left-4 w-[60px] h-[40px]">Gold Jewellery</h1>
                    </div>
                    <div className="w-[180px] h-[88px] border border-black rounded-2xl relative top-8 flex left-2 sm:top-6 hover:cursor-pointer">
                        <img src={sGift3} className="w-[70px] h-[75px] rounded-2xl relative top-1.5 left-2" />
                        <h1 className="font-semibold relative top-6 left-4 w-[20px] h-[40px]">Wedding Gift</h1>
                    </div>
                    <div className="w-[180px] h-[88px] border border-black rounded-2xl relative top-8 flex left-2 sm:hidden lg:block lg:top-6 lg:flex-wrap hover:cursor-pointer">
                        <img src={sGift4} className="w-[70px] h-[75px] rounded-2xl relative top-1.5 left-2" />
                        <h1 className="font-semibold relative top-4 left-4 w-[60px] h-[40px] lg:-top-15 lg:left-20 lg:w-[20px]">Persinalised Gift</h1>
                    </div>
                    <div className="hidden xl:block">
                        <div className="w-[180px] h-[88px] border border-black rounded-2xl relative top-6 flex left-2 hover:cursor-pointer">
                            <img src={sGift5} className="w-[70px] h-[75px] rounded-2xl relative top-1.5 left-2" />
                            <h1 className="font-semibold relative top-8 left-4 w-fit h-[40px]">Vintage Gift</h1>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Gift