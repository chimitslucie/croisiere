import Hero from "../Components/hero";
import Title from "../Components/Title";
import datas from "../Data/data.json";
import SliderSteps from "../Components/sliderSteps";

function HomePage() {
    return (
        <div id="home">
            <Hero title="notre croisière" />
            <div className="intro">
                <div className="container">
                    <p className="introText textSecondary">
                        Notre croisière en Méditerranée se fera à bord du Costa Sméralda.
                        <br />
                        Le partira de Marseille le samedi 24 mai à 18h et reviendra à Marseille le samedi 31 mai à 9h.
                        <br />
                        Durant cette semaine, vous aurez la chance de visiter plusieurs villes d'Espagne et d'Italie.
                    </p>
                </div>
            </div>
            <section className="steps">
                <div className="container">
                    <Title title="étapes" />
                    <div className="stepsContent">
                        <SliderSteps />
                    </div>
                </div>
            </section>
            <section className="animation">
                <div className="container">
                    <Title title="animations sur le bateau" />
                    <div className="animationContent">
                        {datas.animations.map((animation, index) => (
                            <div className="card" key={index}>
                                <div className="cardText">
                                    <p className="time textUppercase textDarkblue">{animation.time}</p>
                                    <h3 className="cardTitle textUppercase textDarkblue">{animation.activite}</h3>
                                    <p className="text textSecondary">{animation.text}</p>
                                </div>
                                <img className="img" src={animation.image} />
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage