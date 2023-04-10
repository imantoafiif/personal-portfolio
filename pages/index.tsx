import Image from 'next/image'
import { useEffect, useState } from 'react'
import style from './index.module.css'

const index = () => {

    const [role, setRole] = useState<string>('')
    const [id, setId] = useState<number>(0)
    const [write, setWrite] = useState<boolean>(true)

    const work = [
        { title: 'Front-end Developer', icon: 'fas fa-laptop', desc: 'The new common language will be more simple and regular than. It will be more Occidental in fact' },
        { title: 'Back-end Developer', icon: 'fas fa-database', desc: 'The new common language will be more simple and regular than. It will be more Occidental in fact' },
        { title: 'Mobile App Developer', icon: 'fas fa-mobile-phone', desc: 'The new common language will be more simple and regular than. It will be more Occidental in fact' },
    ]

    const educations = [
        { 
            title: 'Bachelor of Informatics Engineering',
            company: 'University of Sriwijaya',
            detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text',
            url: 'https://pelajarinfo.id/wp-content/uploads/2022/10/Universitas-Sriwijaya-Logo.png'
        },
        { 
            title: 'University Exchange Programme',
            company: 'Universiti Teknologi Malaysia',
            detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text',
            url: 'https://upload.wikimedia.org/wikipedia/commons/8/81/UTM-LOGO.png'
        },
    ]

    const roles = [
        'developer',
        'Front-end',
        'Back-end',
        'full stack',
        'freelancer',
    ]

    useEffect(() => {
        const seed = Math.floor(0 + Math.random() * 600)
        const timer = setInterval(type, (write ? seed : 20))
        setTimeout(() => {
            clearInterval(timer);
        }, (write ? seed : 20));
    }, [role, write, id])

    const type = () => {
        // let n_string = role + roles[id].charAt(role.length)
        if(role.length == roles[id].length && write) {
            setTimeout(() => {
                setWrite(false)
            }, 2000)
        }
        if(role.length == 0 && !write) {
            setWrite(true)
            id == roles.length - 1 ? setId(0) : setId(id + 1)
        }
        if(!write) {
            setRole(role.slice(0, role.length - 1))
        } else {
            setRole(role + roles[id].charAt(role.length))
        }   
    }

    return (
        <>
            <div className={style.hero_container}>
                <video autoPlay loop muted className={style.bg_vid}>
                    <source 
                        src="https://videos.pond5.com/beautiful-aerial-jakarta-skyline-night-footage-109484315_main_xxl.mp4" 
                        type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={style.container_overlay}>
                    <div className={style.internal_container}>
                        {/* <img
                        className={style.avatar} 
                        src='https://media.licdn.com/dms/image/D5603AQFBH48M5DNceQ/profile-displayphoto-shrink_400_400/0/1671704555138?e=1686787200&v=beta&t=XtPBYIMutbgdMEv4mgE84kZnpT7k7XGhMuOv6YBFM_g'></img> */}
                        <div className={style.status}>
                            <p className={style.title}>hi, i'm <strong>afiif imanto</strong>
                            </p>
                            <h2>{ role }<span className={style.blip}>|</span></h2>
                            <p className={style.subtitle}>based in Jakarta, Indonesia 🇮🇩</p>
                            <button className={style.button}>Download CV</button>
                        </div>
                            <img
                                className={style.avatar} 
                                src='https://media.licdn.com/dms/image/D5603AQFBH48M5DNceQ/profile-displayphoto-shrink_400_400/0/1671704555138?e=1686787200&v=beta&t=XtPBYIMutbgdMEv4mgE84kZnpT7k7XGhMuOv6YBFM_g'></img>
                    </div>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.content_container}>
                    <h2>about me</h2>
                    <p className={style.sub}>Let's get to know a little bit about my proffesional side</p>
                    <p>Web Bean has everything you need to get your new website up and running in no time! All of the templates and themes on Web Bean w3c valid error free code and easy to use. Web Bean has everything you'll need to get your new website up and running in no time! All of the new templates and themes on Web Bean w3c valid error free code and easy to use. Web Bean has everything you need to get your new website up and running in no time! Web Bean w3c valid error free code and easy to use. All of the templates and themes on Web Bean w3c valid error free code and easy to use. Web Bean w3c valid error free code and easy to use. All of the error free code and easy to use.</p>
                    {/* <p>Indonesian based hustler, tech enthusiast, learner by heart  and a web developer with 4+ years of experience  specializing in front end development with solid  knowledge in front end stacks such as React.js, Vue.js, TypeScript, CSS, Boostrap and MUI, with hands on experience in developing user centric systems for companies in various industries</p> */}
                    <div className={style.socmeds}>
                        <img src='gmail.png'></img>
                        <img src='github-logo.png'></img>
                        <img src='instagram.png'></img>
                        <img src='linkedin.png'></img>
                        <img src='telegram.png'></img>
                    </div>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.content_container}>
                    <h2>what i do</h2>
                    <p className={style.sub}>How can i help with your next project ?</p>
                    <div className={style.activity_content}>
                        {
                            [0, 0, 0, 0].map(item => (
                                <div className={style.work_container}>
                                    <div className={style.work_item_head}>
                                        <i className='fas fa-laptop'></i>
                                    </div>
                                    <div className={style.work_item_content}>
                                        <div className={style.bg_interactive}></div>
                                        <h4><label>Web Design</label></h4>
                                        <p><label>The new common language will be more simple and regular than. It will be more Occidental in fact.</label></p>
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.content_container}>
                    <h2>resume</h2>
                    <p className={style.sub}>A summary of my resume</p>
                    <div className={style.summary_container}>
                        <div className={style.summary}>
                            <h2>Educations</h2>
                            <div className={style.summary_items}>
                                {
                                    educations.map(item => (
                                        <div className={style.summary_items_container}>
                                            <img
                                                className={style.summary_logo} 
                                                src={item.url}></img>
                                            <div className={style.summary_details}>
                                                <h2>{item.title}</h2>
                                                <p>{item.company}</p>
                                                <p className={style.summary_desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={style.summary}>
                            <h2>Experiences</h2>
                            <div className={style.summary_items}>
                                {
                                    [0, 0, 0].map(item => (
                                        <div className={style.summary_items_container}>
                                            <img
                                                className={style.summary_logo} 
                                                src='https://pelajarinfo.id/wp-content/uploads/2022/10/Universitas-Sriwijaya-Logo.png'></img>
                                            <div className={style.summary_details}>
                                                <h2>Master in Computer Engineering</h2>
                                                <p>Harvard University / 2015 - 2017</p>
                                                <p className={style.summary_desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={style.content}>
                <div className={`${style.content_container} ${style.container_work}`}>
                    <div>
                        <p>asdkjl</p>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default index