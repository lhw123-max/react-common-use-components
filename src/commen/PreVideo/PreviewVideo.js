import React, {useState} from 'react';
import FlexBox from "../FlexBox";
import Modal from "../Modal/Modal";
import {VideoDom} from "../PreVideo/VideoDom"



const PreviewVideo = ({url,videoStyle,children,playIcon,autoPlay}) => {
	const [openModal,setOpenModal] = useState(false)

	function closeModal() {
		setOpenModal(false)
	}
	return (
		<FlexBox onClick={() => {
			if (!url){
				return;
			}
			setOpenModal(true)
		}}>
			<Modal openModal={openModal} onClose={closeModal} position={'center'}>
				<VideoDom onClose={closeModal} playIcon={playIcon} autoPlay={autoPlay}  url={url} videoStyle={videoStyle}/>
			</Modal>
			{children}
		</FlexBox>

	);
};

export default PreviewVideo;
