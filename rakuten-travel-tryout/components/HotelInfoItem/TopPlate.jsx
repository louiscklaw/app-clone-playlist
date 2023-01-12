import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import CircularProgressWithLabel from "components/CircularProgressWithLabel";
import color from "pages/hkg/zh-hk/color";
import DoneIcon from "@mui/icons-material/Done";

export default () => {
  return (
    <>
      <Stack direction="row" spacing={3}>
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
    </>
  );
};
