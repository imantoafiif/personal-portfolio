import style from './Banner.module.css'

interface props {
    children: JSX.Element
}

const Banner = ({ children }: props) => {
    return (
        <section className={style.container}>
           { children }
        </section>
    )
}

export default Banner