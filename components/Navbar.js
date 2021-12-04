import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import {faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'
export default function Navbar() {
    const twitterURL = '#'
    const linkedinURL = '#'
    const instegramURL = '#'
    return (
        <div className="flex flex-col h-0 items-center justify-between z-50 w-7/12 self-center m-auto">
            <h1 className="font-sans font-bold text-xl pt-8">natasha.</h1>
            <div className="pt-2">
                <Link href={twitterURL}><FontAwesomeIcon icon={faTwitter} className="text-2xl mx-2 text-blue-400 hover:text-blue-500 cursor-pointer"/></Link>
                <Link href={linkedinURL}><FontAwesomeIcon icon={faLinkedin} className="text-2xl  mx-2 text-blue-900 hover:text-blue-800 cursor-pointer"/></Link>
                <Link href={instegramURL}><FontAwesomeIcon icon={faInstagram} className="text-2xl  mx-2 text-pink-500 hover:text-pink-600 cursor-pointer"/></Link>
            </div>
        </div>
    )
}