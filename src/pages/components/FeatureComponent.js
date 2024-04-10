export default function FeatureComponent() {
    return (
        <section className="px-[3.25rem] xl:px-[12.75rem] 2xl:px-[17rem] flex flex-col md:flex-row justify-between space-y-[1.5rem] md:space-y-0 py-[5rem] xl:py-[7rem] 2xl:py-[10rem]">
            <div className="flex flex-col items-center space-y-[0.9rem] xl:space-y-[1.25rem] text-center">
                <div className="p-[14px] md:p-[24px] bg-white rounded-full">
                    <img src="/img/icon/shop.svg" className="w-[20px] h-[20px] md:w-full md:h-full"/>
                </div>
                <h3 className="text-primer font-semibold text-base text-[23px] xl:text-[25px]">Gak Usah Ribet<br/>Datengin Outlet</h3>
                <p className="text-sekunder text-sm">
                    Pemesanan bisa di lakuin <br/>
                    100% online !
                </p>
            </div>
            <div className="flex flex-col items-center space-y-[0.9rem] xl:space-y-[1.25rem] text-center">
                <div className="p-[14px] md:p-[24px] bg-white rounded-full">
                    <img src="/img/icon/award.svg" className="w-[20px] h-[20px] md:w-full md:h-full"/>
                </div>
                <h3 className="text-primer font-semibold text-base text-[23px] xl:text-[25px]">Nikmati Menu<br/>Terbaik kami!</h3>
                <p className="text-sekunder text-sm">
                    Menu buka puasa, dari menu<br/>
                    favorit pelanggan kami!
                </p>
            </div>
            <div className="flex flex-col items-center space-y-[0.9rem] xl:space-y-[1.25rem] text-center">
                <div className="p-[14px] md:p-[24px] bg-white rounded-full">
                    <img src="/img/icon/users.svg" className="w-[20px] h-[20px] md:w-full md:h-full"/>
                </div>
                <h3 className="text-primer font-semibold text-base text-[23px] xl:text-[25px]">Mau Bukber?<br/>Gampaaang!</h3>
                <p className="text-sekunder text-sm">
                    Gausah repot nyari tempat bukber,<br/> kami aja yang datang!
                </p>
            </div>
        </section>
    )
}