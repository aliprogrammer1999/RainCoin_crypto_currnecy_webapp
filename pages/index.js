import Head from "next/head";
import { useTheme } from "next-themes";
export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Head>
        <title>RainCoin </title>
        <meta name="description" content="watch coin in market with raincoin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Hero</main>
    </>
  );
}
