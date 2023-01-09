import Box from "@mui/material/Box";
const handleDragStart = (e) => e.preventDefault();

const travelGuide = [
  <>
    <img
      src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
      onDragStart={handleDragStart}
      role="presentation"
      width="auto"
      height="100px"
    />
    <Box>請務必在旅行前詳細入境限制</Box>
  </>,
  <>
    <img
      src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
      onDragStart={handleDragStart}
      role="presentation"
      width="auto"
      height="100px"
    />
    <Box>不論您有何需求，我們很樂意聆聽</Box>
  </>,
  <>
    <img
      src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
      onDragStart={handleDragStart}
      role="presentation"
      width="auto"
      height="100px"
    />
    <Box>看所有旅遊指南文章</Box>
  </>,
  <>
    <img
      src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
      onDragStart={handleDragStart}
      role="presentation"
      width="auto"
      height="100px"
    />
    <Box>東京 70 個推薦觀光景點！</Box>
  </>,
  <>
    <img
      src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
      onDragStart={handleDragStart}
      role="presentation"
      width="auto"
      height="100px"
    />
    <Box>在地員工嚴選出的 40 個大阪必逛景點!</Box>
  </>,
  <>
    <img
      src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
      onDragStart={handleDragStart}
      role="presentation"
      width="auto"
      height="100px"
    />
    <Box>Japan’s Finally Open: Here’s What You Need To Know</Box>
  </>,
];

export default travelGuide;
