import * as React from 'react';
import Image from 'next/image';
import { styled, alpha } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';

import MenuIcon from '@mui/icons-material/Menu';
import PublicIcon from '@mui/icons-material/Public';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LanguageIcon from '@mui/icons-material/Language';
import LoginIcon from '@mui/icons-material/Login';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import DoneIcon from '@mui/icons-material/Done';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import {
  Grid,
  Slider,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  TextField,
  Alert,
  Button,
  Switch,
  ButtonGroup,
  Modal,
  Popover,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  MenuItem,
  CircularProgress,
  Chip,
  Card,
} from '@mui/material';
import Sun from '@mui/icons-material/LightMode';

import AccountCircle from '@mui/icons-material/AccountCircle';
import MapIcon from '@mui/icons-material/Map';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';
import AliceCarousel from 'react-alice-carousel';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import EditIcon from '@mui/icons-material/Edit';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// import RakutenWebp from '/assets/Rakuten.webp'
import hotelPhotos from 'pages/api/hotelPhotos';
import travelGuide from 'pages/api/travelGuide';
import travelLocation from 'pages/api/travelLocation';
import GooglePlayButton from 'pages/hkg/zh-hk/GooglePlayButton';
import CompanyLogo from 'pages/hkg/zh-hk/CompanyLogo';
import HelloworldSvg from 'pages/hkg/zh-hk/HelloworldSvg';
import AliceCarouselWrap from './AliceCarouselWrap';
import RoomSelectPopover from 'pages/hkg/zh-hk/RoomSelectPopover';
import LangSelectPopover from 'pages/hkg/zh-hk/LangSelectPopover';
import MapSelectPopover from 'pages/hkg/zh-hk/MapSelectPopover';
import CurrSelectPopover from 'pages/hkg/zh-hk/CurrSelectPopover';
import SearchForm from 'pages/hkg/zh-hk/SearchForm';
import SquareCompanyLogo from 'pages/hkg/zh-hk/SquareCompanyLogo';

import color from 'pages/hkg/zh-hk/color';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgressWithLabel from './CircularProgressWithLabel';

const AskLink = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Typography sx={{}}>意見</Typography>
    </a>
  );
});

function valuetext(value) {
  return `${value}°C`;
}

