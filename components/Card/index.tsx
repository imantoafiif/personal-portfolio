import { Children } from 'react'
import style from './Card.module.css'
import React from 'react'

interface props {
    children?: JSX.Element | null,
    item: any,
}

const Card = ({ children = null, item }: props) => {

    // React.useEffect(() => {
    //     let img = document.getElementById("im-1")
    //     img.classList.add(style.image)
    //     return {

    //     }
    // }, [])

    return (
        <a 
            target="_blank"
            href={item.url} 
            className={style.card}>
            <div className={style.image_container}>
                <img
                    id={`im-1`}
                    alt='img'
                    className={style.image} 
                    src={item.thumb}>
                </img>
            </div>
            {
                children && (
                    <div className={style.title_container}>
                        {/* <h3 className={style.title}>
                            { item.title }
                        </h3> */}
                        {/* <p className={style.card_description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        </p> */}
                        { children }
                    </div>
                )
            }
        </a>
    )
}

export default Card