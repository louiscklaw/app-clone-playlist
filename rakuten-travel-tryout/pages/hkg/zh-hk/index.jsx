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

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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
import GooglePlayButton from "./GooglePlayButton";
import CompanyLogo from "./CompanyLogo";
import HelloworldSvg from "./HelloworldSvg";
import AliceCarouselWrap from "./AliceCarouselWrap";
import RoomSelectPopover from "./RoomSelectPopover";
import LangSelectPopover from "./LangSelectPopover";
import MapSelectPopover from "./MapSelectPopover";
import CurrSelectPopover from "./CurrSelectPopover";
import SearchForm from "./SearchForm";
import SquareCompanyLogo from "./SquareCompanyLogo";
import color from "./color";

export default () => {
  const lightGrey = "rgba(32,32,32,0.1)";
  const deepGrey = "rgba(32,32,32,0.8)";
  const midGrey = "rgba(32,32,32,0.75)";
  const midGreyTrans = "rgba(0,0,0,0.25)";
  const normalgreen = "#27ae60";

  const borderRadius = "1rem";

  const margin = "2rem";
  const marginLeft = "2rem";
  const marginRight = "2rem";

  const padding = "2rem";
  const paddingLeft = "2rem";
  const paddingRight = "2rem";

  const backgroundColor = "gold";
  const spacing = 2;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  // const id = open ? "simple-popover" : undefined;

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

  const list_item = [
    { icon: <ConfirmationNumberIcon />, text: "?????????" },
    { icon: <NotificationsIcon />, text: "??????" },
    { icon: <BookmarkIcon />, text: "??????" },
    { icon: <NewspaperIcon />, text: "??????" },
    { icon: <MarkunreadIcon />, text: "???????????????" },
  ];

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      sx={{ width: "100%", color: midGrey }}
    >
      <List>
        <ListItem disablePadding sx={{ paddingTop: "1rem" }}>
          <ListItemButton>
            <Stack direction="row" spacing={4} sx={{ width: "100%" }}>
              <LanguageIcon />
              <Stack
                direction="row"
                sx={{ width: "100%" }}
                justifyContent="space-between"
              >
                <Typography variant={"body1"}>??????</Typography>
                <Typography variant={"body1"}>????????????????????????</Typography>
              </Stack>
            </Stack>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ paddingTop: "1rem" }}>
          <ListItemButton>
            <Stack direction="row" spacing={4} sx={{ width: "100%" }}>
              <MapIcon />
              <Stack
                direction="row"
                sx={{ width: "100%" }}
                justifyContent="space-between"
              >
                <Typography variant={"body1"}>??????</Typography>
                <Typography variant={"body1"}>HKG</Typography>
              </Stack>
            </Stack>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ paddingTop: "1rem" }}>
          <ListItemButton>
            <Stack direction="row" spacing={4} sx={{ width: "100%" }}>
              <CurrencyExchangeIcon />
              <Stack
                direction="row"
                sx={{ width: "100%" }}
                justifyContent="space-between"
              >
                <Typography variant={"body1"}>??????</Typography>
                <Typography variant={"body1"}>HKD</Typography>
              </Stack>
            </Stack>
          </ListItemButton>
        </ListItem>

        {list_item.map(({ icon, text }) => (
          <ListItem disablePadding sx={{ paddingTop: "1rem" }}>
            <ListItemButton>
              <Stack direction="row" spacing={4}>
                {icon}
                <Typography variant={"body1"}>{text}</Typography>
              </Stack>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <Stack direction="row" spacing={4}>
              <LoginIcon />
              <ListItemText>??????</ListItemText>
            </Stack>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

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
      <LangSelectPopover
        open={open_lang_popover}
        anchorEl={langAnchorEl}
        setAnchorEl={setLangAnchorEl}
        handleClose={handleLangClose}
      />

      <MapSelectPopover
        open={open_map_popover}
        anchorEl={mapAnchorEl}
        setAnchorEl={setMapAnchorEl}
        handleClose={handleMapClose}
      />

      <CurrSelectPopover
        open={open_curr_popover}
        anchorEl={currAnchorEl}
        setAnchorEl={setMapAnchorEl}
        handleClose={handleCurrClose}
      />

      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <Box
          sx={{
            // backgroundColor: { xs: "gold", md: "tomato" },
            width: { xs: "100%", md: "33vw" },
            minWidth: { xs: "100vw", md: "400px" },
          }}
        >
          <Stack direction="column" spacing={3}>
            <Stack direction="row" sx={{ height: "3rem" }}>
              <IconButton>
                <CloseIcon
                  sx={{ fontSize: "2rem" }}
                  onClick={toggleDrawer("right", false)}
                />
              </IconButton>
            </Stack>
            {list("right")}
          </Stack>
        </Box>
      </Drawer>

      <Box sx={{ flexGrow: 1, transition: "height 4s" }}>
        <AppBar
          position="static"
          sx={{
            position: "fixed",
            backgroundColor: scrolled ? color.normalgreen : color.dimmed,
            height: scrolled ? 60 : 60,
            zIndex: 999,
            transition: "0.6s",
            boxShadow: "unset",
          }}
        >
          <Toolbar>
            <Box sx={{ marginLeft: "10vw", paddingLeft: "3vw" }}>
              <CompanyLogo color={scrolled ? color.white : color.white} />
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
                    <PublicIcon fontSize="small" />
                    <Stack direction="row">
                      <Typography variant="subtitle2">
                        ????????????????????????
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
                    <MapIcon fontSize="small" />
                    <Stack direction="row">
                      <Typography variant="subtitle2">HKG</Typography>
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
                    <CurrencyExchangeIcon fontSize="small" />
                    <Stack direction="row">
                      <Typography variant="subtitle2">HKD</Typography>
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
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            width: "100vw",
            height: { xs: "55vh", md: "75vh" },
            backgroundImage: `url("${"https://images.unsplash.com/photo-1606918801925-e2c914c4b503"}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box
            sx={{
              color: "white",
              width: "30em",
              display: { xs: "none", sm: "block" },
            }}
          >
            <Box
              sx={{
                background: "rgba( 16, 16, 16, 0.3 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 4px )",
                border: `1px solid ${color.white25}`,
                borderRadius: "1rem",
                position: "relative",
                top: "calc(  15vh )",
                left: "10vw",
              }}
            >
              <SearchForm />
            </Box>
          </Box>

          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ height: { xs: "100%", sm: 0 } }}
          >
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <SearchForm />
            </Box>
          </Stack>
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Stack
          sx={{
            marginLeft: { xs: "2vw", md: "10vw" },
            marginRight: { xs: "2vw", md: "10vw" },

            paddingLeft: { xs: "1vw", md: "3vw" },
            paddingRight: { xs: "1vw", md: "3vw" },

            marginTop: { xs: "2rem", md: "5rem" },
          }}
          direction="column"
          spacing={5}
        >
          <Box
            sx={{
              padding: "2rem",
              backgroundColor: "rgba(0,0,0,0.1)",
              borderRadius: "1rem",
            }}
          >
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <SquareCompanyLogo
                  sx={{ display: { xs: "none", lg: "block" } }}
                />
                <Typography variant="h6">?????? Rakuten Travel App</Typography>

                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <GooglePlayButton />
                  <GooglePlayButton />
                </Stack>
              </Stack>
            </Stack>
          </Box>

          <Grid container spacing={{ xs: 2, md: 0 }} sx={{}}>
            <Grid item xs={12} md={3}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{ paddingLeft: "3rem", paddingRight: "3rem" }}
              >
                <img
                  src="https://trvimg.r10s.jp/toptype/bnr/valueproposition/icon01.png"
                  width="50"
                  height="auto"
                />
                <Typography variant="subtitle1" fontWeight="bold">
                  ???????????????
                </Typography>
                <Typography variant="body2">
                  Rakuten Group ????????????????????????????????????????????????????????????????????????
                  16 ???????????????
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={3}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{ paddingLeft: "3rem", paddingRight: "3rem" }}
              >
                <img
                  src="https://trvimg.r10s.jp/toptype/bnr/valueproposition/icon01.png"
                  width="50"
                  height="auto"
                />
                <Typography variant="subtitle1" fontWeight="bold">
                  ?????????????????????
                </Typography>
                <Typography variant="body2">
                  ???????????????????????????????????? omotenashi?????????????????????
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={3}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{ paddingLeft: "3rem", paddingRight: "3rem" }}
              >
                <img
                  src="https://trvimg.r10s.jp/toptype/bnr/valueproposition/icon01.png"
                  width="50"
                  height="auto"
                />
                <Typography variant="subtitle1" fontWeight="bold">
                  ????????????
                </Typography>
                <Typography variant="body2">
                  ???????????? Rakuten Travel ?????????????????????????????????????????????
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{ paddingLeft: "3rem", paddingRight: "3rem" }}
              >
                <img
                  src="https://trvimg.r10s.jp/toptype/bnr/valueproposition/icon01.png"
                  width="50"
                  height="auto"
                />
                <Typography variant="subtitle1" fontWeight="bold">
                  ????????????
                </Typography>
                <Typography variant="body2">
                  ???????????? Rakuten ????????????????????????????????????
                </Typography>
              </Stack>
            </Grid>
          </Grid>

          <Grid container sx={{ minHeight: "10vh" }}>
            <Grid item xs={12} lg={6}>
              <Stack
                direction="column"
                spacing={3}
                sx={{
                  marginRight: "0.5rem",
                  padding,
                  backgroundColor: lightGrey,
                  borderRadius,
                  height: "100%",
                }}
              >
                <Typography variant={"subtitle1"} fontWeight="bold">
                  Rakuten Travel ????????????
                </Typography>

                <Typography variant={"body2"}>
                  ??????????????????????????? Rakuten Travel
                  ????????????????????????????????????????????????????????????????????????????????????????????????????????????
                </Typography>

                <Stack direction="row" spacing={2} sx={{ marginTop: "2rem" }}>
                  <img src="/img/award.jpeg" height={100} />
                  <img src="/img/japanquality.jpeg" height={100} />
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={6} sx={{ display: { xs: "none", lg: "block" } }}>
              <Stack
                spacing={3}
                sx={{
                  marginLeft: "0.5rem",
                  height: "100%",
                  padding,
                  borderRadius,
                  border: `1px solid ${lightGrey}`,
                }}
              >
                <Stack direction="column" spacing={1}>
                  <Typography variant={"subtitle1"} fontWeight="bold">
                    ????????????????????????
                  </Typography>
                  <Typography variant={"body2"}>
                    ??????????????????????????????????????????????????????????????????????????????????????????
                  </Typography>
                </Stack>

                <TextField
                  placeholder="anyone@anyemail.com / ????????????"
                  id="outlined-start-adornment"
                  sx={{}}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                />

                <Grid container>
                  <Grid item xs={4}>
                    <Button variant="contained" size="large">
                      ??????
                    </Button>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
          </Grid>

          {/* ??????????????? */}
          <Box>
            <Stack sx={{}} spacing={spacing}>
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  ???????????????
                </Typography>
              </Box>
              <Box>
                <AliceCarouselWrap
                  height={150}
                  items={promotionsAndDiscounts({ height: 150 })}
                />
              </Box>
            </Stack>
          </Box>
          {/* ??????????????? */}

          {/* ???????????? */}
          <Box>
            <Stack sx={{}} spacing={spacing}>
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  ????????????
                </Typography>
              </Box>
              <Box>
                <AliceCarouselWrap
                  height={150}
                  items={travelGuide({ height: 150 })}
                />
              </Box>
            </Stack>
          </Box>
          {/* ???????????? */}

          {/* ??????????????? */}
          <Box>
            <Stack sx={{}} spacing={2}>
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  ???????????????
                </Typography>
              </Box>
              <Box>
                <AliceCarouselWrap
                  height={150}
                  items={travelLocation({ height: 150 })}
                  responsive={{
                    0: { items: 1 },
                    1024: { items: 6, itemsFit: "contain" },
                  }}
                />
              </Box>
            </Stack>
          </Box>
          {/* ??????????????? */}
        </Stack>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ borderTop: `1px solid ${midGrey}` }}></Box>
      </Box>

      <Stack
        sx={{
          marginLeft: "10vw",
          marginRight: "10vw",

          paddingTop: "1rem",
          paddingLeft: "5vw",
          paddingRight: "5vw",
        }}
        direction="column"
        spacing={2}
      >
        {/* bottom link */}
        <Stack direction="row" spacing={2}>
          <Box>
            <Typography variant="body2">????????????</Typography>
          </Box>
          <Box>
            <Typography variant="body2">???????????????</Typography>
          </Box>
          <Box>
            <Typography variant="body2">????????????</Typography>
          </Box>
          <Box>
            <Typography variant="body2">????????????</Typography>
          </Box>
          <Box>
            <Typography variant="body2">Cookie??????</Typography>
          </Box>
          <Box>
            <Typography variant="body2">??????????????????????????????</Typography>
          </Box>
        </Stack>

        {/* license */}
        <Typography variant="caption" sx={{ color: deepGrey }}>
          ?? ????????????????????????????????????????????????????????????????? 354595?????? Rakuten
          Travel Singapore Pte. Ltd. ??????
        </Typography>
        {/* license */}

        {/* bottom link */}
      </Stack>

      <Box sx={{ backgroundColor: lightGrey, marginTop: "1rem" }}>
        <Stack
          sx={{
            marginLeft: "10vw",
            marginRight: "10vw",

            paddingLeft: "5vw",
            paddingRight: "5vw",

            height: "3rem",
          }}
          direction="column"
          spacing={2}
          justifyContent="center"
        >
          {/* download app */}
          <Stack direction="row">
            <Typography variant="body2" fontWeight="bold">
              ?????? App
            </Typography>
            <Typography variant="caption" sx={{ paddingLeft: padding }}>
              App Store
            </Typography>
            <Typography variant="caption" sx={{ paddingLeft: padding }}>
              Google Play
            </Typography>
          </Stack>
          {/* download app */}
        </Stack>
      </Box>
      {/* body */}
      <Box sx={{ padding, backgroundColor: lightGrey }}></Box>
    </>
  );
};
