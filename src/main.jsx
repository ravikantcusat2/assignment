import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Header from './Component/Header/Header.jsx'
import CardDetails from './Component/Card/CardDetails.jsx'
import Card from './Component/Card/Card.jsx'


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='/' element={<Card />}/>
     <Route path='details' element={<CardDetails />}/>

    </Route>
      
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
