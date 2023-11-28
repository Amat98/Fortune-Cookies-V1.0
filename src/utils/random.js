export const getRandom = (list) => {
  const randomIndex = Math.floor(Math.random() * list.length) // math.random nos devuleve un numero aleatorio de 0 al 1 y math.floor redondea una fraccion hacia abajo
  return list[randomIndex]
} 