import { primaryColor } from "./styles/GlobalStyles"

export const cursorPrimary = (e) => {
  const cursor = document.querySelector(".cursor")
  cursor.style.borderColor = `${primaryColor}`
}

export const cursorWhite = (e) => {
  const cursor = document.querySelector(".cursor")
  cursor.style.borderColor = `white`
}
