import React, {createContext, ReactNode, useEffect, useState} from 'react'
import SuccessIcon from "../../assets/svgs/SuccessIcon"
import FailIcon from "../../assets/svgs/FailIcon"
import WarningIcon from "../../assets/svgs/WarningIcon"
import LoadingIcon from "../../assets/svgs/LoadingIcon"

interface ToastProviderProps {
	children: ReactNode;
}
interface ToastProps {
	show: ({text, type, duration}:{text:string,type:string,duration?:number}) => void;
	close?: (timeout?:number) => void;
}

export const ToastContext = createContext({})

let show = ({text, type, duration}:{text:string,type:string,duration?:number}) => {}
let close = (timeout:number | undefined) => {}
const ToastProvider = ({children}:ToastProviderProps) => {
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
		const loading_icon = document.getElementById('toast_loading')
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
						<SuccessIcon style={{width: "2rem", height: "2rem"}} />}
						{type === 'fail' &&
						<FailIcon style={{width: "2rem", height: "2rem"}} />}
						{type === 'warning' &&
						<WarningIcon style={{width: "2rem", height: "2rem"}} />}
						{type === 'loading' &&
						<LoadingIcon id={'toast_loading'} style={{width: "2rem", height: "2rem"}} />}
						<div style={{
							marginTop: 8,
							maxWidth: 120,
							textAlign: "center",
							wordBreak: "break-all",
							wordWrap: "break-word"
						}}>{text}</div>
					</div>

				</div>

			}
			{children}
		</ToastContext.Provider>
	)
}
export default ToastProvider



export let Toast:ToastProps = {show,close}

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
Toast.close = (timeout:number | undefined) => {
	close(timeout)
}
