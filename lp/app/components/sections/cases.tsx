import Image from "next/image"
import CaseItem from "../case-item"

export default function Cases() {
    return (
        <>
            <div id="cases">
                <h2 className="font-bold px-4 md:px-6">
                    <p className="font-thin leading-0">Cases de</p><br />
                    <p className="font-bold text-2xl md:text-4xl leading-0">Sucesso</p>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 py-6 md:py-10 px-4 md:px-8">
                    <CaseItem image="/cases/case-1.png" title="Nescau Vegano" />
                    <CaseItem image="/cases/case-2.png" title="Kibon Marcando Território" />
                    <CaseItem image="/cases/case-3.png" title="Semana da Comunicação" />
                    <CaseItem image="/cases/case-5.png" title="HI TEA - Análise SWOT" />
                    <CaseItem image="/cases/case-6.png" title="O BOTICARIO - Estratégia de Marca" />
                    <CaseItem image="/cases/case-7.png" title="WANRI - Podcast" />
                    <CaseItem image="/cases/case-8.png" title="Connect Refeição" />
                    <CaseItem image="/cases/case-9.png" title="Pé na Arte - Pinacoteca SP" />
                    <CaseItem image="/cases/case-10.png" title="Dancando na PINA" />
                </div>
            </div>

        </>
    )
}