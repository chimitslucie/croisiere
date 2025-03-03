import Hero from "../Components/hero";
import Intro from "../Components/Intro";
import Title from "../Components/Title";
import datas from "../Data/data.json";

function Civitavecchia() {
    return (
        <div id="civitavecchia">
            <Hero title="civitavecchia/rome" />
            <Intro
                text="Découvrez Civitavecchia, porte d'entrée majestueuse vers Rome, la ville Éternelle. Flânez le long du port et imprégnez-vous de 
                son ambiance maritime Admirez la majestueuse Forteresse Michel-Ange, témoin de l'histoire. Entre plages dorées et vestiges antiques 
                fascinants. Chaque recoin respire l'authenticité italienne. Entre culture, gastronomie et dolce vita, une escapade inoubliable vous attend."
            />
            <div className="information">
                <div className="container">
                    <p className="informationText textSecondary">
                        Information: En prévision du Jubiler de 2025, de nombreux monuments peuvent être en cours de rénovation et donc non visibles.
                    </p>
                </div>
            </div>
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

export default Civitavecchia