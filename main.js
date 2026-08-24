// Install

const installBtn = document.getElementById('install')
let defferedPrompt = null

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault()
  defferedPrompt = event
  installBtn.classList.remove('hidden')
  installBtn.addEventListener('click', installApp)
})

const installApp = () => {
  defferedPrompt.prompt()
  installBtn.classList.add('hidden')

  // wait user choice
  defferedPrompt.userChoice.then(choiceResult => {
    console.log(choiceResult);
    if( choiceResult.outcome === 'accepted') {
      installApp.classList.add('hidden')
    }
    else{
      console.log('PWA rejected')
    }
    defferedPrompt = null 
  })
}