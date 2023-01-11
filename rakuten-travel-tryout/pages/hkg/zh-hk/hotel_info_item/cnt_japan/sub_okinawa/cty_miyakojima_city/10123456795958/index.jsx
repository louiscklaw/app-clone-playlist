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
import RoomInfo from "./RoomInfo";
import room_plans from "pages/api/room_plans";

function FilterButtonSearch() {
  return (
    <>
      <Button variant="contained" color="primary" size="large" disableElevation>
        <div class="row-center" style={{ padding: "0.1rem" }}>
          <SearchIcon sx={{ fontSize: "1rem" }} />
          <Typography variant="body1" fontWeight="bold">
            搜尋 (2)
          </Typography>
        </div>
      </Button>
    </>
  );
}

function OptionPlane({ title, options }) {
  return (
    <>
      <div class="option-plane">
        <Typography variant="body1" fontWeight="bold">
          {title}
        </Typography>

        <div>
          {options?.map((o) => (
            <div>
              <FormControlLabel control={<Checkbox />} label={o} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function OptionPriceRange({ title }) {
  function valuetext(value) {
    return `${value}°C`;
  }
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div class="option-plane">
        <Typography variant="body1" fontWeight="bold">
          {title}
        </Typography>

        <div class="row" style={{ marginTop: "1rem" }}>
          <Typography variant="body2">每間房價</Typography>
          <Typography variant="body2" fontWeight="bold">
            {JSON.stringify(value)}
          </Typography>
        </div>

        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </div>
    </>
  );
}

function FilterOptions() {
  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          <OptionPriceRange title={"總額"} />
        </Grid>
        <Grid item xs={3}>
          <OptionPlane title={"餐飲"} options={["早餐", "不含餐"]} />
        </Grid>
        <Grid item xs={3}>
          <OptionPlane
            title={"客房類型"}
            options={["雙人床房", "雙床房", "套房"]}
          />
        </Grid>
        <Grid item xs={3}>
          <OptionPlane title={"客房景觀"} options={["海景"]} />
        </Grid>
        <Grid item xs={3}>
          <OptionPlane title={"吸煙選項"} options={["禁煙"]} />
        </Grid>
        <Grid item xs={3}>
          <OptionPlane title={"睡床類型"} options={["特大雙人床"]} />
        </Grid>
        <Grid item xs={3}>
          <OptionPlane
            title={"住宿計劃優惠"}
            options={["俱樂部樓層／俱樂部休息室"]}
          />
        </Grid>
      </Grid>
    </>
  );
}

function FilterButtonClear() {
  return (
    <>
      <Button variant="outlined" color="primary" size="large" disableElevation>
        <div class="row-center" style={{ padding: "0.1rem" }}>
          <ClearIcon sx={{ fontSize: "1rem" }} />
          <Typography variant="body1" fontWeight="bold">
            清除
          </Typography>
        </div>
      </Button>
    </>
  );
}

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

function RoomPlan({ plan }) {
  return (
    <>
      <Typography>{plan.name}</Typography>
    </>
  );
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
        <Stack direction="column" spacing={2} sx={{ display: "none" }}>
          <Stack direction="row">
            <Box sx={{ flexGrow: 1 }}>
              <Stack direction="column" spacing={2}>
                <Typography variant="h6" fontWeight="bold">
                  宮古島上野費利斯別墅套房酒店
                </Typography>
                <Stack direction="row" alignItems="center">
                  <Chip label="度假村酒店" />
                  <Typography variant="subtitle2" fontSize="bold">
                    Rakuten Travel Gold Award 2021
                  </Typography>
                </Stack>
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  sx={{ color: color.textColor6 }}
                >
                  設有私人溫水游泳池和廚房的別墅度假村
                </Typography>
              </Stack>
            </Box>
            <IconButton>
              <ShareIcon />
            </IconButton>
          </Stack>

          <Stack direction="row" spacing={3}>
            <Box sx={{ width: "55%", borderRadius: "1rem" }}>
              <Stack direction="column" spacing={0.5} sx={{ height: "100%" }}>
                <Box
                  sx={{
                    // backgroundColor: "gold",
                    backgroundImage: `url('https://trvis.r10s.com/d/strg/ctrl/26/437b86622a9af43c03f2628882661486821b7879.47.9.26.3.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "1rem 1rem 0 0 ",
                    flexGrow: 1,
                  }}
                ></Box>
                <Stack direction="row" spacing={0.5} sx={{ height: "100px" }}>
                  <Box
                    sx={{
                      // backgroundColor: "green",
                      backgroundImage: `url('https://trvis.r10s.com/d/strg/ctrl/26/91d046af12015df16c75e62ab5eebe05154f4a0b.47.1.26.2.jpg')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "100px",
                      width: "20%",
                      borderRadius: "0 0 0 1rem",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      backgroundColor: "green",
                      height: "100px",
                      width: "20%",
                    }}
                  >
                    2
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "green",
                      height: "100px",
                      width: "20%",
                    }}
                  >
                    3
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "green",
                      height: "100px",
                      width: "20%",
                    }}
                  >
                    4
                  </Box>
                  <Box
                    sx={{
                      backgroundImage: `url('https://trvis.r10s.com/d/strg/ctrl/26/91d046af12015df16c75e62ab5eebe05154f4a0b.47.1.26.2.jpg')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "100px",
                      width: "20%",
                      borderRadius: "0 0 1rem 0",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: color.black50,
                        height: "100%",
                        width: "100%",

                        borderRadius: "0 0 1rem 0",

                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <InsertPhotoIcon
                        sx={{ color: color.white, fontSize: "1rem" }}
                      />
                      <Typography
                        variant="caption"
                        sx={{ color: color.white, fontSize: "0.8rem" }}
                      >
                        瀏覽所有照片
                      </Typography>
                    </div>
                  </Box>
                </Stack>
              </Stack>
            </Box>
            <Box
              sx={{
                border: `3px solid ${color.lightGrey}`,
                borderRadius: "1rem",
                padding: "1.1rem",
                width: "45%",
              }}
            >
              <Stack direction="column">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <CircularProgressWithLabel
                    size="5rem"
                    value={5}
                    thickness={5}
                    sx={{ color: color.accentGreen }}
                    text_sx={{ fontSize: "2rem" }}
                  />
                  <div>
                    <Typography variant="subtitle1" fontWeight="bold">
                      5 Exceptional
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: color.textDeepGrey }}
                    >
                      來自認證住客的 24 則評價
                    </Typography>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ flexGrow: 1 }}></div>
                  <Button>查看更多詳細資訊</Button>
                </div>
              </Stack>
              <Divider sx={{ marginTop: "1rem" }} />
              <Stack direction="column" sx={{ marginTop: "1rem" }}>
                <div>
                  <Typography variant="body2" fontSize="0.8rem">
                    這棟別墅是別墅風格的夏威夷公寓出租。 所有 12
                    棟別墅均設有溫水游泳池，私密性強。
                    廚房、家具、家電一應俱全，可長期入住。
                    在您逗留期間，這將是一個只屬於您的私人空間，所以請隨意使用。
                  </Typography>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ flexGrow: 1 }}></div>
                  <Button>查看更多詳細資訊</Button>
                </div>
              </Stack>
              <Divider sx={{ marginTop: "1rem" }} />
              <Stack direction="column">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    marginTop: "1rem",
                  }}
                >
                  <div>
                    <Typography variant="subtitle1" fontWeight="bold">
                      住宿設施設備
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "0.3rem",
                        alignItems: "baseline",
                      }}
                    >
                      <DoneIcon style={{ fontSize: "1rem" }} />
                      <Typography variant="body1">度假村酒店</Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "0.3rem",
                        alignItems: "baseline",
                      }}
                    >
                      <DoneIcon style={{ fontSize: "1rem" }} />
                      <Typography variant="body1">停車場</Typography>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ flexGrow: 1 }}></div>
                  <Button>查看更多詳細資訊</Button>
                </div>
              </Stack>

              <Divider sx={{ marginTop: "1rem" }} />

              <Stack direction="row" spacing={3} sx={{ marginTop: "1rem" }}>
                <div
                  style={{
                    backgroundImage: `url('https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",

                    width: "50%",
                    minWidth: "150px",
                    height: "200px",
                    borderRadius: "1rem",
                  }}
                ></div>

                <Box sx={{ padding: "1rem" }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    sx={{ color: color.textDeepGreen }}
                  >
                    日本, 906-0203, 935-8 Ueno Miyaguni, Miyakojima-shi, Okinawa
                  </Typography>
                  <ul>
                    <li>
                      <Typography variant="body2">
                        由宮古機場駕車約 15 分鐘可達
                      </Typography>
                    </li>
                  </ul>
                </Box>
              </Stack>
            </Box>
          </Stack>
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
            客房內容
            <Box sx={{ width: "100%" }}>
              <ButtonGroup
                aria-label="outlined primary button group"
                disableElevation
                fullWidth
              >
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    borderRadius: "1rem",
                    borderRight: "0.3rem solid white !important",
                  }}
                >
                  <CalendarMonthIcon
                    sx={{ fontSize: "2rem", color: color.textColor6 }}
                  />
                  <div
                    style={{
                      paddingLeft: "0.3rem",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography variant="subtitle2">入住:</Typography>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ fontSize: "1.2rem", color: color.textColor6 }}
                    >
                      11/1/2023
                    </Typography>
                  </div>
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    borderLeft: "0.3rem solid white",
                    borderRight: "0.3rem solid white !important",
                  }}
                >
                  <CalendarMonthIcon
                    sx={{ fontSize: "2rem", color: color.textColor6 }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography variant="subtitle2">入住:</Typography>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ fontSize: "1.2rem", color: color.textColor6 }}
                    >
                      11/1/2023
                    </Typography>
                  </div>
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    borderLeft: "0.3rem solid white",
                    borderRight: "0.3rem solid white !important",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <CalendarMonthIcon
                      sx={{ fontSize: "2rem", color: color.textColor6 }}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography variant="subtitle2">住客：</Typography>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ fontSize: "1.2rem", color: color.textColor6 }}
                      >
                        每間 2 人 • 1 間房
                      </Typography>
                    </div>
                  </div>
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    width: "20%",
                    minWidth: "600px",
                    borderRadius: "1rem",
                    borderLeft: "0.3rem solid white",
                  }}
                >
                  <SearchIcon />
                </Button>
              </ButtonGroup>
            </Box>
            <div style={{ marginTop: "1rem" }}>
              <Button variant="outlined" color="primary">
                <div class="row-center" style={{ padding: "0.1rem" }}>
                  <SettingsInputCompositeIcon sx={{ fontSize: "1rem" }} />
                  <Typography variant="body1" fontWeight="bold">
                    篩選條件
                  </Typography>
                </div>
              </Button>
              <div style={{ marginTop: "1rem" }}>
                <FilterOptions />
              </div>
              <div style={{ marginTop: "1rem" }}>
                <div></div>
                <div class="row">
                  <div class="send-to-right" />
                  <FilterButtonClear />
                  <FilterButtonSearch />
                </div>
              </div>
            </div>
            <div class="row">
              <div style={{ width: "50%" }}>
                <RoomInfo />
              </div>
              <div style={{ width: "50%" }}>
                <div>
                  <RoomPlan plan={room_plans[0]} />
                </div>
              </div>
            </div>
            <Box sx={{ width: "100%" }}>
              <Stack direction="row">
                <Box sx={{ flexGrow: 4 }}>
                  房間不含餐計劃 [不含餐] 外觀照片 帶燈（1間臥室） 8
                  該計劃僅適用於房費。 請注意，不提供餐點。 查看住宿計劃詳細資訊
                </Box>
                <Box sx={{ flexGrow: 6 }}>
                  card list 2房型（帶日式房間）帶泳池 [日式西式客房] [禁煙]
                  [海景] 日式寢具 x 3 單人床 x 4 129m² 1–7 位住客 禁煙 $2,964.87
                  包稅與其他費用 1 間房 2 位住客 1 晚 選擇日期 Semi
                  Western-Style Room 池畔露台（燈火通明） 查看客房詳細資訊
                </Box>
              </Stack>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Stack direction="row">
                <Box sx={{ flexGrow: 4 }}>
                  評分和評價 5 Exceptional 來自認證住客的 24 則評價 地點 4.8
                  設施與設備 4.9 服務與工作人員 5 舒適與整潔度 5 沐浴 4.8 餐飲
                  4.7
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
                  また今度は夏休みにリピートしたいです。 回報 有幫助 翻譯
                  顯示更多 1 2 3 24 項中的 1 - 10 項評價
                </Box>
              </Stack>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            住宿計劃內容
          </TabPanel>
        </Box>

        <Box
          sx={{
            width: "100%",
            paddingBottom: "1rem",
            paddingTop: "1rem",
            borderBottom: `3px solid ${color.lightGrey}`,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            特點
          </Typography>
          <Divider sx={{ paddingTop: "1rem" }} />
          <Stack
            direction="column"
            spacing={2}
            sx={{ width: "100%", paddingTop: "1rem" }}
          >
            <Grid container>
              <Grid
                item
                xs={6}
                sm={4}
                md={3}
                sx={{ minHeight: "7rem", paddingRight: "2rem" }}
              >
                <Box
                  sx={{
                    backgroundColor: color.lightGrey,
                    height: 250,
                    width: 250,
                    borderRadius: "1rem",
                    padding: "1rem",
                  }}
                >
                  <Typography variant="body1" fontWeight="bold">
                    建議和功能
                  </Typography>
                  <Typography variant="body1">發布日：23/6/2022</Typography>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Box>

        <Stack sx={{ width: "100%" }} spacing={3}>
          <Typography variant="h5" fontWeight={"bold"} sx={{}}>
            住宿設施資訊
          </Typography>
          <Divider />
          <Stack direction="row">
            <Box sx={{ width: "50%" }}>
              <Stack direction="column" spacing={1}>
                <Typography variant="body2">度假村酒店</Typography>
                <Typography variant="body2">
                  這棟別墅是別墅風格的夏威夷公寓出租。 所有 12
                  棟別墅均設有溫水游泳池，私密性強。
                  廚房、家具、家電一應俱全，可長期入住。
                  在您逗留期間，這將是一個只屬於您的私人空間，所以請隨意使用。
                </Typography>
                <div>
                  {hotel_info.map(({ name, value }) => (
                    <Stack
                      direction="row"
                      sx={{ paddingBottom: "0.5rem" }}
                      spacing={1}
                    >
                      <DoneIcon />
                      <Typography variant="body1" sx={{ width: "150px" }}>
                        {name}
                      </Typography>
                      <Typography variant="body1" sx={{ flexGrow: 6 }}>
                        {value}
                      </Typography>
                    </Stack>
                  ))}
                </div>
              </Stack>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
              <div
                style={{
                  backgroundImage:
                    'url("https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "100%",
                  borderRadius: "1rem",
                }}
              ></div>
            </Box>
          </Stack>
        </Stack>

        <Box
          sx={{
            width: "100%",
            paddingBottom: "1rem",
            paddingTop: "1rem",
            borderBottom: `3px solid ${color.lightGrey}`,
          }}
        >
          <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
            <Typography variant="h6" fontWeight="bold" fontSize={"1rem"}>
              新冠肺炎因應措施
            </Typography>
            <Grid container>
              {covin_action.map(({ img_src, title, description }) => (
                <Grid
                  item
                  xs={6}
                  sm={4}
                  md={3}
                  sx={{ minHeight: "7rem", paddingRight: "2rem" }}
                >
                  <Stack direction="row" spacing={1}>
                    <DoneIcon />
                    <Box>
                      <Typography
                        variant="title2"
                        fontWeight={"bold"}
                        fontSize={"1rem"}
                      >
                        {title}
                      </Typography>
                      <Typography variant="body2" fontSize={"0.8rem"}>
                        {description}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Box>

        <Box
          sx={{
            width: "100%",
            paddingBottom: "1rem",
            paddingTop: "1rem",
            borderBottom: `3px solid ${color.lightGrey}`,
          }}
        >
          <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
            <Typography variant="h6" fontWeight="bold" fontSize={"1rem"}>
              獎項
            </Typography>
            <Stack direction="row" justifyContent="flex-start" spacing={5}>
              {[
                "Rakuten Travel Gold Award 2021",
                "Rakuten Travel Gold Award 2020",
              ].map((l) => (
                <Stack direction="row" justifyContent="center" spacing={1}>
                  <CreditCardIcon />
                  <Typography variant="body2">{l}</Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Box>

        <Stack spacing={2}>
          <Typography variant="h5" fontSize={"1.5rem"}>
            特色和設施
          </Typography>

          <Box
            sx={{
              width: "100%",
              paddingBottom: "1rem",
              paddingTop: "1rem",
              borderBottom: `3px solid ${color.lightGrey}`,
            }}
          >
            <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
              <Typography variant="h6" fontWeight="bold" fontSize={"1rem"}>
                住宿設施類型
              </Typography>
              <Stack direction="row" justifyContent="flex-start" spacing={5}>
                {["度假村酒店"].map((l) => (
                  <Stack direction="row" justifyContent="center" spacing={1}>
                    <CreditCardIcon />
                    <Typography variant="body2">{l}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Box>

          <Box
            sx={{
              width: "100%",
              paddingBottom: "1rem",
              paddingTop: "1rem",
              borderBottom: `3px solid ${color.lightGrey}`,
            }}
          >
            <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
              <Typography variant="h6" fontWeight="bold" fontSize={"1rem"}>
                住宿設施設備
              </Typography>
              <Stack direction="row" justifyContent="flex-start" spacing={5}>
                {["停車場"].map((l) => (
                  <Stack direction="row" justifyContent="center" spacing={1}>
                    <CreditCardIcon />
                    <Typography variant="body2">{l}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Box>

          <Box
            sx={{
              width: "100%",
              paddingBottom: "1rem",
              paddingTop: "1rem",
              borderBottom: `3px solid ${color.lightGrey}`,
            }}
          >
            <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
              <Typography variant="h6" fontWeight="bold" fontSize={"1rem"}>
                可用付款方式
              </Typography>
              <Stack direction="row" justifyContent="flex-start" spacing={5}>
                {["Visa 卡", "萬事達卡", "JCB 卡", "可使用現金付款"].map(
                  (l) => (
                    <Stack direction="row" justifyContent="center" spacing={1}>
                      <CreditCardIcon />
                      <Typography variant="body2">{l}</Typography>
                    </Stack>
                  )
                )}
              </Stack>
            </Stack>
          </Box>
          <Box
            sx={{
              width: "100%",
              paddingBottom: "1rem",
              paddingTop: "1rem",
              borderBottom: `3px solid ${color.lightGrey}`,
            }}
          >
            <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
              <Typography variant="h6" fontWeight="bold" fontSize={"1rem"}>
                支援語言
              </Typography>
              <Stack direction="row" justifyContent="flex-start" spacing={5}>
                {["日文", "英文"].map((l) => (
                  <Stack direction="row" justifyContent="center" spacing={1}>
                    <LanguageIcon />
                    <Typography variant="body2">{l}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
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
                住宿須知
              </Typography>
              <Typography variant="body2">
                如果入住時間超過預定時間，請務必與我們聯繫。
              </Typography>
            </Stack>
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
        </Stack>
      </Box>
      <BottomBreadcrumbs />
      <BottomLink />
      <BottomDownloadApp />
    </>
  );
};
