import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="py-[4.8rem] px-[5.75rem] md:px-[35rem] bg-primer flex flex-col justify-center items-center space-y-[3.5rem] text-white text-center text-base">
            <div className="space-y-[1rem] flex flex-col">
                <Link href="#" className="underline">Instagram</Link>
                <Link href="#" className="underline">E-Mail</Link>
                <Link href="#" className="underline">Facebook</Link>
            </div>
            <span>Roma Copyright 2024 All rights reserved.</span>
        </footer>
    )
}