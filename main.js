const button = document.querySelector('.button')
const bread = document.querySelector('.bread')
const toasterButton = document.querySelector('.toaster_button')
const toastedBread = document.querySelector('.toasted_bread')
const toastReadyText = document.querySelector('.text .ready')
const toastWaitText = document.querySelector('.text .wait')
const smoke1 = document.querySelector('.smoke1')
const smoke2 = document.querySelector('.smoke2')

const soundTwinkle = new Audio()
soundTwinkle.src = "audios/twinkle.mp3"
const soundPushDown = new Audio()
soundPushDown.src = "audios/pushdown.mp3"

button.addEventListener('click', () =>
{
  bread.classList.add('animation_run')
  toasterButton.classList.remove('animation_paused')
  toastedBread.classList.remove('animation_paused')
  toastWaitText.style.display = 'inline'
  soundPushDown.play()
  smoke1.style.display = 'block'
  smoke2.style.display = 'block'
  button.style.display = 'none'
}
)

bread.addEventListener('animationend', () =>
{
  toastReadyText.style.display = 'inline'
  toastWaitText.style.display = 'none'
  soundTwinkle.play()
}
)
