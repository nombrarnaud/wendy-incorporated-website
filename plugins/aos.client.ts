import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  if (process.client) {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: true
    })
  }
})
