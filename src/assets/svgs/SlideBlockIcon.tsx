import React, { CSSProperties } from "react";

interface SlideBlockIconProps {
    style?: CSSProperties;
    onMouseDown?: React.MouseEventHandler<SVGSVGElement>;
}

const SlideBlockIcon: React.FC<SlideBlockIconProps> = ({ style, onMouseDown }) => (
    <svg
        version="1.1"
        style={{ ...style, display: 'block', margin: 'auto' }}
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        onMouseDown={onMouseDown} // 绑定鼠标按下事件
    >
        <path d="M512 512m-393.728 0a393.728 393.728 0 1 0 787.456 0 393.728 393.728 0 1 0-787.456 0Z" fill="#3089E7" />
        <path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m0-787.712A275.712 275.712 0 1 0 787.712 512 275.968 275.968 0 0 0 512 236.288z" fill="#FFFFFF" />
    </svg>
);

export default SlideBlockIcon;
