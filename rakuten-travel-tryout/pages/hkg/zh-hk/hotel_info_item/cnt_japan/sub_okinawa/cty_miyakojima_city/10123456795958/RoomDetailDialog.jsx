import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import room_details from "pages/api/room_details";
import { Divider, Grid, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

function FacilitiesCard({ title, services }) {
  return (
    <>
      <Typography variant="body1" fontWeight="bold">
        {title}
      </Typography>

      <Grid container style={{ marginTop: "0.5rem" }}>
        {services.map((s) => (
          <Grid item xs={4}>
            <div class="row" style={{ marginTop: "1rem", gap: "0.2rem" }}>
              <DoneIcon />
              <Typography variant="body2">{s}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default function RoomDetailDialog({ button_title }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" disableElevation onClick={handleClickOpen}>
        {button_title}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth={"md"}
      >
        <DialogTitle id="alert-dialog-title">{"客房詳細資訊"}</DialogTitle>
        <DialogContent>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "35%", margin: "1rem" }}>
              <div
                style={{
                  height: "150px",
                  width: "100%",
                  backgroundImage: `url('${room_details[0].photos[0]}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "1rem",
                }}
              ></div>
            </div>
            <div style={{ width: "65%", margin: "1rem" }}>
              <Typography variant="h6" fontWeight="bold" color="primary">
                {room_details[0].name}
              </Typography>

              <Grid container sx={{ marginTop: "1rem" }}>
                {room_details[0].points.map((p) => (
                  <>
                    <Grid item xs={4}>
                      <div
                        class="row"
                        style={{ minHeight: "3rem", gap: "0.2rem" }}
                      >
                        {p.icon}
                        <Typography variant="body2">{p.text}</Typography>
                      </div>
                    </Grid>
                  </>
                ))}
              </Grid>

              <div>
                {room_details[0].facilities.map((f) => (
                  <>
                    <Divider />
                    <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                      <FacilitiesCard
                        title={f.title}
                        services={f.service_list}
                      />
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
