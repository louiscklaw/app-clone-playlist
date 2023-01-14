import {
  Grid,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  TextField,
  Alert,
  Button,
  ButtonGroup,
  Modal,
  Popover,
  Box,
  Typography,
} from "@mui/material";

export default ({ open, anchorEl, setAnchorEl, handleClose }) => {
  const currency_list = [
    "香港",
    "南韓",
    "印尼",
    "台灣",
    "新加坡",
    "泰國",
    "澳洲",
    "美國",
    "英國",
    "菲律賓",
    "馬來西亞",
  ];

  return (
    <>
      <Popover
        id={"currency-popover"}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        sx={{ borderRadius: "10rem" }}
      >
        <Box sx={{ padding: "1rem", width: 300 }}>
          <Grid container>
            {currency_list.map((c) => (
              <Grid item xs={4} container justifyContent="center">
                <Button color="primary" variant="standard" fullWidth>
                  <Typography variant="body2">{c}</Typography>
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Popover>
    </>
  );
};
