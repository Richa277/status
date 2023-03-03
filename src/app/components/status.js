import { useContext } from "react";

import { statusValue } from "./home";

import styles from "./status.module.css";

function Status() {
  const value = useContext(statusValue);
  return (
    <div>
      {value && <div className={styles.green}></div>}
      {!value && <div className={styles.red}></div>}
    </div>
  );
}
export default Status;
