import style from './Home.module.css'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Image from 'next/image'

import linkedin from '../public/linkedin.png'
import gmail from '../public/gmail.png'
import telegram from '../public/telegram.png'
import github from '../public/github-logo.png'

const Home = () => {

  const socmeds = [
    { src: 'https://github.com/imantoafiif', logo: github, alt: 'Github' },
    { src: 'https://id.linkedin.com/in/afiif-imanto-a46a7314b', logo: linkedin, alt: 'Linkedin' },
    { src: 'mailto:imantoafiif@gmail.com', logo: gmail, alt: 'Gmail' },
    { src: 'https://t.me/imantoafiif', logo: telegram, alt: 'Telegram' },
  ]

  return (
    <>
      <Navbar></Navbar>
      <Banner responsive={true}>
          <>
            <img
              title='avatar'
              className={style.avatar} 
              src='https://media.licdn.com/dms/image/D5603AQFBH48M5DNceQ/profile-displayphoto-shrink_800_800/0/1671704555138?e=1680134400&v=beta&t=HhKFh-Z1lKgfx0L9xx4jlNSjC_KgvSKTS0UlLBg_5Lc'>
            </img>
            {/* <div className={style.socmed_container}>
              {
                socmeds.map(item => {
                  return (
                    <a
                      className={style.socmed}
                      href={item.src} 
                      target="_blank">
                      <Image
                        width={500}
                        height={500}
                        title={item.alt}
                        alt={item.alt}
                        src={item.logo}>
                      </Image>
                    </a>
                  )
                })
              }
            </div> */}
          </>
        </Banner>          
        <section className={style.body_content}>

          <h2 className={style.title}>
            Hi, i'm Afiif Imanto
          </h2>
          <h1 className={style.subtitle}>
            I'm a Frontend Engineer
            {/* <b className={style.normal_weight}>ENGINEER</b> */}
          </h1>
          <p className={style.about}>
            Indonesian based hustler, tech enthusiast, learner by heart 
            and a web developer with 4+ years of experience 
            specializing in front end development with solid 
            knowledge in front end stacks such as React.js, Vue.js, 
            TypeScript, CSS, Boostrap and MUI, with hands on experience 
            in developing user centric systems for companies in various 
            industries
          </p>
          <h1>Get in touch with me</h1>
          <div className={style.socmed_container}>
            {
              socmeds.map(item => {
                return (
                  <a
                    key={item.alt}
                    className={style.socmed}
                    href={item.src} 
                    target="_blank">
                    <Image
                      width={500}
                      height={500}
                      title={item.alt}
                      alt={item.alt}
                      src={item.logo}>
                    </Image>
                  </a>
                )
              })
            }
          </div>
          
          <button className={style.resume_button}>
            my resume
          </button>
          
          {/* <button className={style.resume_button}>
            Get this site
          </button> */}
        </section>
        <Footer></Footer>
    </>
  )
}

export default Home;