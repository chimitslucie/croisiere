import Hero from "../Components/hero";
import Intro from "../Components/Intro";
import Title from "../Components/Title";
import datas from "../Data/data.json";

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

export default Barcelone