import { FooterContainer, HeaderContainer, IssuesContent, PostContainer, PostInfo } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalendarDay, faChevronLeft, faComment, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GithubDataContext } from "../../contexts/GithubDataContext";
import ReactMardown from 'react-markdown'

export function Post() {
  const { fetchIssue, issue } = useContext(GithubDataContext)
  const { number } = useParams()

  useEffect(() => {
    if (number) {
      fetchIssue(number)
    }
  }, [number])

  const githubLink = 'https://github.com/jgabrielbmm'


  return (
    <PostContainer>
      <PostInfo>
        <HeaderContainer>
          <Link to='/'>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>voltar</span>
          </Link>
          <a href={githubLink}>
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
            <span>{issue.createdAt.toDateString()}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{issue.comments}</span>
          </div>
        </FooterContainer>
      </PostInfo>
      <IssuesContent>
        <ReactMardown className="markdown">{issue.body}</ReactMardown>
      </IssuesContent>

    </PostContainer>
  )
}