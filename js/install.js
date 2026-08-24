// Install
export const installApp = (idElement = ' #install') => {
  const installBtn = document.querySelector(idElement)
  let defferedPrompt = null

  //créer un evenet widow pour enlever le pop up native "installer"
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault()
    //on savaugarde l'élément
    defferedPrompt = event
    //on supprime la classe hidden au bouton 
    installBtn.classList.remove('hidden')
    //on créer l'event de click sur le bouton
    installBtn.addEventListener('click', installApp)
  })

  const installApp = () => {
    defferedPrompt.prompt()
    //on ajoute la class "hidden" pour cacher le bouton
    installBtn.classList.add('hidden')

    // wait user choice
    // on attend le choix de l'utilisateur après avoir cliquer sur le bouton
    defferedPrompt.userChoice.then(choiceResult => {
      console.log(choiceResult);
      //si le choix est accept on cache a nouveaux le bouton
      if( choiceResult.outcome === 'accepted') {
        installApp.classList.add('hidden')
      }
      else{
        console.log('PWA rejected')
      }
      defferedPrompt = null 
    })
  }

  //quand l'app est installer l'action suivante se fait 
  window.addEventListener('appinstalled', e => {
    e.preventDefault()
    alert('installed')
  })
}