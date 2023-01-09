import AliceCarousel from "react-alice-carousel";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
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
  IconButton,
  Popover,
  Box,
} from "@mui/material";

export default ({ items, responsive, height }) => {
  return (
    <>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={
          responsive || {
            0: { items: 1 },
            568: { items: 2 },
            1024: { items: 4, itemsFit: "cover" },
          }
        }
        disableDotsControls={true}
        renderPrevButton={({ isDisabled }) => {
          console.log({ isDisabled, log: "prev button" });
          if (isDisabled) return <></>;
          return (
            <IconButton
              color="primary"
              sx={{
                backgroundColor: "white",
                boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.33)",
                "&:hover": { backgroundColor: "#FFF" },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
          );
        }}
        renderNextButton={({ isDisabled }) => {
          console.log({ isDisabled, log: "next button" });
          if (isDisabled) return <></>;
          return (
            <IconButton
              color="primary"
              sx={{
                backgroundColor: "white",
                boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.33)",
                "&:hover": { backgroundColor: "#FFF" },
                position: "relative",
                top: `-${height - 30}px`,
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          );
        }}
      />
    </>
  );
};
