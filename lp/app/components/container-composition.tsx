
interface ContainerCompositionProps {
    children: React.ReactNode;
}

export default function ContainerComposition({ children }: ContainerCompositionProps) {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="w-[95%] md:w-[80%]">
                    {children}
                </div>
            </div>
        </>
    )
}