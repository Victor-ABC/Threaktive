/* eslint-disable react/prop-types */
import React from "react"
import "../styles/global.css"
import Script from "next/script"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="/scripts/script.js" />
    </>
  )
}
