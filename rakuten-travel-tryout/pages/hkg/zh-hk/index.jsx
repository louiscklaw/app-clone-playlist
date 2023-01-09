import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

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

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// import RakutenWebp from '/assets/Rakuten.webp'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default () => {
  const handleDragStart = (e) => e.preventDefault();

  const [value, setValue] = React.useState(null);

  const promotionsAndDiscounts = [
    <>
      <img
        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        onDragStart={handleDragStart}
        role="presentation"
        width="100px"
        height="100px"
      />
      <Box>日本新年優惠 全部低至88折</Box>
    </>,
    <>
      <img
        src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
        onDragStart={handleDragStart}
        role="presentation"
        width="100px"
        height="100px"
      />
      <Box>10% OFF Rakuten會員首次預訂優惠</Box>
    </>,
    <>
      <img
        src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
        onDragStart={handleDragStart}
        role="presentation"
        width="100px"
        height="100px"
      />
      <Box>滑雪度假村</Box>
    </>,
    <>
      <img
        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        onDragStart={handleDragStart}
        role="presentation"
        width="100px"
        height="100px"
      />
      <Box>北海道温泉旅館特集</Box>
    </>,
    <>
      <img
        src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
        onDragStart={handleDragStart}
        role="presentation"
        width="100px"
        height="100px"
      />
      <Box>再一次，日本</Box>
    </>,
    <>
      <img
        src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
        onDragStart={handleDragStart}
        role="presentation"
        width="100px"
        height="100px"
      />
      <Box>早鳥特別優惠</Box>
    </>,
    <>
      <img
        src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
        onDragStart={handleDragStart}
        role="presentation"
        width="100px"
        height="100px"
      />
      <Box>Rakuten Travel 獨家</Box>
    </>,
  ];

  const travelGuide = [
    <>
      <img
        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        onDragStart={handleDragStart}
        role="presentation"
        width="auto"
        height="100px"
      />
      <Box>請務必在旅行前詳細入境限制</Box>
    </>,
    <>
      <img
        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        onDragStart={handleDragStart}
        role="presentation"
        width="auto"
        height="100px"
      />
      <Box>不論您有何需求，我們很樂意聆聽</Box>
    </>,
    <>
      <img
        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        onDragStart={handleDragStart}
        role="presentation"
        width="auto"
        height="100px"
      />
      <Box>看所有旅遊指南文章</Box>
    </>,
    <>
      <img
        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        onDragStart={handleDragStart}
        role="presentation"
        width="auto"
        height="100px"
      />
      <Box>東京 70 個推薦觀光景點！</Box>
    </>,
    <>
      <img
        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        onDragStart={handleDragStart}
        role="presentation"
        width="auto"
        height="100px"
      />
      <Box>在地員工嚴選出的 40 個大阪必逛景點!</Box>
    </>,
    <>
      <img
        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        onDragStart={handleDragStart}
        role="presentation"
        width="auto"
        height="100px"
      />
      <Box>Japan’s Finally Open: Here’s What You Need To Know</Box>
    </>,
  ];

  const travelLocation = [
    <>
      <img
        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        onDragStart={handleDragStart}
        role="presentation"
        width="100px"
        height="100px"
      />
      <Box>沖繩縣</Box>
    </>,
    <>
      <img
        src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
        onDragStart={handleDragStart}
        role="presentation"
        width="100px"
        height="100px"
      />
      <Box>Hokkaido</Box>
    </>,
    <>
      <img
        src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
        onDragStart={handleDragStart}
        role="presentation"
        width="100px"
        height="100px"
      />
      <Box>北海道</Box>
    </>,
    <>
      <img
        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        onDragStart={handleDragStart}
        role="presentation"
        width="100px"
        height="100px"
      />
      <Box>東京都</Box>
    </>,
    <>
      <img
        src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
        onDragStart={handleDragStart}
        role="presentation"
        width="100px"
        height="100px"
      />
      <Box>大阪府</Box>
    </>,
    <>
      <img
        src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
        onDragStart={handleDragStart}
        role="presentation"
        width="100px"
        height="100px"
      />
      <Box>Shizuoka</Box>
    </>,
    <>
      <img
        src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
        onDragStart={handleDragStart}
        role="presentation"
        width="100px"
        height="100px"
      />
      <Box>靜岡縣</Box>
    </>,
    <>
      <img
        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        onDragStart={handleDragStart}
        role="presentation"
        width="100px"
        height="100px"
      />
      <Box>Chiba</Box>
    </>,
    <>
      <img
        src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
        onDragStart={handleDragStart}
        role="presentation"
        width="100px"
        height="100px"
      />
      <Box>千葉縣</Box>
    </>,
    <>
      <img
        src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
        onDragStart={handleDragStart}
        role="presentation"
        width="100px"
        height="100px"
      />
      <Box>Hyogo</Box>
    </>,
    <>
      <img
        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        onDragStart={handleDragStart}
        role="presentation"
        width="100px"
        height="100px"
      />
      <Box>兵庫縣</Box>
    </>,
    <>
      <img
        src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
        onDragStart={handleDragStart}
        role="presentation"
        width="100px"
        height="100px"
      />
      <Box>神奈川縣</Box>
    </>,
    <>
      <img
        src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
        onDragStart={handleDragStart}
        role="presentation"
        width="100px"
        height="100px"
      />
      <Box>群馬縣</Box>
    </>,
    <>
      <img
        src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
        onDragStart={handleDragStart}
        role="presentation"
        width="100px"
        height="100px"
      />
      <Box>京都府</Box>
    </>,
  ];

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
            <Box sx={{ flexGrow: 1 }}></Box>
            <Button color="inherit">繁體中文（香港）</Button>
            <Button color="inherit">HKG</Button>
            <Button color="inherit">HKD</Button>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
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
                // position: "relative",
                // top: "5rem",
                // left: "5rem",
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
                      <Box>
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
                          <Box sx={{ paddingTop: "2rem" }}>
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
      <Stack direction="row" justifyContent="center" alignItems="center">
        <h2>下載 Rakuten Travel App</h2>
        <img src="/img/Rakuten.webp" width="auto" height="100px" />
        <img
          src="data:image/png;base64,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"
          width="auto"
          height="50px"
        />
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <img
              src="https://trvimg.r10s.jp/toptype/bnr/valueproposition/icon01.png"
              width="50"
              height="auto"
            />
            <Typography variant="subtitle1">可信賴品牌</Typography>
            <Typography variant="body2">
              Rakuten Group 旗下﹑日本其中一間行內領先的網上旅行社。備受全球 16
              億會員信賴
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={3}>
          <Stack direction="column" justifyContent="center" alignItems="center">
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
          <Stack direction="column" justifyContent="center" alignItems="center">
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
          <Stack direction="column" justifyContent="center" alignItems="center">
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
