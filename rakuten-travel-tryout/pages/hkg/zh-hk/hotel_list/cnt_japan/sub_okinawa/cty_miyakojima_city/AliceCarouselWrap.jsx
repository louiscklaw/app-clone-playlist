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
import color from "pages/hkg/zh-hk/color";

export default ({ items, responsive, height }) => {
  return (
    <>
      <AliceCarousel
        mouseTracking
        disableDotsControls={true}
        items={items}
        responsive={responsive || { 0: { items: 1, itemsFit: "cover" } }}
        renderPrevButton={({ isDisabled }) => {
          if (isDisabled) return <></>;
          return (
            <IconButton
              color="primary"
              sx={{
                color: color.accentGreen,
                backgroundColor: "white",
                boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.33)",
                "&:hover": { backgroundColor: "#FFF" },
                float: "bottom",
                bottom: `${30}px`,
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
          );
        }}
        renderNextButton={({ isDisabled }) => {
          if (isDisabled) return <></>;
          return (
            <IconButton
              color="primary"
              sx={{
                color: color.accentGreen,
                backgroundColor: "white",
                boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.33)",
                "&:hover": { backgroundColor: "#FFF" },
                float: "bottom",
                bottom: `${150}px`,
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
