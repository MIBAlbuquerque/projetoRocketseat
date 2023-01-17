function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar-light-mode.png")
    img.setAttribute("alt", "Foto de Maria Isabel toda de Preto")
  } else {
    img.setAttribute("src", "./assets/Avatar-dark-mode.png")
    img.setAttribute("alt", "Foto de Maria Isabel após apresentar o TCC.")
  }
}
