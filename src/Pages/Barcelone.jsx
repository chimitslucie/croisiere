import Hero from "../Components/hero";
import Intro from "../Components/Intro";
import Title from "../Components/Title";
import barcelone from "../Data/barcelone.json";

function Barcelone() {
    return (
        <div id="barcelone">
            <Hero title="barcelone" />
            <Intro
                text="Découvrez Barcelone, une ville vibrante et ensoleillée ! Flâner sur les remblas, laissez-vous charmer par ses ruelles animées. 
                Admirez l'architecture unique de Gaudí, entre rêve et réalité. Dégustez des tapas savoureux dans une ambiance festive et chaleureuse.
                Chaque instant est magique, shopping, culture, gastronomie... tout y est fantastique ! Préparez-vous à une escapade inoubliable sous le 
                soleil catalan, Barcelone vous attend."
            />
            <section className="visit">
                <div className="container">
                    <Title title="à voir, à visiter" />
                    <div className="visitContent">
                        {
                            barcelone.voirs.map((voir, index) => (
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
                            barcelone.excursions.map((excursion, index) => (
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

export default Barcelone