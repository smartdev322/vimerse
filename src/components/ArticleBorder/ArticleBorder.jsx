import React from 'react';
import s from './ArticleBorder.module.scss';

const svg = (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M34.3834 16.7103L14.8757 6.9614C14.7576 6.90371 14.6267 6.87698 14.4953 6.88371C14.364 6.89044 14.2365 6.93042 14.1248 6.99989C14.0132 7.06936 13.921 7.16604 13.857 7.28087C13.793 7.3957 13.7592 7.5249 13.7588 7.65636V27.1542C13.7596 27.2855 13.7938 27.4143 13.858 27.5288C13.9222 27.6432 14.0144 27.7395 14.126 27.8087C14.2376 27.8778 14.3649 27.9175 14.496 27.9241C14.6271 27.9307 14.7578 27.904 14.8757 27.8464L34.3834 18.0975C34.5121 18.0329 34.6203 17.9339 34.696 17.8114C34.7716 17.6889 34.8116 17.5478 34.8116 17.4039C34.8116 17.26 34.7716 17.1189 34.696 16.9964C34.6203 16.8739 34.5121 16.7749 34.3834 16.7103Z"
      fill="#CFDFEF"
    />
    <path
      d="M11.8389 5.44077L1.12174 0.0848461C0.976283 0.012602 0.81182 -0.0122208 0.651508 0.0138735C0.491196 0.0399677 0.343112 0.115664 0.228106 0.230304C0.113101 0.344943 0.0369696 0.492751 0.0104321 0.652912C-0.0161055 0.813074 0.00828795 0.977521 0.0801773 1.1231L10.8002 22.5468C10.8788 22.7021 11.0075 22.8264 11.1654 22.8998C11.3233 22.9732 11.5013 22.9913 11.6708 22.9514C11.8403 22.9115 11.9914 22.8157 12.0999 22.6796C12.2084 22.5434 12.2679 22.3747 12.269 22.2007V6.13293C12.2685 5.98905 12.2281 5.84812 12.1521 5.72589C12.0762 5.60366 11.9678 5.50494 11.8389 5.44077Z"
      fill="#CFDFEF"
    />
    <path
      d="M42.8726 0.0838956L25.0432 8.99275C24.9123 9.0564 24.8019 9.15559 24.7246 9.27897C24.6474 9.40235 24.6064 9.54496 24.6064 9.6905C24.6064 9.83604 24.6474 9.97864 24.7246 10.102C24.8019 10.2254 24.9123 10.3246 25.0432 10.3882L35.7408 15.7358C35.8321 15.7813 35.9315 15.8084 36.0333 15.8155C36.1351 15.8226 36.2372 15.8095 36.334 15.7771C36.4307 15.7447 36.5201 15.6936 36.5971 15.6266C36.674 15.5597 36.737 15.4782 36.7824 15.3869L43.9142 1.13052C43.9891 0.984691 44.016 0.818874 43.9908 0.656861C43.9656 0.494848 43.8898 0.344967 43.7741 0.228725C43.6584 0.112482 43.5089 0.0358533 43.3469 0.00983381C43.185 -0.0161856 43.0189 0.00974187 42.8726 0.0838956Z"
      fill="#CFDFEF"
    />
    <path
      d="M14.7453 30.4422L21.3046 43.5598C21.3675 43.6916 21.4665 43.8029 21.59 43.8808C21.7135 43.9587 21.8566 44 22.0027 44C22.1488 44 22.2919 43.9587 22.4154 43.8808C22.5389 43.8029 22.6379 43.6916 22.7008 43.5598L33.619 21.7092C33.6922 21.5639 33.7177 21.3992 33.6919 21.2387C33.6661 21.0781 33.5902 20.9297 33.4752 20.8147C33.3601 20.6997 33.2117 20.6239 33.051 20.5981C32.8903 20.5722 32.7256 20.5977 32.5803 20.6709L15.0915 29.4011C14.9081 29.4939 14.7687 29.6553 14.7038 29.8504C14.639 30.0454 14.6539 30.2581 14.7453 30.4422Z"
      fill="#CFDFEF"
    />
  </svg>
);

const ArticleBorder = () => (
  <div className={s.container}>
    <hr />
    <div className={s.svgContainer}>{svg}</div>
    <hr />
  </div>
);

export default ArticleBorder;
