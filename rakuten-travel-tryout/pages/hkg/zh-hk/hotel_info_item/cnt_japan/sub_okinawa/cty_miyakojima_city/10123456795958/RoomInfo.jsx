import * as React from "react";
import Image from "next/image";
import { styled, alpha } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import PublicIcon from "@mui/icons-material/Public";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LanguageIcon from "@mui/icons-material/Language";
import CreditCardIcon from "@mui/icons-material/CreditCard";
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
import SearchIcon from "@mui/icons-material/Search";
import DoneIcon from "@mui/icons-material/Done";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ShareIcon from "@mui/icons-material/Share";
import CircularProgressWithLabel from "components/CircularProgressWithLabel";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import hotel_intro from "pages/api/hotel_intro";
import SettingsInputCompositeIcon from "@mui/icons-material/SettingsInputComposite";
import {
  Grid,
  Slider,
  Box,
  Input,
  Tab,
  Tabs,
  InputLabel,
  InputAdornment,
  FormControl,
  TextField,
  Alert,
  Button,
  Switch,
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
  MenuItem,
  CircularProgress,
  Chip,
  Card,
  Stack,
  Toolbar,
  Typography,
  IconButton,
  Rating,
} from "@mui/material";
import Sun from "@mui/icons-material/LightMode";

import AccountCircle from "@mui/icons-material/AccountCircle";
import MapIcon from "@mui/icons-material/Map";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from "@mui/icons-material/Close";
import AliceCarousel from "react-alice-carousel";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import EditIcon from "@mui/icons-material/Edit";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import RakutenWebp from '/assets/Rakuten.webp'
import hotelPhotos from "pages/api/hotelPhotos";
import travelGuide from "pages/api/travelGuide";
import travelLocation from "pages/api/travelLocation";
import GooglePlayButton from "pages/hkg/zh-hk/GooglePlayButton";
import CompanyLogo from "pages/hkg/zh-hk/CompanyLogo";
import HelloworldSvg from "pages/hkg/zh-hk/HelloworldSvg";
import RoomSelectPopover from "pages/hkg/zh-hk/RoomSelectPopover";
import LangSelectPopover from "pages/hkg/zh-hk/LangSelectPopover";
import MapSelectPopover from "pages/hkg/zh-hk/MapSelectPopover";
import CurrSelectPopover from "pages/hkg/zh-hk/CurrSelectPopover";
import SearchForm from "pages/hkg/zh-hk/SearchForm";
import SquareCompanyLogo from "pages/hkg/zh-hk/SquareCompanyLogo";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

// import AliceCarouselWrap from "./AliceCarouselWrap";

import AppBar from "components/AppBar";
import BottomDownloadApp from "components/BottomDownloadApp";
import BottomLink from "components/BottomLink";

import color from "pages/hkg/zh-hk/color";
import BottomBreadcrumbs from "components/BottomBreadcrumbs";
import covin_action from "pages/api/covin_action";
import hotel_info from "pages/api/hotel_info";
import ClearIcon from "@mui/icons-material/Clear";
import RoomDetailDialog from "./RoomPlanDialog";

export default () => {
  const specials = [
    { icon: <DoneIcon />, text: "特大雙人床 X 1" },
    { icon: <DoneIcon />, text: "50m²" },
    { icon: <DoneIcon />, text: "1–2 位住客" },
    { icon: <DoneIcon />, text: "禁煙" },
  ];
  const facities = ["有浴室和廁所", "陽台", "枱"];

  return (
    <>
      <Typography variant="h6" fontWeight="bold" color="primary">
        豪華海景大床房 [豪華] [雙人床房] [禁煙] [海景]
      </Typography>
      <div class="row">
        <div>
          <div
            style={{
              width: "300px",
              height: "200px",
              borderRadius: "1rem",
              padding: "1rem",

              backgroundImage: `url('https://trvis.r10s.com/d/strg/ctrl/26/29b07c11adfbe275fccb7954078ce369f4117416.82.9.26.3.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            客房形象
          </div>
        </div>
        <div style={{ width: "35%" }}>
          <div style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
            {specials.map((s) => (
              <div
                class="row"
                style={{ fontSize: "0.8rem", paddingBottom: "0.3rem" }}
              >
                {s.icon}
                <Typography variant="body2">{s.text}</Typography>
              </div>
            ))}
          </div>
          <Divider />
          <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            {facities.map((f) => (
              <div
                class="row"
                style={{ fontSize: "0.8rem", paddingBottom: "0.3rem" }}
              >
                <DoneIcon />
                <Typography variant="body2">{f}</Typography>
              </div>
            ))}
          </div>
        </div>
      </div>

      <RoomDetailDialog button_title={"查看客房詳細資訊"}></RoomDetailDialog>
    </>
  );
};
