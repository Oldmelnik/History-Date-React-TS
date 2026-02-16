import styles from "./style.module.scss";
import IntervalsControls from "../IntervalsControls/IntervalsControls";
import RoundControls from "../RoundControls/RoundControls";
import BigDates from "../BigDates/BigDates";

export default function TopContainer() {
  return (
    <div className={styles.topContainer}>
      <div className={styles.centerLine}></div>
      <div className={styles.title}>
        <div className={styles.titleWrapper}>
          <div className={styles.gradientLine}></div>
          Исторические <br />
          даты
        </div>
      </div>
      <BigDates />
      <IntervalsControls mobileHide={true} />
      <RoundControls />
    </div>
  );
}