const StyledMenu = styled(props => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

function HotelPost() {
  return (
    <>
      <Card sx={{ padding: '1rem' }}>
        <Stack direction="column">
          <Stack direction="row" spacing={5}>
            <Box
              sx={{
                width: 300,
                minWidth: 300,
              }}
            >
              <AliceCarouselWrap height={250} items={hotelPhotos({ height: 250 })} />
            </Box>
            <Box sx={{ flexGrow: 3 }}>
              <Typography variant="body1" fontWeight="bold">
                宮古島東急酒店與度假村
              </Typography>

              <Stack sx={{ color: color.textBlack }} spacing={1}>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <DoneIcon sx={{ fontSize: '1rem' }} />
                  <Typography variant="body2">一人旅行 </Typography>
                </Stack>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <DoneIcon sx={{ fontSize: '1rem' }} />
                  <Typography variant="body2">免費停車場 </Typography>
                </Stack>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <DoneIcon sx={{ fontSize: '1rem' }} />
                  <Typography variant="body2">適合家族 </Typography>
                </Stack>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <FmdGoodIcon sx={{ fontSize: '1rem' }} />
                  <Typography variant="body2">由宮古機場駕車約 16 分鐘可達</Typography>
                </Stack>
              </Stack>
            </Box>
            <Stack sx={{ flexGrow: 2, textAlign: 'right' }} spacing={2}>
              <Stack direction="row" spacing={1} alignItems="center">
                <div style={{ flexGrow: 1 }}></div>
                <div sx={{ textAlign: 'right' }}>
                  <Typography variant="h6" fontSize={'1rem'} fontWeight="bold">
                    非常好
                  </Typography>
                  <Typography variant="body2" fontSize={'0.8rem'}>
                    45 則評價
                  </Typography>
                </div>
                <CircularProgressWithLabel value={4.6} />
              </Stack>
              <Typography variant="body1" fontWeight="bold">
                $1,369.77~
              </Typography>
              <Typography variant="body2" sx={{ color: color.textDeepGrey }}>
                每間房
              </Typography>
              <Typography variant="body2" sx={{ color: color.textDeepGrey }}>
                2 位住客 1 晚
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" justifyContent="flex-end">
            <Button variant="contained" sx={{ backgroundColor: color.accentGreen }}>
              查看客房和住宿計劃
            </Button>
          </Stack>
        </Stack>
      </Card>
    </>
  );
}

export default () => {
  const [value, setValue] = React.useState(null);
  const [range_value, setRangeValue] = React.useState([20, 37]);

  // lang-select-popover
  const [langAnchorEl, setLangAnchorEl] = React.useState(null);
  const handleLangClick = event => {
    setLangAnchorEl(event.currentTarget);
  };
  const handleLangClose = () => {
    setLangAnchorEl(null);
  };
  const open_lang_popover = Boolean(langAnchorEl);
  // const lang_id = open_lang_popover ? "simple-popover" : undefined;

  // map-select-popover
  const [mapAnchorEl, setMapAnchorEl] = React.useState(null);
  const handleMapClick = event => {
    setMapAnchorEl(event.currentTarget);
  };
  const handleMapClose = () => {
    setMapAnchorEl(null);
  };
  const open_map_popover = Boolean(mapAnchorEl);
  // const map_id = open_map_popover ? "simple-popover" : undefined;

  // curr-select-popover
  const [currAnchorEl, setCurrAnchorEl] = React.useState(null);
  const handleCurrClick = event => {
    setCurrAnchorEl(event.currentTarget);
  };
  const handleCurrClose = () => {
    setCurrAnchorEl(null);
  };
  const open_curr_popover = Boolean(currAnchorEl);
  // const curr_id = open_curr_popover ? "simple-popover" : undefined;

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const list_item = [
    { icon: <ConfirmationNumberIcon />, text: '優惠券' },
    { icon: <NotificationsIcon />, text: '通知' },
    { icon: <BookmarkIcon />, text: '書籤' },
    { icon: <NewspaperIcon />, text: '訂單' },
    { icon: <MarkunreadIcon />, text: '電子報訂閱' },
  ];

  const handleRangeChange = (event, newValue) => {
    setRangeValue(newValue);
  };

  const list = anchor => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      sx={{ width: '100%', color: color.midGrey }}
    >
      <List>
        <ListItem disablePadding sx={{ paddingTop: '1rem' }}>
          <ListItemButton>
            <Stack direction="row" spacing={4} sx={{ width: '100%' }}>
              <LanguageIcon />
              <Stack direction="row" sx={{ width: '100%' }} justifyContent="space-between">
                <Typography variant={'body1'}>語言</Typography>
                <Typography variant={'body1'}>繁體中文（香港）</Typography>
              </Stack>
            </Stack>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ paddingTop: '1rem' }}>
          <ListItemButton>
            <Stack direction="row" spacing={4} sx={{ width: '100%' }}>
              <MapIcon />
              <Stack direction="row" sx={{ width: '100%' }} justifyContent="space-between">
                <Typography variant={'body1'}>地區</Typography>
                <Typography variant={'body1'}>HKG</Typography>
              </Stack>
            </Stack>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ paddingTop: '1rem' }}>
          <ListItemButton>
            <Stack direction="row" spacing={4} sx={{ width: '100%' }}>
              <CurrencyExchangeIcon />
              <Stack direction="row" sx={{ width: '100%' }} justifyContent="space-between">
                <Typography variant={'body1'}>貨幣</Typography>
                <Typography variant={'body1'}>HKD</Typography>
              </Stack>
            </Stack>
          </ListItemButton>
        </ListItem>

        {list_item.map(({ icon, text }) => (
          <ListItem disablePadding sx={{ paddingTop: '1rem' }}>
            <ListItemButton>
              <Stack direction="row" spacing={4}>
                {icon}
                <Typography variant={'body1'}>{text}</Typography>
              </Stack>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <Stack direction="row" spacing={4}>
              <LoginIcon />
              <ListItemText>登入</ListItemText>
            </Stack>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <Stack direction="row" spacing={4}>
              <QuestionMarkIcon />
              <Link href="/hkg/zh-hk/ask" passHref legacyBehavior>
                <AskLink />
              </Link>
            </Stack>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  // lang-select-popover
  let [app_bar_height, setAppBarHeight] = React.useState(0);
  let [scrolled, setScrolled] = React.useState(false);

  // suggested menu
  const [suggested_anchor_el, setSuggestedAnchorEl] = React.useState(null);
  const suggested_open = Boolean(suggested_anchor_el);
  const handleSuggestedClick = event => {
    setSuggestedAnchorEl(event.currentTarget);
  };
  const handleSuggestedClose = () => {
    setSuggestedAnchorEl(null);
  };
  // suggested menu

  React.useEffect(() => {
    // document.querySelector("#right_menu")?.click();
    document.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        console.log({ 'window.scrollY': window.scrollY });
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <>
      <RoomSelectPopover open={open} anchorEl={anchorEl} setAnchorEl={setAnchorEl} handleClose={handleClose} />
      <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
        <Box
          sx={{
            // backgroundColor: { xs: "gold", md: "tomato" },
            width: { xs: '100%', md: '33vw' },
            minWidth: { xs: '100vw', md: '400px' },
          }}
        >
          <Stack direction="column" spacing={3}>
            <Stack direction="row" sx={{ height: '3rem' }}>
              <IconButton>
                <CloseIcon sx={{ fontSize: '2rem' }} onClick={toggleDrawer('right', false)} />
              </IconButton>
            </Stack>
            {list('right')}
          </Stack>
        </Box>
      </Drawer>
      <AppBar
        position="static"
        sx={{
          backgroundColor: scrolled ? color.normalgreen : color.white,
          height: scrolled ? 60 : 60,
          zIndex: 999,
          transition: '0.6s',
          boxShadow: 'unset',
          paddingLeft: { xs: '3vw', xl: '10vw' },
          paddingRight: { xs: '3vw', xl: '10vw' },
        }}
      >
        <Toolbar sx={{}}>
          <Box sx={{}}>
            <CompanyLogo color={scrolled ? color.accentGreen : color.accentGreen} />
          </Box>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{}}>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button id="lang_change" color="inherit" onClick={handleLangClick}>
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                  <PublicIcon fontSize="small" sx={{ color: color.textBlack }} />
                  <Stack direction="row">
                    <Typography variant="subtitle2" sx={{ color: color.textBlack }}>
                      繁體中文（香港）
                    </Typography>
                    <ArrowDropDownIcon fontSize="small" />
                  </Stack>
                </Stack>
              </Button>

              <Button id="map_change" color="inherit" onClick={handleMapClick}>
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                  <MapIcon fontSize="small" sx={{ color: color.textBlack }} />
                  <Stack direction="row">
                    <Typography variant="subtitle2" sx={{ color: color.textBlack }}>
                      HKG
                    </Typography>
                    <ArrowDropDownIcon fontSize="small" />
                  </Stack>
                </Stack>
              </Button>

              <Button id="curr_change" color="inherit" onClick={handleCurrClick}>
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                  <CurrencyExchangeIcon fontSize="small" sx={{ color: color.textBlack }} />
                  <Stack direction="row">
                    <Typography variant="subtitle2" sx={{ color: color.textBlack }}>
                      HKD
                    </Typography>
                    <ArrowDropDownIcon fontSize="small" />
                  </Stack>
                </Stack>
              </Button>
            </Box>
            <IconButton
              id="right_menu"
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer('right', true)}
            >
              <MenuIcon sx={{ color: color.textBlack }} />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          paddingLeft: { xs: '3vw', xl: '10vw' },
          paddingRight: { xs: '3vw', xl: '10vw' },
          backgroundColor: color.lightGrey,
        }}
      >
        <Box sx={{ width: '80%', marginTop: '1rem', marginBottom: '3rem' }}>
          <Stack direction="row">
            <TextField
              placeholder="輪入關鍵字開始搜尋"
              id="outlined-start-adornment"
              sx={{}}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              size="small"
            />
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                value={value}
                onChange={newValue => {
                  setValue(newValue);
                }}
                renderInput={params => {
                  params.InputProps.disableUnderline = true;
                  return (
                    <TextField
                      variant="standard"
                      {...params}
                      sx={{
                        backgroundColor: 'white',
                        padding: '0.5rem',
                        borderRadius: '5px',
                      }}
                    />
                  );
                }}
              />
              <DatePicker
                value={value}
                onChange={newValue => {
                  setValue(newValue);
                }}
                renderInput={params => {
                  params.InputProps.disableUnderline = true;

                  return (
                    <TextField
                      variant="standard"
                      {...params}
                      sx={{
                        borderRadius: 0,
                        backgroundColor: 'white',
                        padding: '0.5rem',
                        borderRadius: '5px',
                      }}
                    />
                  );
                }}
              />
            </LocalizationProvider>
            <TextField
              // id="outlined-start-adornment"
              variant="standard"
              placeholder="每間１人，１間房"
              // aria-describedby={"simple-popover"}
              onClick={handleClick}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
              size="small"
              fullWidth
              sx={{
                borderRadius: 0,
                backgroundColor: 'white',
                padding: '0.5rem',
                borderRadius: '5px',
              }}
            />

            <Button variant="contained" size="large" onClick={handleClick} sx={{ backgroundColor: color.accentGreen }}>
              搜尋
            </Button>
          </Stack>
        </Box>
      </Box>

      <Box
        sx={{
          paddingLeft: { xs: '3vw', xl: '10vw' },
          paddingRight: { xs: '3vw', xl: '10vw' },
        }}
      >
        <Box sx={{ marginTop: '1rem', marginBottom: '3rem' }}>
          <Grid container sx={{}}>
            <Grid item xs={4} sx={{}}>
              <Typography variant="subtitle1" fontWeight="bold" sx={{ color: color.textBlack }}>
                篩選條件
              </Typography>
              <Typography variant="body2" fontWeight="bold">
                總額
              </Typography>
              <Typography variant="body2">每間房價</Typography>
              <Typography variant="body2" fontWeight="bold">
                $11,685.00
              </Typography>
              <Box sx={{}}>
                <Slider
                  getAriaLabel={() => 'Temperature range'}
                  value={range_value}
                  onChange={handleRangeChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Box>
              <Stack direction="row" spacing={2} sx={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
                <TextField
                  placeholder="anyone@anyemail.com / 電郵地址"
                  id="outlined-start-adornment"
                  sx={{}}
                  size="small"
                />
                <Typography>-</Typography>
                <TextField
                  placeholder="anyone@anyemail.com / 電郵地址"
                  id="outlined-start-adornment"
                  sx={{}}
                  size="small"
                />
              </Stack>
              <Box>
                <Typography variant="body2" fontWeight="bold">
                  星級評分
                </Typography>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label="4 星"
                    inputProps={{
                      'aria-label': 'Checkbox A',
                    }}
                  />
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label="3 星"
                    inputProps={{
                      'aria-label': 'Checkbox A',
                    }}
                  />
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label="2 星"
                    inputProps={{
                      'aria-label': 'Checkbox A',
                    }}
                  />
                </FormGroup>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight="bold">
                  推廣
                </Typography>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label="早鳥折扣"
                    inputProps={{ 'aria-label': 'Checkbox A' }}
                  />
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label="Rakuten 獨家"
                    inputProps={{ 'aria-label': 'Checkbox A' }}
                  />
                </FormGroup>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight="bold">
                  住宿設施類型
                </Typography>
                <FormGroup>
                  {[
                    '城市酒店',
                    '度假村酒店',
                    '豪華露營地',
                    '商務酒店',
                    '鄉村小屋',
                    '公寓式酒店',
                    '民宿',
                    '西式建築民宿',
                  ].map(l => {
                    return (
                      <FormControlLabel
                        control={<Checkbox size="small" />}
                        label={l}
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                    );
                  })}
                </FormGroup>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight="bold">
                  吸煙選項
                </Typography>
                <FormGroup>
                  {['可吸煙', '禁煙'].map(l => {
                    return (
                      <FormControlLabel
                        control={<Checkbox size="small" />}
                        label={l}
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                    );
                  })}
                </FormGroup>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight="bold">
                  餐飲
                </Typography>
                <FormGroup>
                  {['早餐', '晚餐', '不含餐'].map(l => {
                    return (
                      <FormControlLabel
                        control={<Checkbox size="small" />}
                        label={l}
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                    );
                  })}
                </FormGroup>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight="bold">
                  温泉
                </Typography>
                <FormGroup>
                  {['露天浴池（溫泉）', '公共澡堂（溫泉）', '內有溫泉', '天然溫泉'].map(l => {
                    return (
                      <FormControlLabel
                        control={<Checkbox size="small" />}
                        label={l}
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                    );
                  })}
                </FormGroup>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight="bold">
                  住宿設施設備
                </Typography>
                <FormGroup>
                  {['免費停車場', '無線網絡', '高爾夫球場', '健身房', '泳池'].map(l => {
                    return (
                      <FormControlLabel
                        control={<Checkbox size="small" />}
                        label={l}
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                    );
                  })}
                </FormGroup>
                <Typography variant="body2" fontWeight="bold">
                  顯示更多
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={8} sx={{}}>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{ 'aria-labelledby': 'demo-customized-button' }}
                anchorEl={suggested_anchor_el}
                open={suggested_open}
                onClose={handleSuggestedClose}
              >
                <MenuItem onClick={handleSuggestedClose} disableRipple>
                  <EditIcon /> 推薦價格（低至高）
                </MenuItem>
                <MenuItem onClick={handleSuggestedClose} disableRipple>
                  <EditIcon /> 價格（高至低）
                </MenuItem>
                <MenuItem onClick={handleSuggestedClose} disableRipple>
                  <EditIcon /> 與景點距離（近至遠）
                </MenuItem>
                <MenuItem onClick={handleSuggestedClose} disableRipple>
                  <EditIcon /> 星級評分（低至高）
                </MenuItem>
                <MenuItem onClick={handleSuggestedClose} disableRipple>
                  <EditIcon /> 星級評分（高至低）
                </MenuItem>
                <MenuItem onClick={handleSuggestedClose} disableRipple>
                  <EditIcon /> 住客評價分數（高至低）
                </MenuItem>
              </StyledMenu>

              <Stack direction="row">
                <Button
                  id="demo-customized-button"
                  aria-controls={suggested_open ? 'demo-customized-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={suggested_open ? 'true' : undefined}
                  variant="contained"
                  disableElevation
                  onClick={handleSuggestedClick}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  推薦
                </Button>

                <FormControlLabel control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />} label="地圖" />
              </Stack>

              <Stack
                direction="column"
                spacing={3}
                sx={{
                  paddingTop: '1rem',
                  paddingBottom: '1rem',
                }}
              >
                <HotelPost />
                <HotelPost />
                <HotelPost />
                <HotelPost />
                <HotelPost />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100vw',
          backgroundColor: color.white,
          marginTop: '1rem',
          marginBottom: '1rem',
        }}
      >
        <Box
          sx={{
            paddingLeft: { xs: '3vw', xl: '10vw' },
            paddingRight: { xs: '3vw', xl: '10vw' },
          }}
        >
          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                主頁
              </Link>
              <Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
                日本
              </Link>
              <Typography color="text.primary">沖繩縣</Typography>
              <Typography color="text.primary">宮古島市</Typography>
            </Breadcrumbs>
          </div>
        </Box>
      </Box>

      {/* bottom link app */}
      <Box
        sx={{
          width: '100vw',
          backgroundColor: color.white,
          borderTop: `1px solid ${color.lightGrey}`,
        }}
      >
        <Box
          sx={{
            paddingLeft: { xs: '5vw', xl: '15vw' },
            paddingRight: { xs: '5vw', xl: '15vw' },
          }}
        >
          <Stack sx={{ marginTop: '1rem', marginBottom: '1rem' }} direction="column" spacing={2}>
            {/* bottom link */}
            <Stack direction="row" spacing={2}>
              <Box>
                <Typography variant="body2">私隱政策</Typography>
              </Box>
              <Box>
                <Typography variant="body2">條款與條件</Typography>
              </Box>
              <Box>
                <Typography variant="body2">聯絡我們</Typography>
              </Box>
              <Box>
                <Typography variant="body2">關於我們</Typography>
              </Box>
              <Box>
                <Typography variant="body2">Cookie政策</Typography>
              </Box>
              <Box>
                <Typography variant="body2">不要出售我的個人資料</Typography>
              </Box>
            </Stack>

            {/* license */}
            <Typography variant="caption" sx={{ color: color.deepGrey }}>
              © 樂天集團股份有限公司 香港旅行代理商牌照號碼 354595，由 Rakuten Travel Singapore Pte. Ltd. 持有
            </Typography>
            {/* license */}
          </Stack>
        </Box>
      </Box>
      {/* bottom link app */}

      {/* BottomDownloadApp */}
      <Box sx={{ width: '100vw', backgroundColor: color.lightGrey }}>
        <Box
          sx={{
            paddingLeft: { xs: '5vw', xl: '15vw' },
            paddingRight: { xs: '5vw', xl: '15vw' },
          }}
        >
          <Stack direction="row" spacing={5} sx={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
            <Typography variant="body2" fontWeight="bold">
              下載 App
            </Typography>
            <Typography variant="caption" sx={{}}>
              App Store
            </Typography>
            <Typography variant="caption" sx={{}}>
              Google Play
            </Typography>
          </Stack>
        </Box>
      </Box>
      {/* BottomDownloadApp */}
    </>
  );
};
