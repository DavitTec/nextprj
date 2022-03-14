// about
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";


export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>About</h1>

      </main>
      <div>
        Back to{" "}
          <Link href="/" >
          <a>Home</a>
        </Link>
      </div>

{
  // Insert footer
}
<footer className={styles.footer}>
  <a
    href="https://davittec.github.io/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Powered by {"   "}
    <img className={styles.logo1} src="/img/davit.svg" alt="DAVIT LOGO" height="16" />
  </a>
</footer>
 {
   // end footer
 }
    </div>
  );
}
