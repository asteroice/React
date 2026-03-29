
import styles from './Rooms.module.css'
import { CarouselComponent } from "../Carousel/Carousel";

export const Rooms = () => {
    return (
        <>
            <div className={styles["rooms-container"]}>
                <CarouselComponent />
            </div>  
        </>
    );
}

