import Slider from "react-slick";
import datas from "../Data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function SliderSteps() {

    const NextArrow = ({ onClick }) => {
        return (
            <div className="custom-arrow next" onClick={onClick}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="custom-arrow prev" onClick={onClick}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 580,
                settings: {
                    arrows: false
                },
            },
        ],
    }

    return (
        <div className="sliderSteps">
            <div className="sliderStepsContent">
                <Slider {...settings}>
                    {datas.etapes.map((etape, index) => (
                        <div className="sliderStepsCard" key={index}>
                            <img src={etape.image} alt={etape.alt} className="image" />
                            <div className="sliderStepsCardText">
                                <p className="date textUppercase">{etape.date}</p>
                                <h2 className="city textUppercase">{etape.ville}</h2>
                                <p className="text">{etape.text}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default SliderSteps