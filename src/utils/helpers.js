
export function getIdFromUrl (url) {
  const arr = url.split('/')
  return arr[arr.length - 2]
}
