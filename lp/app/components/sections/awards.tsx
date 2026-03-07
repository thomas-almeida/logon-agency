import { Flag, Origami } from "lucide-react";
import Image from "next/image";

export default function Awards() {
    return (
        <>
            <div id="awards" className="py-8 md:py-10">
                <h2 className="font-bold px-4 md:px-8">
                    <p className="font-thin leading-0">Kahoot</p><br />
                    <p className="font-bold text-2xl md:text-4xl leading-0">Prêmios</p>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 md:pt-10 px-4 md:px-8">
                    <Image
                        src={"/awards/awards-1.png"}
                        alt="Premio 1"
                        width={500}
                        height={100}
                        className="w-full h-full object-cover rounded shadow-2xl"
                    />
                    <Image
                        src={"/awards/awards-2.png"}
                        alt="Premio 1"
                        width={500}
                        height={100}
                        className="w-full h-full object-cover rounded shadow-2xl"
                    />
                </div>
                <div className="grid grid-cols-1 gap-4 py-2 px-4 md:px-8">
                    <Image
                        src={"/awards/awards-3.png"}
                        alt="Premio 1"
                        width={1000}
                        height={100}
                        className="w-full h-full object-cover rounded shadow-2xl"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-8">
                    <Image
                        src={"/awards/awards-4.png"}
                        alt="Premio 1"
                        width={800}
                        height={100}
                        className="w-full h-full object-cover rounded shadow-2xl"
                    />
                    <Image
                        src={"/awards/awards-5.png"}
                        alt="Premio 1"
                        width={800}
                        height={100}
                        className="w-full h-full object-cover rounded shadow-2xl"
                    />
                </div>
            </div>
        </>
    )
}