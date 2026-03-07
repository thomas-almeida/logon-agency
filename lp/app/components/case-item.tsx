import Image from "next/image"

interface CaseItemProps {
    title: string
    image: string
}

export default function CaseItem({ title, image }: CaseItemProps) {
    return (
        <div className="relative group overflow-hidden cursor-pointer rounded">
            <Image
                alt="Case"
                src={image}
                width={500}
                height={400}
                className="shadow-2xl w-full transition-all group-hover:scale-105 cursor-pointer rounded"
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded">
                <h2 className="text-white text-2xl font-bold">{title}</h2>
            </div>
        </div>
    )
}