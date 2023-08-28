function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  //pegar a tag img
  //querySelector buscar elemento ou seletor
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    //selecionando por atributo setAttribute ele só aceita 2 parametros chave(src) e "valor"
    img.setAttribute("src", "./assets/assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Gabriel de topete com jaqueta preta porta de fundo"
    )
  } else {
    //se tiver sem light mode,manter a img normal
    img.setAttribute("src", "./assets/assets/avatar.png")
    img.setAttribute(
      "alt",
      "Gabriel de camisa vermelha, sem barba, com topete,fundo azul céu"
    )
  }

  if (html.classList.contains("light")) {
    document.getElementById("nome").innerHTML = "@GabrielPiresLight"
    // pegando elemento pelo id
  } else {
    document.getElementById("nome").innerHTML = "@GabrielPires"
  }
}
