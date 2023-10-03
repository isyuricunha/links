// Packages
import Image from "next/image";

// Styles
import styles from "./Memoji.module.scss";

const Memoji = () => (
  <div className={`${styles.memoji} magnify`}>
    <Image
      className={styles.image}
      alt="Yuri Cunha"
      src="/images/memoji.gif"
      width={80}
      height={64}
    />
  </div>
);

export default Memoji;
