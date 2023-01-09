import Image from "next/image";
import Box from "@mui/material/Box";

export default () => {
  return (
    <Box>
      <Image src="/img/HelloWorld.svg" height={30} width={240} />
    </Box>
  );
};
