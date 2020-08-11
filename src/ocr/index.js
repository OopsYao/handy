import { ocr as AipOcrClient } from 'baidu-aip-sdk'

const APP_ID = process.env.BAIDU_AI_APP_ID || '21936987'
const API_KEY = process.env.BAIDU_AI_API_KEY || 'oeS2vicz0g2BnEZ8OEuaDhA3'
const SECRET_KEY =
  process.env.BAIDU_AI_SECRET_KEY || 'yTvX2FSvUSfhn8XdQ89Q0VGzgsmaAOND'

const client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY)

const ocr = async (image) => {
  const resp = await client.generalBasic(image)
  if (resp.error_code) {
    throw resp
  }
  const words = resp.words_result.map(({ words }) => words)
  return words
}

export default ocr
