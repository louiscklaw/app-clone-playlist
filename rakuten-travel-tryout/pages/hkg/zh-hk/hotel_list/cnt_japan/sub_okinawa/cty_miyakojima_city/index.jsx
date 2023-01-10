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
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Link from "next/link";

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

// import RakutenWebp from '/assets/Rakuten.webp'
import promotionsAndDiscounts from "pages/api/promotionsAndDiscounts";
import travelGuide from "pages/api/travelGuide";
import travelLocation from "pages/api/travelLocation";
import GooglePlayButton from "pages/hkg/zh-hk/GooglePlayButton";
import CompanyLogo from "pages/hkg/zh-hk/CompanyLogo";
import HelloworldSvg from "pages/hkg/zh-hk/HelloworldSvg";
import AliceCarouselWrap from "pages/hkg/zh-hk/AliceCarouselWrap";
import RoomSelectPopover from "pages/hkg/zh-hk/RoomSelectPopover";
import LangSelectPopover from "pages/hkg/zh-hk/LangSelectPopover";
import MapSelectPopover from "pages/hkg/zh-hk/MapSelectPopover";
import CurrSelectPopover from "pages/hkg/zh-hk/CurrSelectPopover";
import SearchForm from "pages/hkg/zh-hk/SearchForm";
import SquareCompanyLogo from "pages/hkg/zh-hk/SquareCompanyLogo";
import color from "pages/hkg/zh-hk/color";

export default () => {
  // lang-select-popover
  const [langAnchorEl, setLangAnchorEl] = React.useState(null);
  const handleLangClick = (event) => {
    setLangAnchorEl(event.currentTarget);
  };
  const handleLangClose = () => {
    setLangAnchorEl(null);
  };
  const open_lang_popover = Boolean(langAnchorEl);
  // const lang_id = open_lang_popover ? "simple-popover" : undefined;

  // map-select-popover
  const [mapAnchorEl, setMapAnchorEl] = React.useState(null);
  const handleMapClick = (event) => {
    setMapAnchorEl(event.currentTarget);
  };
  const handleMapClose = () => {
    setMapAnchorEl(null);
  };
  const open_map_popover = Boolean(mapAnchorEl);
  // const map_id = open_map_popover ? "simple-popover" : undefined;

  // curr-select-popover
  const [currAnchorEl, setCurrAnchorEl] = React.useState(null);
  const handleCurrClick = (event) => {
    setCurrAnchorEl(event.currentTarget);
  };
  const handleCurrClose = () => {
    setCurrAnchorEl(null);
  };
  const open_curr_popover = Boolean(currAnchorEl);
  // const curr_id = open_curr_popover ? "simple-popover" : undefined;

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // lang-select-popover
  let [app_bar_height, setAppBarHeight] = React.useState(0);
  let [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    // document.querySelector("#right_menu")?.click();
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        console.log({ "window.scrollY": window.scrollY });
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1, transition: "height 4s" }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: scrolled ? color.normalgreen : color.white,
            height: scrolled ? 60 : 60,
            zIndex: 999,
            transition: "0.6s",
            boxShadow: "unset",
          }}
        >
          <Toolbar>
            <Box sx={{ marginLeft: "10vw", paddingLeft: "3vw" }}>
              <CompanyLogo
                color={scrolled ? color.accentGreen : color.accentGreen}
              />
            </Box>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              alignItems="center"
              sx={{}}
            >
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Button
                  id="lang_change"
                  color="inherit"
                  onClick={handleLangClick}
                >
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                  >
                    <PublicIcon
                      fontSize="small"
                      sx={{ color: color.textBlack }}
                    />
                    <Stack direction="row">
                      <Typography
                        variant="subtitle2"
                        sx={{ color: color.textBlack }}
                      >
                        繁體中文（香港）
                      </Typography>
                      <ArrowDropDownIcon fontSize="small" />
                    </Stack>
                  </Stack>
                </Button>

                <Button
                  id="map_change"
                  color="inherit"
                  onClick={handleMapClick}
                >
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                  >
                    <MapIcon fontSize="small" sx={{ color: color.textBlack }} />
                    <Stack direction="row">
                      <Typography
                        variant="subtitle2"
                        sx={{ color: color.textBlack }}
                      >
                        HKG
                      </Typography>
                      <ArrowDropDownIcon fontSize="small" />
                    </Stack>
                  </Stack>
                </Button>

                <Button
                  id="curr_change"
                  color="inherit"
                  onClick={handleCurrClick}
                >
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                  >
                    <CurrencyExchangeIcon
                      fontSize="small"
                      sx={{ color: color.textBlack }}
                    />
                    <Stack direction="row">
                      <Typography
                        variant="subtitle2"
                        sx={{ color: color.textBlack }}
                      >
                        HKD
                      </Typography>
                      <ArrowDropDownIcon fontSize="small" />
                    </Stack>
                  </Stack>
                </Button>
              </Box>
              <IconButton
                id="right_menu"
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer("right", true)}
              >
                <MenuIcon sx={{ color: color.textBlack }} />
              </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      pages/hkg/zh-hk/hotel_list/cnt_japan/sub_okinawa/cty_miyakojima_city/index.jsx
    </>
  );
};
