import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import { UserRegisterData } from "../../types/types";
import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

const initialFormData = {
  username: "",
  password: "",
  email: "",
};

const RegisterForm = (): JSX.Element => {
  const { registerUser } = useUser();
  const [formData, setFormData] = useState(initialFormData);
  const miniumCharacters = 4;

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

    const formDataToSubmit: UserRegisterData = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
    };

    registerUser(formDataToSubmit);
  };
  return (
    <RegisterFormStyled className="register-form">
      <h2 className="register-form__title">Create an account</h2>
      <p className="register-form__introduction">Let's get started.</p>
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
          <label className="register-form__label" htmlFor="email">
            Email
          </label>
          <input
            className="register-form__field"
            type="email"
            id="email"
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
            minLength={miniumCharacters}
            autoComplete="off"
            onChange={handleFormChange}
          />
        </div>
        <Button buttonType="big" text="Register" />
      </form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
