import { Link } from "react-router-dom";

import "./LargeCard.css";

export const LargeCard = ({
  image,
  title,
  price,
  description,
  area,
  capacity,
  amenities,
}: {
  image: string;
  title: string;
  price: string;
  description: string;
  area: string;
  capacity: string;
  amenities: string[];
}) => {
  return (
    <div className="room-card">
      <div className="room-card__image">
        <img src={image} alt={title} />
      </div>

      <div className="room-card__content">
        <div className="room-card__header">
          <h2 className="room-card__title">{title}</h2>
          <span className="room-card__price">{price} ₽/ночь</span>
        </div>

        <p className="room-card__description">{description}</p>

        <div className="room-card__info">
          <span>Площадь: {area} м²</span>
          <span>Вместимость: {capacity} гостя</span>
        </div>

        <div className="room-card__amenities">
          <h3>Удобства номера:</h3>
          <div className="amenities-list">
            {amenities.map((amenity, index) => (
              <span key={index} className="amenity-tag">
                {amenity}
              </span>
            ))}
          </div>
        </div>

        <button className="room-card__button">
          <Link style={{ color: "white" }} to={"/"}>
            Забронировать сейчас
          </Link>
        </button>
      </div>
    </div>
  );
};
