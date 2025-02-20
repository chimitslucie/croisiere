import Hero from "../Components/hero";
import Intro from "../Components/Intro";
import Title from "../Components/Title";
import datas from "../Data/data.json";

function Naples() {
    return (
        <div id="naples">
            <Hero title="naples" />
            <Intro
                text="Découvrez Naples, une ville vibrante au cœur de l'Italie ! Flânez dans ses ruelles animées, empreintes d'histoire et de passion. 
                Admirez le Vésuve depuis le front de mer, un panorama saisissant. Dégustez la véritable pizza napolitaine, un pur délice authentique.
                Entre site antiques, culture et atmosphère envoûtante. Chaque coin de rue raconte une histoire fascinante. Des îles de Capri et Ischia
                aux trésors de Pompéi. Naples vous promet une aventure inoubliable !"
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

export default Naples