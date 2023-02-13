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
                className={style.modal_card}>
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
                    {
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0 ,0, 0, 0,0 ,0, 0,0, 0, 0,0, 0,0, 0].map(item => (
                            <p>abalsk</p>
                        ))
                    }
                </div>
                {/* <div
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
                        <div className={style.modal_body_container}>
                            {
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(item => (
                                    <p className={style.description}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam lorem ipsum dolor sit amet, consectetur
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
     );
}
 
export default Modal;