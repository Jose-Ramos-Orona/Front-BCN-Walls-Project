import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { closeModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import FeedbackStyled from "./FeedbackStyled";

const Feedback = (): JSX.Element => {
  const { message: feedbackMessage, isError } = useAppSelector(({ ui }) => ui);
  const dispatch = useAppDispatch();

  const closeFeedback = useCallback(() => {
    dispatch(closeModalActionCreator());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      closeFeedback();
    }, 2300);
    return () => {
      clearTimeout(timer);
    };
  }, [closeFeedback]);

  return (
    <FeedbackStyled className={isError ? "feedback-error" : "feedback-success"}>
      <div className="feedback-message">{feedbackMessage}</div>
    </FeedbackStyled>
  );
};

export default Feedback;
