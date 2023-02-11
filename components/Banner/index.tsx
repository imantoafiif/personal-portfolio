import style from './Banner.module.css'

interface props {
    children: JSX.Element,
    responsive?: boolean,
}

const Banner = ({ children, responsive }: props) => {
    return (
        <div className={
            responsive ? 
            style.container_responsive : 
            style.container
        }>
           { children }
        </div>
    )
}

export default Banner