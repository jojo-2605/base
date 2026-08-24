import {installApp} from "./js/install.js"
import { register } from "./js/register-sw.js";
installApp()
register()

//mode actuel ?
const isPWA = 
       window.matchMedia("(display-mode: standalone)").matches || 
       window.matchMedia("(display-mode: minimal-ui)").matches;

       if(isPWA) {
        //alert('pwa')
       }

