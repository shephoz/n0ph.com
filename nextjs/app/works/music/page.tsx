import styles from "./page.module.css";
import { createClient, PostgrestSingleResponse } from "@supabase/supabase-js";

type Music = {
  title: string;
  lyricist: string;
  published_at: string;
  niconico_id: string;
};

const client = createClient(
  process.env.NEXT_APP_SUPABASE_URL || "",
  process.env.NEXT_APP_SUPABASE_ANON_KEY || ""
);

export default async function Home() {
  const { data }: PostgrestSingleResponse<Music[]> = await client
    .from("n0ph_musics")
    .select(`*`);

  return (
    <main className={styles.main}>
      <h1 style={{ textAlign: "center", margin: "60px" }}>Works - music</h1>
      <div className={styles.grid}>
        {data
          ?.sort((m1, m2) => (m1.published_at < m2.published_at ? 1 : -1))
          .map((music) => (
            <a
              key={music.title}
              href={`https://nicovideo.jp/watch/${music.niconico_id}`}
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>{music.published_at}</p>
              <h2>{music.title}</h2>
              <p>詞：{music.lyricist}</p>
            </a>
          ))}
      </div>
    </main>
  );
}
