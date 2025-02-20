import Hero from "../Components/hero";
import Intro from "../Components/Intro";
import Title from "../Components/Title";
import datas from "../Data/data.json";

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

export default Genes