import { Box, Typography, Stack } from "@mui/material";

const handleDragStart = (e) => e.preventDefault();

const Caption = ({ children }) => {
  return (
    <>
      <Typography variant="subtitle2" fontWeight="bold">
        {children}
      </Typography>
    </>
  );
};

const ImageCell = ({ img_src, caption }) => {
  return (
    <>
      <Stack direction="column" alignItems="center">
        <Box>
          <img
            src={img_src}
            onDragStart={handleDragStart}
            role="presentation"
            width="200px"
            height="auto"
            style={{ borderRadius: "1rem" }}
          />
        </Box>
        <Box sx={{ paddingTop: "0.5rem" }}>
          <Caption>{caption}</Caption>
        </Box>
      </Stack>
    </>
  );
};

const promotionsAndDiscounts = [
  <ImageCell
    img_src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    caption="日本新年優惠 全部低至88折"
  />,
  <ImageCell
    img_src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    caption="10% OFF Rakuten會員首次預訂優惠"
  />,
  <ImageCell
    img_src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    caption="滑雪度假村"
  />,
  <ImageCell
    img_src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    caption="北海道温泉旅館特集"
  />,
  <ImageCell
    img_src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    caption="再一次，日本"
  />,
  <ImageCell
    img_src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    caption="早鳥特別優惠"
  />,
  <ImageCell
    img_src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    caption="Rakuten Travel 獨家"
  />,
];

export default promotionsAndDiscounts;
