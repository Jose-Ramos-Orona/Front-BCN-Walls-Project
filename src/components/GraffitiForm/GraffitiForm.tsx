import { useState } from "react";
import useGraffiti from "../../hooks/useGraffiti/useGraffiti";
import Graffiti from "../../redux/features/graffitiSlice/types";
import Button from "../Button/Button";
import RegisterFormStyled from "../RegisterForm/RegisterFormStyled";

const initialFormData = {
  title: "",
  image: "",
  author: "",
  address: "",
  theme: "",
  description: "",
};

const GraffitiForm = (): JSX.Element => {
  const { createGraffiti } = useGraffiti();
  const [formData, setFormData] = useState(initialFormData);

  const options = [
    { value: "", text: "--Choose an option--" },
    { value: "Tag", text: "Tag" },
    { value: "Abstract", text: "Abstract" },
    { value: "Character", text: "Character" },
    { value: "Nature", text: "Nature" },
    { value: "Other", text: "Other" },
  ];

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

    const formDataToSubmit: Graffiti = {
      title: formData.title,
      image: formData.image,
      author: formData.author,
      address: formData.address,
      theme: select,
      description: formData.description,
    };

    createGraffiti(formDataToSubmit);
  };

  const [select, setSelected] = useState(options[0].value);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
  };

  return (
    <RegisterFormStyled className="register-form">
      <form
        className="register-form__container create-form"
        onSubmit={(event) => handleSubmit(event)}
      >
        <h2 className="register-form__title">Paint the wall!</h2>
        <div className="register-form__input">
          <label className="register-form__label" htmlFor="title">
            Title:
          </label>
          <input
            className="register-form__field create-form__field"
            type="text"
            id="title"
            required
            autoComplete="off"
            onChange={handleFormChange}
          />
        </div>
        <div className="register-form__input">
          <label className="register-form__label" htmlFor="image">
            Image:
          </label>
          <input
            className="register-form__field create-form__field"
            type="text"
            id="image"
            required
            autoComplete="off"
            onChange={handleFormChange}
          />
        </div>
        <div className="register-form__input">
          <label className="register-form__label" htmlFor="author">
            Author:
          </label>
          <input
            className="register-form__field create-form__field"
            type="text"
            id="author"
            required
            autoComplete="off"
            onChange={handleFormChange}
          />
        </div>
        <div className="register-form__input">
          <label className="register-form__label" htmlFor="address">
            Address:
          </label>
          <input
            className="register-form__field create-form__field"
            type="text"
            id="address"
            required
            autoComplete="off"
            onChange={handleFormChange}
          />
        </div>
        <div className="register-form__input">
          <label className="register-form__label" htmlFor="theme">
            Theme:
          </label>
          <select
            name="select"
            value={select}
            className="register-form__field create-form__field"
            id="theme"
            required
            onChange={handleChange}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
        <div className="register-form__input">
          <label className="register-form__label" htmlFor="description">
            Description:
          </label>
          <input
            className="register-form__field create-form__field"
            type="text"
            id="description"
            required
            autoComplete="off"
            onChange={handleFormChange}
          />
        </div>
        <Button buttonType="form" text="Create" />
      </form>
    </RegisterFormStyled>
  );
};

export default GraffitiForm;
