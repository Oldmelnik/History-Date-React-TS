import { useContext, useEffect, useRef, useState } from "react";
import { CircleWithDots } from "../../class";
import { DataContext } from "../../context";
import { DOT_SIZE, INITIAL_INTERVALS } from "../../fixtures/fixtures";
import styles from "./style.module.scss";

export default function RoundControls() {
  const [circle, setCircle] = useState<CircleWithDots>();
  const { current, setCurrent } = useContext(DataContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref?.current && !circle) {
      const newCircle = new CircleWithDots(ref.current, current, DOT_SIZE);
      setCircle(newCircle);
    }
  }, []);

  useEffect(() => {
    if (circle) {
      circle.moveTo(current);
    }
  }, [current]);

  return (
    <div className={styles.roundControls}>
      <div ref={ref} className={styles.circle}>
        {INITIAL_INTERVALS.map((_, i) => {
          const index = (i + current) % INITIAL_INTERVALS.length;
          return (
            <div
              className={`${styles.dot} ${index === current ? styles.dotActive : ''}`}
              key={index}
              onClick={() => setCurrent(index)}
            >
              <div className={styles.number}>{index + 1}</div>
              <div className={styles.label}>
                {INITIAL_INTERVALS[index].title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
