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
import CreditCardIcon from "@mui/icons-material/CreditCard";

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
      </div>
    </>
  );
};
