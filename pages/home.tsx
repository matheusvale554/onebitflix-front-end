import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HeaderAuth from "@/components/common/headerAuth"
import FeaturedSection from "@/components/homeAuth/featuredSection";
import NewestCategory from "@/components/homeAuth/newestCategory";
import FavoriteCategory from "@/components/headerNoAuth/favoriteCategory";
import FeaturedCategory from "@/components/homeAuth/featuredCategory";
import ListCategories from "@/components/homeAuth/listCategories";
import Footer from "@/components/common/footer";
import PageSpinner from "@/components/common/spinner";

const HomeAuth = function () {
  const router = useRouter()
const [loading,setLoading] = useState(true);
useEffect(() => {
  if (!sessionStorage.getItem("onebitflix-token")) {
    router.push("/login");
  } else {
    setLoading(false);
  }
}, []);
if(loading){
  return <PageSpinner/>
}

  return (
    <>
      <Head>
        <title>Onebitflix - Home</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <FeaturedSection/>
        <NewestCategory />
        <FavoriteCategory/>
        <FeaturedCategory/>
        <ListCategories/>
        <Footer />
      </main>
    </>
  );
};

export default HomeAuth;