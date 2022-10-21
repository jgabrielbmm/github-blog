import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  height: 18.5rem;

  background: ${props => props.theme["bgray-800"]};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  img {
    width: 9.25rem;
    height: 6.125rem;
    margin-top: 4rem;
  }
`