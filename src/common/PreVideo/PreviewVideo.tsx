<<<<<<< HEAD
import React, {CSSProperties, ReactNode, useState} from 'react';
import FlexBox from "../FlexBox/FlexBox";
import Modal from "../Modal/Modal";
import VideoDom from "./VideoDom";


interface PreviewVideoProps {
	url:string,
	videoStyle?:CSSProperties | undefined;
	children?:ReactNode | undefined;
	playIcon?:string | undefined;
	autoPlay?:boolean | undefined;
	className?: string | undefined;
}

const PreviewVideo = ({url,videoStyle,children,playIcon,autoPlay =false,className}:PreviewVideoProps) => {
	const [openModal,setOpenModal] = useState(false)

	function closeModal() {
		setOpenModal(false)
	}
	return (
		<FlexBox className={className} onClick={() => {
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
=======
import React, {CSSProperties, ReactNode, useState} from 'react';
import FlexBox from "../FlexBox/FlexBox";
import Modal from "../Modal/Modal";
import VideoDom from "./VideoDom";


interface PreviewVideoProps {
	url:string,
	videoStyle?:CSSProperties | undefined;
	children?:ReactNode | undefined;
	playIcon?:string | undefined;
	autoPlay?:boolean | undefined;
	className?: string | undefined;
}

const PreviewVideo = ({url,videoStyle,children,playIcon,autoPlay =false,className}:PreviewVideoProps) => {
	const [openModal,setOpenModal] = useState(false)

	function closeModal() {
		setOpenModal(false)
	}
	return (
		<FlexBox className={className} onClick={() => {
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
>>>>>>> db323fb (s)
