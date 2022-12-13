import { useEffect } from "react";
import { useParams } from "react-router-dom";
import GraffitiDetail from "../../components/GraffitiDetail/GraffitiDetail";
import useGraffiti from "../../hooks/useGraffiti/useGraffiti";
import { useAppSelector } from "../../redux/hooks";
import CreateGraffitiPageStyled from "../CreateGraffitiPage/CreateGraffitiPageStyled";

const DetailPage = (): JSX.Element => {
  const { getGraffitiByid } = useGraffiti();
  const { id } = useParams();

  useEffect(() => {
    getGraffitiByid(id!);
  }, [id, getGraffitiByid]);
  const graffiti = useAppSelector(({ graffiti }) => graffiti.graffiti);
  return (
    <CreateGraffitiPageStyled>
      <GraffitiDetail graffiti={graffiti!} />;
    </CreateGraffitiPageStyled>
  );
};

export default DetailPage;
