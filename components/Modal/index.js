import { useEffect } from 'react';
import style from './modal.module.css'
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClose,
} from "@fortawesome/free-solid-svg-icons";  


import linkedin from '../../public/linkedin.png'
import gmail from '../../public/gmail.png'
import telegram from '../../public/telegram.png'
import github from '../../public/github-logo.png'

const Modal = ({ active, onClose }) => {

    const socmeds = [
        { src: 'https://github.com/imantoafiif', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png', alt: 'React' },
        { src: 'https://id.linkedin.com/in/afiif-imanto-a46a7314b', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVLFpJypmWo8-_qvR9u6NHZoWQ7XN3lyp6HLguGFLCe19OsShRSqadPl-aPeFPjali6kg&usqp=CAU', alt: 'Vue' },
        { src: 'mailto:imantoafiif@gmail.com', logo: 'https://cdn.cdnlogo.com/logos/n/80/next-js.svg', alt: 'Next' },
        { src: 'https://t.me/imantoafiif', logo: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/mongodb_logo_icon_170943.png', alt: 'Mongo' },
      ]

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
                    <div className={style.modal_content}>
                        <p className={style.no_margin_top}>
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
                            <h3>Featured Technologies</h3>
                            <div className={style.featured}>
                                {
                                    socmeds.map(item => {
                                        return (
                                        <a
                                            className={style.socmed}
                                            href={item.src} 
                                            target="_blank">
                                            {/* <Image
                                                width={20}
                                                height={20}
                                                title={item.alt}
                                                alt={item.alt}
                                                src={item.logo}>
                                            </Image> */}
                                            <img
                                                className={style.tech_icon}
                                                title={item.alt}
                                                alt={item.alt}
                                                src={item.logo}>
                                            </img>
                                        </a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className={style.footer}>
                    <button 
                        onClick={onClose}
                        className={style.footer_dismiss}>
                        OK
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Modal;