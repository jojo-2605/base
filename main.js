import {installApp} from "./js/install"
installApp()

//mode actuel ?
const isPWA = 
       window.matchMedia("(display-mode: standalone)").matches || 
       window.matchMedia("(display-mode: minimal-ui)").matches;

       if(isPWA) {
        //alert('pwa')
       }

