import HeaderNoAuth from "@/components/headerNoAuth";
import Head from "next/head";
import styles from "../styles/homeNoAuth.module.scss";
import PresentationSection from "@/components/homeNoAuth/presentationSection/index";
import CardsSection from "@/components/homeNoAuth/cardsSection/index";


const HomeNotAuth = function () {
    return (
        <>
            <Head>
                <title>Onebitflix</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
                <meta property="og:title" content="Onebitflix" key="title" />
                <meta name="description" content="Tenha acesso aos melhores conteúdos de programação de uma forma simples e fácil!" />
            </Head>

            <main>
                <div className={styles.sectionBackground}>
                <HeaderNoAuth/>
                <PresentationSection />
                </div>
                <CardsSection/>
            </main>
        </>
    )
};

export default HomeNotAuth;