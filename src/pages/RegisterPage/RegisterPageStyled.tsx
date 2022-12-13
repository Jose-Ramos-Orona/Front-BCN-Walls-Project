import styled from "styled-components";

const RegisterPageStyled = styled.main`
  display: flex;

  @media (min-width: ${(props) => props.theme.screenDesktop}) {
    flex-grow: 1;
  }

  .graffiti {
    display: none;
    @media (min-width: ${(props) => props.theme.screenDesktop}) {
      display: flex;
      width: 50%;
      object-fit: cover;
    }
  }
`;

export default RegisterPageStyled;
