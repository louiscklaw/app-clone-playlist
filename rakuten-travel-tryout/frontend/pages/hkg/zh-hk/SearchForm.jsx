import * as React from "react";
import Image from "next/image";

import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import PublicIcon from "@mui/icons-material/Public";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LanguageIcon from "@mui/icons-material/Language";
import LoginIcon from "@mui/icons-material/Login";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import MarkunreadIcon from "@mui/icons-material/Markunread";

import RoomSelectPopover from "./RoomSelectPopover";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import color from "./color";

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
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MapIcon from "@mui/icons-material/Map";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from "@mui/icons-material/Close";
import AliceCarousel from "react-alice-carousel";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

export default () => {
  const [value, setValue] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <RoomSelectPopover
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        handleClose={handleClose}
      />

      <Stack sx={{ padding: { xs: "3rem" } }} spacing={1}>
        <Typography variant="h5">預訂日本優質酒店及旅館</Typography>
        <Stack sx={{ paddingTop: { xs: "1rem" } }} spacing={2}>
          <TextField
            variant="standard"
            placeholder="輸入目的地或住宿設施名稱"
            id="outlined-start-adornment"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
            // size="small"
            fullWidth
            sx={{
              backgroundColor: "white",
              padding: "0.5rem",
              borderRadius: "5px",
            }}
          />

          <LocalizationProvider dateAdapter={AdapterMoment}>
            <Stack direction="row" spacing={3}>
              <DatePicker
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => {
                  params.InputProps.disableUnderline = true;
                  return (
                    <TextField
                      variant="standard"
                      {...params}
                      sx={{
                        backgroundColor: "white",
                        padding: "0.5rem",
                        borderRadius: "5px",
                      }}
                    />
                  );
                }}
              />

              <DatePicker
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => {
                  params.InputProps.disableUnderline = true;

                  return (
                    <TextField
                      variant="standard"
                      {...params}
                      sx={{
                        borderRadius: 0,
                        backgroundColor: "white",
                        padding: "0.5rem",
                        borderRadius: "5px",
                      }}
                    />
                  );
                }}
              />
            </Stack>
          </LocalizationProvider>

          <TextField
            // id="outlined-start-adornment"
            variant="standard"
            placeholder="每間１人，１間房"
            // aria-describedby={"simple-popover"}
            onClick={handleClick}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
            size="small"
            fullWidth
            sx={{
              borderRadius: 0,
              backgroundColor: "white",
              padding: "0.5rem",
              borderRadius: "5px",
            }}
          />

          <Box>
            <Button
              variant="contained"
              size="large"
              onClick={handleClick}
              sx={{ backgroundColor: color.normalgreen }}
            >
              搜尋
            </Button>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};
