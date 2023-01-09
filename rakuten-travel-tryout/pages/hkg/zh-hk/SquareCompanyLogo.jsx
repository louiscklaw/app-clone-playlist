import Box from "@mui/material/Box";

export default (props) => {
  return (
    <>
      <Box {...props}>
        {/* <img src="/img/smallwhite.png" width="auto" height="100px" {...props} /> */}
        <Box
          sx={{
            backgroundImage: {
              xs: "url('/img/SquareCompanyLogo.png')",
              md: "url('/img/SquareCompanyLogo.png')",
            },
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "200px",
            height: "100px",
          }}
        ></Box>
      </Box>
    </>
  );
};
