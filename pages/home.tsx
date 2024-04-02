import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import HeaderAuth from "@/components/homeAuth";

const HomeAuth = function () {
  const router = useRouter()
  useEffect(() => {
    if (sessionStorage.getItem("onebitflix-token")) {
      router.push("/home");
    }
  }, []);
  return (
    <>
      <Head>
        <title>Onebitflix - Home</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <HeaderAuth/>
      </main>
    </>
  );
};

export default HomeAuth;