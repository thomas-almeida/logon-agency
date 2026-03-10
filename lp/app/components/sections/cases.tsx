import CaseItem from "../case-item"
import cases from "@/app/utils/cases"

export default function Cases() {
    return (
        <section id="cases">
            <h2 className="px-4 md:px-6">
                <span className="font-thin leading-none block">Cases de</span>
                <span className="font-bold text-2xl md:text-4xl leading-none block">Sucesso</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 py-6 md:py-10 px-4 md:px-8">
                {cases.map((caseItem, index) => (
                    <CaseItem
                        key={index}
                        href={caseItem.href}
                        image={caseItem.coverImage}
                        title={caseItem.name}
                    />
                ))}
            </div>
        </section>
    )
}