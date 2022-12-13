import styled from "styled-components";

const GraffitiDetailStyled = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  margin: 1.25rem;
  border-radius: 8px;
  overflow: hidden;

  .graffiti-detail__title {
    padding: 1rem 0;
    font-size: 1.8rem;
    text-align: center;
  }

  .graffiti-detail__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .graffiti-detail__information {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.625rem;
    gap: 7px;
  }

  dt {
    font-size: ${(props) => props.theme.fontSize.primary};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    text-transform: uppercase;
  }

  dd {
    font-size: ${(props) => props.theme.fontSize.primary};
    padding-bottom: 0.313rem;
    margin-left: 0;
  }
`;

export default GraffitiDetailStyled;
