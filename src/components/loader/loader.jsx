import React, { useMemo } from "react";
import styles from "./Loader.module.css";

export const Loader = ({ value }) => {
  const style = useMemo(() => {
    let val = value;

    if (val > 100) val = 100;
    if (val < 0) val = 0;

    return {
      "--loader-completed-width": `${val}%`,
    };
  }, [value]);

  return (
    <div className={styles.Loader}>
      <div
        data-completed={`${value}%`}
        style={style}
        className={styles.LoaderInner}
      ></div>
    </div>
  );
};
