import Image from "next/image";
import styles from "./brand.module.css";

export function Brand() {
  return <Image src="/brand/navy-labs-logo.webp" alt="Navy Labs" width={1200} height={319} sizes="(max-width: 700px) 155px, 230px" className={styles.logo}/>;
}
