import { useEffect } from 'react';
import style from './modal.module.css'

const Modal = ({ active }) => {

    useEffect(() => {
        const container = document.getElementById('modal-container')
        if(active) {
            container.classList.add(style.active) 
            return
        }
        container.classList.remove(style.active)
    }, [active])

    return ( 
        <div
            onClick={}
            id="modal-container"    
            className={style.background}>
            
        </div>
     );
}
 
export default Modal;