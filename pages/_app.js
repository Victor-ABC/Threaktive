/* eslint-disable react/prop-types */
import React from "react"
import "../styles/global.css"
import { useEffect } from "react"
import { Router } from "next/router"

export default function App({ Component, pageProps }) {
  useEffect(() => {
    /** Adds line numbers the provided code block. */
    const addLineNumbers = function (codeElement) {
      const lines = codeElement.getElementsByClassName("line")
      console.log("lines", lines)

      for (const [index, line] of [...lines].entries()) {
        const lineNumber = document.createElement("span")
        lineNumber.classList.add("line-number")
        lineNumber.textContent = `${index + 1}`
        line.prepend(lineNumber)
      }
    }

    const addAllLineNumbers = function () {
      const codeElements = document.querySelectorAll("pre code")

      for (const element of codeElements) {
        addLineNumbers(element)
      }
    }

    addAllLineNumbers()

    let lastUrl = null
    Router.events.on("routeChangeComplete", (url) => {
      if (lastUrl === url) {
        return
      }

      lastUrl = url
      addAllLineNumbers()
    })
  }, [])

  return <Component {...pageProps} />
}
