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
                    backgroundColor: caseObj.backgroundColor
                }}
            >
                <TopBar />
                <ContainerComposition>
                    <div className="md:px-32">
                        <h1 className="text-4xl font-bold md:text-4xl py-4 md:py-6">{caseObj.name}</h1>
                        <p className="text-2xl py-2 leading-7 font-extralight">{caseObj.text.goal}</p>

                        <h2 className="text-3xl py-1 font-bold">Proposta</h2>
                        <p className="text-2xl py-2 leading-7 font-extralight">{caseObj.text.description}</p>

                        <h2 className="text-3xl py-1 font-bold">Solucao</h2>
                        <p className="text-2xl py-2 leading-7 font-extralight">{caseObj.text.solution}</p>

                        <div className="p-12">
                            <Image
                                src={caseObj.coverImage}
                                alt={caseObj.name}
                                width={600}
                                height={100}
                                className="w-full"
                            />
                        </div>
                    </div>
                </ContainerComposition>
                <Footer />
            </main>
        </>
    )
}