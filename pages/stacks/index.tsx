import Banner from "../../components/Banner"
import Card from "../../components/Card"
import Navbar from "../../components/Navbar"
import style from './Stacks.module.css'
import Footer from '../../components/Footer'

const Stacks = () => {

    interface card {
        thumb: string[],
        title: string,
        url: string,
    } 

    const cards:ReadonlyArray<card> = [
        { thumb: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'], title: 'React.js', url: 'https://reactjs.org/' },
        { thumb: ['data:image/png;base64,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'], title: 'React Native', url: 'https://reactnative.dev/' },
        { thumb: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVLFpJypmWo8-_qvR9u6NHZoWQ7XN3lyp6HLguGFLCe19OsShRSqadPl-aPeFPjali6kg&usqp=CAU'], title: 'Vue.js', url: 'https://vuejs.org/' },
        { thumb: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png'], title: 'Next.js', url: 'https://nextjs.org/' },
        { thumb: ['https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png'], title: 'Nuxt.js', url: 'https://nuxtjs.org/' },
        { thumb: ['https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'], title: 'Javascript', url: 'https://www.javascript.com/' },
        { thumb: ['https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png'], title: 'Typescript', url: 'https://www.typescriptlang.org/' },
        { thumb: ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png'], title: 'CSS 3', url: 'https://www.css3.com/' },
        { thumb: ['https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png'], title: 'Bootsrap', url: 'https://getbootstrap.com/' },
        { thumb: ['data:image/png;base64,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'], title: 'Material UI (React)', url: 'https://mui.com/' },
    ]

    return (
        <>
            <Navbar></Navbar>
            <Banner>
                <>
                    <div className={style.header}>
                        <div className={style.header_content}>
                            <h1 className={style.title}>My Stacks</h1>
                            <p>
                                Whether it be for work, freelancing, or just way to pass times, these are some of my favorite stacks for creating apps and frontend solutions 
                            </p>
                        </div>
                    </div>
                    {/* <h1 className={style.title}>Languages</h1> */}
                    <div className={style.collections}>
                        {
                            cards.map(item => (
                                <Card item={item} />
                            ))
                        }
                    </div>
                    {/* <h1 className={style.title}>Languages</h1>
                    <div className={style.collections}>
                        {
                            cards.map(item => (
                                <Card item={item} />
                            ))
                        }
                    </div>
                    <Footer></Footer> */}
                    <Footer></Footer>
                </>
            </Banner>
        </>
        
    )
}

export default Stacks;