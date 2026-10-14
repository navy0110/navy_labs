import Image from "next/image";
import styles from "./brand.module.css";

export function Brand() {
  return <span className={styles.logo} role="img" aria-label="Navy Labs"><Image src="/brand/navy-labs-n.svg" alt="" width={48} height={55} className={styles.mark}/><span className={styles.name} aria-hidden="true">NAVY <span>LABS</span></span></span>;
}
