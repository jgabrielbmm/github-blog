import { ChangeEvent, useContext, useEffect, useState } from "react";
import { GithubDataContext } from "../../contexts/GithubDataContext";
import { CreatorInfo } from "./components/CreatorInfo";
import { Link } from 'react-router-dom'
import ReactMardown from 'react-markdown'
import {
  HomeContainer,
  InputBase,
  MarkdownContainer,
  PostSession,
  PostSummary,
  PostSummaryHeader,
  PublicationContainer,
  SearchContainer
} from "./styles";

export function Home() {
  const { issuesData, fetchIssuesData } = useContext(GithubDataContext)
  const [query, setQuery] = useState<string | null>(null)

  function handleSearchForIssue(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)
    console.log(query)
  }

  useEffect(() => {
    if (query) {
      fetchIssuesData(query)
    } else {
      fetchIssuesData()
    }
  }, [query])

  return (
    <HomeContainer>
      <CreatorInfo />

      <SearchContainer>
        <PublicationContainer>
          <strong>Publicações</strong>
          <span>6 publicações</span>
        </PublicationContainer>
        <InputBase type="text" placeholder="Buscar conteúdo" onChange={handleSearchForIssue} />
      </SearchContainer>
      <PostSession>
        {issuesData.length > 0 && (
          issuesData.map(issue => {
            return (
              <PostSummary key={issue.number} >
                <Link to={`/post/${issue.number}`}  >
                  <PostSummaryHeader>
                    <h3>{issue.title}</h3>
                    <span>{issue.createdAt.toDateString()}</span>
                  </PostSummaryHeader>
                </Link>
                <MarkdownContainer>
                  <ReactMardown className="markdownHome" >{issue.body}</ReactMardown>
                </MarkdownContainer>
              </PostSummary>
            )
          })
        )}


      </PostSession >

    </HomeContainer >
  )
}