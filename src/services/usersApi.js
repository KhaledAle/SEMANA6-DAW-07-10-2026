import axios from 'axios'

const usersApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: { 'Content-Type': 'application/json' },
})

export async function fetchUsers(signal) {
  const { data } = await usersApi.get('/users', { signal })
  return data
}

export async function createUser(user) {
  const { data } = await usersApi.post('/users', user)
  return data
}
