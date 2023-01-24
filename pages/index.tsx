import style from './Home.module.css'
import Navbar from '../components/Navbar'

const Home = () => {
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
            <a
              href='https://github.com/imantoafiif' 
              target="_blank">
              <img src='/github-logo.png'></img>
            </a>
            <a
              href='https://id.linkedin.com/in/afiif-imanto-a46a7314b' 
              target="_blank">
              <img src='/linkedin.png'></img>
            </a>
            <a
              href='https://www.instagram.com/imantoafiif' 
              target="_blank">
              <img src='/instagram.png'></img>
            </a>
            <a
              href='https://www.facebook.com/imanto.afiif' 
              target="_blank">
              <img src='/facebook.png'></img>
            </a>
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
        </section>
      </main>
    </>
  )
}

export default Home;