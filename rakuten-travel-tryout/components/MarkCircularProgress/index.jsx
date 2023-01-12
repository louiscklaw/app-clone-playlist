import CircularProgressWithLabel from "components/CircularProgressWithLabel";
import color from "pages/hkg/zh-hk/color";

{
  /*  */
}

export default () => {
  return (
    <>
      <CircularProgressWithLabel
        size="5rem"
        value={5}
        thickness={5}
        sx={{ color: color.accentGreen }}
        text_sx={{ fontSize: "2rem" }}
      />
    </>
  );
};
