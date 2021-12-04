import Navbar from "../components/Navbar"
import {Controller, Scene} from 'react-scrollmagic'
import { Tween, Timeline} from 'react-gsap'
import AboutMe from "../components/AboutMe"
import Main from "../components/Main"

export default function Home() {
  return (
    <div id="home">
      <Navbar />
      <Main />
      <AboutMe />
    </div>
  )
}
