import React from 'react';


const FlexBox = ({children, onClick, style}) => {
	return (
		<div onClick={onClick} style={{display: "flex", justifyContent: "center", alignItems: "center", ...style}}>
			{children}
		</div>
	)
}
export default FlexBox;
