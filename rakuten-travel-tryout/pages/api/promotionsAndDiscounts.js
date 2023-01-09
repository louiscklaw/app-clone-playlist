import Box from "@mui/material/Box";

const handleDragStart = (e) => e.preventDefault();

const promotionsAndDiscounts = [
  <>
    <img
      src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
      onDragStart={handleDragStart}
      role="presentation"
      width="100px"
      height="100px"
    />
    <Box>日本新年優惠 全部低至88折</Box>
  </>,
  <>
    <img
      src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
      onDragStart={handleDragStart}
      role="presentation"
      width="100px"
      height="100px"
    />
    <Box>10% OFF Rakuten會員首次預訂優惠</Box>
  </>,
  <>
    <img
      src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
      onDragStart={handleDragStart}
      role="presentation"
      width="100px"
      height="100px"
    />
    <Box>滑雪度假村</Box>
  </>,
  <>
    <img
      src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
      onDragStart={handleDragStart}
      role="presentation"
      width="100px"
      height="100px"
    />
    <Box>北海道温泉旅館特集</Box>
  </>,
  <>
    <img
      src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
      onDragStart={handleDragStart}
      role="presentation"
      width="100px"
      height="100px"
    />
    <Box>再一次，日本</Box>
  </>,
  <>
    <img
      src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
      onDragStart={handleDragStart}
      role="presentation"
      width="100px"
      height="100px"
    />
    <Box>早鳥特別優惠</Box>
  </>,
  <>
    <img
      src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
      onDragStart={handleDragStart}
      role="presentation"
      width="100px"
      height="100px"
    />
    <Box>Rakuten Travel 獨家</Box>
  </>,
];

export default promotionsAndDiscounts;
