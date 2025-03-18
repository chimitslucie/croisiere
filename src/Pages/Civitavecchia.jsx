import Hero from "../Components/hero";
import Intro from "../Components/Intro";
import Title from "../Components/Title";
import civitavecchia from "../Data/civitavecchia.json";

function Civitavecchia() {
    return (
        <div id="civitavecchia">
            <Hero title="civitavecchia/rome" />
            <Intro
                text="Découvrez Civitavecchia, porte d'entrée majestueuse vers Rome, la ville Éternelle. Flânez le long du port et imprégnez-vous de 
                son ambiance maritime admirez la majestueuse Forteresse Michel-ange, témoin de l'histoire. Entre plages dorées et vestiges antiques 
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
                    <div className="visitContent">
                        {
                            civitavecchia.voirs.map((voir, index) => (
                                <div className="card" key={index}>
                                    <img src={voir.image} alt={voir.alt} />
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
                    <Title title="excursions proposer par costa" />
                    <div className="excursionContent">
                        {
                            civitavecchia.excursions.map((excursion, index) => (
                                <div className="card" key={index}>
                                    <img src={excursion.image} alt={excursion.alt} />
                                    <div className="cardContent">
                                        <h2 className="textUppercase textDarkblue textBold">{excursion.name}</h2>
                                        <p className="cardContentInfos textSecondary">L'excursion durera {excursion.time} / {excursion.price}</p>
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

export default Civitavecchia