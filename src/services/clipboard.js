const permissionCheckFailed = async (rw) => {
  const fail = (state) => !(state === 'granted' || state === 'prompt')
  const { state } = await navigator.permissions.query({
    name: `clipboard-${rw}`,
  })
  if (fail(state)) {
    throw new Error(`Permission not allowed: ${rw}`)
  }
}
const readText = async () => {
  permissionCheckFailed('read')
  const text = await navigator.clipboard.read()
  return text
}

const write = (text) => {
  return new Promise((resolve) => {
    const justWrite = () => {
      navigator.clipboard.writeText(text).then(resolve)
    }
    // In case document not focused when processing
    // (Clipboard API needs document focused)
    if (!document.hasFocus()) {
      const listener = () => {
        document.removeEventListener('focus', listener, true)
        justWrite()
      }
      document.addEventListener('focus', listener, true)
    } else {
      justWrite()
    }
  })
}

export { readText, write }
