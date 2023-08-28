function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    //selecionando por atributo setAttribute
    img.setAttribute("src", "./assets/assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Professor myke de oculos escuros,jaqueta de couro,com topete,fundo degrade roxo com azul"
    )
  } else {
    //se tiver sem light mode,manter a img normal
    img.setAttribute("src", "./assets/assets/avatar.png")
    img.setAttribute(
      "alt",
      "Gabriel de camisa vermelha, sem barba, com topete,fundo azul céu"
    )
  }

  const p = document.querySelector("p")

  if (html.classList.contains("light")) {
    document.getElementById("nome").innerHTML = "@MykeBrito"
    // se
  } else {
    document.getElementById("nome").innerHTML = "@GabrielPires"
  }
}
