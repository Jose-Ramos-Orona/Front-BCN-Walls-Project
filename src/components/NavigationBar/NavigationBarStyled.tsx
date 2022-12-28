import styled from "styled-components";

const NavigationBarStyled = styled.div`
  min-height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-behavior: smooth;
  background: ${(props) => props.theme.colors.primary};

  .button {
    display: block;
    padding: 10px;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
  }

  .popover {
    width: 100%;
    display: flex;
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
  }

  .popover .content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => props.theme.colors.primary};
    animation: 300ms grow ease forwards;
    text-align: center;
  }

  .navigation__list a {
    text-decoration: none;
    font-size: ${(props) => props.theme.fontSize.primary};
    color: ${(props) => props.theme.colors.secondary};
  }

  .navigation__list-item {
    height: 100%;
    overflow: hidden;
  }

  .navigation__list li {
    padding: 15px 0;
    text-transform: uppercase;
    transform: translateY(200px);
    opacity: 0;
    animation: 500ms slideUp ease forwards 0.5s;
    position: relative;
  }

  .navigation__list li::before {
    content: "";
    position: absolute;
    height: 2px;
    width: 0px;
    left: 0;
    bottom: 10px;
    background: ${(props) => props.theme.colors.link};
    transition: all 0.3s ease;
  }

  .navigation__list li:hover:before {
    width: 100%;
  }

  .popover p {
    padding: 50px;
    opacity: 0;
    animation: 500ms fadeIn ease forwards 1s;
  }

  .popover .close {
    right: 0;
    bottom: 0;
    width: 50px;
    height: 50px;
    position: absolute;
    display: flex;
    z-index: 1;
    font-size: 30px;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.link};
    color: ${(props) => props.theme.colors.secondary};
    opacity: 0;
    animation: 500ms fadeIn ease forwards 0.5s;
  }

  @keyframes grow {
    100% {
      height: 35%;
      width: 100%;
    }
  }

  @keyframes fadeIn {
    100% {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
export default NavigationBarStyled;
