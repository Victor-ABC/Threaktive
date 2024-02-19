import React from "react"
import { DocsThemeConfig, useConfig } from "nextra-theme-docs"
import Link from "next/link"

const config: DocsThemeConfig = {
  logo: <span>ThreaKtive</span>,
  project: {
    link: "https://github.com/Aleeexx/Threaktive",
  },
  docsRepositoryBase: "https://github.com/Aleeexx/Threaktive/tree/main/",
  banner: {
    key: "still-wip",
    text: (
      <a href="https://github.com/Aleeexx/Threaktive" target="_blank" rel="noreferrer">
        🧑🏽‍💻 This site is still wip.
      </a>
    ),
  },
  footer: {
    text: () => {
      return (
        <p>
          Von{" "}
          <a
            className="nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50"
            href="https://github.com/Aleeexx"
            target="_blank"
            rel="noreferrer"
          >
            Alexander Euler
          </a>
          ,{" "}
          <a
            className="nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50"
            href="https://github.com/hrothC"
            target="_blank"
            rel="noreferrer"
          >
            Carla Hugenroth
          </a>
          ,{" "}
          <a
            className="nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50"
            href="https://github.com/RobinWi9"
            target="_blank"
            rel="noreferrer"
          >
            Robin Wiehle
          </a>{" "}
          und{" "}
          <a
            className="nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50"
            href="https://github.com/VictorCorbet"
            target="_blank"
            rel="noreferrer"
          >
            Victor Paul Corbet
          </a>
        </p>
      )
    },
  },
  editLink: {
    text: () => <p>Bearbeite diese Seite auf GitHub →</p>,
  },
  feedback: {
    content: () => <p>Frage? Gib uns Feedback →</p>,
  },
  toc: {
    title: () => <span>Auf dieser Seite</span>,
  },
  search: {
    placeholder: () => "Suchen...",
  },
  /** If this does not work, you may need to commit new files first, as otherwise the timestamp is missing */
  gitTimestamp: (args) => {
    const { timestamp } = args
    const { authorName, authorGithubName } = useConfig()?.frontMatter ?? {}

    const isDarkMode =
      globalThis?.document?.body?.parentElement?.style?.colorScheme === "dark" ?? false

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "flex-end",
        }}
      >
        {authorName && authorGithubName && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "1em",
              alignItems: "center",
            }}
          >
            <Link href={`https://github.com/${authorGithubName}`}>
              <img
                alt={authorName}
                style={{
                  borderRadius: "50%",
                  height: "3em",
                  width: "3em",
                }}
                src={`https://github.com/${authorGithubName}.png`}
              />
            </Link>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "1em",
              }}
            >
              <p
                style={{
                  color: "rgba(156,163,175,var(--tw-text-opacity))",
                  fontSize: ".875rem",
                  textAlign: "left",
                }}
              >
                Autor
              </p>
              <Link
                href={`https://github.com/${authorGithubName}`}
                style={{ fontSize: "1.2em" }}
                className="nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50"
              >
                {authorName}
              </Link>
            </div>
          </div>
        )}
        <p style={{ maxWidth: "50%" }}>
          Zuletzt aktualisiert am{" "}
          {new Intl.DateTimeFormat("de", { dateStyle: "long" }).format(timestamp)}
        </p>
      </div>
    )
  },
  head: () => {
    return (
      <>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </>
    )
  },
}

export default config
