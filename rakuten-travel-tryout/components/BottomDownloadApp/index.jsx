import * as React from "react";
import Image from "next/image";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

import {
  Grid,
  Slider,
  Input,
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
  Box,
} from "@mui/material";

import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
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
import SearchIcon from "@mui/icons-material/Search";
import DoneIcon from "@mui/icons-material/Done";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

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

import CompanyLogo from "pages/hkg/zh-hk/CompanyLogo";

import color from "pages/hkg/zh-hk/color";

export default () => {
  return (
    <>
      {/* BottomDownloadApp */}
      <Box sx={{ width: "100vw", backgroundColor: color.lightGrey }}>
        <Box
          sx={{
            paddingLeft: { xs: "5vw", xl: "15vw" },
            paddingRight: { xs: "5vw", xl: "15vw" },
          }}
        >
          <Stack
            direction="row"
            spacing={5}
            sx={{ paddingTop: "3rem", paddingBottom: "3rem" }}
          >
            <Typography variant="body2" fontWeight="bold">
              下載 App
            </Typography>
            <Typography variant="caption" sx={{}}>
              App Store
            </Typography>
            <Typography variant="caption" sx={{}}>
              Google Play
            </Typography>
          </Stack>
        </Box>
      </Box>
      {/* BottomDownloadApp */}
    </>
  );
};
