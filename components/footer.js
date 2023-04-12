import Link from "next/link";
import styles from "../styles/footer.module.css";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <nav className={styles.navigation}>
          <Link href="/" legacyBehavior>
            Home
          </Link>
          <Link href="/store" legacyBehavior>
            Store
          </Link>
          <Link href="/about" legacyBehavior>
            About Us
          </Link>
          <Link href="/blog" legacyBehavior>
            Blog
          </Link>
        </nav>

        <div className={styles.copyright}>
          All Rights Reserved {new Date().getFullYear()}
          <div className={styles.copyright__logo}>
            <FaRegCopyright />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
