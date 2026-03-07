import Image from "next/image";
import TeamMember from "../team-member";

export default function Team() {
    return (
        <>
            <div id="about" className="py-8 md:py-10">
                <h2 className="font-bold px-4 md:px-8">
                    <p className="font-thin leading-0">Conheça</p><br />
                    <p className="font-bold text-2xl md:text-4xl leading-0">Nosso Time</p>
                </h2>

                <div className="py-6 md:py-8 px-4 md:px-8">
                    <p className="text-base md:text-xl text-slate-200 leading-6 tracking-tight font-semibold">
                        A Logon é uma agência publicitária criada para conectar marcas, ideias e pessoas. Unimos criatividade, estratégia e tecnologia para transformar conceitos em resultados reais e fortalecer negócios de todos os setores.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 py-4 md:py-6 gap-4 md:gap-8 px-4 md:px-8">
                    <TeamMember image="/team/ana-prates.png" name="Ana Prates" />
                    <TeamMember image="/team/ana-julia.png" name="Ana Julia" />
                    <TeamMember image="/team/camila.png" name="Camila" />
                    <TeamMember image="/team/marcos.png" name="Marcos" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 py-6 md:py-8 gap-4 md:gap-8 px-4 md:px-8">
                    <TeamMember image="/team/maria-lu.png" name="Maria Lu" />
                    <TeamMember image="/team/maryana.png" name="Maryana" />
                    <TeamMember image="/team/naely.png" name="Naely" />
                    <TeamMember image="/team/rebeka.png" name="Rebeka" />
                </div>
            </div>
        </>
    )
}