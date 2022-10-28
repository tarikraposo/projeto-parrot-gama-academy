import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import {router} from "./routes"
import GlobalStyle from './styles/global';
// import {Main} from './pages/Main'
// import GlobalStyle from './styles/global'
// import pkg from 'semantic-ui-react/package.json'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <section className='container'>
      <RouterProvider router = {router} />

    </section>

  </React.StrictMode>

)
