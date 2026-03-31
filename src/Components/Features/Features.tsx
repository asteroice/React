import style from "./Features.module.css";
import Icon1 from "../../assets/icon/dinner 1.svg";
import Icon2 from "../../assets/icon/swimming-pool-swimmer-svgrepo-com 2.svg";
import Icon3 from "../../assets/icon/workout-svgrepo-com 1.svg";
import Icon4 from "../../assets/icon/spa 1.svg";

export const Features = () => {
  return (
    <>
      <div className={style["features-section"]}>
        <h1>Удобства</h1>
        <div className={style["features-container"]}>
          <div className={style["feature-item"]}>
            <Icon1 />
            <p>Ресторан с прекрасным видом и итальянской кухней</p>
          </div>
          <div className={style["feature-item"]}>
            <Icon2 />
            <p>Бассейн с подогревом под открытым небом</p>
          </div>
          <div className={style["feature-item"]}>
            <Icon3 />
            <p>Просторный фитнесс зал</p>
          </div>
          <div className={style["feature-item"]}>
            <Icon4 />
            <p>Обширный выбор спа-процедур</p>
          </div>
        </div>
      </div>
    </>
  );
};
