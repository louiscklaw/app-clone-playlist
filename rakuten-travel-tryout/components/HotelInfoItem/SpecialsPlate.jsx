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

export default (props) => {
  return (
    <>
      <div {...props}>
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
      </div>
    </>
  );
};
