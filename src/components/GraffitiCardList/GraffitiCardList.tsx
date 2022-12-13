import { useEffect } from "react";
import useGraffiti from "../../hooks/useGraffiti/useGraffiti";
import { useAppSelector } from "../../redux/hooks";
import GraffitiCard from "../GraffitiCard/GraffitiCard";
import GraffitiCardListStyled from "./GraffitiCardListStyled";

const GraffitiCardList = (): JSX.Element => {
  const graffitiList = useAppSelector(({ graffiti }) => graffiti.graffitis);
  const { loadAllGraffitis } = useGraffiti();
  useEffect(() => {
    loadAllGraffitis();
  }, [loadAllGraffitis]);
  return (
    <GraffitiCardListStyled className="graffiti-list">
      {graffitiList.map((graffiti) => (
        <li className="graffiti-list__item" key={graffiti._id}>
          <GraffitiCard
            image={graffiti.image}
            title={graffiti.title}
            id={graffiti._id!}
          />
        </li>
      ))}
    </GraffitiCardListStyled>
  );
};

export default GraffitiCardList;
