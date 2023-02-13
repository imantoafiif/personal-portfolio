import style from './Banner.module.scss'

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
            {/* <a className="github-button" href="https://github.com/imantoafiif/personal-portfolio" data-color-scheme="no-preference: light; light: light; dark: light;" data-show-count="true" aria-label="Star imantoafiif/personal-portfolio on GitHub">Star</a> */}
           { children }
        </div>
    )
}

export default Banner