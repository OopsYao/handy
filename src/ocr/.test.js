import ocr from '.'

test('OCR test', async () => {
  const wordsArr = await ocr(
    'iVBORw0KGgoAAAANSUhEUgAAAF0AAAAmCAYAAACmlJfBAAACGklEQVRoBe2aYa6CMAzHdz7yEk9jdhE8g9/xGiacwQ87R18qIN1anAxq9h4lIWJV2v32b1fMnPcertcrhBAOfyIH5KF9uNPpdHjYVHDIQ/sw6EmGG/QECFWk1rVBN+jHWGgrVnoP7Y8D5+jpoUuU2Z3xc26PSsO9hcY5aC69sKBv99NfmjHOTBxj7HVCv/lhEOcugjQAduBvc0Zsgr6DnxfwJNZo0hOh1Af9rSoDpJDT9+JgpXtKNgInvW/6Hv2UAMffVQddGlwE8tZBF3ro74Pas99HkALg7O8yfibgcsmaMzGKvc7yMtbXnxZ6ojop8MmWhSdC3+ZnC3CMuzKld+Bx4VxRH8ugl/tpX4vm0sL8XuUGffXkDp0UlpRhsuNFfcq+3GtlSt+W9ouDZTW91A9V95gtuXZVKJOVQZ86gjf9bgKwrLzs5GeMxa1YgyosL3KnQRU8QG6g3di9SB1NiZ+SRbU6pT8HnnlooW1aqdL38zOWKvd5fa8T+rMOTjXzk78B6HfI9ZT2SUmiig5hjZ+lsjffgz4tx37mrqZi6HOQS8H/VbtBF7oL7ck06Ab9/5YUmj2mdFO6KX2vXQK2GyDJpq+UF9tsNGfw1zYbPR6P564mnOGjnyhA5KF9OG0Hdn9OwKBzJuoWg66OmDsw6JyJusWgqyPmDgw6Z6JuMejqiLkDg86ZqFsMujpi7sCgcybqFoOujpg7+AV+bGkzVBMdOAAAAABJRU5ErkJggg==',
  )
  expect(wordsArr).toContain('CLICK')

  // Jest async toThrow not working
  // https://github.com/facebook/jest/issues/1700
  let errorCaught
  try {
    await ocr('INVALID BASE64')
  } catch {
    errorCaught = true
  }
  expect(errorCaught).toBeTruthy()
})
