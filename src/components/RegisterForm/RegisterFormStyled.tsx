import styled from "styled-components";

const RegisterFormStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
  padding: 25px 20px;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSize.primary};
  max-width: 400px;
  margin: 0 auto;

  .create-form {
    background-color: ${(props) => props.theme.colors.primary};
    padding: 20px;
    color: ${(props) => props.theme.colors.secondary};

    &__field {
      margin-top: 10px;
    }
  }
  .register-form {
    display: flex;
    flex-direction: column;

    &__title {
      font-size: ${(props) => props.theme.fontSize.secondaryTitle};
      font-weight: ${(props) => props.theme.fontWeights.bold};
      text-align: center;
    }
    &__container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      border-radius: ${(props) => props.theme.borderRadius.card};
    }
    &__field {
      font-size: 1rem;
      width: 100%;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.colors.primary};
      padding: 14px;
    }
  }
`;

export default RegisterFormStyled;
