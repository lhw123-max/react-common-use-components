import React, {CSSProperties, ReactNode} from 'react';

interface FlexBoxProps {
	onClick?:() => void;
	children: ReactNode;
	style?: CSSProperties;
	className?: string;
}

const FlexBox = ({children, onClick, style,className}:FlexBoxProps) => {
	return (
		<div className={className} onClick={onClick} style={{display: "flex", justifyContent: "center", alignItems: "center", ...style}}>
			{children}
		</div>
	)
}
export default FlexBox;
