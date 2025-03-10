import Hero from "../Components/hero";
import Intro from "../Components/Intro";
import Title from "../Components/Title";
import genes from "../Data/genes.json";

function Genes() {
    return (
        <div id="genes">
            <Hero title="gênes" />
            <Intro
                text="Découvrez Gênes, la perle cachée de la Ligurie ! Flânez dans ses ruelles étroites, pleines de charme et d'histoire. Admirez
                son port majestueux, entre modernité et tradition. Goûtez à la fameuse focaccia et au pesto authentique. Des palais somptueux
                aux vues imprenables sur la mer. Chaque coin de la ville révèle un trésor insoupçonné. Entre culture, gastronomie et 
                paysages enchanteurs, Gênes vous promet une escapade inoubliable !"
            />
            <section className="visit">
                <div className="container">
                    <Title title="à voir, à visiter" />
                    <div className="visitContent">
                        {
                            genes.voirs.map((voir, index) => (
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
                            genes.excursions.map((excursion, index) => (
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

export default Genes