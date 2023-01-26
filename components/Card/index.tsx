import style from './Card.module.css'

interface props {
    item: any,
}

const Card = ({ item }: props) => {
    return (
        <a 
            target="_blank"
            href='https://google.com' className={style.card}>
            <div className={style.image_container}>
                <img
                    alt='img'
                    className={style.image} 
                    src={item.src}>
                </img>
            </div>
            <div className={style.title_container}>
                <h3 className={style.title}>
                    { item.title }
                </h3>
                <p className={style.card_description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                </p>
            </div>
        </a>
    )
}

export default Card