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
        thumb: string[] | null,
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
                'https://lh3.google.com/u/0/d/1yx8clJJZ6oRqHrz694a94OIXOegHEa-D=w3092-h2134-iv1',
                'https://lh3.google.com/u/0/d/1IwaJ_dtY-uTxfEzpbuTIIKnCfhj5NFCd=w3092-h2134-iv1',
                'https://lh3.google.com/u/0/d/1It6jW7iO9LCcgRUujkuuV60WiB1uOvZD=w3092-h2134-iv1',

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
            title: 'Learning Management System',
            url: null,
            vendor: 'data:image/png;base64,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',
            company: 'Pelindo',
            date: 'Mar 2021 - Aug 2021',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam lorem ipsum dolor sit amet, consectetur',
        },
        { 
            thumb: [
                'https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/ea6f1d270f78c8586e932cc567a26735?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7//////////wEaCXVzLXdlc3QtMiJGMEQCIE9Elsl1oPnwVzN7TQBOr/2O3HLt//SDW7coFFe4b7CeAiBWfLMrqejPHKbCyZTLq0v3Oxu1qAGT94Hv88VFFTMZdyrNBAhXEAAaDDczOTkzOTE3MzgxOSIMdNnaAzc2sVscT8dJKqoEJJVZ9wHwOJ5o%2BRr5ZPvsUWhV3/CRo%2BW%2B3JuRz8O9is/D5OOQMKPl4DN%2BHSUVhdNazSYrkH5sQwFYF4wVxEsfX%2B33S3PnDpjRElyYQuAJnyzkK4vSDDd4VNSA/Lm8L3xuWJloSabx5MjG3Edx%2BE%2BS8F2wX12PCCFEi/m/WcimJES/mJ5dYHYTdM691PxEdl/zXh26ydvZ8dSeeh7BeNf6zFhJ6Z9GLAJeQj/1JBw0c%2Bt%2BA/49g1MKRQSIawQjICnu7wxwEZB/GC2iiuA0dDxv9gyqq6xt%2B%2Bw/objlxH/FobNd7h%2BfSRiNt%2B8JSWI0KPetSck8hh4IDdTJyg2BAFO87qV2U8MSIP%2BwKjiBVjBUQVTZSGY2GiDHU2ilpBZq9SMt3trZJlTOe2JP4sR0IykSoBfOs1jlaXDvZyJHom%2BJRfgPOFVSk%2BRPVAkHpwaR5oCUrr4W%2BSTXFcZVCDSM7hfsslSwaGpImekAk0RK1Fy4g4tjsEC9nzmA%2B7lYckQONoFtfIqDrUvasOjJjkWfEihq%2BtFEzM6T7Mv%2Bz2orNm%2B9oWM7si5iXiSB99vZ2ctmScbJcRjGmPkBXg55GQzim2Dd5WmHB2gsxbL7c6cY7XNpUUr19T5i7fpkd7hfup59MO59BByU5f55XoQbumhYthbZfrWmF51Gn1wlliMZwrlFD4ZLF8lCn8n1yqwOpCl9S5p4PVpOYa4suGgdMPk%2BOt6QAWyyLrERw3%2BmNGUwlKS8nwY6qAH7fijrFOnK/ONasRhq9LfSium2CrJR8vq/iwl87HuxNb4AW%2B2FDW/6TNXd4uuKlJkvWWMBNVPI6ojGnXz2CcvruL5drf9fatR3C8kFE8eq4iC1qZYrCr7Btjx4RrcjKJ7i0uI2va7Sx6uHahRJnR89VpSBUZ7LpxnFg/4k3WVoWX9EKzIwFHA6xeDBNgmB9M69kU92M9CHUELIYfF9gvm7NkJppkaWNYI=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230217T073338Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW5SDS5CQMU/20230217/us-west-2/s3/aws4_request&X-Amz-Signature=d96a279c36e5146e5ed32f804601148f7d8863cbfb8bd3738fecb595d89fc37a',
                'https://www.upwork.com/att/download/portfolio/persons/uid/1118497619595493376/profile/projects/files/9c0c41ea-3032-408c-b625-7afa28e9bc50',
                'https://www.upwork.com/att/download/portfolio/persons/uid/1118497619595493376/profile/projects/files/dd8c4df8-91ec-405f-ad00-1dd31251ecb1',
                'https://www.upwork.com/att/download/portfolio/persons/uid/1118497619595493376/profile/projects/files/cd75d0f7-ae6f-4318-ab92-1907cebdde48'
            ], 
            title: 'Employee Self Service',
            url: null,
            vendor: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPT5oP76HKC-wNB1bNSrpB2Ga-r3GY9DVXwg&usqp=CAU',
            company: 'Pegadaian',
            date: 'Jul 2020 - Dec 2020',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam lorem ipsum dolor sit amet, consectetur',
        },
        { 
            thumb: [
                'https://lh3.googleusercontent.com/fife/AMPSemcWWSq0ZAeDrcL6qcCFhcXJt0VgAsWP7I2dp4XvAfdrIMpYTNsAlIkBRvf8heZNG42qCfYen6vx-oa03r-C2RPdt_qekuI4p3JzPPOQSNUO6BVjVJJOmufaZEmszoed48OnOfHmWT0Fd57hvqaAUdMD7JyChtln_UEwyDFAMsSUsvKD8h5i29rZ_OKLH9VE23t7PTgjXmEIsqK4eUgSsiLD08myUGcGKv3Sqt5nkyVeYFwMBUE3B9oyeNqnbSZdqGdBqzFoERQlCNmYDpSfogB2rFdM_W3VUXFU4790lNBYpvXo0RW-veSOvxWGExTyIHxEgV0qEwtTltV-cyQp82L9xUeXLHumaPGuiQoS8XKxDK9P43RN2BHyEDu05Vh15cU2yuy6SdVj1BcYy9WGuttaButz76EV9gZG-QWhalqy9kpxBXhnDmbomeRdxsGLwiCAclXh5JmicB95_kRz6fp2_zb9Oj0J6IpJIEHpMHRESb2lLcEmgPSucdmq1JaaMQPLFTyYaETI99vsdiCDv05wPVoH7SM-EOMUAE5TtXdRcgp855_kVmlPSn4_inv2a41GXAD4q5_KxuMFMGSbafLO2gtPWYowKsJu9e1GvmwqPWIqnJLF1KwN-uHQWXyOgk7d0IoFB1c9ADJl29WzhnoJVQId_ePbTXPtLQde6FQO7oRuKfpj51-2OLTwMLxRkxyjfNooOqV3aUj5iFI8FeR4bcH_TlWjUFE8NyrX55KJcEdbjl-ki_igCeuPXAnjoZzX1TiZQ8PQ8UvpKmqu-dgh8KqS2AVIkSOW-l5u4gIgbVkxA97jrWi2SPNcTWUhDJhyVQ1jlXOukl6ew9H4Clk1FABFgmEtlp0egKM0sHnwrTOf5frmWoXk5rsTxnDnS-WttHTBcdCh7I0b45a_0LBV3_OU14s-TSSs6xW1dyYARR-tgW7Br1VDsDwIZSsR0dyWyWhG3dELNIKqjkhfhXks9q6iOkbV_PMfmjn4sLKzsCyFTb8c_s1w2mozX08Z3EOOOSLNRefCYb8QzpwsLrXqo5QrlBniMM_8gUaW1byk-YrSKhc4PUg9dEsomO1HoRXFPOOMZG8WYN0rDF0_Edr21ZvTkLV9eNL4O-CvDm8n5_fkniIICpQpF-t-2-YTv6ZVrbz8FlwAKbZ2vfEh_8HcKIy-ZE2qnoe23KxNduKF_9qE1bsxd6xHdGZD2hs-YZXCXx2ZwbEYUAzJbp4d-XyjZq4gFkj0rQ4PZfMIohXCIkgm41jufDTHZQzg4C6rZVSRwv8SqR427m9y8ttm24icn3d8cd3Un4b_62yyQilhp_UePEKBe6Pd_ffx0oJPcc6iytAJy4r65Nc6WsJb3lS_n-c74royP7wPDxQk8t-QTOvJna0PWxE7_u4_jxw0ak0_J4ObVwIsctdw3OfvVYzxg7vZCVglqxpYcsEOIU2IXF9CeWVUJ4aQdthvNzFC4RE5MFVgIwzzh3UPKfLsag=w4386-h2134',
                'https://lh3.googleusercontent.com/fife/AMPSemdGXnKKLZsqhpWZ7cEaDLwkzVNyoXBsxzVnymeHSjWZ-lN3_ZW8nrpcVP24R5UPiEHDEhK1uy7u8Izgkjpl8I-wFS8VdxrNMhswk_YxRfMdoy8JiA29iu-TaAwDjCvROOR00nH4-kVWMqlwIagL5btUctKnkoskJ5K9T0In7chPu8HRRtruZEJuqKsLQ8Q_WIrH4tW2GevcY_kVA2GPiWrF3xz3S2XY49GqMdFmTzX-_NCcnopoyNTz47EtdGiL5JHitXwASkfOIV5mprpRyL3WUWIHO9e55ft6BV13Zb5rIVSI2sr1DIuMATTqxLw74GfYpdhwIu8eksvSyzJv6OJWDKDKHUnpINNWEeeWKeKXuBttrrvbHZre8r87QfuY3SGLGmNhir-Zb1IfTNe25ZYnDCo25RVPGAyGD83CuOUXbrRNhFTTDozFtXkjPuYpXg9EHJdP7fIFNZsAr2oCxhH_tCE6GjWwji73pbwIuMeE370t7AQlIThBZuypo6yhYO270kJZaShwJ-P8JBLwPIT-wCHPDTvBI-AT15_tpfosYQzMlwT3nzxi1sYOsn7uD_lzAIyVwvbW_M91qM4D8IN_4Y5npbs2mg3nQGwYulxGKkUPDRVwonoVmO_Afo5kcD1-y12Z9BclTE-svaJW8W2rrH5NHYjoaKaqc55TDttlUTLEfPr8JZCfTgGsUFbMkgKUgZxdwMyAWQKOQDhH7hVVjguuJnkmcWWTgaRRqxyx-QPOEzSNyrGVKkU-K7Jazj0tvolRyHKalf6Heov5Y6-tP_vzrpJizBrZ80x0iCvxRdbLPBM6sF0G_0J5-h7GSINO415DP0QmqcxKUdJxaw5dEtfNh6nTIOi0BmQif44IJF4e3BVgeencRHeeVFsNayljBrpbB3qn-woUeH1F4wRrNUF4wLAIYAf5-pcZkDgUpl0L3szS2lazU7O0GD_Q6u5naavKpEM9x70LJKqX6AYi5IenOq-DBhY7pyN9tNrQyM16eEmko-Vjye-TOkHi-rN-zlRfjv08h28I-FZslMgAqp6tTUVWP2tjD4FPDg33SGTaFG5lYp8sasj4HTGeKNs3zHIoNTYiixg4LPtadFZj4737Xxq6fmyUiim4MnWH9Ph-PB0WxhS2FVggIr8o--jKNskRocNSQlZwjwRJvl5_-prRUI92gD1EBzBJLJ51TIdJdUC10SClfcJO7hheVGfU4TkoK4XaOe5BIEiiwzN_NEedmuXfBL-i2TvsskEZrgibDAcQ2fBtDXxCgB_fk_UroOvYk0DK6ZbGj2nr86PG2Slum6sbKXaEsDfvwDJ92M-DhCt512DvRwhFHGYZLn4K3B9v8R8T8Sb2c2lhOp17vhaArG-ASsmlgkLXhsfa7pPryKiUt3TnNyK74O7IQVteiypXKZa_Zd9o2CPO_ee4l3QIJ1d2HwuGzQK7krXOG1crtaNTH_IhBPDZjWovhlkPXqBJ1KDlMfhHKX8NmQ=w4386-h2134',
            ], 
            title: 'Custom CMS for Employee Self Service',
            url: null,
            vendor: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPT5oP76HKC-wNB1bNSrpB2Ga-r3GY9DVXwg&usqp=CAU',
            company: 'Pegadaian',
            date: 'Jul 2020 - Dec 2020',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam lorem ipsum dolor sit amet, consectetur',
        },
        { 
            thumb: [
                'https://www.upwork.com/att/download/portfolio/persons/uid/1118497619595493376/profile/projects/files/cb6aff0e-8e99-494e-b87c-48ce7810da87',
                'https://www.upwork.com/att/download/portfolio/persons/uid/1118497619595493376/profile/projects/files/c90ce0ab-2f0a-4bdf-8249-81c899e7c762',
                'https://www.upwork.com/att/download/portfolio/persons/uid/1118497619595493376/profile/projects/files/9df16b63-8879-4057-ba37-3da9889a289d',
                'https://www.upwork.com/att/download/portfolio/persons/uid/1118497619595493376/profile/projects/files/af63ac40-599d-43d0-bb95-0d953d5efc31',
            ], 
            title: 'Official Travel Document Manager',
            url: null,
            vendor: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPT5oP76HKC-wNB1bNSrpB2Ga-r3GY9DVXwg&usqp=CAU',
            company: 'Pegadaian',
            date: 'Jul 2020 - Dec 2020',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam lorem ipsum dolor sit amet, consectetur',
        },
        { 
            thumb: [
                'https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/c5d0e7c17ba1899fc99b5b4302dc0363?response-content-disposition=inline;+filename=%22image_fixed_width%22;+filename*=utf-8%27%27image_fixed_width&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7//////////wEaCXVzLXdlc3QtMiJHMEUCICmKZbe8XZZtfnt2QW0OFAkeDbVw2DU76kScXEncWYNNAiEA3TLiFvBe6Gpo0dypZ4gSqOQgqFSwsYNgAQmQC85fZwwqzQQIVxAAGgw3Mzk5MzkxNzM4MTkiDPKnUhT2yxKEKSYeXSqqBPvn1Lk5XOZdpDaOnDqNavy7rZfecIWyQ0LjUCjgkIqpStSXSfjIyFMXGwcR00gMEBhb8FcG3NHsTdOtbzYAwRbWEHq4gTipieNGDZX6ocGP5iK5e7y0zflabBgqARFvda2Ci/inCgGMa65kD15VW//1xgddCv6aasBupc7KQKWSmx6zi4DQVd7sR1A6C8vE8sGyDyILvXWx7Q%2BRxgQV2B%2By5AluXMzUmlmnJSgosfsF/ttKAhqPc9Bq/O9V8QHjj0vH/DV/zZcVyrvH8oMsgOom126fwtISukrmzAv%2By9C%2BTRAKQn4d/K2jRSjcYwfaruP3WGsnX0DbRPbbWdgnOFAInW0wdscU3j77eVD6h/L8MazLHqS/ou/NeTWDSnvFcsoMSjqcc%2BP77KAAz69fKfJlUaaMIwpt2/m4VIAO0FvDvoXq7qyIBLLSbjWdYhxwhSTpw/PvdZyUUYAEUjZSDrJ/2Cd9VLP66wGR0ZdcFZzzwVUheLeZfLHBmVb9cMIT7S7ukykidsmTvINVGRV%2B9ZrRZ5hFdJH3uBjd5jdmT2svJasJguo1oL2S/kTZubHPkISfzYMDzEZiWCSd1wXwjtBaWE4omykmYQp9yH8RvDkeFdAhTX3rtAyFBhXlRUJOwgNHLBFkRbfnvVJkVHJn8fCYm1hFDJOsiKJRV66SwdkoB1OinPqSBD/sYqbS9unW2kRJRhdrNRornHh5SieaZ3EnBV6%2BAgQk7od5MPSpvJ8GOqcBCBwBKP4vOhCUZKt%2B0rwfWxSgwC332fyE78VoUyKt4msNtEeDsFW2hG2F4WUdkLiiSU6/yPkpxu%2BA2oNIcGofJVOupXc1YhT5AXuzkK7jMcKEyYSzKBpNAZS7FjTuxua/ZGaSy0cmA%2BW9fc3Db%2BFMmoJdXL2czRmOuycP/ib3KHtqBdaYJkMXaBTUDUnOLgnsPLSYJRhPaTXGTgSVEkuMhqiJFsO7OPw=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230217T072927Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW557O74TEP/20230217/us-west-2/s3/aws4_request&X-Amz-Signature=fe61d367d49a5603f9dbacd83708e8322109883f85bfd6ded211ffba6363d51c',
                'https://www.upwork.com/att/download/portfolio/persons/uid/1118497619595493376/profile/projects/files/bf1fcb41-4726-408e-8628-f477cc9b51f9',
                'https://www.upwork.com/att/download/portfolio/persons/uid/1118497619595493376/profile/projects/files/33c9376d-cd09-482e-a81c-3ae6834209a0',
                'https://www.upwork.com/att/download/portfolio/persons/uid/1118497619595493376/profile/projects/files/2dec352c-edfc-49ed-a4be-f1f99fdcf50e',
            ], 
            title: 'Integrated Talent Management System',
            url: null,
            vendor: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/CMYK_LOGO-01_pngs.png',
            company: 'Nindya Karya',
            date: 'Nov 2019 - Apr 2020',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam lorem ipsum dolor sit amet, consectetur',
        },
        { 
            thumb: [
                'https://lh3.googleusercontent.com/fife/AMPSemd0ceA9pPHhusu7PR6VO_2tKuK4aQygitDVnHCsg4ZOfuXytaC3v3XjcsoTfyXbiW62CCJTCAlow1NlKBBSISDf1F45omwWgw24BnZjn_q7GXsoo_p1sOimtNJbPlNtGlevBlr0dqKvBFSGW5_sZb6JYlsRgCS7Mxq7aumt1pccwVDO1NbqWH4KJgIsTwiVyxqhG64CbnPC3cRs8B6xPAP03XYOmoJ8j0gOR6KZ7oDVuWLYKQgQVz1nmP4uNcyDkXxXPZtczkADf1EgkwN5g9homu0bVZ4E-EYxt4Qx21LXLhvuPwwqW_5ENRgnQCRoLe9dH2AeT9cxVujy-0_xkkxscm82u32CTsvyEEVl3Au1mAA39cz5qH58ygYOsSeHsD62vuUWujT9EpowNYS7ryNWYacu3Zbj2uRlrXP4F5Wh-SBmTVXzngMobKXO78GwE4vSnftnYpyHE5Fx59BP9eggwjNjMohyYRVjEQwT6AMhMdAUCSDfyPn_TpB8DNax2Fz7LTdesTesapK9tbaQk1IK7S_KAqlueMY4Is4H8jzNOGHDO6Jqc5TsqBWygud7DcYB5p42SxPy8hnHZKwaY8pQ4cj8BrqIBE6E-xB3kuLejmQvcYUVibrysDumzihys4dX68Fe_hWhSF0co-62ufOaqeJZwV8Z4FNSoW2Adrfq2XdJCUj4dLk94eNE_ERXiOOsTf4Pe-aUxVdYFXivl4FlnieXKl_cENPOXixjKgCRHXy9fvQe4TAiECnJj_7MJI5XXOm3L1vfSKEEh-pcI2cBJxezGxFhm0UiNzZo1FGTXI4MKMTfNhLE94IfFgs5B4DcfsYhh9TzU-JHoUqXWDJDoUOMIfQiJhh9z10foKaDypZA8MLi508LHxiTkvAD_LsVyk8RbHCXLDFytAYbvciznC4PxSGRVrY8A0GnqDYI9FvS9UFQBCggqLo-0Ly3omKg16qnhtaILfLT3SpHanPNYZgREaPYeHfOxq2fOFg42LBl_SB53DqY_SPC833gwuWKNcsOf35_3apUUQ_6xFdD4GZrHTiILjbqnuQVSYruF-F3Oegx1qZNoICZD3uozzs_UeqIUJasRJJyrcEY8W9zjaeCJqcY9NKPBMQSmT153coBP9dITA6ge3abunbNKKdspqgRnq-tS9Hog9VTOkFPoM1_ofTzgU2_k3PhmvA-T8leE8H_gaMi9rMUFiyjKFDDGgPsf_dLM95kJCE60Cpjh6bnLxi9_Yi9KfOMosiLuoo-riqx4LfyyVKviNeAqVWtvHWu-YbnkXeRAPAwLTXzEOkNxMsKMkMlYsRHLWEwYh3OXIBp823niEJlt3DCL-Cxx5Y4mKh2Pb_0Qm30ZZxL0QtWmWUIhU5i05Sw8ySArOoYqM7AFVFU7kgSQ92wMsq_s_RzsJ5cNsyGrnd3H562Ua8TGweTB7GUvGvnWNOutas1r1rNNdlJ7cfma7tWjJP8liVv4wS2VuhGNYat4g=w4386-h2134',
                'https://lh3.googleusercontent.com/fife/AMPSemc6N_uj678dNW_0sN1DW4-wtJDZfNNZ5_Dq09E9YSsbda7zPvD-5bOMo4I4prd7x7oPwrLR4U-tSAeFUmBsX_RFDDa88D1VoygQ5SQcqi3iGRtaz0pp-5B2j3VNeYWv6tlZlRCGa83osq6v4B4wxSiKOdySkPI3Rw6baT4VVhd_PPfCjqN8CnRoIVz3EnAGxwLWo3GyS2JVa4YKNjmkXt-2xF6cBaawETKQN5hhkMoCa9TZ_R4w_SBskDhzSNGbfEei-8l_4y9CyUFsV3E6fUs-ujsD0x9xxLOJmdNtLT4q9HNrbpFDTaealTTV3P1zqSSDlPybE3GvbeAHxz_69wKIVGhnGHctQf3uhNbzgbEyO624JwpaXTm-YJhuZdOPesZBve1i7-XYlteZNKvrywnhqg1qd3AElNVQtG1JoPB5BnAAqDcD1O6cJP_8RP4gkpdok0lUNB6tvMwlSPwUaiJasOSyMoz1P1z-zclJ-eAhy_FC7RkqP1uMlxZCQfzviq5fXroKcZ4LAZtw3J1793N13zbQBJqY0xZbzarliOzG9lDwpM70Sa8JCJojXotQQu_qK-g4Uj2L8X7SkFipvotl1niuuESyc17OjrjYU7cdNN20GJ9gzGOlFDwS_kjlmFnfPYJydeoJEBJZFxImAmscYR5asVaqdpPlKPL72cq7YRGCB1kZYtrYo_mWiLuo5m3epx6LrIN4avo1kpXpKVn_C0UYyXvvVmTe_TXCqVuwmoThS9EfcOtFem5hzJ29_DH2VZ-ASpecioIPucPVcXL_xJk2Q-Qsi-_Q4uzA8w0YJpe_aKK_rqG3z8n8EkOIiv59a7g-_BIDvYLnXeAaEFQrTE1Aix3uRXP31nXfPbmONPh53Atl8movFO-zwJwNAyjCZ19ezbfqZqK3f7PIyRNSeuNtQYhw2UgvMvy555KMt0_1hIYfQ7gtQZ1A3JQMa6pt3t_sMulDtWM4q9GRsWlAjayOyqHYZ1yMBKMG7XvQzpO_7UtqXrF-6hxXlExIpJ2nGBV7SqPAu1Dnuxx5MyHhkfHhXdCHMe9NGk7bDiRC962ShrL066HmdjaIp7ZvH652bNjBqYOklJOsJQTsMnXQCyJI0zklvKpzKfdQ08r0V_-MWPNFZWSxWNaQiqgTNxTIVYBe1CiobCvxfESljqs3_NQ3IPYZeBDae9bygkHDK3yl7dKRXPEcNuWDgrG4b9Warb6x86O3IV74sM28yPJcjbv8sPqYiPp88Zy-K8Q2zgiAI20M_iNMFd0iItDjVdddmnL1VcpL17akJmb5pf4Xd3bc287_kz7D6H0__5r5dj4_khA1BeXy7ZuXqXU3SlyZ9IqU_sqQYVr_AduSmjrrlHDl-JWoKGKbXdj7xnxnzIZCxDo7YSU16009MMGtxBHrJTfuIC8qCGvvMIujbfSQ3LShqs-UEjONuvDbbPaYVgzN2X4EypzGi1aLo36BY7V8jRnsxzSvYOqNsirzvA=w4386-h2134',
                'https://lh3.googleusercontent.com/fife/AMPSemdQ2zJsDZjekmU5C1lRGqRmRuGUj8ZfQZhW2g5uh5txJdwVoiN7ZV44V9lulW4QRxoCEu160seDIT78u4qHsrR1pUX9-2nF-WOyWNPhTk7n8qqkn1-jefVorZLK_uF_sGP7zAOLoq4O_uoMrVobeKlFiwJ8HJ1wp28RwHg3c-ab33AqDGZaWlJ4UKNpohydJtPh2rSYft99IV2DxLzVLI1JNF-FciCa2ODmbBbx27w1Hu3hd4mhher2Vx59moKXfXwvctkh4bjWD69pAf5BPNpjqB0JWlMVCN3YT8Z1B2jO6w7mi5k2mFFZvOsVM-qHw0F0XezTlf2omeyyQqlzIBP9Qtu6EV1PYoPfRXNcgRRQ_SeTfZ8A91YF8NN3hijg6IqzcEfhdVsvUxuYeSNrgfTnrxlxX_8X2oMgPBqwtKZRbRrNCKLqdW0OhAHvMySenG40heACY7yKF5QNwWQs_144gy2PDJhv3buCe5jLyYBt_PUw-g-DEVnUuK8dG8YYMfSDKPs9sdUdZuIK9K8HsBSD8HfJheu_wcVr8fI9GtQdhiEjge8KbCTiBjAbB5HpKQjPNzPuSb5vV07MakxD3uDmS9jNHXEWX30uxkUVWcy0WU2VUo7FyJOQUk6qluoVYASDe6KJnH_r7P1RFlgfIbO8S5IUvNjRrfYS9FXV3MD1TlHhgY67_x_VRaSFrD6YuCE5PbxTC0Tt0urg5qzn9ded8RTbQYURAR7Y5MeBMIgQZVXh9ZRz7C5Ul3LA1cvdWG-xqqzh7ovECcN6kuXyoW5QvKxctWrqQEcCssyz9C0Py9k6sgF9ot1IaLkRnB46gBB-RuZCq4sAWRzdzVh28_7J3oTQP8N5G1Jkj9ykw9UATVkPcBaBcvNQaLsXPjuLwKpiFxXM67qLr-DkjBmfqC_04GAYckjwd70xjKf2i3NKTteF2lhe5zosnFq4SMnuB5tRIs4dvsMDgeuGQ-ZUJ02YJ92qVzxwj3ORGFoGjJezvP0gFTjiHJbB2X_E-7lPKmkOtaPXHZZfopLU-uxEGwV0jB6sWAYMsbMRP0P0_-I3N7XNUauMb6bAE1s6Isg_bQYlCOW8CX_V6CH0tZmVVEGAYM95ZJcRyRqHcmZDPprYszZDNRYNKU4KqCZPXVgL1kT5Y_nFdwkIoIujVWdhOx9F78FNkbXm8AzM2MWDgG7nICJjumwWXBZaD3xqICL9lot5x3ANCRod6isaLzR1NAWiHUrAGXNNkEf5b4uHfygR2S0l_Ki9tCQsgedAy_Nd8Xxjhb-iSv7_hWKGmOKdaffCIWlCKNviJZoiL-dNXv1RVhU7cQR81QlxsWP_eqFVAV46Y7t-j21pJ0WMYR-2YdhEK-_PlRh7_SxNQLSL5L0JAyLTDDTquGV_D54J_GdHc6dUmNc311ImDbM4BCc9NmcpRUs2M3n0oyurIa3-tvCi9OovrGH8DHgAjVJi5-Q_zj7uSj41sQUD297_0vNVOQ=w4386-h2134',
            ], 
            title: 'Content Management System',
            url: null,
            vendor: 'https://www.telkom.co.id/data/image_upload/page/1594112895830_compress_PNG%20Icon%20Telkom.png',
            company: 'Telkom Indonesia',
            date: 'Jul 2019 - Dec 2020',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam lorem ipsum dolor sit amet, consectetur',
        },
        { 
            thumb: null, 
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
            thumb: ['https://www.upwork.com/att/download/portfolio/persons/uid/1118497619595493376/profile/projects/files/117c7113-326d-4f36-bc06-318c65ddc5ba'], 
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
                                These are some of the formal projects that i have completed for clients both state-owned and private enterprises across Indonesia
                            </p>
                        </div>
                    </div>
                    <div className={style.collections}>
                        {
                            projects.map((item, key) => (
                                <Card
                                    onClick={setModal(true)}
                                    key={key} 
                                    item={item}
                                    displayThumb={!!item.thumb}>
                                    <>
                                        <div className={style.container}>
                                            <img 
                                                className={style.vendor}
                                                src={item.vendor} >
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