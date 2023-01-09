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

const ImageCell = ({ img_src, caption, width, height }) => {
  return (
    <>
      <Stack direction="column" alignItems="center">
        <Box>
          <img
            src={img_src}
            onDragStart={handleDragStart}
            role="presentation"
            width={width || 200}
            height={height}
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

const travelLocation = ({ height }) => [
  <ImageCell
    img_src="https://images.unsplash.com/photo-1673209377892-222ee5e19e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    width={150}
    height={height}
    caption="沖繩縣"
  />,
  <ImageCell
    img_src="https://images.unsplash.com/photo-1673209377892-222ee5e19e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    width={150}
    height={height}
    caption="Hokkaido"
  />,
  <ImageCell
    img_src="https://images.unsplash.com/photo-1673209377892-222ee5e19e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    width={150}
    height={height}
    caption="北海道"
  />,
  <ImageCell
    img_src="https://images.unsplash.com/photo-1673209377892-222ee5e19e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    width={150}
    height={height}
    caption="東京都"
  />,
  <ImageCell
    img_src="https://images.unsplash.com/photo-1673209377892-222ee5e19e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    width={150}
    height={height}
    caption="大阪府"
  />,
  <ImageCell
    img_src="https://images.unsplash.com/photo-1673209377892-222ee5e19e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    width={150}
    height={height}
    caption="Shizuoka"
  />,
  <ImageCell
    img_src="https://images.unsplash.com/photo-1673209377892-222ee5e19e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    width={150}
    height={height}
    caption="靜岡縣"
  />,
  <ImageCell
    img_src="https://images.unsplash.com/photo-1673209377892-222ee5e19e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    width={150}
    height={height}
    caption="Chiba"
  />,
  <ImageCell
    img_src="https://images.unsplash.com/photo-1673209377892-222ee5e19e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    width={150}
    height={height}
    caption="千葉縣"
  />,
  <ImageCell
    img_src="https://images.unsplash.com/photo-1673209377892-222ee5e19e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    width={150}
    height={height}
    caption="Hyogo"
  />,
  <ImageCell
    img_src="https://images.unsplash.com/photo-1673209377892-222ee5e19e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    width={150}
    height={height}
    caption="兵庫縣"
  />,
  <ImageCell
    img_src="https://images.unsplash.com/photo-1673209377892-222ee5e19e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    width={150}
    height={height}
    caption="神奈川縣"
  />,
  <ImageCell
    img_src="https://images.unsplash.com/photo-1673209377892-222ee5e19e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    width={150}
    height={height}
    caption="群馬縣"
  />,
  <ImageCell
    img_src="https://images.unsplash.com/photo-1673209377892-222ee5e19e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
    target_href="https://travel.rakuten.com/contents/hkg/zh-hk/campaign/newyear202212/?l-id=top_cpn_lunar_221222"
    width={150}
    height={height}
    caption="京都府"
  />,
];

export default travelLocation;
