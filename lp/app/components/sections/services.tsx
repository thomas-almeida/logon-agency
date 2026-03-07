import { Flag, Origami } from "lucide-react";

export default function Services() {
    return (
        <>
            <div id="services" className="py-8 md:py-10">
                <h2 className="font-bold px-4 md:px-8">
                    <p className="font-thin leading-0">Nossos</p><br />
                    <p className="font-bold text-2xl md:text-4xl leading-0">Serviços</p>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 md:pt-10 px-4 md:px-8">
                    <div className="bg-slate-50/10 p-4 md:p-8 rounded">
                        <Origami size="64px" strokeWidth="0.5px" className="my-2 mb-4 md:mb-6" />
                        <h2 className="font-bold text-xl md:text-4xl pb-4">Criatividade & Design</h2>
                        <ul className="list-disc px-4 md:px-6">
                            <li>Conceitos e Criativos</li>
                            <li>Marca, Logotipo e ID Visual</li>
                            <li>Embalagem e Merchandising</li>
                            <li>Filmes, Videos e Jingles</li>
                        </ul>
                    </div>
                    <div className="bg-slate-50/10 p-4 md:p-8 rounded">
                        <Flag size="64px" strokeWidth="0.5px" className="my-2 mb-4 md:mb-6" />
                        <h2 className="font-bold text-xl md:text-4xl pb-4">Marketing Tradicional & Eventos</h2>
                        <ul className="list-disc px-4 md:px-6">
                            <li>Mídia Offline e Patrocínios</li>
                            <li>Ações e Merchandising</li>
                            <li>Produção Gráfica & Audiovisual</li>
                            <li>Gestão de Eventos</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}