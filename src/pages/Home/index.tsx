import { ChangeEvent, useContext, useEffect, useState } from "react";
import { GithubDataContext } from "../../contexts/GithubDataContext";
import { CreatorInfo } from "./components/CreatorInfo";
import { Link } from 'react-router-dom'
import ReactMardown from 'react-markdown'
import { formatDistanceToNow } from 'date-fns'
import ptBR from "date-fns/esm/locale/pt-BR/index.js";

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
              <Link to={`/post/${issue.number}`}  >
                <PostSummary key={issue.number} >
                  <PostSummaryHeader>
                    <h3>{issue.title}</h3>
                    <span>{formatDistanceToNow(issue.createdAt, { locale: ptBR, addSuffix: true })}</span>
                  </PostSummaryHeader>
                  <MarkdownContainer>
                    <ReactMardown className="markdownHome" >{issue.body}</ReactMardown>
                  </MarkdownContainer>
                </PostSummary>
              </Link>
            )
          })
        )}
      </PostSession >

    </HomeContainer >
  )
}