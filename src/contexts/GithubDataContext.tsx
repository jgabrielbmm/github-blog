import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

export interface UserDataType {
  name: string
  login: string
  company: string | null
  bio: string | null
  followers: number
  imageUrl: string
}

interface GithubDataContextType {
  userData: UserDataType
}

interface GithubDataContextProviderProps {
  children: ReactNode
}

export const GithubDataContext = createContext({} as GithubDataContextType)

export function GithubDataContextProvider({ children }: GithubDataContextProviderProps) {
  const [userData, setUserData] = useState<UserDataType>({
    name: '',
    login: '',
    bio: '',
    company: '',
    followers: 0,
    imageUrl: ''
  })

  async function fetchUserData() {
    const url = 'https://api.github.com/users/jgabrielbmm'
    const response = await axios(url)

    const data = response.data

    const user: UserDataType = {
      name: data.name,
      login: data.login,
      company: data.company,
      bio: data.bio,
      followers: data.followers,
      imageUrl: data.avatar_url
    }

    setUserData(user)
  }

  useEffect(() => {
    fetchUserData()
  }, [])



  return (
    <GithubDataContext.Provider value={{ userData }}>
      {children}
    </GithubDataContext.Provider>
  )
}