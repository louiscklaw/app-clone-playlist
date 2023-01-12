import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack, Typography } from "@mui/material";
import room_plans from "pages/api/room_plans";
import { DeleteOutlined } from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import color from "pages/hkg/zh-hk/color";
import { Box } from "@mui/system";
import AliceCarouselWrap from "pages/hkg/zh-hk/AliceCarouselWrap";
import travelLocation from "pages/api/travelLocation";
import AccentTextButton from "components/AccentTextButton";

export default function RoomPlanDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setScroll(scrollType);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button onClick={handleClickOpen("paper")}>
        <Typography variant="body2" fontWeight="bold">
          查看住宿計劃詳細資訊
        </Typography>
      </Button>
      <Dialog
        open={true}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullWidth
        maxWidth="md"
      >
        <DialogTitle id="scroll-dialog-title">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              color={color.textDeepGrey}
            >
              住宿計劃詳細資訊
            </Typography>
            <ClearIcon />
          </Stack>
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Stack direction="row">
              <Box
                style={{
                  width: "45%",
                  minWidth: "300px",
                  backgroundColor: "gold",
                }}
              >
                <Box
                  sx={{
                    width: "300px",
                    height: "300px",
                    backgroundColor: "cyan",
                    borderRadius: "1rem",
                  }}
                ></Box>
              </Box>
              <Box style={{ flexGrow: 1 }}>
                <Stack direction="row">
                  <Box style={{ width: "70%" }}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      color={color.textBlack}
                    >
                      {room_plans[0].name}
                    </Typography>
                  </Box>
                  <Box style={{ flexGrow: 1, textAlign: "right" }}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color={color.textBlack}
                    >
                      {room_plans[0].price.currency}
                      {room_plans[0].price.value}
                    </Typography>
                    <Typography variant="body2" color={color.textDeepGrey}>
                      {room_plans[0].price.description}
                    </Typography>
                    <AccentTextButton
                      text={"選擇日期"}
                      onClick={(e) => alert("helloworld")}
                    />
                  </Box>
                </Stack>
                {/* <pre>{JSON.stringify(room_plans[0], null, 2)}</pre> */}
              </Box>
            </Stack>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
