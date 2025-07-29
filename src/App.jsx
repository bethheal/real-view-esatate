
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './pages/RootLayout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Properties from './pages/Properties'
import FAQ from './pages/FAQ'

const router = createBrowserRouter([

  {
    path:'/',
    Component:RootLayout,
    children:[
      {
        index: true,
        Component:Home,
      },

      {
        path:'/services',
        Component: Services,
      },
       {
        path:'/properties',
        Component: Properties,
      },
      {
        path:'contact',
        Component:Contact,
      },
       {
        path:'/help-center',
        Component: FAQ,
      },
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
   
  
}

export default App
