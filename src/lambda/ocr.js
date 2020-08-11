import ocr from '../ocr'

const handler = async (event, _context) => {
  const {
    queryStringParameters: { base64Img },
  } = event

  try {
    if (!base64Img) {
      throw 'Image not specified!'
    }
    const body = await ocr(base64Img)
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
