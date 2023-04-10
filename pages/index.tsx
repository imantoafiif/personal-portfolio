import Image from 'next/image'
import { useEffect, useState } from 'react'
import style from './index.module.css'

const index = () => {

    const [role, setRole] = useState<string>('')
    const [id, setId] = useState<number>(0)
    const [write, setWrite] = useState<boolean>(true)

    const roles = [
        'developer',
        'Front-end',
        'Back-end',
        'full stack'
    ]

    useEffect(() => {
        const timer = setInterval(type, (write ? 200 : 30))
        setTimeout(() => {
            clearInterval(timer);
        }, (write ? 200 : 30));
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
        console.log(role)
    }

    return (
        <>
            <div className={style.hero_container}>
                <video autoPlay loop muted className={style.bg_vid}>
                    <source 
                        src="/109484315_main_xxl.mp4" 
                        type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={style.container_overlay}>
                    <div className={style.internal_container}>
                        <div className={style.status}>
                            <p className={style.title}>hi, i'm <strong>afiif imanto</strong>
                            </p>
                            <h2>a { role }<span className={style.blip}>|</span></h2>
                            <p className={style.subtitle}>based in Palembang, Indonesia</p>
                            <button className={style.button}>Download CV</button>
                        </div>
                        <img
                            className={style.avatar} 
                            src='https://media.licdn.com/dms/image/D5603AQFBH48M5DNceQ/profile-displayphoto-shrink_400_400/0/1671704555138?e=1686787200&v=beta&t=XtPBYIMutbgdMEv4mgE84kZnpT7k7XGhMuOv6YBFM_g'></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index