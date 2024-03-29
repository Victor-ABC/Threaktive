import React from "react"
import styles from "./scalable-image.module.css"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

type ScalableImageProps = {
  src: string
  alt: string
  description: string
  fullWidth?: boolean
  maxHeight?: number
}

export default function ScalableImage({ src, alt, description, fullWidth, maxHeight }: ScalableImageProps) {
  return (
    <div className="box-center">
      <Zoom zoomMargin={45}>
        <img
          className={fullWidth ? "full-width" : ""}
          alt={alt}
          src={src}
          height="320"
          loading="lazy"
          style={{ maxHeight: maxHeight ? `${maxHeight}px` : "none" }}
        />
      </Zoom>
      <span className={styles.source}>{description}</span>
    </div>
  )
}
