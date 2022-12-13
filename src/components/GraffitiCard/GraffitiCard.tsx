import { Link } from "react-router-dom";
import useGraffiti from "../../hooks/useGraffiti/useGraffiti";
import Button from "../Button/Button";
import GraffitiCardStyled from "./GraffitiCardStyled";

interface GraffitiCardProps {
  title: string;
  image: string;
  id: string;
}

const GraffitiCard = ({ title, image, id }: GraffitiCardProps): JSX.Element => {
  const { deleteGraffiti } = useGraffiti();
  return (
    <GraffitiCardStyled className="graffiti-card">
      <Link to={`/detail/${id}`}>
        <div className="graffiti-card__container-image">
          <img
            className="graffiti-card__image"
            src={image}
            alt={title}
            width="300"
            height="300"
          />
        </div>
      </Link>
      <h2 className="graffiti-card__title">{title}</h2>
      <Button
        buttonType="small"
        text="DELETE"
        action={() => deleteGraffiti(id)}
      />
    </GraffitiCardStyled>
  );
};

export default GraffitiCard;
