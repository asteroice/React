import { CardExample } from "../Components/SmallCard/Card";
import { Footer } from "../Components/Footer/Footer";
import { Nav } from "../Components/Nav/Nav";
import { LargeCard } from "../Components/LargeCard/LargeCard";

import CardImg from "../assets/img/image 2.png";
import CardImg2 from "../assets/img/image 3.png";
import CardImg3 from "../assets/img/image 4.png";
import CardImg4 from "../assets/img/image 5.png";
import CardImg5 from "../assets/img/image 6.png";
import CardImg6 from "../assets/img/image 7.png";

export const RoomsPage = () => {
  return (
    <div className="box">
      <Nav />
      <div className="h1-container">
        <h1>Наши Номера</h1>
        <p>Выберите один из наших элегантно оформленных номеров.</p>
      </div>
      <div className="cards-container">
        <LargeCard
          image={CardImg}
          title="Deluxe Room"
          price="16 999"
          description="Комфортное размещение с современными удобствами."
          area="35"
          capacity="2"
          amenities={[
            "King size bed",
            "Free WI-FI",
            "Кондиционер",
            "Мини-бар",
            "Балкон",
          ]}
        />
        <LargeCard
          image={CardImg2}
          title="Executive Suite"
          price="29 999"
          description="Просторный номер люкс с отдельной гостиной зоной и первоклассными удобствами."
          area="55"
          capacity="3"
          amenities={[
            "King size bed",
            "Кондиционер",
            "Мини-бар",
            "Кофе машина",
            "Балкон",
            "Free WI-FI",
          ]}
        />
        <LargeCard
          image={CardImg3}
          title="Imperial Suite"
          price="49 999"
          description="Непревзойденная роскошь с захватывающими видами и эксклюзивными удобствами."
          area="110"
          capacity="4"
          amenities={[
            "Обеденная зона",
            "Кондиционер",
            "Free WI-FI",
            "Премиум-бар",
            "Джакузи",
            "Терасса",
          ]}
        />
        <LargeCard
          image={CardImg4}
          title="Deluxe Room"
          price="16 999"
          description="Комфортное размещение с современными удобствами."
          area="35"
          capacity="2"
          amenities={["Бесплатный Wi-Fi", "Кондиционер", "Мини-бар"]}
        />
        <LargeCard
          image={CardImg5}
          title="Deluxe Room"
          price="16 999"
          description="Комфортное размещение с современными удобствами."
          area="35"
          capacity="2"
          amenities={["Бесплатный Wi-Fi", "Кондиционер", "Мини-бар"]}
        />
        <LargeCard
          image={CardImg6}
          title="Deluxe Room"
          price="16 999"
          description="Комфортное размещение с современными удобствами."
          area="35"
          capacity="2"
          amenities={["Бесплатный Wi-Fi", "Кондиционер", "Мини-бар"]}
        />
      </div>
      <Footer />
    </div>
  );
};
