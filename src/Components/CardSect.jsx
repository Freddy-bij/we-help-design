

const CardSect = () => {
    return (
        <div className="pt-10 grid grid-cols-1 text-white text-[19px]  w-1/2 mx-auto 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 ">
            <div className="bg-[#8247C9] px-20 py-8 ">

               
                    <div className="w-[300px] h-[300px] mb-10 ">
                        <img src="/public/image copy.png" alt="man" className="w-full h-full rounded-full" />
                    </div >
                    <p className="text-center"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
              

            </div>

            <div className="bg-[#C8ADE9] px-20 py-8 ">
                <p className="text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                <div className="w-[300px] h-[300px] mt-20 "> <img src="/public/wom.png" alt="girl" className="w-full h-full rounded-full" /> </div>
            </div>
        </div>
    )
}

export default CardSect