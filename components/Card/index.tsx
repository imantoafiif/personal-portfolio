import style from './Card.module.css'

interface props {
    item: any,
}

const Card = ({ item }: props) => {
    return (
        <a href='/google.com' className={style.card}>
            <div className={style.image_container}>
                <img
                    alt='img'
                    className={style.image} 
                    src={item.src}>
                </img>
            </div>
            
            <div>

            </div>
        </a>
    )
}

export default Card