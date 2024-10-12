import React, { CSSProperties } from "react";

interface SlideBlockIconProps {
    style?: CSSProperties;
    onClick?:() => void;
    onMouseEnter?:() => void;
    onMouseLeave?:() => void
}

const VoiceIcon: React.FC<SlideBlockIconProps> = ({ style,onClick,onMouseEnter,onMouseLeave }) => (
    <svg
        onClick={onClick}
        onTouchStart={onMouseEnter}
        // onTouchEnd={onMouseLeave}
        onTouchCancel={onMouseLeave}
        version="1.1"
        style={{ ...style, display: 'block', margin: 'auto' }}
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
    >
        <path d="M689.085 335.699c-18.785-18.785-49.239-18.785-68.023 0s-18.785 49.239 0 68.023c56.355 56.355 56.355 147.717 0 204.069-18.785 18.785-18.785 49.239 0 68.023 18.785 18.785 49.239 18.785 68.023 0 93.92-93.92 93.92-246.199 0-340.125z m-225.25-176.264L258.597 313.366H130.261c-35.674 0-64.067 28.451-64.067 63.543V634.63c0 34.619 28.684 63.543 64.067 63.543h128.336l205.238 153.931c28.537 21.398 51.299 9.69 51.299-25.82V185.257c0-35.062-22.971-47.065-51.299-25.82z" fill="#3089E7" p-id="2822"></path><path d="M825.132 199.656c-18.785-18.785-49.239-18.785-68.023 0s-18.785 49.239 0 68.023c131.492 131.492 131.492 344.682 0 476.174-18.785 18.785-18.785 49.239 0 68.023 18.785 18.785 49.239 18.785 68.023 0v-0.001c169.06-169.06 169.06-443.158 0-612.221z" fill="#3089E7" p-id="2823"></path>
    </svg>
);

export default VoiceIcon;
