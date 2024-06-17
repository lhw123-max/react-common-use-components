import React, {useEffect, useRef, useState} from "react"
import {useIsPermission} from "../../hooks";
import {Toast} from "antd-mobile";


function Uploader({children, onSuccess,style,id,accept,capture}) {
	const [isUploading, setIsUploading] = useState(false)
	const [send, setSend] = useState(false)
	const {isPermission,setIsPermission} = useIsPermission()
	const handleUpload = (event) => {
		setIsUploading(true)
		const file = event.target.files[0]
		onSuccess(file)
	}
	// useEffect(() => {
	// 	let link = document.createElement("a");
	// 	link.href = "uniwebview://useCamera";
	// 	link.click();
	// 	console.log('1111')
	// },[send])
	return (
		<div  style={{position: "relative"}}>
			<input   accept={accept} capture={capture} id={id} type="file" onChange={(e) => {
				handleUpload(e);e.target.value = ''
			}}  style={{visibility: "hidden",position:"absolute",width:"1rem"}}/>
			<div onClick={(e) => {
				if (isPermission === 0) {
					e.preventDefault()
					Toast.show({icon:'fail',content:'没有相机与相册权限,请前往应用权限设置授权'})
					return setTimeout(() => {
						window.location.href = "uniwebview://useCamera"
					},1500);
				}
				document.getElementById(id).click();e.stopPropagation()
			}}>{children}</div>
		</div>
	)
}

export default Uploader
