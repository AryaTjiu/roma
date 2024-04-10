export default function HeroComponent() {
    return (
        <section className="flex flex-col-reverse xl:flex-row xl:px-[6rem] 2xl:px-[12rem] xl:mt-[4rem] 2xl:mt-[7rem] w-full relative">
            <div className="flex flex-col items-center xl:items-start md:w-full xl:w-[50%] text-primer space-y-[1.1rem] xl:space-y-[1.2rem] 2xl:space-y-[2.5rem] text-center xl:text-start px-[1rem] md:px-0">
                <h1 className="font-semibold text-[24px] md:text-[40px] 2xl:text-[56px]">
                    Nikmati kelezatan bakso<br/>
                    Roma untuk buka puasa.<br/>
                    Di tempat anda.<br/>
                </h1>
                <p className="text-sekunder text-sm md:text-base">
                    Dengan paket spesial “Bukber di tempat” kami , kami akan datang<br/>
                    langsung ketempat anda dengan pramusaji, perlengkapan masak,<br/> 
                    dan topping lengkap.
                </p>
                <button className="bg-neutral2 w-fit h-fit rounded-[12px] py-[1rem] px-[1.1rem] xl:py-[1.1rem] xl:px-[1.2rem] 2xl:py-[22.5px] 2xl:px-[32px] text-tersier">
                    Pesan lewat Whatsapp {'>'}
                </button>
                <div className="flex xl:space-x-[2.5rem] items-center">
                    <div className="flex flex-col items-center">
                        <h6 className="text-primer xl:text-[32px] font-semibold">3+</h6>
                        <p className="xl:text-[16px] text-sekunder">Outlet</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h6 className="text-primer xl:text-[32px] font-semibold">30+</h6>
                        <p className="xl:text-[16px] text-sekunder">Menu</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h6 className="text-primer xl:text-[32px] font-semibold">750+</h6>
                        <p className="xl:text-[16px] text-sekunder">Review</p>
                    </div>
                </div>
                <div className="xl:mt-[1.25rem] flex xl:space-x-[7px]">
                    <div className="flex">
                        <img src="/img/icon/yellowStar.svg" alt="star" />
                        <img src="/img/icon/yellowStar.svg" alt="star"/>
                        <img src="/img/icon/yellowStar.svg" alt="star"/>
                        <img src="/img/icon/yellowStar.svg" alt="star"/>
                        <img src="/img/icon/star.svg" alt="star"/>
                    </div>
                    <div>
                        <span className="font-semibold text-primer">4.3</span> (773)
                    </div>
                    <p>di Google</p>
                </div>
            </div>    
            <img src="/img/heroImg.svg" className="hidden md:inline-block xl:w-[65%] 2xl:w-[45%] xl:absolute xl:-top-12 xl:bottom-0 xl:my-auto xl:-right-52"/>
            <img src="/img/heroImgMobile.svg" className="inline-block md:hidden"/>
        </section>
    )
}