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
      {/* bottom link app */}
      <Box
        sx={{
          width: "100vw",
          backgroundColor: color.white,
          borderTop: `1px solid ${color.lightGrey}`,
        }}
      >
        <Box
          sx={{
            paddingLeft: { xs: "5vw", xl: "15vw" },
            paddingRight: { xs: "5vw", xl: "15vw" },
          }}
        >
          <Stack
            sx={{ marginTop: "1rem", marginBottom: "1rem" }}
            direction="column"
            spacing={2}
          >
            {/* bottom link */}
            <Stack direction="row" spacing={2}>
              <Box>
                <Typography variant="body2">私隱政策</Typography>
              </Box>
              <Box>
                <Typography variant="body2">條款與條件</Typography>
              </Box>
              <Box>
                <Typography variant="body2">聯絡我們</Typography>
              </Box>
              <Box>
                <Typography variant="body2">關於我們</Typography>
              </Box>
              <Box>
                <Typography variant="body2">Cookie政策</Typography>
              </Box>
              <Box>
                <Typography variant="body2">不要出售我的個人資料</Typography>
              </Box>
            </Stack>

            {/* license */}
            <Typography variant="caption" sx={{ color: color.deepGrey }}>
              © 樂天集團股份有限公司 香港旅行代理商牌照號碼 354595，由 Rakuten
              Travel Singapore Pte. Ltd. 持有
            </Typography>
            {/* license */}
          </Stack>
        </Box>
      </Box>
      {/* bottom link app */}
    </>
  );
};
