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
  let currency_list = [
    "IDR 印尼盾",
    "SGD 新加坡元",
    "TWD 新台幣",
    "THB 泰國銖",
    "HKD 港元",
    "AUD 澳洲元",
    "USD 美元",
    "GBP 英鎊",
    "PHP 菲律賓披索",
    "KRW 韓國圜",
    "MYR 馬來西亞元",
  ];
  return (
    <>
      <Popover
        id={"simple-popover"}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        sx={{ borderRadius: "10rem" }}
      >
        <Box sx={{ padding: "1rem", width: 750 }}>
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
