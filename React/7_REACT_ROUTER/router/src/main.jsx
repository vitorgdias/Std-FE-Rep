import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Contact from './routes/Contact.jsx'

// 2 - Página de erro
import ErrorPage from './routes/ErrorPage.jsx'

// 1 - Configurando o Router
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'

// 3 - Componente base
import Home from './routes/Home.jsx'

// 7 - rota dinâmica
import Product from './routes/Product.jsx'

// 8 - Nested routes
import Info from './routes/Info.jsx'

// 9 - Search
import Search from './routes/Search.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // 3 - Componente base
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // 7 - rota dinâmina
      {
        path: "products/:id",
        element: <Product />,
      },
      // 8 - nested routes
      {
        path: "products/:id/info",
        element: <Info />,
      },
      // 9 - Search
      {
        path: "search",
        element: <Search />,
      },
      // 10 - redirect
      {
        path: "test",
        element: <Navigate to="/"/>
      }
    ]
  },
  // Comentado para criar o componente base (children)
  // {
  //   path: "contact",
  //   element: <Contact />,
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
