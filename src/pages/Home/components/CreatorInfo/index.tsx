import foto from '../../../../assets/1.png'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CreatorInfoContainer, GeneralInfo, InfoContent, TitleContainer } from './styles'
import { useContext } from 'react'
import { GithubDataContext } from '../../../../contexts/GithubDataContext'
export function CreatorInfo() {
  const { userData } = useContext(GithubDataContext)
  const link = 'https://github.com/jgabrielbmm'


  return (
    <CreatorInfoContainer>
      <img src={userData.imageUrl} alt="" />

      <InfoContent>

        <TitleContainer>
          <h1>{userData.name}</h1>
          <a href={link} target="_blank">
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </TitleContainer>

        <p>{userData.bio}</p>

        <GeneralInfo>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{userData.login}</span>
          </div>
          {userData.company && (
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{userData.company}</span>
            </div>
          )}
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{userData.followers} seguidores</span>
          </div>
        </GeneralInfo>
      </InfoContent>
    </CreatorInfoContainer >
  )
}