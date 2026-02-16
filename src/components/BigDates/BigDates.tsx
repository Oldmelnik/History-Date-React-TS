import { useContext } from "react";
import { DataContext } from "../../context";
import { INITIAL_INTERVALS } from "../../fixtures/fixtures";
import styles from "./style.module.scss";

export default function BigDates() {
  const { current } = useContext(DataContext);
  const interval = INITIAL_INTERVALS[current];

  return (
    <div className={styles.bigDates}>
      <span>{interval.start}</span>
      <span>{interval.end}</span>
    </div>
  );
}
