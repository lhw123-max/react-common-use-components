import React, {createContext, useEffect, useState} from 'react'
import SuccessIcon from "../../assets/images/toast/success.png"
import FailIcon from "../../assets/images/toast/fail.png"
import WarningIcon from "../../assets/images/toast/warning.png"
import LoadingIcon from "../../assets/images/toast/loading.png"

export const ToastContext = createContext({})

let show = ({text, type, duration}) => {}
let close = (timeout) => {}
const ToastProvider = ({children}) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [type, setType] = useState('');
	const [text, setText] = useState('');
	useEffect(() => {
		if (type === 'loading') {
			rotateSmoothly()
		}
	}, [type])
	show = ({text, type}) => {
		setText(text);
		setType(type);
		setModalVisible(true);
	}
	
	close = (timeout) => {
		setTimeout(() => {
			setModalVisible(false);
			setText('')
			setType('')
		}, timeout ? timeout : 0);
	}
	
	function rotateSmoothly() {
		const loading_icon = document.getElementById('loading_icon')
		let rotation = 0;
		
		function animate() {
			rotation = (rotation + 6) % 360;
			if (loading_icon) {
				loading_icon.style.transform = `rotate(${rotation}deg)`;
				window.requestAnimationFrame(animate);
			}
		}
		
		animate();
	}
	
	return (
		<ToastContext.Provider value={{}}>
			{
				modalVisible &&
				
				<div onClick={(e) => {
					close(2000);
					e.stopPropagation()
				}} style={{
					background: 'rgba(0,0,0,0)',
					width: "100%",
					zIndex: 1300,
					position: 'fixed',
					inset: 0,
					display: "flex",
					justifyContent: 'center',
					alignItems: 'center',
					opacity: modalVisible ? 1 : 0,
					transition: "opacity 1s ease-in-out",
				}}
				>
					<div style={{
						background: 'rgba(0,0,0,0.6)',
						minWidth: 150,
						minHeight: 150,
						color: "#FFFFFF",
						fontSize: 14,
						zIndex: 1301,
						display: "flex",
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						borderRadius: 16,
						opacity: modalVisible ? 1 : 0,
						transition: "opacity 1s ease-in-out",
					}}>
						{type === 'success' &&
						<img id={'success_icon'} src={SuccessIcon} style={{width: "2rem", height: "2rem"}} alt=""/>}
						{type === 'fail' &&
						<img id={'fail_icon'} src={FailIcon} style={{width: "2rem", height: "2rem"}} alt=""/>}
						{type === 'warning' &&
						<img id={'warning_icon'} src={WarningIcon} style={{width: "2rem", height: "2rem"}} alt=""/>}
						{type === 'loading' &&
						<img id={'loading_icon'} src={LoadingIcon} style={{width: "2rem", height: "2rem"}} alt=""/>}
						<div style={{
							marginTop: 8,
							maxWidth: 120,
							textAlign: "center",
							workBreak: "break-all",
							workWrap: "wrap"
						}}>{text}</div>
					</div>
				
				</div>
				
			}
			{children}
		</ToastContext.Provider>
	)
}
export default ToastProvider



export const Toast = {}

Toast.show = ({text, type, duration}) => {
	show({text, type, duration})
	if (type === 'loading') {
		if (duration !== 0) {
			close(duration ? duration : 2000)
		}
		
	} else {
		close(2000)
	}
	
}
Toast.close = (timeout) => {
	close(timeout)
}
