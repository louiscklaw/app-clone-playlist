import * as React from "react";
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
import CircularProgressWithLabel from "components/CircularProgressWithLabel";
import color from "pages/hkg/zh-hk/color";
import DoneIcon from "@mui/icons-material/Done";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ShareIcon from "@mui/icons-material/Share";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import covin_action from "pages/api/covin_action";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SearchIcon from "@mui/icons-material/Search";
import SettingsInputCompositeIcon from "@mui/icons-material/SettingsInputComposite";
import RoomInfo from "pages/hkg/zh-hk/hotel_info_item/cnt_japan/sub_okinawa/cty_miyakojima_city/10123456795958/RoomInfo";
import room_plans from "pages/api/room_plans";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ClearIcon from "@mui/icons-material/Clear";
import PriceLabel from "components/PriceLabel";
import RoomPlanDialog from "pages/hkg/zh-hk/hotel_info_item/cnt_japan/sub_okinawa/cty_miyakojima_city/10123456795958/RoomPlanDialog";

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

function RoomPlan({ plan }) {
  return (
    <>
      <div class="row">
        <div style={{ width: "65%" }}>
          <Typography
            variant="body1"
            fontWeight="bold"
            color={color.accentGreen}
          >
            {plan.name}
          </Typography>

          <Typography>{plan.description}</Typography>
          <Stack direction="row" spacing={2}>
            {plan.points.map((p) => (
              <>
                <Typography variant="body2" color={color.textDeepGrey}>
                  {p.icon}
                  {p.text}
                </Typography>
              </>
            ))}
          </Stack>

          {/* <Typography>{JSON.stringify(plan.photos, null, 2)}</Typography> */}
        </div>

        <div style={{ flexGrow: 1 }}>
          <Stack direction="row" alignItems="center">
            <PriceLabel
              currency={plan.price.currency}
              value={plan.price.value}
              description={plan.price.description}
            />
          </Stack>
          <Typography>{plan.price.description}</Typography>
        </div>
      </div>
      <div style={{ width: 150, height: 150, backgroundColor: "cyan" }}></div>
      <RoomPlanDialog />
    </>
  );
}

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
  const [value, setValue] = React.useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
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
          <Box
            sx={{
              width: "100%",
            }}
          >
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
                また今度は夏休みにリピートしたいです。 回報 有幫助 翻譯 顯示更多
                1 2 3 24 項中的 1 - 10 項評價
              </Box>
            </Stack>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          住宿計劃內容
        </TabPanel>
      </Box>
    </>
  );
};
