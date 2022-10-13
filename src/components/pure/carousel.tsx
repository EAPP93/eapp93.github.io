import React, { useEffect, useState } from 'react'
import styles from './../../styles/components/carousel.module.scss'

export default function Carousel () {
  const images = [
    'Certificado_Ope_BootCamp-Git.png',
    'Certificado_Ope_BootCamp-HTML-CSS-Basico.png'
  ]
  const autoPlay = false
  const showButtons = true
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(images[0])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (autoPlay || !showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, images)
      }, 3000)
      return () => clearInterval(interval)
    }
  })

  const selectNewImage = (index: number, images: string[], next = true) => {
    setLoaded(false)
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1
      setSelectedImage(images[nextIndex])
      setSelectedIndex(nextIndex)
    }, 500)
  }

  const previous = () => {
    selectNewImage(selectedIndex, images, false)
  }

  const next = () => {
    selectNewImage(selectedIndex, images)
  }
  return (
    <div className={styles.container}>
      <img
        src={require(`./../../asset/img/original/${selectedImage}`)}
        alt="Gentleman"
        className={loaded ? 'loaded' : ''}
        onLoad={() => setLoaded(true)}
      />
      {
        showButtons
          ? <>
          <button onClick={previous}>{'<'}</button>
          <button onClick={next}>{'>'}</button>
          </>
          : <></>
      }
    </div>
  )
}
