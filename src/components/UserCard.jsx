function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export default function UserCard({ user }) {
  return (
    <article className="user-card">
      <div className="user-card-heading">
        <div className="user-avatar">{initials(user.name)}</div>
        <span className="user-id">ID {user.id}</span>
      </div>
      <h2>{user.name}</h2>
      <p className="user-company">{user.company?.name || 'Organización independiente'}</p>
      <div className="user-card-details">
        <a href={`mailto:${user.email}`}><span aria-hidden="true">✉</span>{user.email}</a>
        {user.phone && <span><span aria-hidden="true">⌕</span>{user.phone}</span>}
        {user.website && <span><span aria-hidden="true">↗</span>{user.website}</span>}
      </div>
    </article>
  )
}
