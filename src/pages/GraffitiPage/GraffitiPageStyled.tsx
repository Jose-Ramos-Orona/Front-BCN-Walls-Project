import styled from "styled-components";

const GraffitiPageStyled = styled.main`
  .graffiti-title {
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fontSize.secondaryTitle};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    text-align: center;
    margin-top: 1.5rem;
    padding: 0 0.725rem;
    border-radius: ${(props) => props.theme.borderRadius.card};
  }
`;
export default GraffitiPageStyled;
