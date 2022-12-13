import styled from "styled-components";

const GraffitiCardListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  gap: 2rem;

  @media (min-width: ${(props) => props.theme.screenDesktop}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default GraffitiCardListStyled;
