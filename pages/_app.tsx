import "../styles/global.scss"
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app"

function myApp({Component,pageProps}:AppProps) {
    return <Component {...pageProps}/>
}

export default myApp