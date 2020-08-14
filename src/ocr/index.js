import { ocr as AipOcrClient } from 'baidu-aip-sdk'

const APP_ID = process.env.BAIDU_AI_APP_ID
const API_KEY = process.env.BAIDU_AI_API_KEY
const SECRET_KEY = process.env.BAIDU_AI_SECRET_KEY

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
