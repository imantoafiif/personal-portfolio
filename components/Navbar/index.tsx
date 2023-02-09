import Link from 'next/link';
import style from './navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
} from "@fortawesome/free-solid-svg-icons";  

const Navbar = () => {

    const menus = [
        { label: 'ABOUT', url: '/' },
        { label: 'STACKS', url: '/stacks' },
        { label: 'WORK', url: '/work' },
        { label: 'PROJECTS', url: '/projects' },
        
    ]

    const onClick = () => {
        const menu = document.getElementById('mobile-menu')
        if(menu.classList.contains(style.slide_up)) {
            menu.classList.remove(style.slide_up)
            return
        }
        menu.classList.add(style.slide_up)
    }

    return (
        <>
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
                            <a onClick={onClick}>
                                <FontAwesomeIcon
                                    icon={faBars}
                                    style={{ color: "white" }}
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div
                id='mobile-menu' 
                className={style.mobile_menu}>
                <p className={style.mobile_button}>
                    <a onClick={onClick}>
                        <FontAwesomeIcon
                            icon={faBars}
                            style={{ color: "white" }}
                        />
                    </a>
                </p>
                {
                    menus.map(item => (
                        <p key={item.label}>
                            <Link 
                                className={style.link}
                                href={item.url}>
                                { item.label }
                            </Link>
                        </p>
                    ))
                }
            </div>
        </>
    )
}

export default Navbar;