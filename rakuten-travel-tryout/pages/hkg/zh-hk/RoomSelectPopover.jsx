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
      >
        <Box sx={{ padding: "1rem" }}>
          <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              客房與住客
            </Typography>
          </Box>

          <Box>
            <Box sx={{ paddingTop: "1rem" }}>
              <Box sx={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  客房數
                </Typography>
              </Box>
              <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={6}>
                  <Typography variant="subtitle1" component="body1">
                    客房
                  </Typography>
                </Grid>
                <Grid item xs={6} container justifyContent="flex-end">
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                    size="small"
                  >
                    <Button>0-2</Button>
                    <Button>3-5</Button>
                    <Button>> 6</Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
              <Box sx={{ paddingTop: "1rem" }}>
                <Alert severity="info">請選擇日期以更改房間數。</Alert>
              </Box>
            </Box>

            <Box sx={{ paddingTop: "1rem" }}>
              <Box sx={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  每間房住客人數
                </Typography>
              </Box>
              <Grid container spacing={1}>
                <Grid item xs={12} container spacing={1}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1" component="body1">
                      成人
                    </Typography>
                  </Grid>
                  <Grid item xs={6} container justifyContent="flex-end">
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group"
                      size="small"
                    >
                      <Button>0-2</Button>
                      <Button>3-5</Button>
                      <Button>> 6</Button>
                    </ButtonGroup>
                  </Grid>
                </Grid>

                <Grid item xs={12} container spacing={1}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1" component="body1">
                      小童
                    </Typography>
                  </Grid>
                  <Grid item xs={6} container justifyContent="flex-end">
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group"
                      size="small"
                    >
                      <Button>0-2</Button>
                      <Button>3-5</Button>
                      <Button>> 6</Button>
                    </ButtonGroup>
                  </Grid>
                </Grid>
              </Grid>
              <Box sx={{ paddingTop: "1rem" }}>
                <Alert severity="info">請選擇日期以更改孩童人數。</Alert>
              </Box>
            </Box>
          </Box>
          <Box sx={{ paddingTop: "2rem" }}>
            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={(e) => setAnchorEl(null)}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                完成
              </Typography>
            </Button>
          </Box>
        </Box>
      </Popover>
    </>
  );
};
