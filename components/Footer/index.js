import style from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={style.footer}>
            2023. Coded with ☕ and ❤️ using&nbsp;&nbsp;
            <svg
                className={style.react_small} 
                xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
                <title>React Logo</title>
                <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
                <g stroke="#61dafb" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2"/>
                <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                </g>
            </svg>
        </footer>
    )
}

export default Footer;  