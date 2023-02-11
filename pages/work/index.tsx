import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import style from './Work.module.css'

const Experience = () => {

    interface company {
        thumb: string[],
        title: string,
        url: string,
        date: string,
        role: string,
        desc: string,
    }

    const companies:ReadonlyArray<company> = [
        { 
            thumb: ['https://idpro.id/wp-content/uploads/2016/12/Logo-Baru-telkomsigma.jpg'], 
            title: 'Telkomsigma', 
            url: 'https://www.telkomsigma.co.id/',
            date: 'April 2019 - Present',
            role: 'Frontend Engineer',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
        },
        { 
            thumb: ['https://upload.wikimedia.org/wikipedia/commons/7/7d/Alcatel_Lucent_Enterprise_Logo.svg'], 
            title: 'Alcatel-Lucent Enterprise', 
            url: 'https://www.al-enterprise.com/',
            date: 'Jan 2018 - Mar 2018',
            role: 'Fullstack Web Developer',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
        },
        { 
            thumb: ['https://maxsi.id/web/wp-content/uploads/2021/07/logo-telkomsel-baru.png'], 
            title: 'Telkomsel', 
            url: 'https://www.telkomsel.com',
            date: 'Jan 2016 - Feb 2016',
            role: 'Android App Developer',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
        }
    ]

    return (
        <>
            <Navbar></Navbar>
            <Banner>
                <>
                    <div className={style.header}>
                        <div className={style.header_content}>
                            <h1 className={style.title}>Work</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </p>
                        </div>
                    </div>
                    <div className={style.collections}>
                        {
                            companies.map((c, key) => {
                                let { thumb, title, url } = c
                                return (
                                    <Card 
                                        key={key}
                                        item={{ thumb, title, url }}
                                        thumbCover={true}>
                                        <>
                                            <h4 className="is-marginless">{ c.role }</h4>
                                            <h4 className="is-marginless-top normal smaller">{ c.date }</h4>
                                            <p className="is-marginless is-paddingless normal">{ c.desc }</p>
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