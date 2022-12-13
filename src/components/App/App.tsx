import { useAppSelector } from "../../redux/hooks";
import Feedback from "../Feedback/Feedback";
import Layout from "../Layout/Layout";

const App = () => {
  const { isOpen } = useAppSelector(({ ui }) => ui);
  return (
    <div className="container">
      {isOpen && <Feedback />}
      <Layout />
    </div>
  );
};

export default App;
