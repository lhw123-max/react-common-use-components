import React, { CSSProperties } from "react";

interface CancelFullScreenIconProps {
    style?: CSSProperties;
    onClick?:() => void
}

const CancelFullScreenIcon: React.FC<CancelFullScreenIconProps> = ({ style,onClick }) => (
    <svg
        onClick={onClick}
        version="1.1"
        style={{ ...style, display: 'block', margin: 'auto' }}
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
    >
        <path d="M745.12399 745.104035l185.747471 0c16.093537 0 29.283953-13.135158 29.283953-29.321816 0-16.303314-13.114692-29.323862-29.283953-29.323862L715.764312 686.458357c-8.037047 0-15.34857 3.28379-20.656459 8.591679-5.383614 5.306866-8.628518 12.617365-8.628518 20.694321l0 215.106126c0 16.07307 13.134135 29.283953 29.321816 29.283953 16.303314 0 29.321816-13.114692 29.321816-29.283953L745.122967 745.104035zM275.966751 745.104035l-185.747471 0c-16.093537 0-29.283953-13.135158-29.283953-29.321816 0-16.303314 13.114692-29.323862 29.283953-29.323862l215.107149 0c8.037047 0 15.34857 3.28379 20.656459 8.591679 5.383614 5.306866 8.628518 12.617365 8.628518 20.694321l0 215.106126c0 16.07307-13.133112 29.283953-29.321816 29.283953-16.303314 0-29.321816-13.114692-29.321816-29.283953L275.967774 745.104035zM745.12399 275.945773l185.747471 0c16.093537 0 29.283953 13.134135 29.283953 29.322839 0 16.303314-13.114692 29.321816-29.283953 29.321816L715.764312 334.590428c-8.037047 0-15.34857-3.282766-20.656459-8.590656-5.383614-5.306866-8.628518-12.618389-8.628518-20.693298L686.479335 90.199325c0-16.074094 13.134135-29.283953 29.321816-29.283953 16.303314 0 29.321816 13.114692 29.321816 29.283953L745.122967 275.945773zM275.966751 275.945773l-185.747471 0c-16.093537 0-29.283953 13.134135-29.283953 29.322839 0 16.303314 13.114692 29.321816 29.283953 29.321816l215.107149 0c8.037047 0 15.34857-3.282766 20.656459-8.590656 5.383614-5.306866 8.628518-12.618389 8.628518-20.693298L334.611405 90.199325c0-16.074094-13.133112-29.283953-29.321816-29.283953-16.303314 0-29.321816 13.114692-29.321816 29.283953L275.967774 275.945773z" fill="#1677ff" p-id="2407"></path>
    </svg>
);

export default CancelFullScreenIcon;
