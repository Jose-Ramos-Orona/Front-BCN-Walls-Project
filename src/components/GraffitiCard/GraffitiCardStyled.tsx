import styled from "styled-components";

const GraffitiCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  border-radius: 8px;
  text-align: center;
  overflow: hidden;

  .graffiti-card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .graffiti-card__title {
    padding: 1rem 0;
  }

  .button {
    display: block;
    margin: 1rem auto;
    padding: 10px;
    border: 2px solid ${(props) => props.theme.colors.primary};
  }
`;

export default GraffitiCardStyled;
