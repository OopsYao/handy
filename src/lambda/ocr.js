import ocr from 'services/ocr'

const handler = async (event, _context) => {
  const { base64img } = JSON.parse(event.body)
  try {
    if (!base64img) {
      throw new Error('Image not specified!')
    }
    const body = await ocr(base64img)
    return {
      statusCode: 200,
      body: JSON.stringify(body),
    }
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify(e),
    }
  }
}

export { handler }
