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

const handle = async () => {
  try {
    const text = await readText()
    const [item] = text
    const blob = await item.getType(item.types)
    const imgBase64 = await base64(blob)
    const parsed = await ocrSvc(imgBase64)
    writeText(parsed.join(''))
  } catch (e) {
    console.log(e)
  }
}
export default () => (
  <div>
    <button onClick={handle}>CLICK</button>
  </div>
)
