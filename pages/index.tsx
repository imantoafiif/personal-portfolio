import Image from 'next/image'
import style from './index.module.css'

const index = () => {
    return (
        <>
            <div className={style.hero_container}>
                <video autoPlay loop className={style.bg_vid}>
                    <source 
                        src="/086578205_main_xxl.mp4" 
                        type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={style.container_overlay}>
                    <div className={style.internal_container}>
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