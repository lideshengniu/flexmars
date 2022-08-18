function fsize(res) {
  const clientWidth = window.screen.width
  console.log(clientWidth, "sada")
  if (!clientWidth) {
    return
  }
  let fontSize = clientWidth / 2000
  fontSize = res * fontSize
  return fontSize
}
export default fsize
