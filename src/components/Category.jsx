import shop1 from "../assets/images/shop-out-1.jpg"
import shop2 from "../assets/images/shop-out-2.jpg"
import shop3 from "../assets/images/shop-out-3.jpg"
import shop4 from "../assets/images/shop-out-4.jpg"
import shop5 from "../assets/images/shop-out-5.jpg"
import shop6 from "../assets/images/shop-out-6.jpg"

function Category() {
    return (
        <>
            <main className="overflow-x-hidden">
                <h1 className='font-bold text-[24px] relative top-15 left-4 w-[38   0px]'>Shop our most-loved categories</h1>
                <div className='overflow-x-auto whitespace-nowrap scrollbar-hide p-4 space-x-4 flex overflow-y-hidden h-[320px] lg:overflow-x-hidden xl:grid xl:grid-cols-6'>
                    <div>
                        <div className="h-[220px] w-[155px] relative top-20">
                            <img src={shop1} className="h-[187px] w-[150px] rounded-2xl hover:cursor-pointer" />
                            <h1 className="font-semibold relative left-10">Clothing</h1>
                        </div>
                    </div>
                    <div>
                        <div className="h-[220px] w-[155px] relative top-20">
                            <img src={shop2} className="h-[187px] w-[150px] rounded-2xl hover:cursor-pointer" />
                            <h1 className="font-semibold relative left-5">Water Glasses</h1>
                        </div>
                    </div>
                    <div>
                        <div className="h-[220px] w-[155px] relative top-20">
                            <img src={shop3} className="h-[187px] w-[150px] rounded-2xl hover:cursor-pointer" />
                            <h1 className="font-semibold relative left-5">Wall Hanging</h1>
                        </div>
                    </div>
                    <div>
                        <div className="h-[220px] w-[155px] relative top-20">
                            <img src={shop4} className="h-[187px] w-[150px] rounded-2xl hover:cursor-pointer" />
                            <h1 className="font-semibold relative left-8">NecKlaces</h1>
                        </div>
                    </div>
                    <div>
                        <div className="h-[220px] w-[155px] relative top-20">
                            <img src={shop5} className="h-[187px] w-[150px] rounded-2xl hover:cursor-pointer" />
                            <h1 className="font-semibold relative left-10">T-Shirt</h1>
                        </div>
                    </div>
                    <div>
                        <div className="h-[220px] w-[155px] relative top-20">
                            <img src={shop6} className="h-[187px] w-[150px] rounded-2xl hover:cursor-pointer" />
                            <h1 className="font-semibold relative left-10">Dresses</h1>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Category