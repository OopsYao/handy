const permissionCheckFailed = async (rw) => {
    const fail = state => !(state === 'granted' || state === 'prompt');
    const { state } = await navigator.permissions.query({ name: `clipboard-${rw}` });
    if (fail(state)) { throw new Error(`Permission not allowed: ${rw}`); }
}
const readText = async () => {
    permissionCheckFailed('read');
    const text = await navigator.clipboard.read()
    return text;
}
const writeText = async (text) => {
    permissionCheckFailed('write');
    await navigator.clipboard.write(text);
}

export {
    readText,
    writeText,
} 