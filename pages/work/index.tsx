import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import style from './Work.module.css'

const Experience = () => {

    interface company {
        thumb: string,
        title: string,
        url: string,
        date: string,
        role: string,
    }

    const companies:ReadonlyArray<company> = [
        { 
            thumb: 'https://idpro.id/wp-content/uploads/2016/12/Logo-Baru-telkomsigma.jpg', 
            title: 'Telkomsigma', 
            url: 'https://www.telkomsigma.co.id/',
            date: 'April 2019 - Present',
            role: 'Frontend Engineer',
        },
        { 
            thumb: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Alcatel_Lucent_Enterprise_Logo.svg', 
            title: 'Alcatel-Lucent Enterprise', 
            url: 'https://www.al-enterprise.com/',
            date: 'Jan 2018 - Mar 2018',
            role: 'Fullstack Engineer',
        },
        { 
            thumb: 'https://maxsi.id/web/wp-content/uploads/2021/07/logo-telkomsel-baru.png', 
            title: 'Telkomsel', 
            url: 'https://www.telkomsel.com',
            date: 'Jan 2016 - Feb 2016',
            role: 'Android App Developer'
        }
    ]

    return (
        <>
            <Navbar></Navbar>
            <Banner>
                <>
                    <div className={style.header}>
                        <h1 className={style.title}>Work</h1>
                        <p className={style.subtitle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            {/* Been there, done that. These are some of the companies that i've worked on in the past 5 years. */}
                        </p>
                    </div>
                    <div className={style.collections}>
                        {
                            companies.map(c => {
                                let { thumb, title, url } = c
                                return (
                                    <Card item={{ thumb, title, url }}>
                                        <>
                                            <h4 className="is-marginless">{ c.role }</h4>
                                            <h4 className="is-marginless-top normal smaller">{ c.date }</h4>
                                            <p className="is-marginless is-paddingless">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit                                            
                                            </p>
                                        </>
                                    </Card>
                                )
                            })
                        }
                        {/* <Card item={{ thumb: 'https://maxsi.id/web/wp-content/uploads/2021/07/logo-telkomsel-baru.png', title: 'React.js', url: 'https://reactjs.org/' }}></Card> */}
                    </div>
                    <Footer></Footer>
                </>
            </Banner>
        </>
    )

}

export default Experience;