import Banner from "../../components/Banner"
import Navbar from "../../components/Navbar"
import style from './Stacks.module.css'

const Stacks = () => {
    return (
        <>
            <Navbar></Navbar>
            <Banner>
                <section className={style.collections}>

                </section>
            </Banner>
        </>
        
    )
}

export default Stacks;