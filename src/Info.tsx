import mainHotelPhoto from "./assets/img/mainHotelPhoto.png"
import hotelPhotos from "./assets/img/img-2.png"

const Info = () => {

    return (
        <div className="infoContainer">
            <div className="textInfo">
                <p>Гостиница «Imperial» – это современное шестиэтажное здание. Приезжайте посмотреть, какой хороший вид на город из него открывается!</p>
            </div>
            <div>
                <img className="mainHotelPhoto" src={mainHotelPhoto} alt="" />
            </div>
        </div>
    );
}

export default Info;