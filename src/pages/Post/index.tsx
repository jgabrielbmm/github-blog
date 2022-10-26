import { FooterContainer, HeaderContainer, IssuesContent, PostContainer, PostInfo } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalendarDay, faChevronLeft, faComment, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GithubDataContext } from "../../contexts/GithubDataContext";
import ReactMardown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function Post() {
  const { fetchIssue, issue } = useContext(GithubDataContext)
  const { number } = useParams()

  useEffect(() => {
    if (number) {
      fetchIssue(number)
    }
  }, [number])

  console.log(issue)

  return (
    <PostContainer>
      <PostInfo>
        <HeaderContainer>
          <Link to='/'>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>voltar</span>
          </Link>
          <a href={issue.url} target="_blank">
            <span>Ver no github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </HeaderContainer>
        <h3>{issue.title}</h3>
        <FooterContainer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{issue.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{formatDistanceToNow(issue.createdAt, { locale: ptBR, addSuffix: true })}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{issue.comments}</span>
          </div>
        </FooterContainer>
      </PostInfo>
      <IssuesContent>
        <ReactMardown className="markdown" remarkPlugins={[[remarkGfm, { singleTilde: true }]]}>{issue.body}</ReactMardown>
      </IssuesContent>

    </PostContainer>
  )
}