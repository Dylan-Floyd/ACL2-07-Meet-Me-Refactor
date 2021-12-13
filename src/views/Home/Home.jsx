import { useEffect, useState } from 'react'
import Profile from '../../components/Profile/Profile'
import { useUser } from '../../context/UserContext'
import { fetchUser } from '../../services/user'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const { user, setUser } = useUser()
  
  useEffect(() => {
    if (user.name) {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [user])

  useEffect(() => {
    fetchUser()
      .then((fetchedUser) => {
        setUser(fetchedUser)
      })
      .catch((error) => {
        throw new Error(`Error: ${error}`)
      })
  }, [setUser])

  if (loading) return <h1>Loading...</h1>
  return <Profile />
}

export default Home
