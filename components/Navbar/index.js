import Link from 'next/link';
import style from './navbar.module.css'

const Navbar = () => {

    const menus = [
        { label: 'About', url: '/' },
        { label: 'Stacks', url: '/stacks' },
        { label: 'Work', url: '/work' },
        { label: 'Projects', url: '/projects' },
    ]

    return (
        <nav className={style.container}>
            <div className={style.navbar_logo}>
                <Link className={style.logo_container} href="/">
                    <label className={style.logo}>AFIIF</label>&nbsp;
                    <span className={style.logo}>·</span>&nbsp;
                    <label className={`${style.logo} ${style.logo_last}`}>IMANTO</label>&nbsp;   
                </Link>           
            </div>
            <div className={style.navbar_menus}>
                <ul>
                    {
                        menus.map(item => (
                            <li key={item.label}>
                                <Link 
                                    className={style.link}
                                    href={item.url}>
                                    { item.label }
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;