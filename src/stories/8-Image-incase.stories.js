import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { MuiThemeProvider } from '@material-ui/core';
import theme from '../theme/theme';

const svg = (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="0.1" cx="35" cy="35" r="35" fill="#176EA5" />
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="70" height="70">
      <circle cx="35" cy="35" r="35" fill="#C1C1C1" />
    </mask>
    <g mask="url(#mask0)">
      <path
        d="M35.4464 73.1491C29.0602 73.0239 23.2501 71.1707 18.1161 67.3389C15.1609 65.11 12.6816 62.4304 10.7282 59.2498C10.3776 58.6738 10.3275 58.0978 10.628 57.4717C13.483 51.6866 18.0911 48.2806 24.4522 47.2037C25.2285 47.0785 25.8797 47.3039 26.5058 47.7547C28.8849 49.4577 31.5396 50.4093 34.4697 50.5846C38.076 50.81 41.3818 49.8834 44.337 47.8298C45.1634 47.2538 46.0149 47.0785 46.9916 47.2538C53.1023 48.4309 57.51 51.8118 60.3149 57.3715C60.6405 57.9976 60.5904 58.5235 60.2147 59.1246C57.3598 63.6575 53.6282 67.2638 48.8949 69.7432C45.7394 71.4211 42.3585 72.4729 38.8023 72.8235C37.7004 72.9738 36.5734 73.0489 35.4464 73.1491Z"
        fill="#176EA5"
      />
      <path
        d="M35.5215 46.1521C27.3572 46.052 21.0211 39.5406 20.946 31.6768C20.8708 23.7379 27.3321 17.1013 35.2961 17.0011C43.3101 16.901 49.9717 23.3873 50.0469 31.4013C50.122 39.4654 43.6607 46.0269 35.5215 46.1521Z"
        fill="#176EA5"
      />
    </g>
  </svg>
);

export default {
  title: 'Image incase',
  decorators: [withKnobs],
};

export const ImageIncase = () => (
  <MuiThemeProvider theme={theme}>
    <div>{svg}</div>
  </MuiThemeProvider>
);
