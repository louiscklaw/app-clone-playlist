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

export default () => {
  return (
    <>
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
    </>
  );
};
