import Link from "next/link";
import styles from "../styles/footer.module.css";

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

        <p className={styles.copyright}>
          All Rights Reserved {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
