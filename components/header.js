import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Image src="/img/logo.svg" alt="logo" width={300} height={40} />

        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/store">Store</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
