import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

const name = "Hussain Usman";
export const siteTitle = "Next.js sample website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/public/favicon.ico" />
        <meta
          name="description"
          content="learn how to build personal websites with Next.js"
        />
        <meta
          name="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="og:twitter" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              className={utilStyles.borderCircls}
              src="/images/profile.jpg"
              width={144}
              height={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  width={108}
                  height={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2>
              <Link className={utilStyles.headingLg} href="/">
                <a className={utilStyles.colorInherent}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back To Home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
