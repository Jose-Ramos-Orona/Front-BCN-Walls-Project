import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  buttonType: "small" | "big" | "form";
  text: any;
  action?: () => void;
}

const Button = ({ buttonType, text, action }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled buttonType={buttonType} className="button" onClick={action}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
