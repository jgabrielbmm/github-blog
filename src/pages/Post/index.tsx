import { FooterContainer, HeaderContainer, IssuesContent, PostContainer, PostInfo } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalendarDay, faChevronLeft, faComment, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export function Post() {
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
        <h3>JavaScript data types and data structures</h3>
        <FooterContainer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>jgabrielbmm</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>1.5k comentários</span>
          </div>
        </FooterContainer>
      </PostInfo>
      <IssuesContent>
        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

        Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

        let foo = 42;   // foo is now a number
        foo = ‘bar’;    // foo is now a string
        foo = true;     // foo is now a boolean
      </IssuesContent>

    </PostContainer>
  )
}