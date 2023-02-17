import { Children, MouseEventHandler, useEffect, useLayoutEffect, useState } from 'react'
import style from './Card.module.css'
import React from 'react'

interface props {
    children?: JSX.Element | null,
    item: any,
    onClick?: any,
    thumbCover?: boolean,
    displayThumb?: boolean,
}

const Card = ({ children = null, item, onClick, thumbCover = false, displayThumb = true }: props) => {

    const [src, setSrc] = useState(0)

    useEffect(() => {
        if(!item.thumb) return
        const slide = setTimeout(() => {
            let s = src + 1
            if(s > item.thumb.length - 1) s = 0
            setSrc(s)
        }, 4000)
        return () => {
            clearTimeout(slide)
        }
    }, [src])

    return (
        <a 
            onClick={onClick}
            target="_blank"
            href={item.url} 
            className={`${style.card} ${!children && style.card_no_children}`}>
            {
                displayThumb && (
                    <div className={style.image_container}>
                        { 
                            item.thumb.map((im:any, key:number) => (
                                <img
                                    alt='img'
                                    className={`
                                        ${style.image} 
                                        ${!children && style.image_no_children} 
                                        ${key != src && style.hide}
                                        ${thumbCover && style.image_contain}
                                    `} 
                                    src={im}>
                                </img>
                            ))
                        }
                    </div>
                )
            }
            {
                children && (
                    <div className={style.title_container}>
                        { children }
                    </div>
                )
            }
        </a>
    )
}

export default Card