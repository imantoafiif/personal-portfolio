import style from './navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.container}>
            <div className={style.navbar_logo}>
                <span className={style.logo}>
                    LOGO_TEMPLATE
                </span>
            </div>
            <div className={style.navbar_menus}>
                <ul>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Stacks</a></li>
                    <li><a href='#'>Experiences</a></li>
                    <li><a href='#'>Projects</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;