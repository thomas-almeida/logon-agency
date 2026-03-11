import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Enterprises from "./enterprises"

export default function HeroSection() {
    return (
        <>
            <div className="fixed -top-20  flex justify-center items-center w-full bg-[url(https://images.unsplash.com/photo-1568359415705-47e98104af04?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center relative">

                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

                <div className="p-6 md:p-10 py-16 pt-38 md:py-36 xl:pt-62 text-center flex flex-col justify-center items-center bg-black/60 w-full relative z-10">
                    <Image src={"/logo.png"} alt="Logo" width={100} height={100} className="mb-4" />
                    <h1 className="text-3xl md:text-6xl font-bold tracking-tighter">Siga Nossas Pegadas</h1>
                    <p className="text-slate-400 px-4 md:px-16 lg:px-64 pt-2">Somos a Logon, uma agência que une estratégia, design e tecnologia para dar voz à sua marca</p>
                    <Link
                        href={'mailto:logonagenciapublicitaria@gmail.com?subject=Contato Logon'}
                        className="p-2 mt-4 mb-8 px-6 rounded-full shadow-2xl bg-white text-background font-bold flex justify-between items-center cursor-pointer"
                    >
                        Comece Agora
                        <ArrowUpRight className="ml-4" />
                    </Link>

                    <Enterprises />
                </div>

            </div>
        </>
    )
}