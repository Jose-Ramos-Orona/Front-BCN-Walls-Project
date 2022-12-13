import styled, { css } from "styled-components";

interface ButtonStyledProps {
  buttonType: "small" | "big" | "form";
}

const smallButton = css`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

const bigButton = css`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  border: none;
  padding: 20px;
  margin-top: 30px;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
`;

const formButton = css`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  border: none;
  padding: 20px;
  margin-top: 30px;
`;
const ButtonStyled = styled.button<ButtonStyledProps>`
  border-radius: ${(props) => props.theme.borderRadius.primary};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSize.primary};
  ${({ buttonType }) => buttonType === "big" && bigButton}
  ${({ buttonType }) => buttonType === "small" && smallButton};
  ${({ buttonType }) => buttonType === "form" && formButton};
`;

export default ButtonStyled;
