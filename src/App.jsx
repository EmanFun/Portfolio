
import {Contact} from './Components/Modules/Contact'
import './App.css'
import { About } from './Components/Modules/AboutUs'
import { Projects } from './Components/Modules/Projects'
import  { Skills }  from './Components/Modules/TechSkills'
import { Social } from './Components/Modules/Social'
import Educaction from './Components/Modules/Education/Educaction'
function App() {


  return (
    <main id='root'>
    <About/>
    <Projects/>
    <Skills/>
    <Educaction/>
    <Contact/>
    <Social/>
    </main>
  )
}

export default App
