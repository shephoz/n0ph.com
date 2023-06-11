import styles from "./page.module.css";
import Logo from "./logo";

const links = [
  { title: "YouTube", url: "https://www.youtube.com/@_n0ph" },
  { title: "ニコニコ動画", url: "https://www.nicovideo.jp/user/32806540" },
  { title: "Twitter", url: "https://www.twitter.com/_n0ph" },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Logo />

      <div className={styles.grid}>
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>{link.title}</h2>
          </a>
        ))}
      </div>
    </main>
  );
}
