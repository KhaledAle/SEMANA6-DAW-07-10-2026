import { Link } from 'react-router-dom'
import useUsers from '../hooks/useUsers.js'

// PASO 4: Renderizado Iterativo/Condicional y Formulario Controlado (useState)
export default function Home() {
  const { data: users, loading, error } = useUsers()
  const organizations = new Set(users.map((user) => user.company?.name).filter(Boolean))

  return (
    <section>
      <div className="welcome-banner">
        <div>
          <p className="eyebrow">DIRECTORIO ACADÉMICO / PROFESIONAL</p>
          <h1>Todo tu equipo,<br /><span>en un solo lugar.</span></h1>
          <p className="welcome-copy">Consulta y administra la información de estudiantes y profesionales de tu comunidad.</p>
          <Link className="button button-light" to="/usuarios">Explorar directorio <span aria-hidden="true">→</span></Link>
        </div>
        <div className="welcome-art" aria-hidden="true">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-center">D</div>
          <div className="art-person person-one">AM</div>
          <div className="art-person person-two">JL</div>
          <div className="art-person person-three">CR</div>
        </div>
      </div>

      <div className="section-heading">
        <div>
          <p className="eyebrow">VISTA GENERAL</p>
          <h2>Resumen del directorio</h2>
        </div>
        <span className="updated-label"><span /> Datos de muestra</span>
      </div>

      {error && <div className="notice notice-error" role="alert">{error}</div>}
      <div className="stats-grid">
        <article className="stat-card">
          <div className="stat-icon stat-purple">◎</div>
          <p>Usuarios registrados</p>
          <strong>{loading ? '—' : users.length}</strong>
          <span>Perfiles en el directorio</span>
        </article>
        <article className="stat-card">
          <div className="stat-icon stat-orange">▦</div>
          <p>Organizaciones</p>
          <strong>{loading ? '—' : organizations.size}</strong>
          <span>Empresas e instituciones</span>
        </article>
        <article className="stat-card">
          <div className="stat-icon stat-green">✓</div>
          <p>Estado de la conexión</p>
          <strong className="stat-connected">{loading ? 'Cargando' : error ? 'Sin conexión' : 'Activa'}</strong>
          <span>Fuente: JSONPlaceholder</span>
        </article>
      </div>

      <div className="home-lower">
        <div className="info-panel">
          <span className="panel-icon">✦</span>
          <div>
            <h3>Un espacio para conectar</h3>
            <p>Encuentra rápidamente información de contacto, organización y perfiles de tu comunidad.</p>
          </div>
        </div>
        <Link className="quick-link" to="/nuevo-usuario">
          <span className="quick-link-icon">＋</span>
          <span><strong>Registrar un usuario</strong><small>Agrega un perfil al directorio</small></span>
          <span className="quick-arrow">→</span>
        </Link>
      </div>
    </section>
  )
}
