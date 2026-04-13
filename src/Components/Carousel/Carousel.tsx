import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/carousel/styles.css";

import { Carousel } from "@mantine/carousel";
import { CardExample } from "../SmallCard/Card";
import CardImg from "../../assets/img/image 2.png";
import CardImg2 from "../../assets/img/image 3.png";
import CardImg3 from "../../assets/img/image 4.png";
import CardImg4 from "../../assets/img/image 5.png";
import CardImg5 from "../../assets/img/image 6.png";
import CardImg6 from "../../assets/img/image 7.png";

export function CarouselComponent() {
  return (
    <Carousel
      withIndicators
      height={"105%"}
      slideSize="33.333333%"
      slideGap={10}
      emblaOptions={{ loop: true, align: "start", slidesToScroll: 1 }}
    >
      <Carousel.Slide>
        <CardExample
          CardImg={CardImg}
          heading="Deluxe Room"
          text="Комфортное размещение с современными удобствами."
          price="16 999 ₽/ночь"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <CardExample
          CardImg={CardImg2}
          heading="Executive Suite"
          text="Просторный номер-люкс с первоклассным оборудованием."
          price="20 999 ₽/ночь"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <CardExample
          CardImg={CardImg3}
          heading="Imperial Suite"
          text="Непревзойденная роскошь и захватывающие виды."
          price="49 999 ₽/ночь"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <CardExample
          CardImg={CardImg4}
          heading="Garden View Room"
          text="Тихий номер с видом на наши прекрасные сады."
          price="20 999 ₽/ночь"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <CardExample
          CardImg={CardImg5}
          heading="Penthouse Suite"
          text="Роскошные апартаменты на верхнем этаже с панорамным видом и эксклюзивными привилегиями."
          price="79 999 ₽/ночь"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <CardExample
          CardImg={CardImg6}
          heading="Classic Room"
          text="Уютный и элегантный номер, идеально подходящий как для деловых поездок, так и для отдыха."
          price="12 999 ₽/ночь"
        />
      </Carousel.Slide>
    </Carousel>
  );
}
