import IntervalsControls from "../IntervalsControls/IntervalsControls";
import SwiperComponent from "../SwiperComponent/SwiperComponent";
import styles from "./style.module.scss";

export default function BottomContainer() {
  return (
    <div className={styles.bottomContainer}>
      <SwiperComponent />
      <IntervalsControls tabletHide={true} />
    </div>
  );
}
