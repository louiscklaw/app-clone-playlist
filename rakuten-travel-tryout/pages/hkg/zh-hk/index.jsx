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
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MapIcon from "@mui/icons-material/Map";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// import RakutenWebp from '/assets/Rakuten.webp'
import promotionsAndDiscounts from "pages/api/promotionsAndDiscounts";
import travelGuide from "pages/api/travelGuide";
import travelLocation from "pages/api/travelLocation";
import GooglePlayButton from "./GooglePlayButton";
import CompanyLogo from "./CompanyLogo";

export default () => {
  const handleDragStart = (e) => e.preventDefault();

  const [value, setValue] = React.useState(null);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box>
              <Image src="/img/HelloWorld.svg" height={30} width={240} />
            </Box>

            <Box sx={{ flexGrow: 1 }}></Box>
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              alignItems="center"
            >
              <Button color="inherit">
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                >
                  <PublicIcon fontSize="small" />
                  <Stack direction="row">
                    <Typography variant="subtitle2">
                      繁體中文（香港）
                    </Typography>
                    <ArrowDropDownIcon fontSize="small" />
                  </Stack>
                </Stack>
              </Button>

              <Button color="inherit">
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

              <Button color="inherit">
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
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      <Box style={{ width: "100vw" }}>
        <Box
          sx={{
            width: "100vw",
            height: "66vh",
            backgroundImage: `url("${"https://images.unsplash.com/photo-1606918801925-e2c914c4b503"}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box style={{ color: "white", width: "50%" }}>
            <Box
              sx={{
                backgroundColor: "rgba(255,255,255,0.3)",
                borderRadius: "1rem",
                position: "relative",
                top: "5rem",
                left: "5rem",
              }}
            >
              <Stack sx={{ padding: { xs: "3rem" } }} spacing={1}>
                <Typography variant="h5">預訂日本優質酒店及旅館</Typography>
                <Stack sx={{ paddingTop: { xs: "1rem" } }} spacing={2}>
                  <TextField
                    defaultValue="輸入目的地或住宿設施名稱"
                    id="outlined-start-adornment"
                    sx={{}}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    size="small"
                    fullWidth
                  />

                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <Stack direction="row" spacing={3}>
                      <DatePicker
                        label="Basic example"
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />

                      <DatePicker
                        label="Basic example"
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>

                  <TextField
                    defaultValue="每間１人，１間房"
                    aria-describedby={"simple-popover"}
                    onClick={handleClick}
                    id="outlined-start-adornment"
                    sx={{ cursor: "help" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    size="small"
                    fullWidth
                  />

                  <Box>
                    <Button
                      aria-describedby={"simple-popover"}
                      variant="contained"
                      onClick={handleClick}
                    >
                      Open Popover
                    </Button>
                    <Popover
                      id={"simple-popover"}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    >
                      <Box sx={{ padding: "1rem" }}>
                        <Box>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            客房與住客
                          </Typography>
                        </Box>

                        <Box>
                          <Box sx={{ paddingTop: "1rem" }}>
                            <Box
                              sx={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                            >
                              <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: "bold" }}
                              >
                                客房數
                              </Typography>
                            </Box>
                            <Grid
                              container
                              justifyContent="center"
                              alignItems="center"
                            >
                              <Grid item xs={6}>
                                <Typography
                                  variant="subtitle1"
                                  component="body1"
                                >
                                  客房
                                </Typography>
                              </Grid>
                              <Grid
                                item
                                xs={6}
                                container
                                justifyContent="flex-end"
                              >
                                <ButtonGroup
                                  variant="contained"
                                  aria-label="outlined primary button group"
                                  size="small"
                                >
                                  <Button>0-2</Button>
                                  <Button>3-5</Button>
                                  <Button>> 6</Button>
                                </ButtonGroup>
                              </Grid>
                            </Grid>
                            <Box sx={{ paddingTop: "1rem" }}>
                              <Alert severity="info">
                                請選擇日期以更改房間數。
                              </Alert>
                            </Box>
                          </Box>

                          <Box sx={{ paddingTop: "1rem" }}>
                            <Box
                              sx={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                            >
                              <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: "bold" }}
                              >
                                每間房住客人數
                              </Typography>
                            </Box>
                            <Grid container spacing={1}>
                              <Grid item xs={12} container spacing={1}>
                                <Grid item xs={6}>
                                  <Typography
                                    variant="subtitle1"
                                    component="body1"
                                  >
                                    成人
                                  </Typography>
                                </Grid>
                                <Grid
                                  item
                                  xs={6}
                                  container
                                  justifyContent="flex-end"
                                >
                                  <ButtonGroup
                                    variant="contained"
                                    aria-label="outlined primary button group"
                                    size="small"
                                  >
                                    <Button>0-2</Button>
                                    <Button>3-5</Button>
                                    <Button>> 6</Button>
                                  </ButtonGroup>
                                </Grid>
                              </Grid>

                              <Grid item xs={12} container spacing={1}>
                                <Grid item xs={6}>
                                  <Typography
                                    variant="subtitle1"
                                    component="body1"
                                  >
                                    小童
                                  </Typography>
                                </Grid>
                                <Grid
                                  item
                                  xs={6}
                                  container
                                  justifyContent="flex-end"
                                >
                                  <ButtonGroup
                                    variant="contained"
                                    aria-label="outlined primary button group"
                                    size="small"
                                  >
                                    <Button>0-2</Button>
                                    <Button>3-5</Button>
                                    <Button>> 6</Button>
                                  </ButtonGroup>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Box sx={{ paddingTop: "1rem" }}>
                              <Alert severity="info">
                                請選擇日期以更改孩童人數。
                              </Alert>
                            </Box>
                          </Box>
                        </Box>
                        <Box sx={{ paddingTop: "2rem" }}>
                          <Button
                            variant="contained"
                            fullWidth
                            size="large"
                            onClick={(e) => setOpen(false)}
                          >
                            <Typography
                              variant="subtitle2"
                              sx={{ fontWeight: "bold" }}
                            >
                              完成
                            </Typography>
                          </Button>
                        </Box>
                      </Box>
                    </Popover>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginLeft: "15vw", marginRight: "15vw" }}>
        <Box
          sx={{
            margin: "2rem",
            padding: "2rem",
            backgroundColor: "rgba(0,0,0,0.1)",
            borderRadius: "1rem",
          }}
        >
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Stack
              direction={{ xs: "column", xl: "row" }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h6">下載 Rakuten Travel App</Typography>
              <CompanyLogo sx={{ display: { xs: "none", lg: "block" } }} />
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

        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src="https://trvimg.r10s.jp/toptype/bnr/valueproposition/icon01.png"
                width="50"
                height="auto"
              />
              <Typography variant="subtitle1">可信賴品牌</Typography>
              <Typography variant="body2">
                Rakuten Group 旗下﹑日本其中一間行內領先的網上旅行社。備受全球
                16 億會員信賴
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={3}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src="https://trvimg.r10s.jp/toptype/bnr/valueproposition/icon01.png"
                width="50"
                height="auto"
              />
              <Typography variant="subtitle1">各式各樣的選項</Typography>
              <Typography variant="body2">
                在上千間的酒店及旅館體驗 omotenashi－日式貼心款待
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={3}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src="https://trvimg.r10s.jp/toptype/bnr/valueproposition/icon01.png"
                width="50"
                height="auto"
              />
              <Typography variant="subtitle1">特別優惠</Typography>
              <Typography variant="body2">
                尋找只在 Rakuten Travel 上提供的專屬折扣及獨有住宿計劃
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={3}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src="https://trvimg.r10s.jp/toptype/bnr/valueproposition/icon01.png"
                width="50"
                height="auto"
              />
              <Typography variant="subtitle1">會籍福利</Typography>
              <Typography variant="body2">
                尊享身為 Rakuten 會員的特別優待。會籍免費
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box>
            <Typography variant={"subtitle1"}>
              Rakuten Travel 品質認證
            </Typography>
            <Typography variant={"body1"}>
              此等標誌會被給予由 Rakuten Travel
              與及我們的顧客所揀選的優質酒店及旅館。它們會確保您有一個高質難忘的住宿。
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Typography variant={"subtitle1"}>不要錯過任何優惠</Typography>
            <Typography variant={"body1"}>
              如欲訂閱特別優惠資訊，請輸入您的電郵地址，我們會及時通知您。
            </Typography>
          </Box>
        </Grid>
      </Grid>
      電郵地址
      <div>
        <div>
          <h2>優惠與折扣</h2>
        </div>

        <Box>
          <AliceCarousel
            mouseTracking
            items={promotionsAndDiscounts}
            responsive={{
              0: { items: 1 },
              1024: { items: 4, itemsFit: "contain" },
            }}
          />
        </Box>
      </div>
      <div>
        <div>
          <h2>旅遊指南</h2>
        </div>

        <Box>
          <AliceCarousel
            mouseTracking
            items={travelGuide}
            responsive={{
              0: { items: 1 },
              1024: { items: 4, itemsFit: "contain" },
            }}
          />
        </Box>
      </div>
      <div>
        <div>
          <h2>以地區搜尋</h2>
        </div>

        <Box>
          <AliceCarousel
            mouseTracking
            items={travelLocation}
            responsive={{
              0: { items: 1 },
              1024: { items: 6, itemsFit: "contain" },
            }}
          />
        </Box>
      </div>
      <Box>
        <Stack direction="row" spacing={2}>
          <Box>
            <Typography variant="subtitle2">私隱政策</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2">條款與條件</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2">聯絡我們</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2">關於我們</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2">Cookie政策</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2">不要出售我的個人資料</Typography>
          </Box>
        </Stack>
      </Box>
      <Typography variant="body2">
        © 樂天集團股份有限公司 香港旅行代理商牌照號碼 354595，由 Rakuten Travel
        Singapore Pte. Ltd. 持有
      </Typography>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="subtitle2">下載 App</Typography>
        <p>App Store</p>
        <p>Google Play</p>
      </Stack>
    </>
  );
};
