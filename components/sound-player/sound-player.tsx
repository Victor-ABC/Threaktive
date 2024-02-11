import React from "react"
import Image from "next/image"
import styles from "./sound-player.module.css"

function SoundPlayer() {
  function play() {
    const audio = document.getElementById("threaktive-name-sound") as HTMLAudioElement
    audio.play()
  }

  return (
    <div className={styles.wrapper}>
      <button onClick={play}>
        <Image width="16" height="16" src="/icons/speaker.svg" alt="Speaker" />
      </button>

      <audio id="threaktive-name-sound">
        <source src="/audio/threaktive.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default function MyApp() {
  return <SoundPlayer />
}
