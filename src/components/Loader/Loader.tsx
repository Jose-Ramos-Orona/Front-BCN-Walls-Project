import LoaderStyled from "./LoaderStyled";

const Loader = (): JSX.Element => {
  return (
    <LoaderStyled>
      <div
        aria-label="An image of a colored ice cream waiting while the data is
      being loaded"
        className="loader"
      ></div>
    </LoaderStyled>
  );
};

export default Loader;
