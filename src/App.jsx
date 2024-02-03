import './App.css'
import { About } from './Components/Modules/AboutUs'
import { Projects } from './Components/Modules/Projects'
import  { Skills }  from './Components/Modules/TechSkills'
import { Social } from './Components/Modules/Social'
import { Educaction } from './Components/Modules/Education'
import { Nav }from './Components/Modules/Nav'


import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom';

import Root from './routes/root/Root.jsx';


const AppLayout = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Social/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    
  },
  {
    element:<AppLayout/>,
    children: [
      {
        path:'about',
        element:<About/>
      },
      {
        path:'projects',
        element:<Projects/>
      },
      {
        path:'skills',
        element:<Skills/>
      },
      {
        path:'education',
        element:<Educaction/>
      }
    ]
  }


])


function App() {


  return (
    <main id='root'>
      <RouterProvider router={router}/>
    </main>
  )
}

export default App
