import React,{CSSProperties} from "react";

const PlayIcon: React.FC<{ style: CSSProperties }>  = ({style}) =>
  (
	  <svg version="1.1"  style={style} viewBox="0 0 64 66" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
		  <path d="M0 0 C8.78 5.26 14.45 12.48 17.21 22.32 C18.32 33.23 16.95 42.05 9.96 50.64 C4.11 56.83 -2.76 60.85 -11.34 61.66 C-19.12 61.74 -25.11 61.46 -31.79 57.32 C-32.41 56.97 -33.03 56.62 -33.68 56.26 C-40.55 51.97 -44.69 45.04 -46.79 37.32 C-47.97 26.38 -46.68 16.96 -40.06 7.98 C-29.84 -3.29 -13.89 -6.58 0 0 Z M-19.79 18.32 C-22.36 22.19 -22.08 25.41 -22.04 29.89 C-22.05 30.67 -22.05 31.45 -22.06 32.25 C-22.23 36.76 -22.23 36.76 -19.79 40.32 C-15.51 40 -12.23 38.16 -8.54 36.07 C-7.48 35.49 -6.42 34.91 -5.34 34.31 C-2.57 32.54 -2.57 32.54 -1.93 29.59 C-1.86 28.47 -1.86 28.47 -1.79 27.32 C-3.85 26 -5.91 24.69 -7.98 23.39 C-8.84 22.83 -8.84 22.83 -9.73 22.26 C-13.06 20.17 -15.87 18.79 -19.79 18.32 Z " fill="#B2B2B2" transform="translate(46.7890625,2.67578125)"/>
	  </svg>

  )

 export default  PlayIcon
