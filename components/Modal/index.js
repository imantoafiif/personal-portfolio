import { useEffect } from 'react';
import style from './modal.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClose,
} from "@fortawesome/free-solid-svg-icons";  

const Modal = ({ active, onClose }) => {

    useEffect(() => {
        const container = document.getElementById('modal-container')
        if(active) {
            container.classList.add(style.active) 
            return
        }
        container.classList.remove(style.active)
    }, [active])

    const a = e => {
        e.stopPropagation()
    }

    return ( 
        <div
            onClick={onClose}
            id="modal-container"    
            className={style.background}>
            <div
                onClick={a}
                className={style.modal}>
                <div className={style.header}>
                    <h3 className={style.header_title}>
                        Judul Container
                    </h3>
                    <p 
                        onClick={onClose}
                        className={style.header_abort}>
                        <FontAwesomeIcon
                            icon={faClose}
                        />
                    </p>
                </div>
                <div className={style.modal_body}>
                    <p className={style.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam lorem ipsum dolor sit amet, consectetur
                    </p>
                    <div>
                        <img 
                            className={style.screenshot}
                            src='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'>
                        </img>
                        <p>explain screenshot 1</p>
                        <img 
                            className={style.screenshot}
                            src='https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80'>
                        </img>
                        <p>explain screenshot 2</p>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Modal;