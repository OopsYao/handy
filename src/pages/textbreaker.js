import React from 'react'
import { readText, writeText } from '../utils'

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

const handle = () => {
  ;(async () => {
    try {
      const text = await readText()
      for (const item of text) {
        const blob = await item.getType(item.types)
        const imgBase64 = await base64(blob)
        const param = new URLSearchParams({
          base64Img: imgBase64,
        })
        const resp = await fetch(`.netlify/functions/ocr?${param}`)
        console.log(await resp.json())
      }
      // const chunklist = breaker(text, 20);
      // writeText(chunklist.join('\n'));
    } catch {}
  })()
}
export default () => (
  <div>
    <button onClick={handle}>CLICK</button>
  </div>
)
