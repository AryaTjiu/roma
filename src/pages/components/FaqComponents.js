import { useRef, useState } from "react"

export default function FaqComponents() {
    const [focusInfo, setFocusInfo] = useState(false);
    const anotherButtonRef = useRef()

    function changeFocusHandler(data) {
        if(focusInfo == data) {
            anotherButtonRef.current.focus()
            setFocusInfo(false)
        } else {
            setFocusInfo(data)
        }
    }

    return (
        <section className="px-[1rem] md:px-[8rem] xl:px-[23rem] 2xl:px-[30rem] py-[6rem] ">
            {/* hidden button */}
            <button ref={anotherButtonRef} className="opacity-0"></button>

            <div className="flex flex-col space-y-[3rem] text-center">
                <h3 className="text-primer font-semibold text-[40px]">FAQ</h3>
                <ul className="flex flex-col space-y-[1rem] text-[#AC6535]">
                    <li>
                        <button className="px-[1.5rem] py-[1rem] bg-white rounded-[12px] shadow-lg w-full group" onClick={(e)=> changeFocusHandler(1)}>
                            <div className="flex items-start space-x-[0.9rem] text-left">
                                <div>
                                    <img src="/img/icon/chevron-up.svg" className="hidden group-focus:inline-block w-7 h-7"/>
                                    <img src="/img/icon/chevron-down.svg" className="group-focus:hidden w-7 h-7"/>
                                </div>
                                <div className="flex flex-col space-y-[8px]">
                                    <p className="font-semibold">Beneran gak perlu ke outlet ROMA, sama sekali?</p>
                                    <p className="font-light h-0 overflow-hidden group-focus:h-16 md:group-focus:h-12 xl:group-focus:h-8 duration-200">Iya dong! Bahkan pemesanan dilakukan online !</p>
                                </div>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className="px-[1.5rem] py-[1rem] bg-white rounded-[12px] shadow-lg w-full group" onClick={(e)=> changeFocusHandler(2)}>
                            <div className="flex items-start space-x-[0.9rem] text-left">
                                <div>
                                    <img src="/img/icon/chevron-up.svg" className="hidden group-focus:inline-block w-7 h-7"/>
                                    <img src="/img/icon/chevron-down.svg" className="group-focus:hidden w-7 h-7"/>
                                </div>
                                <div className="flex flex-col space-y-[8px]">
                                    <p className="font-semibold">Jangkauan Lokasi sampe mana?</p>
                                    <p className="font-light h-0 overflow-hidden group-focus:h-16 md:group-focus:h-12 xl:group-focus:h-8 duration-200">
                                        Wilayah klaten dan sekitarnya (Jogja, Solo, Wedi)  
                                    </p>
                                </div>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className="px-[1.5rem] py-[1rem] bg-white rounded-[12px] shadow-lg w-full group" onClick={(e)=> changeFocusHandler(3)}>
                            <div className="flex items-start space-x-[0.9rem] text-left">
                                <div>
                                    <img src="/img/icon/chevron-up.svg" className="hidden group-focus:inline-block w-7 h-7"/>
                                    <img src="/img/icon/chevron-down.svg" className="group-focus:hidden w-7 h-7"/>
                                </div>
                                <div className="flex flex-col space-y-[8px]">
                                    <p className="font-semibold">Harganya berapa? Mahal gak?</p>
                                    <p className="font-light h-0 overflow-hidden group-focus:h-32 md:group-focus:h-20 xl:group-focus:h-16 2xl:group-focus:h-16 duration-200">
                                        Per mangkok cuman 8-10rb, udah dapet menu bakso kecil, bakso besar, mie, dan bihun. Lengkap dengan topping kayak garam, lada, dan saos. 
                                    </p>
                                </div>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className="px-[1.5rem] py-[1rem] bg-white rounded-[12px] shadow-lg w-full group" onClick={(e)=> changeFocusHandler(4)}>
                            <div className="flex items-start space-x-[0.9rem] text-left">
                                <div>
                                    <img src="/img/icon/chevron-up.svg" className="hidden group-focus:inline-block w-7 h-7"/>
                                    <img src="/img/icon/chevron-down.svg" className="group-focus:hidden w-7 h-7"/>
                                </div>
                                <div className="flex flex-col space-y-[8px]">
                                    <p className="font-semibold">Minimal pemesanan berapa? pasti banyak nih</p>
                                    <p className="font-light h-0 overflow-hidden group-focus:h-20 md:group-focus:h-16 xl:group-focus:h-14 duration-200">Nggak kok! Order minimal 10 porsi juga udah bisa. Jadi gak harus ngajak satu kondangan.. hehe..</p>
                                </div>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className="px-[1.5rem] py-[1rem] bg-white rounded-[12px] shadow-lg w-full group" onClick={(e)=> changeFocusHandler(5)}>
                            <div className="flex items-start space-x-[0.9rem] text-left">
                                <div>
                                    <img src="/img/icon/chevron-up.svg" className="hidden group-focus:inline-block w-7 h-7"/>
                                    <img src="/img/icon/chevron-down.svg" className="group-focus:hidden w-7 h-7"/>
                                </div>
                                <div className="flex flex-col space-y-[8px]">
                                    <p className="font-semibold">Bisa ke jalan sempit kah?</p>
                                    <p className="font-light h-0 overflow-hidden group-focus:h-20 md:group-focus:h-16 xl:group-focus:h-14 duration-200">
                                        Jelas bisa. Selama masih dalam jangkauan kami akan kami usahakan yang terbaik!
                                    </p>
                                </div>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className="px-[1.5rem] py-[1rem] bg-white rounded-[12px] shadow-lg w-full group" onClick={(e)=> changeFocusHandler(6)}>
                            <div className="flex items-start space-x-[0.9rem] text-left">
                                <div>
                                    <img src="/img/icon/chevron-up.svg" className="hidden group-focus:inline-block w-7 h-7"/>
                                    <img src="/img/icon/chevron-down.svg" className="group-focus:hidden w-7 h-7"/>
                                </div>
                                <div className="flex flex-col space-y-[8px]">
                                    <p className="font-semibold">
                                        Kalo bukber anak sekolahan gimana nih?
                                    </p>
                                    <p className="font-light h-0 overflow-hidden group-focus:h-20 md:group-focus:h-16 xl:group-focus:h-8 duration-200">
                                        Bisa dongg.. Kami fleksibel yaa, bisa untuk acara bukber apa saja kok!
                                    </p>
                                </div>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </section>
    )
}