import Image from "next/image";
import Layout from "@/components/layout";
import styles from "../styles/about.module.css";

function About() {
  return (
    <div>
      <Layout title="About Us">
        <main className="container">
          <h2 className="heading">About us</h2>
          <div className={styles.content}>
            <Image
              alt="Image About Us"
              src="/img/about.jpg"
              width={1000}
              height={800}
            />
            <div>
              <p>
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi. Sed porttitor lectus nibh. Pellentesque in ipsum id orci
                porta dapibus. Curabitur aliquet quam id dui posuere blandit.
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                Curae.
              </p>
              <p>
                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                dui. Praesent sapien massa, convallis a pellentesque nec,
                egestas non nisi. Nulla quis lorem ut libero malesuada feugiat.
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi. Vestibulum ac diam sit amet quam vehicula elementum sed
                sit amet dui. 
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default About;
