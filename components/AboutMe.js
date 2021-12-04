import Card from "./common/Card";
import { faCode, faQuidditch, faRobot } from "@fortawesome/free-solid-svg-icons"; 
import Link from "next/link"
import Fade from 'react-reveal/Fade';
import AboutMePara from "./common/AboutMePara";

export default function AboutMe() {
    return (
        <div className="flex flex-col pb-12 lg:flex-row">
            <div className="pt-28 px-12 pl-12 lg:pl-28 xl:pl-56 xl:pt-48">
                <Fade left>
                <p className="font-sans font-bold text-6xl">About Me</p>
                <AboutMePara para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                <AboutMePara para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                <div>
                    <Link href='mailto:someone@example.com'><button className="w-40	h-10 bg-purple-500 mt-10 text-white">Contact Via Email</button></Link>
                </div>
                </Fade>
            </div>
            <Fade bottom>
                <div className="flex items-center justify-center flex-wrap px-12 lg:pl-28 xl:pr-28 lg:pl-8 md:pl-0 md:pr-0 lg:pt-28">
                    <Card icon={faQuidditch} title='Design' paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.'/>
                    <Card icon={faCode} title='Code' paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.'/>
                    <Card icon={faRobot} title='AI' paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.'/>
                </div>
            </Fade>
        </div>
    )
}