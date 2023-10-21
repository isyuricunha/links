// Packages
import Image from "next/image";

// Styles
import styles from "./Memoji.module.scss";

const Memoji = () => (
  <div className={`${styles.memoji} magnify`}>
    <Image
      className={styles.image}
      alt="Yuri Cunha"
      src="/images/me.jpg"
      width={140}
      height={128}
    />
  </div>
);

export default Memoji;
