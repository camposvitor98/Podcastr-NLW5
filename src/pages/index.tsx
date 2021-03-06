import styles from "../styles/index.module.scss"

import Head from "next/head";

export default function Home(props) {
  return (
    <div className={styles.home}>
      <Head>
        <title>Podcastr</title>
      </Head>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}