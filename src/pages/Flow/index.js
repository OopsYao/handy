import React, { useState } from 'react'
import { readText, write } from 'services/clipboard'
import styles from './.module.css'

// Convert blob to base64
const base64 = (blob) => {
  const reader = new FileReader()
  reader.readAsDataURL(blob)
  return new Promise((resolve) => {
    reader.onload = () => {
      resolve(reader.result.split(',')[1])
    }
  })
}

// OCR service via network
// as local OCR service is not allowed
// for security concern
const ocrSvc = async (img) => {
  const resp = await fetch(`.netlify/functions/ocr`, {
    method: 'POST',
    body: JSON.stringify({
      base64img: img,
    }),
  })
  if (!resp.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await resp.json()
  return data
}

export default () => {
  const [process, setProcess] = useState(0)
  const handle = async () => {
    setProcess(1)
    try {
      const text = await readText()
      const [item] = text
      const blob = await item.getType(item.types)
      const imgBase64 = await base64(blob)
      const parsed = await ocrSvc(imgBase64)
      await write(parsed.join('\n'))
      setProcess(2)
    } catch (e) {
      console.log(e)
      setProcess(0)
    }
  }
  return (
    <div className={styles.page}>
      <button onClick={handle} className={styles.startButton}>
        {(() => {
          switch (process) {
            case 1:
              return 'STAY TUNED'
            case 2:
              return 'SUCCESS'
            default:
              return 'START'
          }
        })()}
      </button>
    </div>
  )
}
