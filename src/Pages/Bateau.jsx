import Hero from "../Components/hero";
import Intro from "../Components/Intro";
import Title from "../Components/Title";
import datas from "../Data/data.json";
import Card from "../Components/Card";
import Slider from "react-slick";
import SliderRestaurant from "../Components/SliderRestaurant";
import diaro from "../Assets/Img/bateau/diaro-di-bordo.jpg";
import tarif from "../Assets/Img/bateau/tarifs.jpg";

function Bateau() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        fade: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            },
        ]
    }

    return (
        <div id="bateau">
            <Hero title="le bateau" />
            <Intro
                text=" Le Costa Smeralda a été construit en 2019. Il est l'un des plus gros bateaux de la flotte Costa mesurant 337m de long avec une 
                capacité d'accueil de plus de 6500 passagers. Il contient 20 ponts, 2612 cabines, 13 piscines et jacuzzi, 11 restaurants et snack-bar et 
                19 bar & lounge."
            />
            <div className="information">
                <div className="container">
                    <p className="informationText textSecondary">
                        Information : les appareils chauffant de type fer à repasser, les appareils chauffant de coiffure (lisseur, sèche-cheveux,
                        fer à boucler) sont interdits à bord. Dans chaque cabine, le linge de lit, serviette de bain, serviettes de plage et sèche-cheveux
                        sont fournis.
                    </p>
                </div>
            </div>
            <section className="entertainment">
                <div className="container">
                    <Title title="les divertissements" />
                    <div className="entertainmentContent">
                        {
                            datas.divertissements.map((divertissement, index) => (
                                <div className="entertainmentCard" key={index}>
                                    <div className="entertainmentCardContent">
                                        <h3 className="entertainmentCardTitle textUppercase textBold">{divertissement.name}</h3>
                                        <p className="entertainmentCardPont textUppercase textSemibold">{divertissement.pont}</p>
                                        <p className="entertainmentCardText textBold">{divertissement.text}</p>
                                    </div>
                                    <img src={divertissement.image} alt={divertissement.alt} className="entertainmentCardImg" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="restaurant">
                <div className="container">
                    <Title title="les restaurants et bar" />
                    <SliderRestaurant />
                </div>
            </section>
            <section className="sport">
                <div className="container">
                    <Title title="sports et bien-être" />
                    <div className="sportContent">
                        {datas.sports.map((sport, index) => (
                            <Card key={index} src={sport.image} alt={sport.alt} title={sport.name} pont={sport.pont} text={sport.text} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="shop">
                <div className="container">
                    <Title title="boutiques" />
                    <div className="shopContent">
                        {datas.boutiques.map((boutique, index) => (
                            <Card key={index} src={boutique.image} alt={boutique.alt} title={boutique.name} pont={boutique.pont} text={boutique.text} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="other">
                <div className="container">
                    <Title title="autres" />
                    <div className="otherContent">
                        <Slider {...settings}>
                            {datas.autres.map((autre, index) => (
                                <div className="otherSlider" key={index}>
                                    <img src={autre.image} alt={autre.alt} className="otherSliderImage" />
                                    <div className="otherSliderContent">
                                        <h3 className="otherSliderContentTitle textUppercase textDarkblue">{autre.name}</h3>
                                        <p className="otherSliderContentPont textUppercase textDarkblue textLight">{autre.pont}</p>
                                        <p className="otherSliderContentText textSecondary">{autre.text}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
            <section className="cabin">
                <div className="container">
                    <Title title="services dans les cabines" />
                    <div className="cabinContent">
                        <div className="card">
                            <img src={diaro} alt="page d'un journal" />
                            <div className="cardContent">
                                <h3 className="textUppercase textDarkblue textBold">diaro di bordo</h3>
                                <p className="textSecondary textSemibold">
                                    Journal de bord distribué tous les soirs en cabine. Il contient toutes les informations nécessaires sur les activités
                                    des jours suivants, les ports d'escale, les excursions disponibles, ainsi que les horaires des restaurants et de
                                    nombreuses autres informations utiles.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={tarif} alt="grille de tarifs" />
                            <div className="cardContent">
                                <h3 className="textUppercase textDarkblue textBold">service de blanchisserie</h3>
                                <p className="textSecondary textSemibold">
                                    Pour faire nettoyer un vêtement, il vous suffit de remplir le formulaire et de mettre les vêtements dans le sac prévu.
                                    Le cabinier l’amènera au Service Blanchisserie et vous le récupérerez dans la journée (si donner le matin) ou le
                                    lendemain (si donner le soir).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Bateau