import styled from "styled-components";

const HeaderStyled = styled.div`
  width: 100%;
  padding: 0.625rem 1.875rem;
  background: ${(props) => props.theme.colors.header};
  display: flex;
  align-items: center;
  justify-content: center;
  .main-title {
    color: ${(props) => props.theme.colors.secondary};
    font-size: ${(props) => props.theme.fontSize.secondaryTitle};
    @media (min-width: ${(props) => props.theme.screenDesktop}) {
      font-size: ${(props) => props.theme.fontSize.title};
      font-weight: ${(props) => props.theme.fontWeights.bold};
    }
  }
`;

export default HeaderStyled;
