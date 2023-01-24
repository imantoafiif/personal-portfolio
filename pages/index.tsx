import style from './Home.module.css'
import Navbar from '../components/Navbar'

const Home = () => {

  const socmeds = [
    { src: 'https://github.com/imantoafiif', logo: '/github-logo.png', alt: 'github' },
    { src: 'https://id.linkedin.com/in/afiif-imanto-a46a7314b', logo: '/linkedin.png', alt: 'linkedin' },
    { src: 'https://www.instagram.com/imantoafiif', logo: '/instagram.png', alt: 'instagram' },
    { src: 'https://www.facebook.com/imanto.afiif', logo: '/facebook.png', alt: 'facebook' },
  ]

  return (
    <>
      <Navbar></Navbar>
      <main className={style.main_content}>
        <section className={style.header_content}>
          <img
            className={style.avatar} 
            src='https://media.licdn.com/dms/image/D5603AQFBH48M5DNceQ/profile-displayphoto-shrink_800_800/0/1671704555138?e=1680134400&v=beta&t=HhKFh-Z1lKgfx0L9xx4jlNSjC_KgvSKTS0UlLBg_5Lc'>
          </img>
          <div className={style.socmed_container}>
            {
              socmeds.map(item => (
                <a
                  href={item.src} 
                  target="_blank">
                  <img 
                    alt={item.alt}
                    src={item.logo}>
                  </img>
                </a>
              ))
            }
            
          </div>
        </section>
        <section className={style.body_content}>
        
          <h2 className={style.title}>
            M. AFIIF IMANTO
          </h2>
          <h1 className={style.subtitle}>
            FRONTEND&nbsp;
            <b className={style.normal_weight}>ENGINEER</b>
          </h1>
          
          <p className={style.about}>
            A hustler, tech enthusiast, learner by heart 
            and a web developer with 4+ years of experience 
            specializing in front end development with solid 
            knowledge in front end stacks such as React.js, Vue.js, 
            TypeScript, CSS, Boostrap and MUI, with hands on experience 
            in developing user centric systems for companies in various 
            industries
          </p>
          <button className={style.resume_button}>
            My Resume
          </button>
        </section>
        <footer className={style.footer}>
          2023. Coded with ☕ and ❤️ using&nbsp;&nbsp;
          <svg
            className={style.react_small} 
            xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
            <title>React Logo</title>
            <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
            <g stroke="#61dafb" stroke-width="1" fill="none">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
        </footer>
      </main>
    </>
  )
}

export default Home;