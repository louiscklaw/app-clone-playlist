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
            <Grid item xs={4} container justifyContent="center">
              <Button color="primary" variant="standard" fullWidth>
                <Typography variant="body2">Bahasa Indonesia</Typography>
              </Button>
            </Grid>

            <Grid item xs={4} container justifyContent="center">
              <Button color="primary" variant="standard" fullWidth>
                <Typography variant="body2">English (United States)</Typography>
              </Button>
            </Grid>

            <Grid item xs={4} container justifyContent="center">
              <Button color="primary" variant="standard" fullWidth>
                <Typography variant="body2">ภาษาไทย</Typography>
              </Button>
            </Grid>

            <Grid item xs={4} container justifyContent="center">
              <Button color="primary" variant="standard" fullWidth>
                <Typography variant="body2">简体中文</Typography>
              </Button>
            </Grid>

            <Grid item xs={4} container justifyContent="center">
              <Button color="primary" variant="standard" fullWidth>
                <Typography variant="body2">繁體中文（台灣）</Typography>
              </Button>
            </Grid>

            <Grid item xs={4} container justifyContent="center">
              <Button color="primary" variant="standard" fullWidth>
                <Typography variant="body2">繁體中文（香港）</Typography>
              </Button>
            </Grid>

            <Grid item xs={4} container justifyContent="center">
              <Button color="primary" variant="standard" fullWidth>
                <Typography variant="body2">한국어</Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Popover>
    </>
  );
};
