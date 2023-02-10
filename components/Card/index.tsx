import { Children, MouseEventHandler, useEffect, useLayoutEffect, useState } from 'react'
import style from './Card.module.css'
import React from 'react'

interface props {
    children?: JSX.Element | null,
    item: any,
    onClick?: any,
}

const Card = ({ children = null, item, onClick }: props) => {

    const [src, setSrc] = useState(0)

    useEffect(() => {
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
            className={style.card}>
            <div className={`${style.image_container} ${!children && style.no_children}`}>
                { 
                    item.thumb.map((im:any, key:number) => (
                        <img
                            alt='img'
                            className={`${style.image} ${key != src && style.hide}`} 
                            src={im}>
                        </img>
                    ))
                }
            </div>
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