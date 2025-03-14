import Slider from "react-slick";
import datas from "../Data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function SliderRestaurant() {

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
        slidesToShow: 3,
        slidesToScroll: 3,
        fade: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />
                },
            },
        ]
    }

    return (
        <div className="restaurantContent">
            <Slider {...settings}>
                {datas.restaurants.map((restaurant, index) => (
                    <div className="restaurantSlider" key={index}>
                        <img src={restaurant.image} alt={restaurant.alt} className="restaurantSliderImage" />
                        <div className="restaurantSliderContent">
                            <h3 className="restaurantSliderContentTitle textUppercase textBold">{restaurant.name}</h3>
                            <p className="restaurantSliderContentPont textUppercase textSemibold">{restaurant.pont}</p>
                            <p className="restaurantSliderContentSubtitle textUppercase textSemibold">{restaurant.status}</p>
                            <p className="restaurantSliderContentText">{restaurant.text}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default SliderRestaurant