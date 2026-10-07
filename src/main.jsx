import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import UsersList from './pages/UsersList.jsx'
import UserForm from './pages/UserForm.jsx'
import NotFound from './pages/NotFound.jsx'

// PASO 1: Configuración de estructura y librerías
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="usuarios" element={<UsersList />} />
          <Route path="nuevo-usuario" element={<UserForm />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
