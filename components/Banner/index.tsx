import style from './Banner.module.css'

interface props {
    children: JSX.Element
}

const Banner = ({ children }: props) => {
    return (
        <div className={style.container}>
           { children }
        </div>
    )
}

export default Banner