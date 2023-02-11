import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import style from './mobile.module.scss'

const MobileMenu = ({ active = false }) => {

    useEffect(() => {
        const menu = document.getElementById('mobile-menu') as HTMLElement
        if(active) {
            menu.classList.add(style.slide)
            return
        }
        menu.classList.remove(style.slide)
    }, [active])

    return ( 
        <div id="mobile-menu">
            
        </div>
     );
}
 
export default MobileMenu;