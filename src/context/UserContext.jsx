import { createContext, useState, useContext } from 'react';

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

const useUser = () => {
  const context = useContext(UserContext)

  if(context === undefined)
    throw new Error('useUser can only be used inside child components of UserProvider')

  return context
}

export { useUser, UserProvider }