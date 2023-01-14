import { Button, Typography } from "@mui/material";

export default ({ text, onClick, button_sx }) => {
  return (
    <>
      <Button
        variant="contained"
        disableElevation
        disableRipple
        onClick={onClick}
        size="large"
        sx={button_sx}
      >
        <Typography variant="body1" fontWeight="bold">
          {text}
        </Typography>
      </Button>
    </>
  );
};
