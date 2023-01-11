import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import color from 'pages/hkg/zh-hk/color';

function ColorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}


const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: color.accentGreen,
      // light: ColorLuminance(color.accentGreen,  0.2),
      // dark: ColorLuminance(color.accentGreen,  -0.5),
      contrastText: color.textWhite,
    },
    secondary: {
      main: color.lightGrey,
      // light: ColorLuminance(color.textColor6,  0.2),
      dark: color.accentGreen,
      contrastText: color.textBlack,
    },

  },
  typography: {
    fontFamily: [
      '-apple-system',
      'Noto Sans TC',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },

});

export default lightTheme;
