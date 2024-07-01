import React, {CSSProperties, ReactNode, useState} from "react"
import {generateRandomNumber} from "../../utils";

interface UploaderProps {
	children:ReactNode
	onSuccess?:(file:File) => void;
	style?:CSSProperties;
	id?:string;
	accept?:string;
	capture?:boolean;
	className?: string;
}

function Uploader({children, onSuccess,style,id,accept = '',capture = false}:UploaderProps) {
	const [isUploading, setIsUploading] = useState(false)
	const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsUploading(true);
		const file = event.target.files && event.target.files[0];
		if (file && onSuccess) {
			onSuccess(file);
		}
	};
	const initId ='video_' + generateRandomNumber()
	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const element = document.getElementById(id ? id : initId);
		if (element) {
			element.click();
			e.stopPropagation();
		}
	};
	return (
		<div  style={{position: "relative"}}>
			<input   accept={accept} capture={capture} id={id?id:initId} type="file" onChange={(e) => {
				handleUpload(e);e.target.value = ''
			}}  style={{visibility: "hidden",position:"absolute",width:"1rem"}}/>
			<div onClick={handleClick}>{children}</div>
		</div>
	)
}

export default Uploader
