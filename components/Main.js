import WorkImage from "./common/WorkImage"
import Fade from 'react-reveal/Fade'
import MainPara from "./common/MainPara"
export default function Main() {
    const path = '/images/main-image.png'

    return (
        <div className="lg:flex lg:flex-row pt-12" id="main">
            <div className="w-full md:w-full w-6/12 md:pl-20 pl-12 flex">
                <a className="transform rotate-180 text-center font-bold self-end mb-12" href='/pdf/sample.pdf' download style={{ writingMode: 'vertical-rl' }}>download cv</a>
                <Fade left>
                    <img src={path} alt="My Image" className="ml-auto xl:h-auto md:h-4/5"/>
                </Fade>
            </div>
            <div className="w-full md:w-full w-6/12 pr-20 pl-12">
                <div>
                    <h1 className="font-sans font-bold text-6xl pt-16">Why Me</h1>
                    <p className="max-w-lg leading-7">
                        <MainPara para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                        <MainPara para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                    </p>
                </div>
                <p className="font-sans font-bold text-6xl pt-8">Latest Work</p>
                <Fade bottom>
                    <div className="flex pt-12 md:w-full flex-wrap">
                        <WorkImage fileName="1"/>
                        <WorkImage fileName="2"/>
                        <WorkImage fileName="3"/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}