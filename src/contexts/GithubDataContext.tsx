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

export interface IssuesDataType {
  number: number
  login: string
  createdAt: Date
  comments: number
  title: string
  body: string
  url: string
}

interface GithubDataContextType {
  userData: UserDataType
  issuesData: IssuesDataType[]
  fetchIssue: (number: string) => void
  issue: IssuesDataType
  fetchIssuesData: (query?: string) => void
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

  const [issuesData, setIssuesData] = useState<IssuesDataType[]>([
    {
      number: 0,
      login: '',
      createdAt: new Date(),
      comments: 0,
      title: '',
      body: '',
      url: '',
    }
  ])

  const [issue, setIssue] = useState<IssuesDataType>(
    {
      number: 0,
      login: '',
      createdAt: new Date(),
      comments: 0,
      title: '',
      body: '',
      url: '',
    }
  )

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


  async function fetchIssuesData(query?: string) {
    if (!query) {
      const url = 'https://api.github.com/repos/jgabrielbmm/github-blog/issues'
      const response = await axios(url)

      const issues: IssuesDataType[] = response.data.map((issue: any) => {
        let body = issue.body

        const re = /(?<marks>[`]|\*{1,3}|_{1,3}|~{2})(?<inmarks>.*?)\1|\[(?<link_text>.*)\]\(.*\)/g
        body = body.replace(re, '$<inmarks>$<link_text>')

        if (body.length > 200) {
          body = body.substring(0, 200) + "..."
        }
        return {
          number: issue.number,
          login: issue.user.login,
          createdAt: new Date(issue.created_at),
          comments: issue.comments,
          title: issue.title,
          body: body,
          url: issue.url,
        }
      })
      setIssuesData(issues)
    } else {
      const url = `https://api.github.com/search/issues?q=${query}%20repo:jgabrielbmm/github-blog`
      const response = await axios(url)

      const issues: IssuesDataType[] = response.data.items.map((issue: any) => {
        let body = issue.body
        const re = /(?<marks>[`]|\*{1,3}|_{1,3}|~{2})(?<inmarks>.*?)\1|\[(?<link_text>.*)\]\(.*\)/g
        body = body.replace(re, '$<inmarks>$<link_text>')

        if (body.length > 200) {
          body = body.substring(0, 200) + "..."
        }

        return {
          number: issue.number,
          login: issue.user.login,
          createdAt: new Date(issue.created_at),
          comments: issue.comments,
          title: issue.title,
          body: body,
          url: issue.url,
        }
      })
      setIssuesData(issues)
    }
  }

  async function fetchIssue(number: string) {
    const url = `https://api.github.com/repos/jgabrielbmm/github-blog/issues/${number}`
    const response = await axios(url)
    const newIssue = {
      number: response.data.number,
      login: response.data.user.login,
      createdAt: new Date(response.data.created_at),
      comments: response.data.comments,
      title: response.data.title,
      body: response.data.body,
      url: response.data.html_url,
    }
    setIssue(newIssue)
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <GithubDataContext.Provider value={{ userData, issuesData, fetchIssue, issue, fetchIssuesData }}>
      {children}
    </GithubDataContext.Provider>
  )
}