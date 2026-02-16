import BottomContainer from "../BottomContainer/BottomContainer";
import CoordNet from "../CoordNet/CoordNet";
import TopContainer from "../TopContainer/TopContainer";
import styles from "./style.module.scss";

export default function Container() {
  return (
    <div className={styles.container}>
      <CoordNet />
      <TopContainer />
      <BottomContainer />
    </div>
  );
}
