const chunkString = (str, length) =>
  str.match(new RegExp(`(.|\n){1,${length}}`, 'g'))

export default chunkString
