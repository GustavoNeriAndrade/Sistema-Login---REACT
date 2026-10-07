import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router'
import Home from './pages/Home.tsx'
import Signin from './pages/Signin.tsx'
import Signup from './pages/Signup.tsx'

type PrivateProps = {
  Item: React.ComponentType
}

import useAuth from './hooks/useAuth.ts'
import { AuthProvider } from './Context/auth.tsx'

// eslint-disable-next-line react-refresh/only-export-components
const Private = ({Item}:PrivateProps)=>{

  const signed = useAuth().signed
  return signed ? <Item/> : <Navigate to='/signin'/>
}

const router = createBrowserRouter([{
  path:'/',
  element: <App/>,
  children:[
    {path: '/', element: <Signin/>},
    {path: '/home', element: <Private  Item={Home}/>},
    {path: '/signin', element: <Signin/>},
    {path: '/signup', element: <Signup/>}
  ]
}])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
