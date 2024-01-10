
import {Contact} from './Components/Modules/Contact'
import './App.css'
import { About } from './Components/Modules/AboutUs'
import { Projects } from './Components/Modules/Projects'
import  { Skills }  from './Components/Modules/TechSkills'
import { Social } from './Components/Modules/Social'
function App() {


  return (
    <main id='root'>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Social/>
    </main>
  )
}

export default App
