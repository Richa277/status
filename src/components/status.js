import styles from "./status.module.css";
function Status(props) {
  const set = props.set;
//   const [color, setColor] = useState("green");
  return (
    <div>
     {set && (
      <div className={styles.green}></div>
     )}
     {!set && (
        <div className={styles.red}></div>
     )}
    </div>
  );
}
export default Status;