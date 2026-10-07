import { useState } from 'react'
import { Link } from 'react-router-dom'
import { createUser } from '../services/usersApi.js'

const initialForm = { name: '', email: '', company: '' }

// PASO 4: Renderizado Iterativo/Condicional y Formulario Controlado (useState)
export default function UserForm() {
  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    setError('')
    setSuccess('')
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
    setError('')
    setSuccess('')

    try {
      const createdUser = await createUser({
        name: form.name.trim(),
        email: form.email.trim(),
        company: { name: form.company.trim() },
      })
      setSuccess(`Solicitud completada para ${createdUser.name}. JSONPlaceholder simula el registro y no guarda cambios permanentemente.`)
      setForm(initialForm)
    } catch {
      setError('No fue posible enviar el registro. Revisa tu conexión e inténtalo de nuevo.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section>
      <div className="page-heading">
        <div>
          <p className="eyebrow">DIRECTORIO</p>
          <h1>Registrar usuario</h1>
          <p>Completa los datos para enviar un nuevo perfil.</p>
        </div>
        <Link className="text-link" to="/usuarios">← Volver al directorio</Link>
      </div>

      <div className="form-layout">
        <form className="user-form" onSubmit={handleSubmit}>
          <div className="form-title">
            <div className="form-title-icon">＋</div>
            <div><h2>Información del perfil</h2><p>Los campos marcados con * son obligatorios.</p></div>
          </div>

          {error && <div className="notice notice-error" role="alert">{error}</div>}
          {success && <div className="notice notice-success" role="status">{success}</div>}

          <label className="field-label" htmlFor="name">Nombre completo <span>*</span></label>
          <input id="name" name="name" autoComplete="name" value={form.name} onChange={handleChange} placeholder="Ej. Alex Morgan" required />

          <label className="field-label" htmlFor="email">Correo electrónico <span>*</span></label>
          <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} placeholder="nombre@ejemplo.com" required />

          <label className="field-label" htmlFor="company">Organización <span>*</span></label>
          <input id="company" name="company" value={form.company} onChange={handleChange} placeholder="Institución o empresa" required />

          <div className="form-actions">
            <Link className="button button-quiet" to="/usuarios">Cancelar</Link>
            <button className="button button-primary" type="submit" disabled={submitting}>
              {submitting ? 'Enviando…' : 'Registrar usuario'}
            </button>
          </div>
        </form>

        <aside className="form-aside">
          <div className="aside-illustration" aria-hidden="true"><span>✦</span><div>+</div><i /></div>
          <h3>Amplía tu comunidad</h3>
          <p>Los nuevos perfiles pueden incluir su información de contacto y organización.</p>
          <div className="api-note"><strong>Modo de demostración</strong><span>El endpoint de JSONPlaceholder confirma las solicitudes, pero no persiste los registros.</span></div>
        </aside>
      </div>
    </section>
  )
}
