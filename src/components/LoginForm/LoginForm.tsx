import { useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";
import { UserData } from "../../types/types";
import Button from "../Button/Button";
import RegisterFormStyled from "../RegisterForm/RegisterFormStyled";

const initialFormData = {
  username: "",
  password: "",
};

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();
  const [formData, setFormData] = useState(initialFormData);

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: UserData = {
      username: formData.username,
      password: formData.password,
    };

    loginUser(formDataToSubmit);
  };
  return (
    <RegisterFormStyled className="register-form">
      <h2 className="register-form__title">Login</h2>
      <p className="register-form__introduction">
        Welcome back! Please enter your details.
      </p>
      <form
        className="register-form__container"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="register-form__input">
          <label className="register-form__label" htmlFor="username">
            Username
          </label>
          <input
            className="register-form__field"
            type="text"
            id="username"
            required
            autoComplete="off"
            onChange={handleFormChange}
          />
        </div>
        <div className="register-form__input">
          <label className="register-form__label" htmlFor="password">
            Password
          </label>
          <input
            className="register-form__field"
            type="password"
            id="password"
            required
            autoComplete="off"
            onChange={handleFormChange}
          />
        </div>
        <Button buttonType="big" text="Login" />
        <p className="register-form__introduction">
          You don't have an account?&nbsp;
          <Link className="register-form__link" to={"/register"}>
            Register here
          </Link>
        </p>
      </form>
    </RegisterFormStyled>
  );
};

export default LoginForm;
