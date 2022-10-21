import styled from "styled-components";

export const CreatorInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding: 2rem;
  margin-top: -5.5rem;

  background: ${props => props.theme["bgray-800"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  img{
    width: 9.25rem;
    height:9.25rem;
  }

  p {
    margin-bottom: 1.5rem;
    color: ${props => props.theme["bgray-300"]};
    font-size: 1rem;
  }


  @media (max-width: 768px) {
    display: flex;
    flex-direction:column;
    gap: 2rem;
  }
`

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  h1{
    font-weight: 700;
    font-size: 1.5rem;
    color: ${props => props.theme["bgray-100"]};
    margin-bottom: 0.5rem;
  }

 a {
    display: flex;
    align-items:center;
    gap: 0.5rem;
    font-size: 0.875rem;
    font-weight: bold;
    color: ${props => props.theme["blue-400"]};
    text-decoration: none;
    border: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${props => props.theme["blue-400"]};
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction:column;
    align-items:center;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 320px) {
    h1 {
      font-size: 1rem;
    }
  }

`

export const GeneralInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  div span {  
    color: ${props => props.theme["bgray-200"]};
    font-size: 1rem;
    line-height: 1.6;
  }

  div svg {
    width: 1.125rem;
    height: 1.125rem;
    color: ${props => props.theme["bgray-500"]};
  }

`
