
import {Contact} from './Components/Modules/Contact'
import './App.css'
import { About } from './Components/Modules/AboutUs'
import { Projects } from './Components/Modules/Projects'
import  { Skills }  from './Components/Modules/TechSkills'
function App() {


  return (
    <main id='root'>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    </main>
  )
}

export default App
