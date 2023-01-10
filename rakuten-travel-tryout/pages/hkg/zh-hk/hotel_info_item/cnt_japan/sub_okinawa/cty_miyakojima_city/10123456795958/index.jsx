import * as React from "react";
import Image from "next/image";
import { styled, alpha } from "@mui/material/styles";

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

import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

// import AliceCarouselWrap from "./AliceCarouselWrap";
// import CircularProgressWithLabel from "./CircularProgressWithLabel";

import AppBar from "components/AppBar";
import BottomDownloadApp from "components/BottomDownloadApp";
import BottomLink from "components/BottomLink";

import color from "pages/hkg/zh-hk/color";
import BottomBreadcrumbs from "components/BottomBreadcrumbs";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar />
      <Box
        sx={{
          paddingLeft: { xs: "3vw", xl: "10vw" },
          paddingRight: { xs: "3vw", xl: "10vw" },
        }}
      >
        <Box>
          宮古島上野費利斯別墅套房酒店 度假村酒店 Rakuten Travel Gold Award 2021
          設有私人溫水游泳池和廚房的別墅度假村
          <Box>share button</Box>
        </Box>

        <Stack direction="row">
          <Box sx={{ flexGrow: 6 }}>Photos</Box>
          <Box sx={{ flexGrow: 4 }}>
            5 Exceptional 來自認證住客的 24 則評價 查看更多詳細資訊
            這棟別墅是別墅風格的夏威夷公寓出租。 所有 12
            棟別墅均設有溫水游泳池，私密性強。
            廚房、家具、家電一應俱全，可長期入住。
            在您逗留期間，這將是一個只屬於您的私人空間，所以請隨意使用。
            查看更多詳細資訊 住宿設施設備 度假村酒店 停車場 查看更多詳細資訊 map
            日本, 906-0203, 935-8 Ueno Miyaguni, Miyakojima-shi, Okinawa
            由宮古機場駕車約 15 分鐘可達
          </Box>
        </Stack>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="客房" {...a11yProps(0)} />
              <Tab label="住宿計劃" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            客房
          </TabPanel>
          <TabPanel value={value} index={1}>
            住宿計劃
          </TabPanel>
        </Box>

        <Box sx={{ width: "100%" }}>
          入住: 11/1/2023 退房: 8/2/2023 住客： 每間 2 人 • 1 間房
        </Box>

        <Box sx={{ width: "100%" }}>
          <Stack direction="row">
            <Box sx={{ flexGrow: 4 }}>
              房間不含餐計劃 [不含餐] 外觀照片 帶燈（1間臥室） 8
              該計劃僅適用於房費。 請注意，不提供餐點。 查看住宿計劃詳細資訊
            </Box>
            <Box sx={{ flexGrow: 6 }}>
              card list 2房型（帶日式房間）帶泳池 [日式西式客房] [禁煙] [海景]
              日式寢具 x 3 單人床 x 4 129m² 1–7 位住客 禁煙 $2,964.87
              包稅與其他費用 1 間房 2 位住客 1 晚 選擇日期 Semi Western-Style
              Room 池畔露台（燈火通明） 查看客房詳細資訊
            </Box>
          </Stack>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Stack direction="row">
            <Box sx={{ flexGrow: 4 }}>
              評分和評價 5 Exceptional 來自認證住客的 24 則評價 地點 4.8
              設施與設備 4.9 服務與工作人員 5 舒適與整潔度 5 沐浴 4.8 餐飲 4.7
            </Box>
            <Box sx={{ flexGrow: 6 }}>
              card list 排序 最近期 評價分數 所有評分 Anonymous | Japan 日本
              |年齡：50-59 歲 | 親子共遊 5 發布日：3/1/2023
              今回年末年始で4連泊したのですが、
              調理用具、洗濯機、乾燥機など全て揃っており、無いものがなかったくらい充実してました。子供のおもちゃの乾電池もあるかどうか聞いてみたら持ってきて下さいました！すごい！
              年末ということで、宮古ソーキソバやシャンパン、メロン(最高級に美味)も用意してくだり、年始ということで鏡餅やお花をお部屋に飾ってくれたりと、最高でした。
              ちなみに冷蔵庫のピールやドリンクは無料で追加もできます。個人的にはシークワサーのバヤリースが沖縄限定で美味しかったので追加しました。
              置いているアメニティや、洗顔、化粧品なども、良いものを使っており、高級宿の感じを受けます。
              温水プールもあるヴィラでしたが、こちらは年末年始の時期なのに、日中は入れましたし子供が喜んでました。
              ただ、夏なら夜まで入れたのになーと少し時期的に残念。
              宿泊代は高級ですが、その価値に見合ったサービスではないでしょうか。
              大変有意義な休日旅行となりました。 ありがとうございました。
              また今度は夏休みにリピートしたいです。 回報 有幫助 翻譯 顯示更多 1
              2 3 24 項中的 1 - 10 項評價
            </Box>
          </Stack>
        </Box>

        <Box sx={{ width: "100%" }}>
          特點 建議和功能 發布日：23/6/2022 客廳/飯廳（2房型） 浴室（兩房型）
          客廳餐廳（一房型） 點亮（1床型）小號
          帶溫水私人游泳池和廚房。可眺望宮古蔚藍大海的別墅式度假別墅
        </Box>

        <Box sx={{ width: "100%" }}>
          住宿設施資訊 度假村酒店 這棟別墅是別墅風格的夏威夷公寓出租。 所有 12
          棟別墅均設有溫水游泳池，私密性強。
          廚房、家具、家電一應俱全，可長期入住。
          在您逗留期間，這將是一個只屬於您的私人空間，所以請隨意使用。 隱藏部分
          地址 日本, 906-0203, 935-8 Ueno Miyaguni, Miyakojima-shi, Okinawa
          入住時間 14:00 - 19:00 退房時間 10:00 客房總數 12 電話號碼 +81 980 74
          7500 傳真號碼 +81 980 74 7501
        </Box>

        <Box sx={{ width: "100%" }}>
          新冠肺炎因應措施 員工 服務客人時保持適當距離 員工洗手、漱口、戴口罩
          定期實施體溫檢測 消毒 公共區域定期消毒 消毒客房 即棄式拖鞋 通風
          公共區域定期換氣 客房在使用前後換氣 登記入住／退房 房間內辦理入住
          房間內辦理退房 客房 提供消毒液 提供口罩 定期消毒家具 緊急應對的準備
          已備妥新冠肺炎緊急對應手冊 員工已接受新冠肺炎緊急對應訓練
        </Box>

        <Box sx={{ width: "100%" }}>
          獎項 Rakuten Travel Gold Award 2021 Rakuten Travel Gold Award 2020
        </Box>

        <Box sx={{ width: "100%" }}>特色和設施 住宿設施類型 度假村酒店</Box>

        <Box sx={{ width: "100%" }}>住宿設施設備 停車場</Box>

        <Box sx={{ width: "100%" }}>
          可用付款方式 Visa 卡 萬事達卡 JCB 卡 可使用現金付款
        </Box>

        <Box sx={{ width: "100%" }}>支援語言 日文 英文</Box>

        <Box sx={{ width: "100%" }}>
          住宿須知 如果入住時間超過預定時間，請務必與我們聯繫。
        </Box>

        <Box
          sx={{
            width: "100%",
            paddingBottom: "1rem",
            paddingTop: "1rem",
            borderBottom: `3px solid ${color.lightGrey}`,
          }}
        >
          <Stack direction="column" spacing={2}>
            <Typography variant="h6" fontWeight="bold" fontSize={"1rem"}>
              推薦景點
            </Typography>
            <Typography variant="body2">距離上野德國文化村 826m</Typography>
          </Stack>
        </Box>
      </Box>
      <BottomBreadcrumbs />
      <BottomLink />
      <BottomDownloadApp />
    </>
  );
};
