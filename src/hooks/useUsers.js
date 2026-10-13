import { useEffect, useState } from 'react'
import axios from 'axios'
import { fetchUsers } from '../services/usersApi.js'

// PASO 3: Consumo de API con Axios + Async/Await en useEffect (loading, data, error, AbortController)
export default function useUsers() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadUsers() {
      try {
        const users = await fetchUsers(controller.signal)
        setData(users)
        setError('')
      } catch (requestError) {
        if (!axios.isCancel(requestError)) {
          setError('No fue posible cargar el directorio. Intenta nuevamente.')
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadUsers()
    return () => controller.abort()
  }, [])

  // La dependencia vacía evita repetir el fetch en cada render; los cambios de estado del resultado se agrupan en un render.
  return { data, loading, error }
}
