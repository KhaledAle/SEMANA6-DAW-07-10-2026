import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

// PASO 2: Implementación de Enrutamiento (NavLink)
function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <NavLink className="brand" to="/" end aria-label="Directorio, inicio">
          <span className="brand-mark">D</span>
          <span>Directorio<span className="brand-dot">.</span></span>
        </NavLink>

        <div className="sidebar-label">MENÚ PRINCIPAL</div>
        <nav className="main-nav" aria-label="Navegación principal">
          <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            <span className="nav-icon" aria-hidden="true">⌂</span>
            Resumen
          </NavLink>
          <NavLink to="/usuarios" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            <span className="nav-icon" aria-hidden="true">◉</span>
            Directorio
          </NavLink>
          <NavLink to="/nuevo-usuario" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            <span className="nav-icon" aria-hidden="true">＋</span>
            Nuevo usuario
          </NavLink>
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-avatar">DA</div>
          <div>
            <strong>Administrador</strong>
            <span>Panel académico</span>
          </div>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <span>Panel de administración</span>
        </header>
        <div className="page-content">
          <Outlet />
        </div>
        <footer className="footer">Directorio Académico - Janampa Jaime Khaled Alejandro <span>·</span> Datos de demostración de JSONPlaceholder</footer>
      </main>
    </div>
  )
}

export default App
