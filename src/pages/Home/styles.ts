import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1180px;
  padding: 0 2rem;
  margin: 0 auto;
  a {
    text-decoration: none;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  margin-top: 4.5rem;
`
export const PublicationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  strong{
    font-size: 1.125rem;
    font-weight: 700;
    color: ${props => props.theme["bgray-200"]};
    line-height: 1.6;
  }

  span {
    font-size: 0.875rem;
    color: ${props => props.theme["bgray-400"]};
  }
`

export const InputBase = styled.input`
  height: 3.125rem;
  width: 100%;
  border: 1px solid ${props => props.theme["bgray-600"]};
  border-radius: 6px;
  background: ${props => props.theme["bgray-1000"]};
  padding: 0.75rem 1rem;
  color: ${props => props.theme["bgray-300"]};
  margin-bottom: 3rem;

  &::placeholder{
    color: ${props => props.theme["bgray-500"]};
    font-size: 1rem;
  }

  &:focus{
    border: 1px solid ${props => props.theme["blue-400"]};
  }

`

export const PostSession = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 8rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction:column;
    gap: 2rem;
  }

`

export const PostSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 1.25rem;
  padding: 2rem;
  background: ${props => props.theme["bgray-700"]};
  border: 2px solid transparent;
  border-radius: 10px;

  &:hover{
    border: 2px solid ${props => props.theme["bgray-500"]};
  }

`

export const PostSummaryHeader = styled.div`
  display: flex;
  align-items:  flex-start;
  justify-content: space-between;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid transparent;

  h3{
    font-weight: 700;
    font-size: 1.25rem;
    color: ${props => props.theme["bgray-100"]};
    line-height: 1.6;
  }

  span{
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${props => props.theme["bgray-400"]};
  }

`
export const MarkdownContainer = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: ${props => props.theme["bgray-300"]};

  .markdownHome {
    line-height: 1.6;
    hyphens: "auto";
  }

  .markdownHome a {
    color: ${props => props.theme["blue-400"]};
  }

  .markdownHome li{
    margin-left: 2rem;
  }
`