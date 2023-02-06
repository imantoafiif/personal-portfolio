import Link from 'next/link';
import style from './navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
} from "@fortawesome/free-solid-svg-icons";
import Footer from '../Footer';
  

const Navbar = () => {

    const menus = [
        { label: 'ABOUT', url: '/' },
        { label: 'STACKS', url: '/stacks' },
        { label: 'WORK', url: '/work' },
        { label: 'PROJECTS', url: '/projects' },
        
    ]

    return (
        <nav 
        className={style.container}>
            <div className={style.navbar_logo}>
                <Link className={style.logo_container} href="/">
                    <label className={style.logo}>AFIIF</label>&nbsp;
                    <span className={style.logo}>·</span>&nbsp;
                    <label className={style.logo}>IMANTO</label>&nbsp;   
                </Link>           
            </div>
            <div className={style.navbar_menus}>
                <ul>
                    {
                        menus.map(item => (
                            <li 
                                className={style.menus}
                                key={item.label}>
                                <Link 
                                    className={style.link}
                                    href={item.url}>
                                    { item.label }
                                </Link>
                            </li>
                        ))
                    }
                    <li className={style.burger_button}>
                        <FontAwesomeIcon
                            icon={faBars}
                            style={{ color: "white" }}
                        />
                    </li>
                </ul>
                {/* <ul className={style.burger_button}>
                    <li>
                        <img
                            className={style.burger} 
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAUVBMVEX///8AAABLS0vPz8+Wlpb39/fFxcWQkJCmpqaCgoI4ODhiYmLr6+vh4eGxsbF0dHQbGxvX19cQEBCIiIh6enpXV1egoKC7u7tcXFxvb28ZGRl6p2Y9AAACVUlEQVR4nO3di04CMRCF4QrsglwE8e77P6jZqEGjmXZpk8mZ/t8TzMkuLS1DmxIAAAAAAAAAAAAAAAAAdGBc7xY6dutxXrz9442ex315wLV3sVdaF+Ybtt6VXm07FAU8e9dZ4VwSUfcJTrb5gLfeNVa6zQU8eFdY7ZBJuPMusNrODjh419eAPdjceZfXwJ2Z8OhdXgNHM6H2VPHJnjC8q2ui84Qn7+oaOJkJn7zLa+DJTKi6bvrJXkMtvctr4N5MGGGosQOmjXd91TaZhPKjqT2STu69S6yU+RTqv6fZd3Ty7F1lheeSgCmN3nVerXhbeNBcRB2L9hK/7Fdq66jtasaW99eDPCx1HOY8PgAAAAAAAAAAIGYYNysdm3HuDxcvC+/fkmZbvMzIt9RsVzgtSwPqNrNn29g/vXrXWeG1JOCbd5VV3vIB1Tu97S7vFKFZPzdtPHgXWO0hk9C7vgbsgLrNQhd225DuVHhhT4p6X9b+WpgJlf9d+e1sJvSuronOn2H8z2H8sTT+fBhhqLEDdvC9NP7aIv76sIM1fgf7NMqjTeFeWwf7pSn+nvck+u8WAAAAAAAAAABASPBzoqKf9RX+vDbdtqHCM/fCn5sY/uzL+OeXvnuXWCl7Bq32OzrJvafe9TVgB4x/nnf8M9njn6uv2e71mz2aelfXROcJ1dZM/7HvmdFcNv1m3xWk3uU9sTu99Vv1s8364e9d6+DuPPn/dhU0s2tPGAV3WKZBeQ1cdA9p/Ltkk+4aqvQ+4NTBnc6T4PdyAwAAAAAAAAAAAAAAAICmD8U+UWQoPgYYAAAAAElFTkSuQmCC">
                        </img>
                    </li>
                </ul> */}
            </div>
            {/* <Footer></Footer> */}

        </nav>
    )
}

export default Navbar;