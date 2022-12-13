import styled from "styled-components";

const LoaderStyled = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;

  .loader {
    height: 150px;
    width: 100px;
    border-radius: 55px 55px 10px 10px;
    position: relative;
    background: #ff3d00;

    background-image: linear-gradient(
      0deg,
      #262426 25%,
      #d21fd6 25%,
      #d21fd6 25%,
      #d21fd6 50%,
      #e01830 50%,
      #e01830 50%,
      #e01830 75%,
      #f8f8f8 75%
    );
    background-position: 0px 0px;
    background-size: auto 175px;
    background-repeat: repeat-y;
    animation: colorShift 6s linear infinite;
  }
  .loader:before {
    content: "";
    position: absolute;
    left: 10px;
    bottom: 15px;
    width: 15px;
    height: 100px;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.5);
  }

  .loader:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, 0);
    box-shadow: 0 15px 2px rgba(0, 0, 0, 0.25) inset;
    width: 32px;
    height: 45px;
    background: #e09c5f;
    border-radius: 0 0 12px 12px;
  }

  @keyframes colorShift {
    to {
      background-position: 0 175px;
    }
  }
`;

export default LoaderStyled;
