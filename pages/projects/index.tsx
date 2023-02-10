import Image from "next/image";
import Link from "next/link";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import style from './Projects.module.css'
import Modal from "../../components/Modal";
import { MouseEventHandler, useState } from "react";

const Project = () => {

    interface card {
        thumb: string[],
        title: string,
        url: string | null,
        date: string,
        desc: string,
        company: string,
        vendor: string,
    }

    type modal = (v:boolean) => (e:MouseEventHandler<HTMLAnchorElement>) => void

    const [active, setActive] = useState(false)

    const projects:ReadonlyArray<card> = [
        { 
            thumb: [
                'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80', 
                'https://th.bing.com/th?id=ORMS.bca14afb8b0d89068dd82c318fab7ab7&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=2&p=0',
                'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
            ],
            title: 'Integrated Talent Management System',
            url: null,
            vendor: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/PNM_logo.svg/2560px-PNM_logo.svg.png',
            company: 'PNM',
            date: 'May 2022 - Present',
            desc: 'Developing, maintaining and customising ITMS application for customer (PNM) based on customer\'s requirement and agreed upon business processes',
        },
        { 
            thumb: [
                'https://tyriar.gallerycdn.vsassets.io/extensions/tyriar/lorem-ipsum/1.3.1/1640026564395/Microsoft.VisualStudio.Services.Icons.Default', 
                'https://th.bing.com/th?id=ORMS.bca14afb8b0d89068dd82c318fab7ab7&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=2&p=0'
            ],
            title: 'Integrated Talent Management System',
            url: null,
            vendor: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/PNM_logo.svg/2560px-PNM_logo.svg.png',
            company: 'PNM',
            date: 'May 2022 - Present',
            desc: 'Developing, maintaining and customising ITMS application for customer (PNM) based on customer\'s requirement and agreed upon business processes',
        },
        { 
            thumb: ['https://tyriar.gallerycdn.vsassets.io/extensions/tyriar/lorem-ipsum/1.3.1/1640026564395/Microsoft.VisualStudio.Services.Icons.Default'], 
            title: 'Learning Management System',
            url: null,
            vendor: 'data:image/png;base64,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',
            company: 'Pelindo',
            date: 'Mar 2021 - Aug 2021',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam lorem ipsum dolor sit amet, consectetur',
        },
        { 
            thumb: ['https://tyriar.gallerycdn.vsassets.io/extensions/tyriar/lorem-ipsum/1.3.1/1640026564395/Microsoft.VisualStudio.Services.Icons.Default'], 
            title: 'Employee Self Service',
            url: null,
            vendor: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPT5oP76HKC-wNB1bNSrpB2Ga-r3GY9DVXwg&usqp=CAU',
            company: 'Pegadaian',
            date: 'Jul 2020 - Dec 2020',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam lorem ipsum dolor sit amet, consectetur',
        },
        { 
            thumb: ['https://tyriar.gallerycdn.vsassets.io/extensions/tyriar/lorem-ipsum/1.3.1/1640026564395/Microsoft.VisualStudio.Services.Icons.Default'], 
            title: 'Official Travel Document Manager',
            url: null,
            vendor: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPT5oP76HKC-wNB1bNSrpB2Ga-r3GY9DVXwg&usqp=CAU',
            company: 'Pegadaian',
            date: 'Jul 2020 - Dec 2020',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam lorem ipsum dolor sit amet, consectetur',
        },
        { 
            thumb: ['https://tyriar.gallerycdn.vsassets.io/extensions/tyriar/lorem-ipsum/1.3.1/1640026564395/Microsoft.VisualStudio.Services.Icons.Default'], 
            title: 'Integrated Talent Management System',
            url: null,
            vendor: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/CMYK_LOGO-01_pngs.png',
            company: 'Nindya Karya',
            date: 'Nov 2019 - Apr 2020',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam lorem ipsum dolor sit amet, consectetur',
        },
        { 
            thumb: ['https://tyriar.gallerycdn.vsassets.io/extensions/tyriar/lorem-ipsum/1.3.1/1640026564395/Microsoft.VisualStudio.Services.Icons.Default'], 
            title: 'Content Management System',
            url: null,
            vendor: 'https://www.telkom.co.id/data/image_upload/page/1594112895830_compress_PNG%20Icon%20Telkom.png',
            company: 'Telkom Indonesia',
            date: 'Jul 2019 - Dec 2020',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam lorem ipsum dolor sit amet, consectetur',
        },
        { 
            thumb: ['https://tyriar.gallerycdn.vsassets.io/extensions/tyriar/lorem-ipsum/1.3.1/1640026564395/Microsoft.VisualStudio.Services.Icons.Default'], 
            title: 'Face Recognition API',
            url: null,
            vendor: 'https://www.telkom.co.id/data/image_upload/page/1594112895830_compress_PNG%20Icon%20Telkom.png',
            company: 'Telkom Indonesia',
            date: 'Jun 2019 - Aug 2019',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam lorem ipsum dolor sit amet, consectetur',
        },
        { 
            thumb: ['https://tyriar.gallerycdn.vsassets.io/extensions/tyriar/lorem-ipsum/1.3.1/1640026564395/Microsoft.VisualStudio.Services.Icons.Default'], 
            title: 'Integrated Talent Management System',
            url: null,
            vendor: 'data:image/png;base64,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',
            company: 'Pelindo',
            date: 'May 2019 - Aug 2019',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam lorem ipsum dolor sit amet, consectetur',
        },
        { 
            thumb: ['https://tyriar.gallerycdn.vsassets.io/extensions/tyriar/lorem-ipsum/1.3.1/1640026564395/Microsoft.VisualStudio.Services.Icons.Default'], 
            title: 'Human Capital Information System',
            url: null,
            vendor: 'https://www.telkom.co.id/data/image_upload/page/1594112895830_compress_PNG%20Icon%20Telkom.png',
            company: 'Telkom Indonesia',
            date: 'April 2019 - May 2019',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam lorem ipsum dolor sit amet, consectetur',
        },
        { 
            thumb: ['https://tyriar.gallerycdn.vsassets.io/extensions/tyriar/lorem-ipsum/1.3.1/1640026564395/Microsoft.VisualStudio.Services.Icons.Default'], 
            title: 'E - Commerce',
            url: null,
            vendor: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5ECSYC43D7NY9-qR2SwD0FSeg5CKWKll8g&usqp=CAU',
            company: 'Paytren',
            date: 'Jan 2018 - Mar 2018',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam lorem ipsum dolor sit amet, consectetur',
        },
        
    ]

    const setModal:modal = v => e => {
        setActive(v)
    }

    return (
        <>
            <Navbar></Navbar>
            <Banner>
                <>
                    <div className={style.header}>
                        <div className={style.header_content}>
                            <h1 className={style.title}>Projects</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam lorem ipsum dolor sit amet, consectetur
                            </p>
                        </div>
                    </div>
                    <div className={style.collections}>
                        {
                            projects.map((item, key) => (
                                <Card
                                    onClick={setModal(true)}
                                    key={key} 
                                    item={item}>
                                    <>
                                        <div className={style.container}>
                                            <img 
                                                className={style.vendor}
                                                src={item.vendor || item.thumb} >
                                            </img>
                                            <div className={style.project}>
                                                <h4 className="is-marginless">{ item.title }</h4>
                                                <h4 className="is-marginless normal">{ item.date }</h4>
                                                <h4 className="is-marginless normal">{ item.company }</h4>
                                            </div>
                                        </div>
                                        <p className="is-marginless is-paddingless normal">{ item.desc }</p>
                                    </>
                                </Card>
                            ))
                        }
                    </div>
                    {/* <Footer></Footer> */}
                    <Footer></Footer>
                </>
            </Banner>
            <Modal active={active} onClose={setModal(false)}></Modal>

        </>
    )

}

export default Project;