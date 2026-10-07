import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="not-found">
      <span className="not-found-code">404</span>
      <p className="eyebrow">PÁGINA NO ENCONTRADA</p>
      <h1>Este perfil no está en el directorio.</h1>
      <p>Puede que la dirección haya cambiado o que el enlace no sea correcto.</p>
      <Link className="button button-primary" to="/">Volver al resumen</Link>
    </section>
  )
}
