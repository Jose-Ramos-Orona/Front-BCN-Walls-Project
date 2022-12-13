import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegisterPageStyled from "./RegisterPageStyled";
import image from "./intricate-explorer-H0-3xfbU8wk-unsplash.jpg";

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageStyled>
      <img className="graffiti" alt="A wall with a graffiti" src={image} />
      <RegisterForm />
    </RegisterPageStyled>
  );
};

export default RegisterPage;
