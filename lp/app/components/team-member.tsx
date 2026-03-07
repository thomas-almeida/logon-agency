import Image from "next/image"

interface TeamMemberProps {
    image: string
    name: string
}

export default function TeamMember({ image, name }: TeamMemberProps) {
    return (
        <>
            <div className="text-center">
                <Image
                    src={image}
                    alt="Premio 1"
                    width={500}
                    height={500}
                    className="w-full h-full object-contain"
                />
                <h3 className="font-bold text-2xl tracking-tighter">{name}</h3>
            </div>
        </>
    )
}