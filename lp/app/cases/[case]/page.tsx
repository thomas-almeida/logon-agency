import TopBar from "@/app/components/topbar"
import ContainerComposition from "@/app/components/container-composition"
import Footer from "@/app/components/footer"
import cases from "@/app/utils/cases"
import { notFound } from "next/navigation"
import Image from "next/image"

interface CasePageProps {
    params: Promise<{ case: string }>
}

export default async function CasePage({ params }: CasePageProps) {
    const { case: caseName } = await params

    const caseObj = cases.find((item) => item.slug === caseName)

    if (!caseObj) notFound()

    return (
        <>
            <main
                style={{
                    backgroundColor: caseObj.backgroundColor,
                    color: caseObj.textColor
                }}
            >
                <TopBar />
                <ContainerComposition>
                    <div className="md:px-60 py-10 pb-20">


                        <div className="shadow-2xl mb-4">
                            <Image
                                src={caseObj.coverImage}
                                alt={caseObj.name}
                                width={600}
                                height={100}
                                className="w-full"
                            />
                        </div>

                        <h1 className="text-4xl font-bold md:text-6xl py-4 md:py-6 tracking-tighter">{caseObj.name}</h1>
                        <p className="text-2xl py-2 leading-7 font-extralight">{caseObj.text.goal}</p>

                        <h2 className="text-3xl py-1 font-bold">Proposta</h2>
                        <p className="text-2xl py-2 leading-7 font-extralight">{caseObj.text.description}</p>

                        <h2 className="text-3xl py-1 font-bold">Solucao</h2>
                        <p className="text-2xl py-2 leading-7 font-extralight">{caseObj.text.solution}</p>
                    </div>
                </ContainerComposition>
                <Footer />
            </main>
        </>
    )
}