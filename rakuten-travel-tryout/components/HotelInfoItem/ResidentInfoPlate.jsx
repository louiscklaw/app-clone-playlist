import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CircularProgressWithLabel from "components/CircularProgressWithLabel";
import color from "pages/hkg/zh-hk/color";
import DoneIcon from "@mui/icons-material/Done";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ShareIcon from "@mui/icons-material/Share";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import covin_action from "pages/api/covin_action";
import hotel_info from "pages/api/hotel_info";

export default () => {
  return (
    <>
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
    </>
  );
};
