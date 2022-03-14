//import { Global } from "@emotion/react"
import {
  css,
  Global
} from "frontity";
import LatinExtOpenSans from './latin-ext-opensans.woff2';
import LatinOpenSans from './latin-opensans.woff2';
import CyrillicExtOpenSans from './cyrillic-ext.woff2';
import CyrillicOpenSans from './cyrillic.woff2';
import GreekExtOpenSans from './greek-ext.woff2';
import GreekOpenSans from './greek.woff2';
import HebrewOpenSans from './hebrew.woff2';
import VietnameseOpenSans from './vietnamese.woff2';
import LatinextRaleway from './latin-ext-Raleway.woff';
import LatinRaleway from './latin-Raleway.woff';
import DevanagariMartel from './devanagari-martel.woff2';
import LatinExtMartel from './latin-ext-martel.woff2';
import LatinMartel from './latin-martel.woff2';
import ReviconChromeFirefox1 from './revicon-chrome-firefox1.woff2';
import ReviconChromeFirefox2 from './revicon-chrome-firefox2.woff';
import ReviconForAll from './reviconforall.ttf';
import ReviconsIE9 from './reviconsIE9.eot';
import ReviconIE68 from './reviconIE6-8.eot';

// ye check krna hai ki online wala link dalne se body ke font-family me option aata hai ki nhi
const Fonts = () => (<
  Global styles={
    css`
      /* Copied from https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&family=Raleway&display=swap */

     /* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("${CyrillicExtOpenSans}") format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("${CyrillicOpenSans}") format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("${GreekExtOpenSans}") format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("${GreekOpenSans}") format('woff2');
  unicode-range: U+0370-03FF;
}
/* hebrew */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("${HebrewOpenSans}") format('woff2');
  unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("${VietnameseOpenSans}") format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("${LatinExtOpenSans}") format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url("${LatinOpenSans}") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
      /* latin-ext */
      @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url("${LatinextRaleway}") format('woff');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url("${LatinRaleway}") format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

 

      /* devanagari */
@font-face {
  font-family: 'Martel';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("${DevanagariMartel}") format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-family: 'Martel';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("${LatinExtMartel}") format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Martel';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("${LatinMartel}") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}


@font-face {font-family: "revicons";
    src: url("${ReviconsIE9}"); /* IE9*/
    src: url("${ReviconIE68}") format("embedded-opentype"), /* IE6-IE8 */
    url("${ReviconChromeFirefox1}") format("woff2"), /* chrome firefox */
    url("${ReviconChromeFirefox2}") format("woff"), /* chrome firefox */
    url("${ReviconForAll}") format("truetype"), /* chrome firefox opera Safari, Android, iOS 4.2+*/
    url("https://db.onlinewebfonts.com/t/0e979bd4a3c1c6ac788ed57ac569667f.svg#revicons") format("svg"); /* iOS 4.1- */
}



      `
  }
/>
)
export default Fonts;