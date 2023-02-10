//components
import Carousel from "nuka-carousel"
//style
import './ads.scss'
const Ads = () => {


    return (
        <Carousel
            className="ads"
            autoplay={true}
            autoplayInterval={2000}
            wrapAround={true}
            slidesToShow={5}>
            <div className="ads__card"></div>
            <div className="ads__card"></div>
            <div className="ads__card"></div>
            <div className="ads__card"></div>
            <div className="ads__card"></div>
            <div className="ads__card"></div>
            <div className="ads__card"></div>
            <div className="ads__card"></div>
            <div className="ads__card"></div>
            <div className="ads__card"></div>
        </Carousel>
    )
}

export default Ads