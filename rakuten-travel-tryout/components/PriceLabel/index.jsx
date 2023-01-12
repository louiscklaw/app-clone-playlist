import { Stack, Typography } from "@mui/material";
import color from "pages/hkg/zh-hk/color";

export default ({ currency, value, description }) => {
  return (
    <>
      <Stack direction="column" alignItems="flex-end">
        <Typography variant="h6" fontWeight="bold">
          {currency} {value}
        </Typography>
        <Typography variant="body2" color={color.textDeepGrey}>
          {description}
        </Typography>
      </Stack>
    </>
  );
};
