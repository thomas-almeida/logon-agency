import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function Contact () {
    return (
        <>
            <div id="contact" className="flex justify-center items-center w-full">
                <div className="p-6 md:p-10 py-16 md:py-24 text-center flex flex-col justify-center items-center">
                    <h1 className="text-3xl md:text-6xl font-bold tracking-tighter">Vamos Criar Algo Incrível</h1>
                    <p className="text-slate-400 px-4 md:px-16 lg:px-64 pt-2">Fale conosco e agende uma reunião</p>
                    <button
                        className="p-2 mt-4 px-6 rounded-full shadow-2xl bg-white text-background font-bold flex justify-between items-center cursor-pointer"
                    >
                        Fale Conosco
                        <ArrowUpRight className="ml-4" />
                    </button>
                </div>
            </div>
        </>
    )
}