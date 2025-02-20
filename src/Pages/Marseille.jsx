import Hero from "../Components/hero";
import Intro from "../Components/Intro";
import Title from "../Components/Title";
import datas from "../Data/data.json";

function Marseille() {
    return (
        <div id="marseille">
            <Hero title="marseille" />
            <Intro
                text="Découvrez Marseille, ville ensoleillé entre mer et histoire ! Flânez dans le Vieux-Port, cœur battant de la cité phocéenne. admirez
                Notre-Dame de la Garde, gardienne des marins et des âmes. Savourez une bouillabaisse face au bleu infini de la méditerranée. Des
                calanques sauvages aux ruelles du Panier coloré. Chaque coin dévoile un mélange unique de cultures. Authentique, vibrante et pleine
                de caractère. Marseille vous attend pour une avanture inoubliable !"
            />
            <section className="visit">
                <div className="container">
                    <Title title="à voir, à visiter" />
                    <div className="visitContent"></div>
                </div>
            </section>
            <section className="excursion">
                <div className="container">
                    <Title title="excursions porposer par costa" />
                    <div className="excursionContent"></div>
                </div>
            </section>
        </div>
    )
}

export default Marseille