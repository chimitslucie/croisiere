import Hero from "../Components/hero";
import Intro from "../Components/Intro";
import Title from "../Components/Title";
import cagliari from "../Data/cagliari.json";

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
                    <div className="visitContent">
                        {
                            cagliari.voirs.map((voir, index) => (
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
                            cagliari.excursions.map((excursion, index) => (
                                <div className="card" key={index}>
                                    <div className="cardContent">
                                        <img src={excursion.image} />
                                        <div className="cardContentText">
                                            <h2 className="textUppercase textDarkblue textBold">{excursion.name}</h2>
                                            <p className="time textSecondary">La durée de l'excursion est de {excursion.time}</p>
                                            <p className="price textSecondary">{excursion.price}</p>
                                            <p className="text textSecondary textSemibold">{excursion.text}</p>
                                            <p className="info textSecondary textSemibold">{excursion.info}</p>
                                            <a href={excursion.lien} className="link textDarkblue">Lien pour réserver: {excursion.lien}</a>
                                        </div>
                                        <button className="btn" onClick={handleShow}><FontAwesomeIcon icon={faChevronDown} className="btnIcon" /></button>
                                    </div>
                                    <p className={`plus textSecondary textSemibold ${show ? 'show' : ""}`}>{excursion.plus}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cagliari