import { useContext } from "react";
import styles from "./style.module.scss";
import { DataContext } from "../../context";
import { INITIAL_INTERVALS } from "../../fixtures/fixtures";
import Arrow from "../../assets/arrow.svg";

export default function IntervalsControls({
  mobileHide = false,
  tabletHide = false,
}: {
  mobileHide?: boolean;
  tabletHide?: boolean;
}) {
  const { current, setCurrent } = useContext(DataContext);
  const totalCount = INITIAL_INTERVALS.length;

  const nextInterval = () => {
    if (current < totalCount - 1) setCurrent(current + 1);
  };

  const prevInterval = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <div
      className={`${styles.controls} ${mobileHide ? styles.mobileHide : ''} ${tabletHide ? styles.tabletHide : ''}`}
    >
      <div className={styles.controlsTitle}>
        {current < 10 && 0}
        {current + 1}/{totalCount < 10 && 0}
        {totalCount}
      </div>
      <button
        className={`${styles.controlsLeftButton} ${styles.controlsButton} ${current <= 0 ? styles.controlsButtonInactive : ''}`}
        disabled={current <= 0}
        onClick={prevInterval}
      >
        <img src={Arrow} alt="" />
      </button>
      <button
        className={`${styles.controlsButton} ${current >= totalCount - 1 ? styles.controlsButtonInactive : ''}`}
        onClick={nextInterval}
        disabled={current >= totalCount - 1}
      >
        <img src={Arrow} alt="" />
      </button>
    </div>
  );
}
