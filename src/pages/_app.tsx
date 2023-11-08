import type { AppProps } from "next/app"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  console.log("hello")
  return <Component {...pageProps} />
}

export default MyApp
