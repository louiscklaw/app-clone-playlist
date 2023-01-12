import {
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CircularProgressWithLabel from "components/CircularProgressWithLabel";
import color from "pages/hkg/zh-hk/color";
import DoneIcon from "@mui/icons-material/Done";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ShareIcon from "@mui/icons-material/Share";

export default ({ sx }) => {
  return (
    <>
      <div class="row">
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
      </div>

      <div class="row" style={{ gap: "1rem", ...sx }}>
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
      </div>
    </>
  );
};
