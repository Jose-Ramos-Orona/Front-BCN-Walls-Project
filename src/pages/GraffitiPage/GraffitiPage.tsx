import GraffitiCardList from "../../components/GraffitiCardList/GraffitiCardList";
import GraffitiPageStyled from "./GraffitiPageStyled";

const GraffitiPage = (): JSX.Element => {
  return (
    <GraffitiPageStyled>
      <h2 className="graffiti-title">A walk for the wall...</h2>
      <GraffitiCardList />
    </GraffitiPageStyled>
  );
};

export default GraffitiPage;
