import React, { useState} from "react"

function Uploader({children, onSuccess,style,id,accept,capture}) {
	const [isUploading, setIsUploading] = useState(false)
	const handleUpload = (event) => {
		setIsUploading(true)
		const file = event.target.files[0]
		onSuccess(file)
	}

	return (
		<div  style={{position: "relative"}}>
			<input   accept={accept} capture={capture} id={id} type="file" onChange={(e) => {
				handleUpload(e);e.target.value = ''
			}}  style={{visibility: "hidden",position:"absolute",width:"1rem"}}/>
			<div onClick={(e) => {
				document.getElementById(id).click();e.stopPropagation()
			}}>{children}</div>
		</div>
	)
}

export default Uploader
