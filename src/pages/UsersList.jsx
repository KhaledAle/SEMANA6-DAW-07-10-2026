import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import UserCard from '../components/UserCard.jsx'
import useUsers from '../hooks/useUsers.js'

// PASO 4: Renderizado Iterativo/Condicional y Formulario Controlado (useState)
export default function UsersList() {
  const { data: users, loading, error } = useUsers()
  const [search, setSearch] = useState('')
  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return users
    return users.filter((user) =>
      [user.name, user.email, user.company?.name].some((value) =>
        value?.toLowerCase().includes(query),
      ),
    )
  }, [search, users])

  return (
    <section>
      <div className="page-heading">
        <div>
          <p className="eyebrow">COMUNIDAD</p>
          <h1>Directorio de usuarios</h1>
          <p>Administra y consulta los perfiles de tu comunidad.</p>
        </div>
        <Link className="button button-primary" to="/nuevo-usuario"><span aria-hidden="true">＋</span> Nuevo usuario</Link>
      </div>

      <div className="list-toolbar">
        <label className="search-box">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar por nombre, correo u organización"
            aria-label="Buscar usuarios"
          />
        </label>
        <span className="result-count">{loading ? 'Cargando perfiles…' : `${filteredUsers.length} perfiles`}</span>
      </div>

      {loading && <div className="state-panel" role="status"><span className="spinner" />Cargando usuarios del directorio…</div>}
      {error && (
        <div className="state-panel state-error" role="alert">
          <strong>No se pudo cargar el directorio</strong>
          <span>{error}</span>
        </div>
      )}
      {!loading && !error && filteredUsers.length === 0 && (
        <div className="state-panel"><strong>No encontramos usuarios</strong><span>Prueba con otro término de búsqueda.</span></div>
      )}
      {!loading && !error && filteredUsers.length > 0 && (
        <div className="users-grid">
          {filteredUsers.map((user) => <UserCard key={user.id} user={user} />)}
        </div>
      )}
    </section>
  )
}
