
import Footer from '../components/Footer';
import MainContent from "../components/MainContent";
import Head from "next/head";

export default function Home() {
  return (
      <>
          <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
              <link href="https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap" rel="stylesheet"/>
          </Head>
          <main>
              <MainContent/>
              <Footer/>
          </main>
      </>
  );
}
