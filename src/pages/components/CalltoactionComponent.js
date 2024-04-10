export default function CallToActionComponent () {
    return (
        <section className="pb-[9rem] px-[1.9rem] xl:px-[20rem] 2xl:px-[24rem]">
            <div className="flex flex-col items-center space-y-[1rem] xl:space-y-[2.5rem] text-center">
                <h4 className="font-semibold text-[20px] xl:text-[40px] text-primer">
                    Tunggu Apa Lagi?<br/>
                    Yuk Pesan!
                </h4>
                <p className="text-[#AC6535]">
                    Segera chat kami di whatsapp untuk atur<br/>
                    jadwal buka puasa!
                </p>
                <div className="flex items-start md:space-x-[3.4rem]">
                    <img src="/img/icon/vector-right.svg" className="hidden md:inline-block"/>
                    <button className="rounded-[12px] bg-neutral2 xl:py-[1.1rem] px-[1rem] py-[1.1rem] xl:px-[1.2rem] 2xl:py-[1.4rem] 2xl:px-[2rem] flex space-x-[0.5rem] text-tersier">
                        <p>Pesan lewat Whatsapp</p>
                        <img src="/img/icon/cream-chevron-right.svg"/>
                    </button>
                    <img src="/img/icon/vector-left.svg" className="hidden md:inline-block"/>
                </div>
            </div>
        </section>
    )
}