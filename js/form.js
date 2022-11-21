const form = document.getElementById("form")
const container = document.querySelector(".contact-container")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  container.innerHTML = "<p>thank you for your message! <br /> <3 </p>"
})
