import Hero from "../Components/hero";
import Intro from "../Components/Intro";
import Title from "../Components/Title";
import naples from "../Data/naples.json";

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
                    <div className="visitContent">
                        {
                            naples.voirs.map((voir, index) => (
                                <div className="card" key={index}>
                                    <img src={voir.image} />
                                    <div className="cardContent">
                                        <h2 className="textUppercase textDarkblue textBold">{voir.name}</h2>
                                        <p className="text textSecondary textSemibold">{voir.text}</p>
                                        <p className="trajet textSecondary">Le temps depuis le bateau est {voir.temps}</p>
                                        <p className="price textSecondary">{voir.price}</p>
                                        <a href={voir.lien} className="link textDarkblue">{voir.lien}</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="excursion">
                <div className="container">
                    <Title title="excursions porposer par costa" />
                    <div className="excursionContent">
                        {
                            naples.excursions.map((excursion, index) => (
                                <div className="card" key={index}>
                                    <img src={excursion.image} />
                                    <div className="cardContent">
                                        <h2 className="textUppercase textDarkblue textBold">{excursion.name}</h2>
                                        <p className="text textSecondary textSemibold">{excursion.text}</p>
                                        <p className="info textSecondary textlight">{excursion.info}</p>
                                        <a href={excursion.lien} className="link textDarkblue">Pour plus d'informations</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Naples