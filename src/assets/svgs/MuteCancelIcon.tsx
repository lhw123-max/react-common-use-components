import React, {CSSProperties} from "react";

interface SlideBlockIconProps {
    style?: CSSProperties;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void
}

const MuteCancelIcon: React.FC<SlideBlockIconProps> = ({style, onClick, onMouseEnter, onMouseLeave}) => (
    <svg
        onClick={onClick}
        onTouchEnd={onMouseLeave}
        version="1.1"
        style={{...style, display: 'block', margin: 'auto'}}
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
    >
        <path
            d="M521.046 114.21h-3.892v0.122c-12.893 0.973-25.785 6.811-38.435 17.515L258.57 319.035h-96.695c-46.828 0-84.898 38.07-84.898 84.897v216.014c0 46.828 38.07 84.898 84.898 84.898h96.695l220.272 187.188c13.744 11.676 27.975 17.636 42.205 17.636 15.934 0 30.408-7.784 39.408-21.285 6.933-10.339 10.339-23.475 10.339-38.922V174.417c0-41.597-25.056-60.207-49.747-60.207z m416.947 536.022c-12.042 12.041-31.624 12.041-43.665 0L694.125 450.03c-12.041-12.042-12.041-31.624 0-43.665 12.042-12.042 31.624-12.042 43.665 0l200.081 200.08c12.041 12.042 12.041 31.746 0.122 43.787z"
            fill="#B3B3B3" p-id="3045"></path>
        <path
            d="M937.993 406.365c12.041 12.041 12.041 31.623 0 43.665L737.79 650.232c-12.041 12.041-31.623 12.041-43.665 0-12.041-12.041-12.041-31.624 0-43.665l200.203-200.202c12.04-12.042 31.623-12.042 43.665 0z"
            fill="#B3B3B3" p-id="3046"></path>
    </svg>
);

export default MuteCancelIcon;
