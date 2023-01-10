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
  let [scrolled, setScrolled] = React.useState(false);

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

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: color.white,
            height: scrolled ? 60 : 60,
            zIndex: 999,
            transition: "0.6s",
            boxShadow: "unset",
            borderBottom: `1px solid ${color.deepGrey}`,
          }}
        >
          <Toolbar>
            <Box sx={{ marginLeft: "10vw", paddingLeft: "3vw" }}>
              <CompanyLogo color={color.normalgreen} />
            </Box>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              alignItems="center"
              sx={{}}
            >
              <Box sx={{ color: color.textBlack }}>
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
                        客戶服務中心首頁
                      </Typography>
                      <ArrowDropDownIcon
                        fontSize="small"
                        sx={{ color: color.textBlack }}
                      />
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
                        Rakuten Travel 首頁
                      </Typography>
                      <ArrowDropDownIcon
                        fontSize="small"
                        sx={{ color: color.textBlack }}
                      />
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
                        聯絡我們
                      </Typography>
                      <ArrowDropDownIcon
                        fontSize="small"
                        sx={{ color: color.textBlack }}
                      />
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
                        輪入關鍵字開始搜尋
                      </Typography>
                      <ArrowDropDownIcon
                        fontSize="small"
                        sx={{ color: color.textBlack }}
                      />
                    </Stack>
                  </Stack>
                </Button>
              </Box>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          flexGrow: 1,
          marginTop: "3rem",
          marginLeft: { xs: 0, md: "3rem" },
          marginRight: { xs: 0, md: "3rem" },
          marginBottom: { xs: 0, md: "3rem" },
        }}
      >
        <Stack
          direction="column"
          spacing={4}
          sx={{
            width: { xs: "95%", md: "50%" },
            maxWidth: "600px",
            display: "none",
          }}
        >
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Typography variant="h4" sx={{ fontWeight: 300 }}>
              查詢／意見回饋​
            </Typography>
          </Stack>

          <Box>
            <Typography variant="h6" sx={{ fontWeight: 300 }}>
              填寫以下必填項目以提交您的查詢／意見。
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 300 }}>
              請注意：我們或需1至2個工作天才能回覆。
            </Typography>
          </Box>

          <Stack direction="column" spacing={2}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 300 }}>
                * 姓（英文字母）
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 300 }}>
                * 名（英文字母）
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 300 }}>
                * 電子郵件地址
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 300 }}>
                * 電子郵件地址（請再輸入以作確定）
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 300 }}>
                訂單號碼
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 300 }}>
                * 查詢／意見詳情
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Box>

            <Button
              variant="contained"
              sx={{
                backgroundColor: color.accentGreen,
                color: color.white,
              }}
              size="large"
            >
              送出
            </Button>
          </Stack>
          <Box>
            <Typography variant="body1" sx={{ color: color.textDeepGrey }}>
              回到客戶服務中心首頁
            </Typography>
          </Box>
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: "100vw",
          backgroundColor: color.lightGrey,

          paddingTop: "3rem",
          paddingBottom: "7rem",
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 3, sm: 5 }}
          sx={{ width: "80%" }}
          justifyContent="center"
          alignItems="center"
        >
          <Stack direction="row" spacing={5}>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "0.8rem", sm: "unset" } }}
            >
              私隱政策
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "0.8rem", sm: "unset" } }}
            >
              關於我們{" "}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "0.8rem", sm: "unset" } }}
            >
              Cookie 政策
            </Typography>
          </Stack>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Typography
            variant="body2"
            sx={{
              color: color.textDeepGrey,
              fontSize: { xs: "0.8rem", sm: "unset" },
            }}
          >
            © Rakuten Group, Inc.
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};
