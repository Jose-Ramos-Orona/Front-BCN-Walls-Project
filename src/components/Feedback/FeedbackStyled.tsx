import styled from "styled-components";

const FeedbackStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  padding: 10px 10px;
  border-radius: ${(props) => props.theme.borderRadius.card};

  &.feedback-error {
    background-color: ${(props) => props.theme.colors.errorBackground};
    color: ${(props) => props.theme.colors.error};
    border: 1px solid ${(props) => props.theme.colors.error};
  }
  &.feedback-success {
    background-color: ${(props) => props.theme.colors.correctBackground};
    color: ${(props) => props.theme.colors.correct};
    border: 1px solid ${(props) => props.theme.colors.correct};
  }
`;

export default FeedbackStyled;
