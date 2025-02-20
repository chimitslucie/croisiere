import Hero from "../Components/hero";
import Intro from "../Components/Intro";
import Title from "../Components/Title";
import datas from "../Data/data.json";

function Cagliari() {
    return (
        <div id="cagliari">
            <Hero title="cagliari" />
            <Intro
                text="Découvrez Cagliari, perle ensoleillée de la Sardaigne ! Flânez dans son centre historique aux ruelles pittoresques. Admirez les vues
                spectaculaires depuis la Bastione di Saint Remy. Savourez des spécialités locales face à la mer turquoise. Plages paradisiaques, culture
                et douceur de vivre. Chaque instant ici respire l'authenticité et la beauté. Entre histoire, nature et saveurs méditerranéennes, Cagliari
                vous attend pour une escapade inoubliable !"
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

export default Cagliari