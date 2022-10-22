import styled from "styled-components";

export const PostContainer = styled.div`
   display: flex;
  flex-direction: column;
  max-width: 1180px;
  padding: 0 2rem;
  margin: 0 auto 8rem;
`

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 2rem;
  margin-top: -5.5rem;

  background: ${props => props.theme["bgray-800"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;


  h3 {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${props => props.theme["bgray-100"]};
    margin-bottom: 0.5rem;
  }
`

export const HeaderContainer = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.5rem;

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.75rem;
    color: ${props => props.theme["blue-400"]};

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

`

export const FooterContainer = styled.footer`
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
    font-size: 1rem;
    line-height: 1.6;
    color: ${props => props.theme["bgray-400"]};
  }

  div svg {
    width: 1.125rem;
    height: 1.125rem;
    color: ${props => props.theme["bgray-500"]};
  }
`

export const IssuesContent = styled.article`
  padding: 2.5rem 2rem;

  .markdown {
    white-space: pre-wrap;
  }
`