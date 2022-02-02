import Head from 'next/head';
import ClientSideRender from '../components/ClientSideRender';
import styles from '../styles/Home.module.css';

// 'getServerSideProps' must be named exactly and exported in order to provide props to Component
export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();

  return {
    props: { todos: data },
  };
}

export default function Home({todos}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className="ssr">
          <h1 className={styles.title}>
            Welcome to SSR in <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <ClientSideRender></ClientSideRender>

        </section>
      </main>
    </div>
  );
}
