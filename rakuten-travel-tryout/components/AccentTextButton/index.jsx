import { Button, Typography } from "@mui/material";

export default ({ text, onClick }) => {
  return (
    <>
      <Button
        variant="contained"
        disableElevation
        disableRipple
        onClick={onClick}
        size="large"
      >
        <Typography variant="body1" fontWeight="bold">
          {text}
        </Typography>
      </Button>
    </>
  );
};
