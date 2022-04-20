import Router from 'next/router'
import '../styles/globals.css'
import nprogress from 'nprogress'
import "nprogress/nprogress.css"
import { useEffect } from 'react'

Router.events.on("routeChangeStart", nprogress.start)
Router.events.on("routeChangeError", nprogress.done)
Router.events.on("routeChangeComplete", nprogress.done)

function MyApp({ Component, pageProps }) {
  useEffect(() => window.scrollTo(0, 1))
  return <Component {...pageProps} />
}

export default MyApp
