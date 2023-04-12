import Image from "next/image";
import Link from "next/link";
import styles from "../styles/header.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={`conatiner ${styles.bar}`}>
        <Link href="/">
          <Image src="/img/logo.png" alt="logo" width={300} height={40} />
        </Link>

        <nav className={styles.navigation}>
          <Link href="/" legacyBehavior>
            <a className={router.pathname === "/" ? styles.active : ""}>Home</a>
          </Link>
          <Link href="/store" legacyBehavior>
            <a className={router.pathname === "/store" ? styles.active : ""}>
              Store
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className={router.pathname === "/about" ? styles.active : ""}>
              About Us
            </a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a className={router.pathname === "/blog" ? styles.active : ""}>
              Blog
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
