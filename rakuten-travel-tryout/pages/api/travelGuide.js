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

const travelGuide = [
  <ImageCell
    img_src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    caption="請務必在旅行前詳細入境限制"
  />,
  <ImageCell
    img_src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    caption="不論您有何需求，我們很樂意聆聽"
  />,
  <ImageCell
    img_src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    caption="看所有旅遊指南文章"
  />,
  <ImageCell
    img_src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    caption="東京 70 個推薦觀光景點！"
  />,
  <ImageCell
    img_src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    caption="在地員工嚴選出的 40 個大阪必逛景點!"
  />,
  <ImageCell
    img_src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    caption="Japan’s Finally Open: Here’s What You Need To Know"
  />,
];

export default travelGuide;
