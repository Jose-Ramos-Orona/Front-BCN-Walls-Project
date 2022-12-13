import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterPageStyled from "../RegisterPage/RegisterPageStyled";
import image from "../RegisterPage/intricate-explorer-H0-3xfbU8wk-unsplash.jpg";

const LoginPage = (): JSX.Element => {
  return (
    <RegisterPageStyled>
      <img className="graffiti" alt="A wall with a graffiti" src={image} />
      <LoginForm />
    </RegisterPageStyled>
  );
};

export default LoginPage;
