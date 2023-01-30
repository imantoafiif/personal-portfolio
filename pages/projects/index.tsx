import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import style from './Projects.module.css'

const Project = () => {

    return (
        <>
            <Navbar></Navbar>
            <Banner>
                <>
                    <div className={style.header}>
                        <h1 className={style.title}>Projects</h1>
                        <p className={style.subtitle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam lorem ipsum dolor sit amet, consectetur
                        </p>
                    </div>
                </>
            </Banner>
        </>
    )

}

export default Project;