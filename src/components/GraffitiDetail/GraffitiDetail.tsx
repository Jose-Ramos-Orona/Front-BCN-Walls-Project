import Graffiti from "../../redux/features/graffitiSlice/types";
import GraffitiDetailStyled from "./GraffitiDetailStyled";

interface GraffitiDetailProps {
  graffiti: Graffiti;
}
const GraffitiDetail = (graffiti: GraffitiDetailProps): JSX.Element => {
  const {
    graffiti: { title, address, author, description, image, theme },
  } = graffiti;
  return (
    <GraffitiDetailStyled>
      <h2 className="graffiti-detail__title">{title}</h2>
      <div className="graffiti-detail__container">
        <img
          className="graffiti-detail__image"
          src={image}
          alt={title}
          width="300"
          height="300"
        />
      </div>
      <dl className="graffiti-detail__information">
        <dt>Author :</dt>
        <dd>{author}</dd>
        <dt>Address :</dt>
        <dd>{address}</dd>
        <dt>Theme :</dt>
        <dd>{theme}</dd>
        <dt>Description :</dt>
        <dd>{description}</dd>
      </dl>
    </GraffitiDetailStyled>
  );
};

export default GraffitiDetail;
